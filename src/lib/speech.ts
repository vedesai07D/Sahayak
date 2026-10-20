import type { Lang } from "./i18n";

export type SpeechRateName = "slow" | "normal" | "fast";
export type SpeechStatus = "idle" | "loading" | "playing" | "paused" | "error";

const RATE: Record<SpeechRateName, number> = { slow: 0.72, normal: 0.92, fast: 1.15 };
const LOCALE: Record<Lang, string> = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" };
/** Playback speed for pre-generated (Edge TTS) recordings. */
const AUDIO_RATE: Record<SpeechRateName, number> = { slow: 0.85, normal: 1, fast: 1.2 };
/**
 * Clearest, least-accented Microsoft neural voices for older listeners
 * (the same voices used by the Edge TTS audio generator, scripts/generate-audio.mjs).
 */
const PREFERRED_VOICES: Record<Lang, string[]> = {
  en: ["neerja", "prabhat"],
  hi: ["swara", "madhur"],
  mr: ["aarohi", "manohar"],
};

/* ------------------------------------------------------------------
 * Speech controller — the single source of truth for every ListenButton.
 *
 * State machine:
 *   start   : idle/error → loading → playing
 *   pause   : playing → paused   (TTS: cancel + remember chunkIndex;
 *                                 audio element: pause(), keep currentTime)
 *   resume  : paused → playing   (TTS: re-speak from the remembered chunk;
 *                                 audio: play() from currentTime)
 *   restart : any → loading → playing (new session, position reset to 0)
 *   stop    : playing → paused    (same as pause: position is KEPT; Resume continues)
 *   reset   : any → idle          (new session, owner released, position back to 0)
 *
 * Every async callback captures the sessionId it was created under. When a
 * session is superseded (start/restart/stop bump sessionId), stale events
 * are ignored — this fixes the old bug where cancel()'s late "interrupted"
 * error flipped the UI back to idle while new speech was already playing.
 * "interrupted" and "canceled" errors are never treated as real errors.
 *
 * Only ONE reader plays at a time app-wide: starting a new one stops the
 * previous one, whose button falls back to idle automatically because it
 * is no longer the owner.
 * ------------------------------------------------------------------ */

let sessionId = 0;
let status: SpeechStatus = "idle";
let ownerId: symbol | null = null;
let ownerText = "";
let ownerLang: Lang = "en";
let ownerRate: SpeechRateName = "normal";

/* Browser TTS state */
let chunks: string[] = [];
let chunkIndex = 0;
/** Character offset inside the current chunk, so Resume continues mid-sentence. */
let chunkOffset = 0;
let currentVoice: SpeechSynthesisVoice | undefined;

/* Pre-recorded audio state */
let audioEl: HTMLAudioElement | null = null;
let fellBackToTts = false;

const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

export function subscribeSpeech(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getSpeechStatus(): SpeechStatus {
  return status;
}

export function isSpeechOwner(id: symbol): boolean {
  return ownerId === id;
}

function setStatus(next: SpeechStatus) {
  if (status === next) return;
  status = next;
  emit();
}

export function speechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/* ---------------- Voices ---------------- */

let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

/** Chrome loads voices asynchronously — wait for voiceschanged (≤1.5 s). */
function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (!speechSupported()) return Promise.resolve([]);
  if (!voicesPromise) {
    voicesPromise = new Promise((resolve) => {
      const synth = window.speechSynthesis;
      const now = synth.getVoices();
      if (now.length > 0) {
        resolve(now);
        return;
      }
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        resolve(synth.getVoices());
      };
      synth.onvoiceschanged = finish;
      window.setTimeout(finish, 1500);
    });
  }
  return voicesPromise;
}

/**
 * Pick the clearest voice: a preferred Microsoft neural voice (Edge) first,
 * then any natural/online voice, then Google, then any voice for the locale.
 */
function pickVoice(
  voices: SpeechSynthesisVoice[],
  locale: string,
  lang: Lang,
): SpeechSynthesisVoice | undefined {
  const norm = (v: SpeechSynthesisVoice) => (v.lang ?? "").toLowerCase().replace("_", "-");
  const lower = locale.toLowerCase();
  const exact = voices.filter((v) => norm(v) === lower);
  const pool = exact.length > 0 ? exact : voices.filter((v) => norm(v).startsWith(lower.slice(0, 2)));
  for (const name of PREFERRED_VOICES[lang]) {
    const hit = pool.find((v) => v.name.toLowerCase().includes(name));
    if (hit) return hit;
  }
  return (
    pool.find((v) => /natural|online/i.test(v.name)) ??
    pool.find((v) => /google/i.test(v.name)) ??
    pool[0]
  );
}

/* ---------------- Chunking ---------------- */

/**
 * Split text into sentence-sized chunks (split on `. ` `। ` `? ` `! ` and
 * newlines, keeping punctuation), merged up to ~180 characters each.
 * Speaking chunk by chunk also removes Chrome's ~15-second cutoff on long
 * utterances — no keep-alive interval needed.
 */
function splitIntoChunks(text: string): string[] {
  const sentences = text.match(/[^.?!।\n]+[.?!।]*\s*/g) ?? [text];
  const out: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    if ((current + sentence).length > 180 && current.trim()) {
      out.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current.trim()) out.push(current.trim());
  return out.length > 0 ? out : [text];
}

/* ---------------- Pre-generated audio (offline-first hybrid TTS) ----------------
 *
 * Files live at public/audio/<lang>/<key>.mp3 and are listed in
 * public/audio/manifest.json. The manifest currently lists no files, so this
 * path silently falls through to browser TTS — exactly as intended.
 * ------------------------------------------------------------------ */

export type AudioManifest = Record<string, string[]>;

let manifestCache: AudioManifest | null = null;
let manifestPromise: Promise<AudioManifest | null> | null = null;

async function getManifest(): Promise<AudioManifest | null> {
  if (manifestCache) return manifestCache;
  if (!manifestPromise) {
    manifestPromise = (async () => {
      try {
        const res = await fetch("/audio/manifest.json");
        if (!res.ok) return null;
        manifestCache = (await res.json()) as AudioManifest;
        return manifestCache;
      } catch {
        // Offline before manifest cached, or file missing — TTS fallback handles it.
        return null;
      }
    })();
  }
  return manifestPromise;
}

export function audioPath(lang: Lang, key: string): string {
  return `/audio/${lang}/${key}.mp3`;
}

async function hasPreRecordedAudio(lang: Lang, key: string): Promise<boolean> {
  const manifest = await getManifest();
  return manifest?.[lang]?.includes(key) ?? false;
}

/* ---------------- Internal helpers ---------------- */

function cancelTts() {
  if (speechSupported()) window.speechSynthesis.cancel();
}

function stopAudioElement() {
  if (audioEl) {
    audioEl.pause();
    audioEl.removeAttribute("src");
    audioEl = null;
  }
}

function speakChunk(session: number) {
  if (session !== sessionId) return;
  const full = chunks[chunkIndex];
  if (full === undefined) {
    ownerId = null;
    chunkOffset = 0;
    setStatus("idle");
    return;
  }
  const base = chunkOffset;
  const text = full.slice(base);
  if (!text.trim()) {
    chunkIndex += 1;
    chunkOffset = 0;
    speakChunk(session);
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = LOCALE[ownerLang];
  utter.rate = RATE[ownerRate];
  utter.pitch = 1;
  utter.volume = 1;
  if (currentVoice) utter.voice = currentVoice;
  utter.onboundary = (e) => {
    if (session !== sessionId) return;
    if (typeof e.charIndex === "number") chunkOffset = base + e.charIndex;
  };
  utter.onend = () => {
    if (session !== sessionId) return;
    chunkIndex += 1;
    chunkOffset = 0;
    speakChunk(session);
  };
  utter.onerror = (e) => {
    if (session !== sessionId) return;
    // cancel() fires these on the OLD utterance after the new one started.
    if (e.error === "interrupted" || e.error === "canceled") return;
    setStatus("error");
  };
  window.speechSynthesis.speak(utter);
}

async function startTtsFromChunk(session: number) {
  const voices = await loadVoices();
  if (session !== sessionId) return;
  currentVoice = pickVoice(voices, LOCALE[ownerLang], ownerLang);
  // Even without a matching voice we still speak with the lang tag set —
  // never leave a dead button.
  setStatus("playing");
  speakChunk(session);
}

function beginTts(session: number) {
  chunks = splitIntoChunks(ownerText);
  chunkIndex = 0;
  chunkOffset = 0;
  if (!speechSupported()) {
    setStatus("error");
    return;
  }
  setStatus("loading");
  void startTtsFromChunk(session);
}

function fallBackToTts(session: number) {
  // Fall back to browser TTS ONCE — never let mp3 and TTS play together.
  if (session !== sessionId || fellBackToTts) return;
  fellBackToTts = true;
  stopAudioElement();
  beginTts(session);
}

function startPreRecorded(session: number, key: string) {
  if (typeof Audio === "undefined") {
    beginTts(session);
    return;
  }
  const audio = new Audio(audioPath(ownerLang, key));
  audioEl = audio;
  audio.playbackRate = AUDIO_RATE[ownerRate];
  audio.volume = 1;
  audio.addEventListener("ended", () => {
    if (session !== sessionId) return;
    ownerId = null;
    setStatus("idle");
  });
  audio.addEventListener("error", () => {
    if (session !== sessionId) return;
    fallBackToTts(session);
  });
  void audio
    .play()
    .then(() => {
      if (session !== sessionId) return;
      setStatus("playing");
    })
    .catch(() => {
      if (session !== sessionId) return;
      fallBackToTts(session);
    });
}

/* ---------------- Public API ---------------- */

export function startReading(opts: {
  owner: symbol;
  text: string;
  lang: Lang;
  rate: SpeechRateName;
  audioKey?: string | undefined;
}) {
  if (typeof window === "undefined") return;
  // Supersede everything: bump session, silence old utterance/element.
  sessionId += 1;
  const session = sessionId;
  cancelTts();
  stopAudioElement();
  fellBackToTts = false;
  ownerId = opts.owner;
  ownerText = opts.text;
  ownerLang = opts.lang;
  ownerRate = opts.rate;
  emit();

  if (opts.audioKey && navigator.onLine !== false) {
    void (async () => {
      const has = await hasPreRecordedAudio(opts.lang, opts.audioKey as string);
      if (session !== sessionId) return;
      if (has) {
        setStatus("loading");
        startPreRecorded(session, opts.audioKey as string);
      } else {
        beginTts(session);
      }
    })();
    return;
  }
  beginTts(session);
}

export function pauseReading(owner: symbol) {
  if (ownerId !== owner || status !== "playing") return;
  if (audioEl) {
    audioEl.pause(); // keeps currentTime
    setStatus("paused");
    return;
  }
  // Do NOT rely on speechSynthesis.pause()/resume() — unreliable on Chrome
  // (Android/desktop) and some Samsung/WebView browsers. Cancel the current
  // chunk and remember chunkIndex instead.
  cancelTts();
  setStatus("paused");
}

export function resumeReading(owner: symbol, rate?: SpeechRateName) {
  if (ownerId !== owner || status !== "paused") return;
  if (rate) ownerRate = rate; // rate changes apply on resume/restart
  const session = sessionId;
  if (audioEl) {
    const audio = audioEl;
    audio.playbackRate = AUDIO_RATE[ownerRate];
    void audio
      .play()
      .then(() => {
        if (session !== sessionId) return;
        setStatus("playing");
      })
      .catch(() => {
        if (session !== sessionId) return;
        fallBackToTts(session);
      });
    return;
  }
  // TTS: re-speak from the start of the remembered chunk.
  if (!speechSupported()) {
    setStatus("error");
    return;
  }
  setStatus("loading");
  void startTtsFromChunk(session);
}

export function stopReading(owner: symbol) {
  if (ownerId !== owner) return;
  sessionId += 1;
  ownerId = null;
  cancelTts();
  stopAudioElement();
  setStatus("idle");
}

/** Stop regardless of owner — used when leaving the page entirely. */
export function stopAllReading() {
  sessionId += 1;
  ownerId = null;
  cancelTts();
  stopAudioElement();
  setStatus("idle");
}

/* Pause (not reset) when the tab is hidden, so returning keeps position. */
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && status === "playing" && ownerId) {
      if (audioEl) {
        audioEl.pause();
      } else {
        cancelTts();
      }
      setStatus("paused");
    }
  });
}