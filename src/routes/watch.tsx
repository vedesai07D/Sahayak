import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Chip, ElderButton, PageHeader } from "@/components/elder";
import { useApp } from "@/lib/store";
import { pick } from "@/lib/i18n";
import { TUTORIALS } from "@/data/content";

export const Route = createFileRoute("/watch")({
  head: () => ({
    meta: [
      { title: "Watch & Learn — Sahayak" },
      {
        name: "description",
        content: "Short video tutorials on smartphones, WhatsApp, UPI payments and staying safe online.",
      },
      { property: "og:title", content: "Watch & Learn — Sahayak" },
      { property: "og:description", content: "Follow along with simple video tutorials." },
    ],
  }),
  component: WatchPage,
});

function WatchPage() {
  const { state, t, completeVideo } = useApp();
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <PageHeader title={t("watchLearn")} subtitle={t("hostedByYouTube")} emoji="▶️" />

      <div className="grid gap-6 md:grid-cols-2">
        {TUTORIALS.map((v) => {
          const done = state.completedVideos.includes(v.id);
          return (
            <article key={v.id} className="card-surface overflow-hidden p-5">
              <h2 className="text-xl font-bold">{pick(v.title, state.lang)}</h2>
              <p className="mt-1 text-base text-muted-foreground">{pick(v.description, state.lang)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>⏱ {v.duration}</Chip>
                <Chip tone="primary">{t(v.difficulty)}</Chip>
                {done ? <Chip tone="success">✓ {t("completed")}</Chip> : null}
              </div>

              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl bg-muted">
                {playing === v.id ? (
                  <iframe
                    className="size-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.videoId}?rel=0&autoplay=1`}
                    title={pick(v.title, state.lang)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(v.id)}
                    className="flex size-full flex-col items-center justify-center gap-2"
                    aria-label={`Play ${pick(v.title, state.lang)}`}
                  >
                    <span className="text-5xl" aria-hidden="true">
                      ▶️
                    </span>
                    <span className="text-lg font-semibold">{t("start")}</span>
                    <span className="px-4 text-sm text-muted-foreground">
                      {t("videoNeedsInternet")}
                    </span>
                  </button>
                )}
              </div>

              <div className="mt-4">
                <ElderButton
                  variant={done ? "secondary" : "primary"}
                  onClick={() => completeVideo(v.id)}
                >
                  {done ? t("completed") : t("markComplete")}
                </ElderButton>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
