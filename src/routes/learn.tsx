import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, PlayCircle, Search, Sparkles } from "lucide-react";
import { Chip, LargeCard, PageHeader, ProgressCard } from "@/components/elder";
import { useApp } from "@/lib/store";
import { pick } from "@/lib/i18n";
import {
  LESSONS,
  LESSON_CATEGORIES,
  lessonVideoId,
  lessonsByCategory,
  type LessonCategory,
} from "@/data/lessons";
import { TUTORIALS } from "@/data/content";
import { categoryLessonProgress, lessonTrack } from "@/lib/progress";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn Digital Skills — Sahayak" },
      {
        name: "description",
        content:
          "Step-by-step lessons on smartphones, WhatsApp, UPI payments, the internet and digital services for older adults.",
      },
      { property: "og:title", content: "Learn Digital Skills — Sahayak" },
      { property: "og:description", content: "Take small steps. Learn at your own pace." },
    ],
  }),
  component: LearnLayout,
});

function LearnLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/learn") return <Outlet />;
  return <LearnIndex />;
}

type Mode = "home" | "read" | "watch";

function LearnIndex() {
  const { state, t } = useApp();
  const [mode, setMode] = useState<Mode>("home");
  const [selectedCategory, setSelectedCategory] = useState<LessonCategory | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const track = lessonTrack(state);
  const searching = searchOpen && query.trim().length > 0;
  const results = searching
    ? LESSONS.filter((l) => {
        const q = query.trim().toLowerCase();
        return (
          pick(l.title, state.lang).toLowerCase().includes(q) ||
          pick(l.description, state.lang).toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="space-y-8">
      <PageHeader title={t("learn")} subtitle={t("learnSubtitle")} emoji="📚" />

      {/* Progress bar — this IS the level: it fills up as lessons are done */}
      <ProgressCard label={t("lessonsProgress")} value={track.done} total={track.total} />

      {/* Continue / Next up */}
      {track.current ? (
        <div className="card-surface p-5 border-2 border-primary bg-primary-soft/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                {state.recent.some((r) => r.kind === "lesson")
                  ? t("continueLearning")
                  : t("nextUp")}
              </span>
            </div>
            <h2 className="text-2xl font-bold">{pick(track.current.title, state.lang)}</h2>
            <p className="text-base text-muted-foreground line-clamp-1">
              {pick(track.current.description, state.lang)}
            </p>
          </div>
          <Link
            to="/learn/$lessonId"
            params={{ lessonId: track.current.id }}
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-lg font-semibold text-primary-foreground hover:brightness-110"
          >
            {t("start")}
          </Link>
        </div>
      ) : null}

      {/* Search escape hatch — only place where the full list is scrolled */}
      <div className="space-y-3">
        {!searchOpen ? (
          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-border bg-card px-4 text-lg font-semibold hover:bg-muted"
          >
            <Search aria-hidden="true" className="size-5" />
            {t("findSpecificLesson")}
          </button>
        ) : (
          <div className="space-y-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("findSpecificLesson")}
              aria-label={t("findSpecificLesson")}
              className="box-border block w-full min-w-0 max-w-full min-h-14 rounded-xl border-2 border-border bg-card px-4 text-lg focus:border-primary focus:outline-none"
            />
            {searching ? (
              <div className="grid gap-3">
                {results.length === 0 ? (
                  <p className="text-lg text-muted-foreground">{t("noResults")}</p>
                ) : (
                  results.map((l) => (
                    <Link
                      key={l.id}
                      to="/learn/$lessonId"
                      params={{ lessonId: l.id }}
                      className="card-surface block p-4 hover:shadow-lift"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xl font-bold">{pick(l.title, state.lang)}</p>
                        {state.completedLessons.includes(l.id) ? (
                          <Chip tone="success">✓</Chip>
                        ) : null}
                      </div>
                    </Link>
                  ))
                )}
              </div>
            ) : null}
            <button
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              className="text-lg font-semibold text-primary underline"
            >
              {t("cancel")}
            </button>
          </div>
        )}
      </div>

      {/* Mode choice */}
      {mode === "home" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => setMode("read")}
            className="card-surface flex min-h-32 items-center gap-4 p-5 text-left border-2 border-primary/40 hover:shadow-lift transition-shadow"
          >
            <span
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-3xl"
              aria-hidden="true"
            >
              📖
            </span>
            <span>
              <span className="block text-2xl font-bold">{t("readAndListen")}</span>
              <span className="mt-1 block text-base text-muted-foreground">
                {track.done}/{track.total} {t("percentDone")}
              </span>
            </span>
          </button>
          <button
            onClick={() => setMode("watch")}
            className="card-surface flex min-h-32 items-center gap-4 p-5 text-left border-2 border-border hover:shadow-lift transition-shadow"
          >
            <span
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-3xl text-primary-foreground"
              aria-hidden="true"
            >
              ▶️
            </span>
            <span>
              <span className="block text-2xl font-bold">{t("watchVideos")}</span>
              <span className="mt-1 block text-base text-muted-foreground">
                {t("learnWithVideosSubtitle")}
              </span>
            </span>
          </button>
        </div>
      ) : null}

      {/* Read & Listen: categories → lessons (one step at a time, no dumping) */}
      {mode === "read" ? (
        <section className="space-y-4">
          {selectedCategory === null ? (
            <>
              <h2 className="text-2xl font-bold">{t("chooseCategory")}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {LESSON_CATEGORIES.map((c) => {
                  const prog = categoryLessonProgress(state, c.id);
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className="card-surface flex items-center gap-4 p-5 text-left hover:shadow-lift transition-shadow"
                    >
                      <span
                        className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-3xl"
                        aria-hidden="true"
                      >
                        {c.emoji}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xl font-bold">{pick(c.title, state.lang)}</span>
                        <span className="mt-1 block text-base text-muted-foreground">
                          {prog.done}/{prog.total} {t("percentDone")}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setMode("home")}
                className="text-lg font-semibold text-primary underline"
              >
                ← {t("back")}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary"
              >
                <ArrowLeft aria-hidden="true" /> {t("chooseCategory")}
              </button>
              <div className="grid gap-3">
                {lessonsByCategory(selectedCategory).map((l) => {
                  const done = state.completedLessons.includes(l.id);
                  const isNext = track.current?.id === l.id;
                  return (
                    <Link
                      key={l.id}
                      to="/learn/$lessonId"
                      params={{ lessonId: l.id }}
                      className={`card-surface flex items-center gap-3 p-4 transition-shadow hover:shadow-lift ${
                        isNext ? "border-2 border-primary" : ""
                      }`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-xl font-bold">{pick(l.title, state.lang)}</span>
                        <span className="mt-0.5 block text-base text-muted-foreground">
                          ⏱ {l.estimatedTime} min
                        </span>
                      </span>
                      {isNext ? <Chip tone="primary">{t("nextUp")}</Chip> : null}
                      {done ? <Chip tone="success">✓</Chip> : null}
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </section>
      ) : null}

      {/* Watch: video lessons + video tutorials */}
      {mode === "watch" ? (
        <section className="space-y-4">
          <button
            onClick={() => setMode("home")}
            className="text-lg font-semibold text-primary underline"
          >
            ← {t("back")}
          </button>
          <div className="grid gap-4 md:grid-cols-2">
            {LESSONS.filter((l) => lessonVideoId(l, state.lang)).map((l) => (
              <Link
                key={l.id}
                to="/learn/$lessonId"
                params={{ lessonId: l.id }}
                className="card-surface block p-5 transition-shadow hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{pick(l.title, state.lang)}</h3>
                  {state.completedLessons.includes(l.id) ? <Chip tone="success">✓</Chip> : null}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Chip tone="accent">
                    <PlayCircle className="size-4 shrink-0" aria-hidden="true" />
                    <span>{t("videoIncluded")}</span>
                  </Chip>
                  <Chip>⏱ {l.estimatedTime} min</Chip>
                </div>
              </Link>
            ))}
          </div>
          {/* Extra video tutorials live on /watch */}
          <LargeCard className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">{t("learnWithVideos")}</h3>
              <p className="text-base text-muted-foreground">
                {TUTORIALS.length} {t("videos")} · {t("learnWithVideosSubtitle")}
              </p>
            </div>
            <Link
              to="/watch"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-card px-5 text-lg font-semibold hover:bg-muted"
            >
              {t("start")}
            </Link>
          </LargeCard>
        </section>
      ) : null}
    </div>
  );
}
