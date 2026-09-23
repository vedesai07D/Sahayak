import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Sparkles } from "lucide-react";
import { Chip, ElderLink, LargeCard, ProgressCard, SectionHeader } from "@/components/elder";
import { useApp, type SkillLevel } from "@/lib/store";
import { pick } from "@/lib/i18n";
import { lessonVideoId } from "@/data/lessons";
import { lessonTrack, storyTrack } from "@/lib/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahayak — Learn. Stay Safe. Stay Connected." },
      {
        name: "description",
        content:
          "Simple lessons, scam awareness and brain games for older adults. No login needed, works on your device.",
      },
      { property: "og:title", content: "Sahayak — Learn. Stay Safe. Stay Connected." },
      {
        property: "og:description",
        content: "A friendly digital education and safety companion for older adults.",
      },
    ],
  }),
  component: HomePage,
});

const LEVELS: { id: SkillLevel; labelKey: string; emoji: string }[] = [
  { id: "beginner", labelKey: "beginner", emoji: "🌱" },
  { id: "comfortable", labelKey: "comfortable", emoji: "🙂" },
  { id: "confident", labelKey: "confident", emoji: "🚀" },
];

function HomePage() {
  const { state, t, update } = useApp();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? t("goodMorning") : hour < 17 ? t("goodAfternoon") : t("goodEvening");

  const lessons = lessonTrack(state);
  const stories = storyTrack(state);

  // "Continue learning" only appears for a genuinely unfinished lesson
  const currentLesson = lessons.current;
  const recommendedLesson = lessons.next ?? lessons.current;
  const recommendedStory = stories.current;

  return (
    <div className="space-y-8">
      {/* Greeting Header */}
      <section>
        <h1 className="text-3xl font-bold md:text-4xl">
          {greeting} <span aria-hidden="true">👋</span>
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">{t("howCanHelp")}</p>
      </section>

      {/* Your Progress — the level is just these bars filling up */}
      <section>
        <SectionHeader title={t("yourProgress")} emoji="🌱" />
        <div className="grid gap-4 sm:grid-cols-2">
          <ProgressCard label={t("lessonsProgress")} value={lessons.done} total={lessons.total} />
          <ProgressCard
            label={t("storiesProgress")}
            value={stories.done}
            total={stories.total}
            tone="success"
          />
        </div>
        <p className="mt-3 text-lg text-muted-foreground">
          {lessons.percent}% {t("percentDone")} — {t("keepGoing")}
        </p>
      </section>

      {/* Continue Learning — hidden when nothing is in progress */}
      {currentLesson ? (
        <section>
          <SectionHeader title={t("continueLearning")} emoji="📖" />
          <LargeCard>
            <p className="text-xl font-bold">{pick(currentLesson.title, state.lang)}</p>
            <p className="mt-1 text-base text-muted-foreground line-clamp-2">
              {pick(currentLesson.description, state.lang)}
            </p>
            <div className="mt-4">
              <Link
                to="/learn/$lessonId"
                params={{ lessonId: currentLesson.id }}
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-6 text-lg font-semibold text-primary-foreground"
              >
                {t("continueBtn")}
              </Link>
            </div>
          </LargeCard>
        </section>
      ) : (
        <section>
          <SectionHeader title={t("continueLearning")} emoji="📖" />
          <LargeCard>
            <p className="text-lg">{t("startWithSimpleLesson")}</p>
            <div className="mt-4">
              <ElderLink to="/learn">{t("exploreLessons")}</ElderLink>
            </div>
          </LargeCard>
        </section>
      )}

      {/* Personalized Recommendations */}
      <section>
        <SectionHeader title={t("recommendedForYou")} emoji="✨" />
        <LargeCard className="space-y-5 border-2 border-primary/40">
          {/* Compact level switcher — drives the recommendation order */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                {LEVELS.find((l) => l.id === state.skillLevel)?.emoji}
              </span>
              <span className="text-lg font-bold">{t(state.skillLevel)}</span>
            </div>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("changeLevel")}>
              {LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => update({ skillLevel: lvl.id })}
                  aria-pressed={state.skillLevel === lvl.id}
                  className={`min-h-11 rounded-xl border-2 px-3 text-base font-semibold transition-colors ${
                    state.skillLevel === lvl.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <span aria-hidden="true">{lvl.emoji} </span>
                  {t(lvl.labelKey)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Suggested Lesson */}
            {recommendedLesson ? (
              <div className="rounded-2xl border-2 border-border bg-background p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-5 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-sm font-bold uppercase tracking-wider text-primary">
                      {t("nextUp")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{pick(recommendedLesson.title, state.lang)}</h3>
                  <p className="mt-1 text-base text-muted-foreground line-clamp-2">
                    {pick(recommendedLesson.description, state.lang)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip>⏱ {recommendedLesson.estimatedTime} min</Chip>
                    {lessonVideoId(recommendedLesson, state.lang) ? (
                      <Chip tone="accent">▶️ {t("videoIncluded")}</Chip>
                    ) : null}
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to="/learn/$lessonId"
                    params={{ lessonId: recommendedLesson.id }}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground hover:brightness-110"
                  >
                    {t("start")}
                  </Link>
                </div>
              </div>
            ) : null}

            {/* Suggested Safety Story */}
            {recommendedStory ? (
              <div className="rounded-2xl border-2 border-border bg-background p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="size-5 text-destructive shrink-0" aria-hidden="true" />
                    <span className="text-sm font-bold uppercase tracking-wider text-destructive">
                      {t("suggestedSafety")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{pick(recommendedStory.title, state.lang)}</h3>
                  <p className="mt-1 text-base text-muted-foreground line-clamp-2">
                    {pick(recommendedStory.summary, state.lang)}
                  </p>
                  <div className="mt-3">
                    <Chip tone="danger">{t("scam")}</Chip>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to="/safe/$storyId"
                    params={{ storyId: recommendedStory.id }}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-border bg-card px-5 text-base font-semibold hover:bg-muted"
                  >
                    {t("learnMore")}
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </LargeCard>
      </section>
    </div>
  );
}
