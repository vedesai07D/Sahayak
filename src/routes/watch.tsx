import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Chip, ElderButton, PageHeader } from "@/components/elder";
import { VideoCard } from "@/components/VideoCard";
import { useApp } from "@/lib/store";
import { pick } from "@/lib/i18n";
import { TUTORIALS } from "@/data/content";
import type { TKey } from "@/lib/i18n";

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

const CATEGORY_ORDER = ["Basics", "WhatsApp", "Payments", "Internet", "Services", "Safety"];
const CATEGORY_KEY: Record<string, TKey> = {
  Basics: "catBasics",
  WhatsApp: "catWhatsApp",
  Payments: "catPayments",
  Internet: "catInternet",
  Services: "catServices",
  Safety: "catSafety",
};

function WatchPage() {
  const { state, t, completeVideo } = useApp();
  const [filter, setFilter] = useState<string>("All");
  const categories = CATEGORY_ORDER.filter((c) => TUTORIALS.some((v) => v.category === c));
  const visible = filter === "All" ? TUTORIALS : TUTORIALS.filter((v) => v.category === filter);

  return (
    <div className="space-y-8">
      <PageHeader title={t("watchLearn")} subtitle={t("hostedByYouTube")} emoji="▶️" />

      <div className="flex flex-wrap gap-2" role="group" aria-label={t("watchLearn")}>
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`min-h-12 rounded-full border-2 px-5 text-lg font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 ${
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground"
            }`}
          >
            {c === "All" ? t("allFilter") : t(CATEGORY_KEY[c] ?? "allFilter")}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((v) => {
          const done = state.completedVideos.includes(v.id);
          return (
            <article key={v.id} className="card-surface overflow-hidden p-5">
              <h2 className="text-xl font-bold">{pick(v.title, state.lang)}</h2>
              <p className="mt-1 text-base text-muted-foreground">{pick(v.description, state.lang)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {v.duration ? <Chip>⏱ {v.duration}</Chip> : null}
                <Chip tone="primary">{t(v.difficulty)}</Chip>
                {done ? <Chip tone="success">✓ {t("completed")}</Chip> : null}
              </div>

              <div className="mt-4">
                <VideoCard videoIds={[v.videoId]} title={pick(v.title, state.lang)} />
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
