import type { Lang } from "./i18n";

export type SpeechRateName = "slow" | "normal" | "fast";

const RATE: Record<SpeechRateName, number> = { slow: 0.72, normal: 0.92, fast: 1.15 };
const LOCALE: Record<Lang, string> = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" };

/* ------------------------------------------------------------------
 * Pre-generated audio (offline-first hybrid TTS)
 *
 * Files live at public/audio/<lang>/<key>.mp3 and are listed in
 * public/audio/manifest.json — no per-phrase network probing.
 * Tier 3 (future online TTS) is deliberately left as a seam: audio files
 * and browser speechSynthesis are fully local, so nothing here ever
 * requires internet or ships an API key to the frontend.
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
        // Offline before manifest cached, or file missing — fallback path handles it.
        return null;
      }
    })();
  }
  return manifestPromise;
}

export function audioPath(lang: Lang, key: string): string {
  return `/audio/${lang}/${key}.mp3`;
}

/** Does a pre-generated recording exist for this lang/key? (waits for the manifest) */
export async function hasPreRecordedAudio(lang: Lang, key: string): Promise<boolean> {
  const manifest = await getManifest();
  return manifest?.[lang]?.includes(key) ?? false;
}

let currentAudio: HTMLAudioElement | null = null;

function stopAudioElement() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

export function pauseAudioElement() {
  currentAudio?.pause();
}

export function resumeAudioElement() {
  void currentAudio?.play().catch(() => {
    /* autoplay policy or ended source — caller falls back to browser TTS */
  });
}

function playPreRecorded(
  lang: Lang,
  key: string,
  opts: { onEnd?: (() => void) | undefined; onError?: (() => void) | undefined },
): boolean {
  if (typeof window === "undefined" || typeof Audio === "undefined") return false;
  try {
    stopAudioElement();
    const audio = new Audio(audioPath(lang, key));
    currentAudio = audio;
    audio.onended = () => {
      if (currentAudio === audio) currentAudio = null;
      opts.onEnd?.();
    };
    audio.onerror = () => {
      if (currentAudio === audio) currentAudio = null;
      opts.onError?.();
    };
    void audio.play().catch(() => opts.onError?.());
    return true;
  } catch {
    return false;
  }
}

/**
 * Speak `text` using the best available voice, in this order:
 *   1. pre-generated recording at public/audio/<lang>/<key>.mp3 (when `audioKey` is given)
 *   2. browser speechSynthesis (always available offline)
 *   3. (future seam) an online TTS behind a server route — intentionally not wired up,
 *      see src/routes/api/tts.ts. It must never become a mandatory path.
 */
export async function speakWithAudioKey(opts: {
  text: string;
  lang: Lang;
  rate: SpeechRateName;
  audioKey?: string | undefined;
  onEnd?: (() => void) | undefined;
  onError?: (() => void) | undefined;
}): Promise<void> {
  if (
    opts.audioKey &&
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    navigator.onLine !== false
  ) {
    const has = await hasPreRecordedAudio(opts.lang, opts.audioKey);
    if (has) {
      const ok = playPreRecorded(opts.lang, opts.audioKey, {
        onEnd: opts.onEnd,
        onError: () => {
          // Corrupt/missing file after all — fall back to browser TTS.
          speak(opts.text, opts);
        },
      });
      if (ok) return;
    }
  }
  speak(opts.text, opts);
}

export function speechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickVoice(locale: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang?.toLowerCase() === locale.toLowerCase()) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith(locale.slice(0, 2)))
  );
}

export function speak(
  text: string,
  opts: {
    lang: Lang;
    rate: SpeechRateName;
    onEnd?: (() => void) | undefined;
    onError?: (() => void) | undefined;
  },
) {
  if (!speechSupported()) {
    opts.onError?.();
    return;
  }
  const synth = window.speechSynthesis;
  synth.cancel();
  const locale = LOCALE[opts.lang];
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = locale;
  utter.rate = RATE[opts.rate];
  utter.pitch = 1;
  const voice = pickVoice(locale);
  if (voice) utter.voice = voice;
  utter.onend = () => opts.onEnd?.();
  utter.onerror = () => opts.onError?.();
  synth.speak(utter);
}

export function pauseSpeech() {
  pauseAudioElement();
  if (speechSupported()) window.speechSynthesis.pause();
}
export function resumeSpeech() {
  resumeAudioElement();
  if (speechSupported()) window.speechSynthesis.resume();
}
export function stopSpeech() {
  stopAudioElement();
  if (speechSupported()) window.speechSynthesis.cancel();
}
