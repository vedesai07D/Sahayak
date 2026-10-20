import { useEffect, useRef, useSyncExternalStore } from "react";
import { Pause, Play, RotateCcw, SkipBack, Square, Volume2 } from "lucide-react";
import { ElderButton } from "./elder";
import { useApp } from "@/lib/store";
import {
  getSpeechStatus,
  isSpeechOwner,
  pauseReading,
  resumeReading,
  startReading,
  stopReading,
  subscribeSpeech,
} from "@/lib/speech";

/**
 * Thin UI over the speech controller in src/lib/speech.ts. The controller is
 * the single source of truth for status, so these buttons ALWAYS reflect
 * reality (no more controls vanishing while audio still plays):
 *
 *   idle/error → one big "Listen" button
 *   playing    → [Pause] [Restart] [Stop] [Reset]
 *   paused     → [Resume] [Restart] [Reset]
 *
 * Stop/Pause keep the position; Resume continues from there. Only Reset ends
 * the reading and returns to the start (the single "Listen" button).
 *
 * Only one ListenButton plays at a time app-wide; starting one stops any
 * other. Reading stops on unmount (route change) and when the text or UI
 * language changes — but not on unrelated re-renders.
 */
export function ListenButton({
  text,
  label,
  audioKey,
}: {
  text: string;
  label?: string;
  audioKey?: string;
}) {
  const { state, t } = useApp();

  const ownerRef = useRef<symbol | null>(null);
  if (ownerRef.current === null) ownerRef.current = Symbol("ListenButton");
  const owner = ownerRef.current;

  const status = useSyncExternalStore(subscribeSpeech, getSpeechStatus, () => "idle" as const);
  const isOwner = useSyncExternalStore(
    subscribeSpeech,
    () => isSpeechOwner(owner),
    () => false,
  );
  const active = isOwner && (status === "playing" || status === "paused" || status === "loading");

  // Stop reading when this button unmounts (covers navigation away).
  useEffect(() => () => stopReading(owner), [owner]);

  // Stop (never restart) when the text or the UI language actually changes.
  const prevRef = useRef({ text, lang: state.lang });
  useEffect(() => {
    if (prevRef.current.text !== text || prevRef.current.lang !== state.lang) {
      prevRef.current = { text, lang: state.lang };
      stopReading(owner);
    }
  }, [text, state.lang, owner]);

  const start = () =>
    startReading({ owner, text, lang: state.lang, rate: state.speechRate, audioKey });

  const listenLabel = label ?? t("listen");

  return (
    <div className="flex flex-wrap items-center gap-2">
      {!active ? (
        <ElderButton onClick={start} aria-label={listenLabel} aria-pressed={active}>
          <Volume2 aria-hidden="true" /> {listenLabel}
        </ElderButton>
      ) : (
        <>
          {status === "paused" ? (
            <ElderButton onClick={() => resumeReading(owner, state.speechRate)} aria-pressed={false}>
              <Play aria-hidden="true" /> {t("resume")}
            </ElderButton>
          ) : (
            <ElderButton
              variant="secondary"
              onClick={() => pauseReading(owner)}
              aria-pressed={status === "playing"}
            >
              <Pause aria-hidden="true" /> {t("pause")}
            </ElderButton>
          )}
          <ElderButton variant="outline" onClick={start} aria-label={t("restart")}>
            <RotateCcw aria-hidden="true" /> {t("restart")}
          </ElderButton>
          {status !== "paused" ? (
            // Stop keeps the position (same as Pause); only Reset goes back to the start.
            <ElderButton variant="outline" onClick={() => pauseReading(owner)}>
              <Square aria-hidden="true" /> {t("stop")}
            </ElderButton>
          ) : null}
          <ElderButton variant="outline" onClick={() => stopReading(owner)}>
            <SkipBack aria-hidden="true" /> {t("reset")}
          </ElderButton>
          <p className="w-full text-base text-muted-foreground" role="status" aria-live="polite">
            {status === "paused" ? t("audioPaused") : t("audioPlaying")}
          </p>
        </>
      )}
      {isOwner && status === "error" ? (
        <p className="text-base text-muted-foreground" role="status">
          {t("readAloudUnavailable")}
        </p>
      ) : null}
    </div>
  );
}