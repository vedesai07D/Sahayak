import { Link, createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ShieldAlert, Wifi } from "lucide-react";
import { AnimatedHeart } from "@/components/AnimatedHeart";
import { Chip, ElderButton, LargeCard, PageHeader, SectionHeader } from "@/components/elder";
import { ListenButton } from "@/components/ListenButton";
import { QuizPanel } from "@/components/QuizPanel";
import { VideoCard } from "@/components/VideoCard";
import { useApp } from "@/lib/store";
import { pick, pickList } from "@/lib/i18n";
import { getStory } from "@/data/scams";
import { QUIZZES } from "@/data/content";
import { storyTrack } from "@/lib/progress";

export const Route = createFileRoute("/safe/$storyId")({
  head: () => ({
    meta: [
      { title: "Real-Life Scam Story — Sahayak" },
      {
        name: "description",
        content:
          "A true-to-life scam story with warning signs, what went wrong, and what to do if it happens.",
      },
      { property: "og:title", content: "Real-Life Scam Story — Sahayak" },
      { property: "og:description", content: "Spot the warning signs before it happens to you." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const { storyId } = useParams({ from: "/safe/$storyId" });
  const { state, t, toggleFavorite, isFavorite, completeStory, trackRecent } = useApp();
  const story = getStory(storyId);

  useEffect(() => {
    if (story) {
      trackRecent({ id: story.id, kind: "story", title: pick(story.title, state.lang) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyId]);

  if (!story) {
    return (
      <div className="space-y-4">
        <PageHeader title={t("noResults")} emoji="🔎" />
        <Link to="/safe" className="text-lg font-semibold text-primary underline">
          {t("staySafe")}
        </Link>
      </div>
    );
  }

  const title = pick(story.title, state.lang);
  const summary = pick(story.summary, state.lang);
  const body = pick(story.story, state.lang);
  const warningSigns = pickList(story.warningSigns, state.lang);
  const whatWentWrong = pick(story.whatWentWrong, state.lang);
  const shouldHaveDone = pickList(story.shouldHaveDone, state.lang);
  const whatToDoIfHappened = pickList(story.whatToDoIfHappened, state.lang);
  const keyLesson = pick(story.keyLesson, state.lang);

  const quiz = story.quizId ? QUIZZES.find((q) => q.id === story.quizId) : undefined;

  const readAloud = `${title}. ${body}. ${t("warningSigns")}: ${warningSigns.join(". ")}. ${t("keyLesson")}: ${keyLesson}`;

  const completed = (state.completedStories ?? []).includes(story.id);
  // Next unread story in progress order (difficulty-ordered), excluding this one
  const nextStory = storyTrack(state).ordered.find(
    (s) => s.id !== story.id && !(state.completedStories ?? []).includes(s.id),
  );

  return (
    <div className="space-y-8">
      <Link
        to="/safe"
        className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary"
      >
        <ArrowLeft aria-hidden="true" /> {t("back")} {t("staySafe")}
      </Link>

      <PageHeader title={title} subtitle={summary} emoji="📕" />

      {/* Story Narrative */}
      <LargeCard>
        <p className="text-xl leading-relaxed">{body}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <ListenButton text={readAloud} audioKey={story.id} />
          <ElderButton
            variant={isFavorite(story.id) ? "secondary" : "outline"}
            onClick={() => toggleFavorite(story.id)}
            aria-pressed={isFavorite(story.id)}
          >
            <AnimatedHeart active={isFavorite(story.id)} />{" "}
            {isFavorite(story.id) ? t("savedLabel") : t("save")}
          </ElderButton>
        </div>
      </LargeCard>

      {/* Optional video, shown after the story text */}
      {story.video ? (
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
            <VideoCard videoIds={[story.video]} title={title} />
          </LargeCard>
        </section>
      ) : null}

      {/* Warning Signs */}
      <section>
        <SectionHeader title={t("warningSigns")} emoji="🚩" />
        <ul className="space-y-2">
          {warningSigns.map((w, i) => (
            <li key={i} className="card-surface p-4 text-lg flex items-start gap-3">
              <span className="text-xl shrink-0" aria-hidden="true">
                🚩
              </span>
              <span className="leading-relaxed">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What Went Wrong */}
      <section>
        <SectionHeader title={t("whatWentWrong")} emoji="❗" />
        <LargeCard className="bg-destructive-soft border-2 border-destructive">
          <p className="text-lg leading-relaxed text-foreground">{whatWentWrong}</p>
        </LargeCard>
      </section>

      {/* What The Person Should Have Done */}
      <section>
        <SectionHeader title={t("whatToDo")} emoji="✅" />
        <ol className="list-decimal space-y-2 pl-6 text-lg leading-relaxed">
          {shouldHaveDone.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      {/* What To Do If It Already Happened To You (Requirement 4) */}
      {whatToDoIfHappened.length > 0 ? (
        <section>
          <SectionHeader title={t("whatToDoIfHappened")} emoji="🚨" />
          <LargeCard className="bg-warning-soft border-2 border-warning space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <ShieldAlert className="size-6 text-warning shrink-0" aria-hidden="true" />
              <p className="text-lg font-bold text-foreground">{t("quickEmergencySteps")}:</p>
            </div>
            <ol className="list-decimal space-y-2 pl-6 text-lg leading-relaxed">
              {whatToDoIfHappened.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </LargeCard>
        </section>
      ) : null}

      {/* Key Lesson */}
      <section>
        <SectionHeader title={t("keyLesson")} emoji="🌟" />
        <LargeCard className="bg-primary-soft border-2 border-primary">
          <p className="text-xl font-bold leading-relaxed text-primary">🌟 {keyLesson}</p>
        </LargeCard>
      </section>

      {/* Progress: mark read and move to the next story */}
      {!completed ? (
        nextStory ? (
          <Link
            to="/safe/$storyId"
            params={{ storyId: nextStory.id }}
            onClick={() => completeStory(story.id)}
            className="flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-6 text-lg font-semibold text-primary-foreground hover:brightness-110"
          >
            ✓ {t("markAsRead")}
          </Link>
        ) : (
          <ElderButton onClick={() => completeStory(story.id)} size="xl">
            ✓ {t("markAsRead")}
          </ElderButton>
        )
      ) : nextStory ? (
        <Link
          to="/safe/$storyId"
          params={{ storyId: nextStory.id }}
          className="card-surface flex items-center gap-4 border-2 border-destructive/40 p-5 transition-shadow hover:shadow-lift"
        >
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-bold uppercase tracking-wider text-destructive">
              {t("nextStory")}
            </span>
            <span className="mt-0.5 block text-xl font-bold">
              {pick(nextStory.title, state.lang)}
            </span>
          </span>
          <span className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-destructive px-5 text-base font-semibold text-destructive-foreground">
            {t("readStory")}
          </span>
        </Link>
      ) : null}

      {/* Optional quiz, final section */}
      {quiz ? (
        <section>
          <h2 className="mb-3 text-2xl font-bold">✏️ {t("quickQuiz")}</h2>
          <QuizPanel key={quiz.id} quizId={quiz.id} title={pick(quiz.title, state.lang)} />
        </section>
      ) : null}
    </div>
  );
}
