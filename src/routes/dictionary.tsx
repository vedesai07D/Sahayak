import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Chip, EmptyState, PageHeader } from "@/components/elder";
import { ListenButton } from "@/components/ListenButton";
import { useApp } from "@/lib/store";
import { pick } from "@/lib/i18n";
import { DICTIONARY } from "@/data/content";

export const Route = createFileRoute("/dictionary")({
  head: () => ({
    meta: [
      { title: "Digital Dictionary — Sahayak" },
      {
        name: "description",
        content:
          "Simple meanings of everyday technology and internet words: OTP, UPI, Wi-Fi, QR code, PIN and phishing.",
      },
      { property: "og:title", content: "Digital Dictionary — Sahayak" },
      {
        property: "og:description",
        content: "Understand digital words with simple definitions and voice playback.",
      },
    ],
  }),
  component: DictionaryPage,
});

// Derived from the data so new categories appear automatically
const CATEGORIES = [
  "All",
  ...Array.from(new Set(DICTIONARY.map((w) => w.category).filter((c): c is string => Boolean(c)))),
];

function DictionaryPage() {
  const { state, t } = useApp();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const q = query.trim().toLowerCase();

  const filteredTerms = DICTIONARY.filter((term) => {
    const matchesCategory = activeCategory === "All" || term.category === activeCategory;
    if (!matchesCategory) return false;
    if (!q) return true;

    const termText = term.term.toLowerCase();
    const fullText = (term.full ?? "").toLowerCase();
    const meaningText = pick(term.meaning, state.lang).toLowerCase();
    const tipText = pick(term.tip, state.lang).toLowerCase();

    return (
      termText.includes(q) ||
      fullText.includes(q) ||
      meaningText.includes(q) ||
      tipText.includes(q)
    );
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title={t("dictionary")}
        subtitle={t("dictionarySubtitle")}
        emoji="📖"
      />

      {/* Search Bar */}
      <label className="flex min-w-0 items-center gap-3 rounded-2xl border-2 border-border bg-card px-4 shadow-card">
        <Search aria-hidden="true" className="size-6 text-muted-foreground shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchDictionary")}
          aria-label={t("searchDictionary")}
          className="min-h-16 w-full min-w-0 max-w-full bg-transparent text-xl outline-none"
        />
        {query ? (
          <button
            onClick={() => setQuery("")}
            className="min-h-11 rounded-lg px-3 text-base font-semibold text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        ) : null}
      </label>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Dictionary Categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`min-h-12 rounded-xl border-2 px-4 text-base font-semibold transition-colors ${
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-muted"
            }`}
          >
            {cat === "All" ? t("allWords") : cat}
          </button>
        ))}
      </div>

      {/* Word Count */}
      <p className="text-base text-muted-foreground">
        {filteredTerms.length} {t("wordsCount")}
      </p>

      {/* Empty State */}
      {filteredTerms.length === 0 ? (
        <EmptyState
          emoji="🔍"
          title={t("noResults")}
          hint={t("trySimplerSearch")}
        />
      ) : null}

      {/* Words Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredTerms.map((item) => {
          const meaning = pick(item.meaning, state.lang);
          const tip = pick(item.tip, state.lang);
          const speechText = `${item.term}. ${item.full ? item.full + ". " : ""}${meaning}. ${
            tip ? t("dictionaryTip") + ": " + tip : ""
          }`;

          return (
            <article key={item.id} className="card-surface flex flex-col justify-between gap-4 p-5">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {item.term}
                    </h2>
                    {item.full ? (
                      <p className="text-base font-medium text-primary">
                        ({item.full})
                      </p>
                    ) : null}
                  </div>
                  {item.category ? (
                    <Chip tone="primary">{item.category}</Chip>
                  ) : null}
                </div>

                <p className="mt-3 text-lg leading-relaxed text-foreground">
                  {meaning}
                </p>

                {tip ? (
                  <div className="mt-3 rounded-xl bg-warning-soft border border-warning p-3">
                    <p className="text-base leading-relaxed text-foreground">
                      💡 <strong>{t("dictionaryTip")}:</strong> {tip}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="pt-2">
                <ListenButton text={speechText} label={t("listen")} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
