import { Link, createFileRoute } from "@tanstack/react-router";
import { ElderLink, EmptyState, PageHeader, SectionHeader } from "@/components/elder";
import { useApp } from "@/lib/store";
import { pick } from "@/lib/i18n";
import { getLesson } from "@/data/lessons";
import { getStory } from "@/data/scams";

export const Route = createFileRoute("/saved")({
  head: () => ({
    meta: [
      { title: "My Saved Items — Sahayak" },
      {
        name: "description",
        content: "The lessons and scam stories you saved, kept privately on your own device.",
      },
      { property: "og:title", content: "My Saved Items — Sahayak" },
      { property: "og:description", content: "Everything you saved, in one simple place." },
    ],
  }),
  component: SavedPage,
});

function SavedPage() {
  const { state, t } = useApp();
  const lessons = state.favorites.map(getLesson).filter(Boolean);
  const stories = state.favorites.map(getStory).filter(Boolean);

  return (
    <div className="space-y-8">
      <PageHeader title={t("mySaved")} emoji="❤️" />

      {lessons.length === 0 && stories.length === 0 ? (
        <EmptyState
          emoji="📭"
          title={t("emptySaved")}
          hint={t("emptySavedHint")}
          action={<ElderLink to="/learn">{t("exploreLessons")}</ElderLink>}
        />
      ) : null}

      {lessons.length > 0 ? (
        <section>
          <SectionHeader title={t("learn")} emoji="📚" />
          <div className="grid gap-3 md:grid-cols-2">
            {lessons.map((l) => (
              <Link
                key={l!.id}
                to="/learn/$lessonId"
                params={{ lessonId: l!.id }}
                className="card-surface block p-4"
              >
                <p className="text-xl font-bold">{pick(l!.title, state.lang)}</p>
                <p className="text-base text-muted-foreground">{pick(l!.description, state.lang)}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {stories.length > 0 ? (
        <section>
          <SectionHeader title={t("scamStories")} emoji="📕" />
          <div className="grid gap-3 md:grid-cols-2">
            {stories.map((s) => (
              <Link
                key={s!.id}
                to="/safe/$storyId"
                params={{ storyId: s!.id }}
                className="card-surface block p-4"
              >
                <p className="text-xl font-bold">{pick(s!.title, state.lang)}</p>
                <p className="text-base text-muted-foreground">{pick(s!.summary, state.lang)}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
