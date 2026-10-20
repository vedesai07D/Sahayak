import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ClipboardCheck, HelpCircle, ShieldCheck, Type } from "lucide-react";
import { Chip, ElderButton, LargeCard, PageHeader } from "@/components/elder";
import { QuizPanel } from "@/components/QuizPanel";
import { useApp } from "@/lib/store";
import { pick } from "@/lib/i18n";
import { QUIZZES, SAFETY_QUESTIONS, SCENARIOS, WORD_PUZZLES } from "@/data/content";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games & Brain Exercise — Sahayak" },
      {
        name: "description",
        content:
          "Digital-safety games for older adults: Scam or Safe, word quiz, quiz challenge and a safety check.",
      },
      { property: "og:title", content: "Games & Brain Exercise — Sahayak" },
      { property: "og:description", content: "Simple games for memory, thinking and safety." },
    ],
  }),
  component: GamesPage,
});

type GameId = "scamOrSafe" | "word" | "quiz" | "safetyCheck";

/* ---------------- Scam or Safe ---------------- */
function ScamOrSafe() {
  const { state, t, recordGame } = useApp();
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const s = SCENARIOS[i]!;
  const last = i === SCENARIOS.length - 1;
  const correct = answer !== null && answer === s.isScam;

  return (
    <LargeCard>
      <p className="text-lg font-semibold">
        {t("score")}: {score} / {SCENARIOS.length}
      </p>
      <p className="mt-3 text-xl leading-relaxed">{pick(s.text, state.lang)}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <ElderButton
          variant="danger"
          onClick={() => {
            if (answer !== null) return;
            setAnswer(true);
            if (s.isScam) setScore((v) => v + 1);
          }}
        >
          {t("scam")}
        </ElderButton>
        <ElderButton
          variant="secondary"
          onClick={() => {
            if (answer !== null) return;
            setAnswer(false);
            if (!s.isScam) setScore((v) => v + 1);
          }}
        >
          {t("safe")}
        </ElderButton>
      </div>
      {answer !== null ? (
        <div className="mt-4 space-y-3">
          <p className={`text-xl font-bold ${correct ? "text-success" : "text-destructive"}`}>
            {correct ? t("correct") : t("notQuite")}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {pick(s.explanation, state.lang)}
          </p>
          <ElderButton
            onClick={() => {
              if (last) {
                recordGame("scamOrSafe", score);
                setI(0);
                setScore(0);
              } else setI(i + 1);
              setAnswer(null);
            }}
          >
            {last ? t("finish") : t("next")}
          </ElderButton>
        </div>
      ) : null}
    </LargeCard>
  );
}

/* ---------------- Digital Word Quiz ---------------- */
function WordPuzzle() {
  const { state, t, recordGame } = useApp();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = WORD_PUZZLES[i]!;
  const last = i === WORD_PUZZLES.length - 1;

  const choose = (n: number) => {
    if (picked !== null) return;
    setPicked(n);
    if (n === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (last) {
      recordGame("word", score);
      setI(0);
      setScore(0);
    } else {
      setI(i + 1);
    }
    setPicked(null);
  };

  return (
    <LargeCard>
      <p className="text-lg font-semibold">
        {t("score")}: {score} / {WORD_PUZZLES.length}
      </p>
      <p className="mt-3 text-xl font-bold leading-relaxed">{pick(q.q, state.lang)}</p>
      <div className="mt-4 grid gap-3">
        {q.options.map((o, n) => (
          <ElderButton
            key={n}
            variant={
              picked === null ? "outline" : n === q.answer ? "primary" : n === picked ? "danger" : "outline"
            }
            onClick={() => choose(n)}
          >
            {o}
          </ElderButton>
        ))}
      </div>
      {picked !== null ? (
        <div className="mt-4">
          <ElderButton onClick={next}>{last ? t("finish") : t("next")}</ElderButton>
        </div>
      ) : null}
    </LargeCard>
  );
}

/* ---------------- Quiz Challenge ---------------- */
function QuizChallenge() {
  const { state, t } = useApp();
  const [quizId, setQuizId] = useState<string | null>(null);

  if (!quizId) {
    return (
      <LargeCard>
        <h3 className="text-xl font-bold">{t("chooseQuiz")}</h3>
        <div className="mt-4 grid gap-3">
          {QUIZZES.map((q) => {
            const best = state.quizScores[q.id];
            return (
              <button
                key={q.id}
                onClick={() => setQuizId(q.id)}
                className="flex min-h-14 items-center justify-between gap-3 rounded-xl border-2 border-border bg-background px-4 text-left text-lg font-semibold hover:bg-muted"
              >
                <span>{pick(q.title, state.lang)}</span>
                {best ? (
                  <Chip tone="success">
                    {best.best}/{best.total}
                  </Chip>
                ) : null}
              </button>
            );
          })}
        </div>
      </LargeCard>
    );
  }

  const quiz = QUIZZES.find((q) => q.id === quizId)!;
  return (
    <div className="space-y-3">
      <button
        onClick={() => setQuizId(null)}
        className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary"
      >
        <ArrowLeft aria-hidden="true" /> {t("chooseQuiz")}
      </button>
      {/* key keeps one stable panel instance per quiz; onBack returns to the list */}
      <QuizPanel
        key={quiz.id}
        quizId={quiz.id}
        title={pick(quiz.title, state.lang)}
        onBack={() => setQuizId(null)}
      />
    </div>
  );
}

/* ---------------- Safety Check Game ---------------- */
function SafetyCheckGame() {
  const { state, t, recordGame } = useApp();
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const total = SAFETY_QUESTIONS.length;
  const answered = Object.keys(answers).length;
  const yesCount = Object.values(answers).filter(Boolean).length;

  if (finished) {
    return (
      <LargeCard>
        <h3 className="text-2xl font-bold">
          {yesCount === total ? "🎉" : "💪"} {t("safetyCheckGame")}
        </h3>
        <p className="mt-3 text-xl leading-relaxed">
          {t("score")}: <strong>{yesCount}</strong> / {total}
        </p>
        <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
          {t("scoreFeedback")}
        </p>
        <div className="mt-4">
          <ElderButton onClick={() => { setAnswers({}); setFinished(false); }}>
            {t("playAgain")}
          </ElderButton>
        </div>
      </LargeCard>
    );
  }

  return (
    <LargeCard>
      <p className="text-lg font-semibold">
        {t("questionOf")} {answered + 1} {t("ofWord")} {total}
      </p>
      <ul className="mt-4 space-y-3">
        {SAFETY_QUESTIONS.map((q) => (
          <li key={q.id} className="rounded-xl border-2 border-border bg-background p-4">
            <p className="text-lg font-semibold leading-relaxed">{pick(q.q, state.lang)}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: true }))}
                aria-pressed={answers[q.id] === true}
                className={`min-h-12 rounded-xl border-2 px-6 text-lg font-bold transition-colors ${
                  answers[q.id] === true
                    ? "border-success bg-success text-success-foreground"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                ✓ {t("yesWord")}
              </button>
              <button
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: false }))}
                aria-pressed={answers[q.id] === false}
                className={`min-h-12 rounded-xl border-2 px-6 text-lg font-bold transition-colors ${
                  answers[q.id] === false
                    ? "border-destructive bg-destructive text-destructive-foreground"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                ✗ {t("noWord")}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <ElderButton
          onClick={() => {
            recordGame("safetyCheck", yesCount);
            setFinished(true);
          }}
          disabled={answered < total}
          fullWidth
        >
          {t("finish")}
        </ElderButton>
      </div>
    </LargeCard>
  );
}

/* ---------------- Games Grid ---------------- */
function GamesPage() {
  const { state, t } = useApp();
  const [selected, setSelected] = useState<GameId | null>(null);

  const games: { id: GameId; emoji: string; titleKey: string; descKey: string; Icon: typeof ShieldCheck }[] = [
    { id: "scamOrSafe", emoji: "🛡️", titleKey: "scamOrSafe", descKey: "scamOrSafeDesc", Icon: ShieldCheck },
    { id: "word", emoji: "📝", titleKey: "digitalWordQuiz", descKey: "wordQuizDesc", Icon: Type },
    { id: "quiz", emoji: "❓", titleKey: "quizChallenge", descKey: "quizChallengeDesc", Icon: HelpCircle },
    { id: "safetyCheck", emoji: "✅", titleKey: "safetyCheckGame", descKey: "safetyCheckDesc", Icon: ClipboardCheck },
  ];

  const bestOf = (id: GameId) => state.gameScores[id]?.best ?? 0;

  if (selected) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelected(null)}
          className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary"
        >
          <ArrowLeft aria-hidden="true" /> {t("backToGames")}
        </button>
        {selected === "scamOrSafe" ? <ScamOrSafe /> : null}
        {selected === "word" ? <WordPuzzle /> : null}
        {selected === "quiz" ? <QuizChallenge /> : null}
        {selected === "safetyCheck" ? <SafetyCheckGame /> : null}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader title={t("gamesTitle")} subtitle={t("gamesSubtitle")} emoji="🎮" />
      <section className="grid gap-4 sm:grid-cols-2">
        {games.map(({ id, emoji, titleKey, descKey }) => {
          const best = bestOf(id);
          return (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className="card-surface flex flex-col justify-between gap-4 p-5 text-left transition-shadow hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-3xl"
                  aria-hidden="true"
                >
                  {emoji}
                </span>
                {best ? <Chip tone="success">{t("bestScore")}: {best}</Chip> : null}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{t(titleKey)}</h2>
                <p className="mt-1 text-base text-muted-foreground leading-relaxed">
                  {t(descKey)}
                </p>
              </div>
              <span className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 text-lg font-semibold text-primary-foreground">
                {t("start")}
              </span>
            </button>
          );
        })}
      </section>
    </div>
  );
}