import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, Wifi } from "lucide-react";
import { AnimatedHeart } from "@/components/AnimatedHeart";
import { Chip, ElderButton, LargeCard, PageHeader } from "@/components/elder";
import { ListenButton } from "@/components/ListenButton";
import { QuizPanel } from "@/components/QuizPanel";
import { VideoCard } from "@/components/VideoCard";
import { useApp } from "@/lib/store";
import { pick, pickList } from "@/lib/i18n";
import { getLesson, lessonVideoIds, lessonsByCategory } from "@/data/lessons";
import { QUIZZES } from "@/data/content";
import { lessonTrack } from "@/lib/progress";

export const Route = createFileRoute("/learn/$lessonId")({
  head: () => ({
    meta: [
      { title: "Lesson — Sahayak" },
      {
        name: "description",
        content: "A short, step-by-step lesson you can read or listen to at your own pace.",
      },
      { property: "og:title", content: "Lesson — Sahayak" },
      {
        property: "og:description",
        content: "Simple step-by-step digital skills for older adults.",
      },
    ],
  }),
  component: LessonPage,
});

function LessonPage() {
  const { lessonId } = useParams({ from: "/learn/$lessonId" });
  const { state, t, completeLesson, toggleFavorite, isFavorite, trackRecent } = useApp();
  const lesson = getLesson(lessonId);
  // Once the quiz has been started it stays mounted even if the lesson's
  // completion toggle is switched off mid-attempt. Tracked per lesson in
  // sessionStorage so a refresh keeps the quiz visible.
  const [quizStarted, setQuizStarted] = useState(false);

  const markQuizStarted = () => {
    setQuizStarted(true);
    try {
      sessionStorage.setItem(`sahayak.quizStarted.${lessonId}`, "1");
    } catch {
      /* storage unavailable — in-memory state is enough for this visit */
    }
  };

  useEffect(() => {
    if (lesson) {
      trackRecent({ id: lesson.id, kind: "lesson", title: pick(lesson.title, state.lang) });
    }
    try {
      setQuizStarted(sessionStorage.getItem(`sahayak.quizStarted.${lessonId}`) === "1");
    } catch {
      setQuizStarted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className="space-y-4">
        <PageHeader title={t("noResults")} emoji="🔎" />
        <Link to="/learn" className="text-lg font-semibold text-primary underline">
          {t("exploreLessons")}
        </Link>
      </div>
    );
  }

  const title = pick(lesson.title, state.lang);
  const description = pick(lesson.description, state.lang);
  const steps = pickList(lesson.steps, state.lang);
  const done = state.completedLessons.includes(lesson.id);
  const saved = isFavorite(lesson.id);
  const related = lessonsByCategory(lesson.category)
    .filter((l) => l.id !== lesson.id)
    .slice(0, 4);
  const readAloud = [title, description, ...steps].join(". ");
  const quiz = lesson.quizId ? QUIZZES.find((q) => q.id === lesson.quizId) : undefined;
  const nextLesson = lessonTrack(state).next;
  // Verified videos for the current UI language (falls back to en)
  const videoIds = lessonVideoIds(lesson, state.lang);

  return (
    <div className="space-y-8">
      <Link
        to="/learn"
        className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary"
      >
        <ArrowLeft aria-hidden="true" /> {t("back")} {t("learn")}
      </Link>

      <PageHeader title={title} subtitle={description} emoji="📖" />

      <div className="flex flex-wrap items-center gap-2">
        <Chip>⏱ {lesson.estimatedTime} min</Chip>
        <Chip tone="primary">{t(lesson.difficulty)}</Chip>
        {done ? <Chip tone="success">✓ {t("completed")}</Chip> : null}
        {videoIds.length > 0 ? <Chip tone="accent">▶️ {t("videoIncluded")}</Chip> : null}
      </div>

      {/* Voice Listen Button — prefers a pre-generated recording when one exists */}
      <ListenButton text={readAloud} audioKey={lesson.id} />

      {/* Video Demonstration Section (if available for this lesson + language) */}
      {videoIds.length > 0 ? (
        <section>
          <LargeCard className="border-2 border-primary/40 bg-card space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span aria-hidden="true">▶️</span>
                <span>{t("watchVideo")}</span>
              </h2>
              <Chip tone="warning">
                <Wifi className="size-4 shrink-0" aria-hidden="true" />
                <span>{t("requiresInternet")}</span>
              </Chip>
            </div>
            <p className="text-base text-muted-foreground">{t("videoSectionDesc")}</p>
            <VideoCard videoIds={videoIds} title={title} />
          </LargeCard>
        </section>
      ) : null}

      {/* Written Step-by-Step Instructions */}
      <section>
        <h2 className="mb-3 text-2xl font-bold">{t("steps")}</h2>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li key={i} className="card-surface flex items-start gap-4 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xl font-bold text-primary">
                {i + 1}
              </span>
              <p className="text-xl leading-relaxed pt-1">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Completion & Save Actions */}
      <div className="flex flex-wrap gap-3 pt-2">
        <ElderButton
          onClick={() => completeLesson(lesson.id)}
          variant={done ? "secondary" : "primary"}
          size="xl"
        >
          <Check aria-hidden="true" /> {done ? t("completed") : t("markComplete")}
        </ElderButton>
        <ElderButton
          variant={saved ? "secondary" : "outline"}
          size="xl"
          onClick={() => toggleFavorite(lesson.id)}
          aria-pressed={saved}
        >
          <AnimatedHeart active={saved} /> {saved ? t("savedLabel") : t("save")}
        </ElderButton>
      </div>

      {/* Small linked quiz — appears after the lesson is completed. Once the
          quiz has been started it stays mounted even if completion is
          un-toggled, so an attempt is never lost. */}
      {quiz && (done || quizStarted) ? (
        <section>
          <h2 className="mb-3 text-2xl font-bold">✏️ {t("quickQuiz")}</h2>
          <QuizPanel
            key={quiz.id}
            quizId={quiz.id}
            title={pick(quiz.title, state.lang)}
            onStart={markQuizStarted}
          />
        </section>
      ) : null}

      {/* Next lesson suggestion (progress-driven) */}
      {done && nextLesson ? (
        <section>
          <h2 className="mb-3 text-2xl font-bold">{t("nextLesson")}</h2>
          <Link
            to="/learn/$lessonId"
            params={{ lessonId: nextLesson.id }}
            className="card-surface flex items-center gap-4 p-5 border-2 border-primary/40 transition-shadow hover:shadow-lift"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-xl font-bold">{pick(nextLesson.title, state.lang)}</span>
              <span className="mt-0.5 block text-base text-muted-foreground">
                ⏱ {nextLesson.estimatedTime} min
              </span>
            </span>
            <span className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground">
              {t("start")}
            </span>
          </Link>
        </section>
      ) : null}

      {/* Related Lessons */}
      {related.length > 0 ? (
        <section>
          <h2 className="mb-3 text-2xl font-bold">{t("relatedLessons")}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.id}
                to="/learn/$lessonId"
                params={{ lessonId: r.id }}
                className="card-surface block p-4 hover:shadow-lift"
              >
                <p className="text-xl font-bold">{pick(r.title, state.lang)}</p>
                <p className="mt-1 text-base text-muted-foreground line-clamp-2">
                  {pick(r.description, state.lang)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
