import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw, Square, Volume2 } from "lucide-react";
import { ElderButton } from "./elder";
import { useApp } from "@/lib/store";
import {
  pauseSpeech,
  resumeSpeech,
  speakWithAudioKey,
  speechSupported,
  stopSpeech,
} from "@/lib/speech";

/**
 * Reads `text` aloud. When `audioKey` is given, a pre-generated recording at
 * public/audio/<lang>/<audioKey>.mp3 is preferred; otherwise (or on any failure)
 * the browser's built-in speech synthesis is used. Both paths work fully offline.
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
  const [status, setStatus] = useState<"idle" | "playing" | "paused">("idle");
  const [error, setError] = useState(false);

  useEffect(() => () => stopSpeech(), []);
  useEffect(() => {
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
    void speakWithAudioKey({
      text,
      lang: state.lang,
      rate: state.speechRate,
      audioKey,
      onEnd: () => setStatus("idle"),
      onError: () => {
        setStatus("idle");
        setError(true);
      },
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {status === "idle" ? (
        <ElderButton onClick={start} aria-label={label ?? t("listen")}>
          <Volume2 aria-hidden="true" /> {label ?? t("listen")}
        </ElderButton>
      ) : (
        <>
          {status === "playing" ? (
            <ElderButton
              variant="secondary"
              onClick={() => {
                pauseSpeech();
                setStatus("paused");
              }}
            >
              <Pause aria-hidden="true" /> {t("pause")}
            </ElderButton>
          ) : (
            <ElderButton
              onClick={() => {
                resumeSpeech();
                setStatus("playing");
              }}
            >
              <Play aria-hidden="true" /> {t("resume")}
            </ElderButton>
          )}
          <ElderButton variant="outline" onClick={start} aria-label={t("restart")}>
            <RotateCcw aria-hidden="true" /> {t("restart")}
          </ElderButton>
          <ElderButton
            variant="outline"
            onClick={() => {
              stopSpeech();
              setStatus("idle");
            }}
          >
            <Square aria-hidden="true" /> {t("stop")}
          </ElderButton>
        </>
      )}
      {error ? (
        <p className="text-base text-muted-foreground" role="status">
          {t("readAloudUnavailable")}
        </p>
      ) : null}
    </div>
  );
}
