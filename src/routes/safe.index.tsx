import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Chip, LargeCard, PageHeader, ProgressCard, SectionHeader } from "@/components/elder";
import { useApp } from "@/lib/store";
import { pick, pickList } from "@/lib/i18n";
import { COMMON_SCAMS, SCAM_STORIES } from "@/data/scams";
import { HELP_TOPICS, OFFICIAL_RESOURCES, SAFETY_QUESTIONS } from "@/data/content";
import { clampCursor, storyTrack } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/safe/")({
  head: () => ({
    meta: [
      { title: "Stay Safe — Scam Awareness — Sahayak" },
      {
        name: "description",
        content:
          "Real-life fraud stories, common scam patterns and a personal safety checklist — one step at a time.",
      },
      { property: "og:title", content: "Stay Safe — Scam Awareness — Sahayak" },
      { property: "og:description", content: "Learn about common scams before they happen to you." },
    ],
  }),
  component: SafePage,
});

type SafeTab = "stories" | "scams" | "help";

function SafePage() {
  const { state, t, update } = useApp();
  const [tab, setTab] = useState<SafeTab>("stories");
  const [browseAll, setBrowseAll] = useState(false);

  const track = storyTrack(state);
  const scamIndex = clampCursor(state.scamCursor, COMMON_SCAMS.length);
  const scam = COMMON_SCAMS[scamIndex];
  const completedStories = state.completedStories ?? [];

  const toggle = (id: string) =>
    update((s) => ({ safetyCheck: { ...s.safetyCheck, [id]: !s.safetyCheck[id] } }));

  const TABS: { id: SafeTab; label: string; emoji: string }[] = [
    { id: "stories", label: t("stories"), emoji: "📕" },
    { id: "scams", label: t("commonScamsTab"), emoji: "⚠️" },
    { id: "help", label: t("helpAndSafetyCheck"), emoji: "✅" },
  ];

  return (
    <div className="space-y-8">
      <PageHeader title={t("staySafe")} subtitle={t("safeSubtitle")} emoji="🛡️" />

      {/* Segmented control: one section at a time, nothing dumped in a long list */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3" role="tablist" aria-label={t("staySafe")}>
        {TABS.map(({ id, label, emoji }) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              "flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 px-3 text-base font-semibold transition-colors",
              tab === id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-muted",
            )}
          >
            <span aria-hidden="true">{emoji}</span>
            <span className="text-center leading-tight">{label}</span>
          </button>
        ))}
      </div>

      {/* ── Stories: progress bar + one story at a time ───────────────────── */}
      {tab === "stories" ? (
        <section className="space-y-6">
          <ProgressCard label={t("storiesProgress")} value={track.done} total={track.total} />

          {track.current ? (
            <LargeCard className="space-y-3 border-2 border-destructive/40">
              <p className="text-sm font-bold uppercase tracking-wider text-destructive">
                {t("nextUp")} · {track.done + 1} / {track.total}
              </p>
              <h2 className="text-2xl font-bold">{pick(track.current.title, state.lang)}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {pick(track.current.summary, state.lang)}
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip tone="danger">{t("scam")}</Chip>
                <Chip>{t(track.current.difficulty)}</Chip>
              </div>
              <div className="pt-2">
                <Link
                  to="/safe/$storyId"
                  params={{ storyId: track.current.id }}
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-destructive px-6 text-lg font-semibold text-destructive-foreground hover:brightness-110"
                >
                  {t("readStory")}
                </Link>
              </div>
            </LargeCard>
          ) : (
            <LargeCard>
              <p className="text-xl font-bold">🎉 {t("allStoriesRead")}</p>
            </LargeCard>
          )}

          {/* Freedom to browse a specific story — only expands on request */}
          <button
            onClick={() => setBrowseAll(!browseAll)}
            aria-expanded={browseAll}
            className="min-h-12 w-full rounded-xl border-2 border-border bg-card px-4 text-lg font-semibold hover:bg-muted"
          >
            {browseAll ? "▲" : "▼"} {t("browseAll")} ({SCAM_STORIES.length})
          </button>

          {browseAll ? (
            <div className="grid gap-4 md:grid-cols-2">
              {SCAM_STORIES.map((s) => (
                <Link
                  key={s.id}
                  to="/safe/$storyId"
                  params={{ storyId: s.id }}
                  className="card-surface block p-5 transition-shadow hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold">{pick(s.title, state.lang)}</h3>
                    {completedStories.includes(s.id) ? (
                      <Chip tone="success">✓</Chip>
                    ) : null}
                  </div>
                  <p className="mt-2 text-base text-muted-foreground line-clamp-2">
                    {pick(s.summary, state.lang)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip tone="danger">{t("scam")}</Chip>
                    <Chip>{t(s.difficulty)}</Chip>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {/* ── Common scams: one card at a time with previous / next ─────────── */}
      {tab === "scams" && scam ? (
        <section className="space-y-6">
          <LargeCard className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-2xl font-bold">
                <span aria-hidden="true">{scam.emoji} </span>
                {pick(scam.name, state.lang)}
              </h2>
              <Chip>
                {scamIndex + 1} / {COMMON_SCAMS.length}
              </Chip>
            </div>
            <p className="text-lg leading-relaxed">{pick(scam.summary, state.lang)}</p>
            <div>
              <h3 className="mb-2 text-xl font-bold">🚩 {t("warningSigns")}</h3>
              <ul className="space-y-2">
                {pickList(scam.redFlags, state.lang).map((flag, i) => (
                  <li key={i} className="rounded-xl bg-muted/50 p-3 text-lg leading-relaxed">
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-primary-soft p-4">
              <p className="text-lg font-semibold text-primary">
                💡 {pick(scam.quickTip, state.lang)}
              </p>
            </div>
          </LargeCard>

          <div className="flex gap-3">
            <button
              onClick={() => update({ scamCursor: Math.max(0, scamIndex - 1) })}
              disabled={scamIndex === 0}
              className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-4 text-lg font-semibold hover:bg-muted disabled:opacity-40"
            >
              <ChevronLeft aria-hidden="true" /> {t("previousScam")}
            </button>
            <button
              onClick={() => update({ scamCursor: Math.min(COMMON_SCAMS.length - 1, scamIndex + 1) })}
              disabled={scamIndex === COMMON_SCAMS.length - 1}
              className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-lg font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-40"
            >
              {t("nextScam")} <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </section>
      ) : null}

      {/* ── Help & safety check: checklist, what-to-do, official help ─────── */}
      {tab === "help" ? (
        <div className="space-y-10">
          <section>
            <SectionHeader title={t("safetyCheck")} emoji="✅" />
            <LargeCard>
              <ul className="space-y-3">
                {SAFETY_QUESTIONS.map((q) => (
                  <li key={q.id}>
                    <label className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border-2 border-border p-3 transition-colors hover:bg-muted/40">
                      <input
                        type="checkbox"
                        className="size-6 shrink-0 accent-primary"
                        checked={!!state.safetyCheck[q.id]}
                        onChange={() => toggle(q.id)}
                      />
                      <span className="text-lg">{pick(q.q, state.lang)}</span>
                      {q.lesson ? (
                        <Link
                          to="/learn/$lessonId"
                          params={{ lessonId: q.lesson }}
                          className="ml-auto shrink-0 text-base font-semibold text-primary underline"
                        >
                          {t("learnMore")}
                        </Link>
                      ) : null}
                    </label>
                  </li>
                ))}
              </ul>
            </LargeCard>
          </section>

          <section>
            <SectionHeader title={t("whatShouldIDo")} emoji="🤔" />
            <div className="space-y-4">
              {HELP_TOPICS.map((h) => {
                const steps = pickList(h.steps, state.lang);
                return (
                  <details key={h.id} className="card-surface p-5 open:bg-card">
                    <summary className="flex cursor-pointer items-center gap-2 text-xl font-bold">
                      <span aria-hidden="true">{h.emoji} </span>
                      <span>{pick(h.title, state.lang)}</span>
                    </summary>
                    <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-relaxed">
                      {steps.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>
                  </details>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeader title={t("officialHelp")} emoji="☎️" />
            <LargeCard>
              <ul className="space-y-3 text-lg">
                {OFFICIAL_RESOURCES.map((r, i) => (
                  <li
                    key={i}
                    className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2 last:border-none"
                  >
                    <span className="font-semibold text-foreground">{pick(r.label, state.lang)}:</span>
                    <span className="font-bold tabular-nums text-primary">{r.value}</span>
                  </li>
                ))}
              </ul>
            </LargeCard>
          </section>
        </div>
      ) : null}
    </div>
  );
}