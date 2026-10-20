import { useEffect, useState } from "react";
import { ExternalLink, Play, WifiOff } from "lucide-react";
import { Chip } from "@/components/elder";
import { useApp } from "@/lib/store";

/**
 * Shared YouTube player block used by the lesson page, the story page and
 * the Watch page. Tap-to-play poster (YouTube thumbnail), an always-visible
 * "Open on YouTube" fallback (owners can disable embedding — YouTube error
 * 150/153 never fires iframe onError, so the external link is the reliable
 * escape hatch), and a "More videos" row when extra ids are provided.
 * When offline, the player is replaced by a friendly offline message.
 */
export function VideoCard({ videoIds, title }: { videoIds: string[]; title: string }) {
  const { t } = useApp();
  const firstId = videoIds[0];
  const [currentId, setCurrentId] = useState<string | undefined>(firstId);
  const [playing, setPlaying] = useState(false);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const sync = () => setOffline(typeof navigator !== "undefined" && navigator.onLine === false);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  // Reset the player when a different lesson/story provides new ids.
  useEffect(() => {
    setCurrentId(firstId);
    setPlaying(false);
  }, [firstId]);

  if (!currentId) return null;

  const moreIds = videoIds.filter((id) => id !== currentId);
  const thumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="space-y-3">
      <Chip tone="accent">{t("hindiVideoChip")}</Chip>
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-card">
        {offline ? (
          <div className="flex size-full flex-col items-center justify-center gap-3 p-6 text-center">
            <WifiOff className="size-10 text-muted-foreground" aria-hidden="true" />
            <p className="max-w-sm text-lg font-semibold">{t("videoNeedsInternet")}</p>
          </div>
        ) : playing ? (
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${currentId}?rel=0&playsinline=1&modestbranding=1&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="relative flex size-full items-center justify-center overflow-hidden transition-opacity hover:opacity-95"
            aria-label={`${t("start")} — ${title}`}
          >
            <img
              src={thumbnail(currentId)}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <span className="relative flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift">
              <Play className="size-8 ml-1" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>

      {!offline ? (
        <a
          href={`https://www.youtube.com/watch?v=${currentId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-5 text-lg font-semibold hover:bg-muted"
        >
          <ExternalLink className="size-5 shrink-0" aria-hidden="true" />
          {t("openOnYouTube")}
        </a>
      ) : null}

      {!offline && moreIds.length > 0 ? (
        <div>
          <p className="text-base font-semibold text-muted-foreground">{t("moreVideos")}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            {moreIds.map((id) => (
              <button
                key={id}
                onClick={() => {
                  setCurrentId(id);
                  setPlaying(true);
                }}
                className="relative h-20 w-32 overflow-hidden rounded-xl border-2 border-border transition-colors hover:border-primary"
                aria-label={`${t("start")} — ${title}`}
              >
                <img
                  src={thumbnail(id)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="size-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="size-6 text-white" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}