import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { EmptyState, PageHeader, SectionHeader } from "@/components/elder";
import { useApp } from "@/lib/store";
import { pick } from "@/lib/i18n";
import { LESSONS } from "@/data/lessons";
import { SCAM_STORIES } from "@/data/scams";
import { DICTIONARY } from "@/data/content";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — Sahayak" },
      {
        name: "description",
        content: "Search lessons, scam stories and the digital dictionary in simple language.",
      },
      { property: "og:title", content: "Search — Sahayak" },
      { property: "og:description", content: "Find a lesson, a scam story or a word you don't know." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { state, t } = useApp();
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();

  const lessons = needle
    ? LESSONS.filter(
        (l) =>
          pick(l.title, state.lang).toLowerCase().includes(needle) ||
          l.title.en.toLowerCase().includes(needle) ||
          pick(l.description, state.lang).toLowerCase().includes(needle) ||
          l.description.en.toLowerCase().includes(needle),
      )
    : [];

  const stories = needle
    ? SCAM_STORIES.filter(
        (s) =>
          pick(s.title, state.lang).toLowerCase().includes(needle) ||
          s.title.en.toLowerCase().includes(needle) ||
          pick(s.summary, state.lang).toLowerCase().includes(needle) ||
          s.summary.en.toLowerCase().includes(needle),
      )
    : [];

  const terms = needle
    ? DICTIONARY.filter(
        (d) =>
          d.term.toLowerCase().includes(needle) ||
          (d.full ?? "").toLowerCase().includes(needle) ||
          pick(d.meaning, state.lang).toLowerCase().includes(needle) ||
          d.meaning.en.toLowerCase().includes(needle),
      )
    : [];

  const total = lessons.length + stories.length + terms.length;

  return (
    <div className="space-y-8">
      <PageHeader
        title={t("search")}
        subtitle={t("searchPromptSub")}
        emoji="🔎"
      />

      <label className="flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-4 shadow-card">
        <SearchIcon aria-hidden="true" className="text-muted-foreground size-6 shrink-0" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("searchWordPlaceholder")}
          aria-label={t("search")}
          className="min-h-16 w-full bg-transparent text-xl outline-none"
        />
        {q ? (
          <button
            onClick={() => setQ("")}
            className="min-h-11 rounded-lg px-3 text-base font-semibold text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        ) : null}
      </label>

      {needle && total === 0 ? (
        <EmptyState
          emoji="🔍"
          title={t("noResults")}
          hint={t("trySimplerSearch")}
        />
      ) : null}

      {lessons.length > 0 ? (
        <section>
          <SectionHeader title={t("learn")} emoji="📚" />
          <div className="grid gap-3 md:grid-cols-2">
            {lessons.map((l) => (
              <Link
                key={l.id}
                to="/learn/$lessonId"
                params={{ lessonId: l.id }}
                className="card-surface block p-4 hover:shadow-lift"
              >
                <p className="text-xl font-bold">{pick(l.title, state.lang)}</p>
                <p className="text-base text-muted-foreground line-clamp-2">
                  {pick(l.description, state.lang)}
                </p>
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
                key={s.id}
                to="/safe/$storyId"
                params={{ storyId: s.id }}
                className="card-surface block p-4 hover:shadow-lift"
              >
                <p className="text-xl font-bold">{pick(s.title, state.lang)}</p>
                <p className="text-base text-muted-foreground line-clamp-2">
                  {pick(s.summary, state.lang)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {terms.length > 0 ? (
        <section>
          <SectionHeader title={t("dictionary")} emoji="📖" />
          <div className="grid gap-3 md:grid-cols-2">
            {terms.map((d) => (
              <Link
                key={d.id}
                to="/dictionary"
                className="card-surface block p-4 hover:shadow-lift"
              >
                <p className="text-xl font-bold">
                  {d.term}
                  {d.full ? <span className="text-base font-normal"> ({d.full})</span> : null}
                </p>
                <p className="mt-1 text-lg text-foreground">{pick(d.meaning, state.lang)}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
