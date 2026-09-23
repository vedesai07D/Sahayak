import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Play, c as Square, g as RotateCcw, r as Volume2, y as Pause } from "../_libs/lucide-react.mjs";
import { S as useApp, p as ElderButton } from "./router-Pl2TF-rv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ListenButton-B3hMeGdK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RATE = {
	slow: .72,
	normal: .92,
	fast: 1.15
};
var LOCALE = {
	en: "en-IN",
	hi: "hi-IN",
	mr: "mr-IN"
};
var manifestCache = null;
var manifestPromise = null;
async function getManifest() {
	if (manifestCache) return manifestCache;
	if (!manifestPromise) manifestPromise = (async () => {
		try {
			const res = await fetch("/audio/manifest.json");
			if (!res.ok) return null;
			manifestCache = await res.json();
			return manifestCache;
		} catch {
			return null;
		}
	})();
	return manifestPromise;
}
function audioPath(lang, key) {
	return `/audio/${lang}/${key}.mp3`;
}
/** Does a pre-generated recording exist for this lang/key? (waits for the manifest) */
async function hasPreRecordedAudio(lang, key) {
	return (await getManifest())?.[lang]?.includes(key) ?? false;
}
var currentAudio = null;
function stopAudioElement() {
	if (currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
		currentAudio = null;
	}
}
function pauseAudioElement() {
	currentAudio?.pause();
}
function resumeAudioElement() {
	currentAudio?.play().catch(() => {});
}
function playPreRecorded(lang, key, opts) {
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
		audio.play().catch(() => opts.onError?.());
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
async function speakWithAudioKey(opts) {
	if (opts.audioKey && typeof window !== "undefined" && typeof navigator !== "undefined" && navigator.onLine !== false) {
		if (await hasPreRecordedAudio(opts.lang, opts.audioKey)) {
			if (playPreRecorded(opts.lang, opts.audioKey, {
				onEnd: opts.onEnd,
				onError: () => {
					speak(opts.text, opts);
				}
			})) return;
		}
	}
	speak(opts.text, opts);
}
function speechSupported() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function pickVoice(locale) {
	const voices = window.speechSynthesis.getVoices();
	return voices.find((v) => v.lang?.toLowerCase() === locale.toLowerCase()) ?? voices.find((v) => v.lang?.toLowerCase().startsWith(locale.slice(0, 2)));
}
function speak(text, opts) {
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
function pauseSpeech() {
	pauseAudioElement();
	if (speechSupported()) window.speechSynthesis.pause();
}
function resumeSpeech() {
	resumeAudioElement();
	if (speechSupported()) window.speechSynthesis.resume();
}
function stopSpeech() {
	stopAudioElement();
	if (speechSupported()) window.speechSynthesis.cancel();
}
/**
* Reads `text` aloud. When `audioKey` is given, a pre-generated recording at
* public/audio/<lang>/<audioKey>.mp3 is preferred; otherwise (or on any failure)
* the browser's built-in speech synthesis is used. Both paths work fully offline.
*/
function ListenButton({ text, label, audioKey }) {
	const { state, t } = useApp();
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => () => stopSpeech(), []);
	(0, import_react.useEffect)(() => {
		setStatus("idle");
		stopSpeech();
	}, [text, state.lang]);
	const start = () => {
		if (!speechSupported()) {
			setError(true);
			return;
		}
		setError(false);
		setStatus("playing");
		speakWithAudioKey({
			text,
			lang: state.lang,
			rate: state.speechRate,
			audioKey,
			onEnd: () => setStatus("idle"),
			onError: () => {
				setStatus("idle");
				setError(true);
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [status === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
			onClick: start,
			"aria-label": label ?? t("listen"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { "aria-hidden": "true" }),
				" ",
				label ?? t("listen")
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			status === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
				variant: "secondary",
				onClick: () => {
					pauseSpeech();
					setStatus("paused");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { "aria-hidden": "true" }),
					" ",
					t("pause")
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
				onClick: () => {
					resumeSpeech();
					setStatus("playing");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { "aria-hidden": "true" }),
					" ",
					t("resume")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
				variant: "outline",
				onClick: start,
				"aria-label": t("restart"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { "aria-hidden": "true" }),
					" ",
					t("restart")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
				variant: "outline",
				onClick: () => {
					stopSpeech();
					setStatus("idle");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { "aria-hidden": "true" }),
					" ",
					t("stop")
				]
			})
		] }), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-base text-muted-foreground",
			role: "status",
			children: t("readAloudUnavailable")
		}) : null]
	});
}
//#endregion
export { ListenButton as t };
