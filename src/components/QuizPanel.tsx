import { useEffect, useReducer } from "react";
import { RotateCcw } from "lucide-react";
import { Chip, ElderButton, LargeCard } from "@/components/elder";
import { useApp } from "@/lib/store";
import { pick, pickList } from "@/lib/i18n";
import { QUIZ_QUESTIONS } from "@/data/content";

/* ------------------------------------------------------------------
 * Quiz state machine.
 *
 * Every transition (answer → reveal → next → finish) happens inside the
 * reducer, so the score is never derived from a stale closure. Progress
 * (index / picked / score / order) is language-independent and persists
 * in sessionStorage, so a refresh or route change resumes the attempt.
 * ------------------------------------------------------------------ */

type QuizStatus = "answering" | "answered" | "finished";

type QuizState = {
  status: QuizStatus;
  index: number;
  picked: number | null;
  score: number;
  /** position → index into the questions array; reshuffled only on "Try again" */
  order: number[];
};

type QuizAction =
  | { type: "PICK"; option: number }
  | { type: "NEXT" }
  | { type: "TRY_AGAIN" };

function shuffled(length: number): number[] {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i] as number;
    arr[i] = arr[j] as number;
    arr[j] = tmp;
  }
  return arr;
}

function freshState(length: number, shuffle: boolean): QuizState {
  return {
    status: "answering",
    index: 0,
    picked: null,
    score: 0,
    order: shuffle ? shuffled(length) : Array.from({ length }, (_, i) => i),
  };
}

function storageKey(quizId: string) {
  return `sahayak.quiz.${quizId}`;
}

/** Restore an in-progress attempt; anything malformed or finished is discarded. */
function loadProgress(quizId: string, length: number): QuizState | null {
  if (typeof window === "undefined" || length === 0) return null;
  try {
    const raw = sessionStorage.getItem(storageKey(quizId));
    if (!raw) return null;
    const p = JSON.parse(raw) as Partial<QuizState>;
    if (
      (p.status !== "answering" && p.status !== "answered") ||
      typeof p.index !== "number" ||
      typeof p.score !== "number" ||
      !Array.isArray(p.order) ||
      p.order.length !== length ||
      p.index < 0 ||
      p.index >= length
    ) {
      return null;
    }
    return {
      status: p.status,
      index: p.index,
      picked: typeof p.picked === "number" ? p.picked : null,
      score: p.score,
      order: p.order,
    };
  } catch {
    return null;
  }
}

export function QuizPanel({
  quizId,
  title,
  onBack,
  onStart,
}: {
  quizId: string;
  title: string;
  /** Optional back/continue button on the finish screen. */
  onBack?: () => void;
  /** Called once the user answers their first question (lesson page uses it
   *  to keep the quiz mounted even if completion is un-toggled). */
  onStart?: () => void;
}) {
  const { state, t, recordQuiz } = useApp();
  const questions = QUIZ_QUESTIONS.filter((q) => q.quizId === quizId);
  const total = questions.length;
  const best = state.quizScores[quizId];

  const [quiz, dispatch] = useReducer(
    (s: QuizState, action: QuizAction): QuizState => {
      switch (action.type) {
        case "PICK": {
          if (s.status !== "answering") return s;
          const idx = s.order[s.index];
          if (idx === undefined) return s;
          const q = questions[idx];
          if (!q) return s;
          return {
            ...s,
            status: "answered",
            picked: action.option,
            // Score is computed HERE — never from a stale closure.
            score: action.option === q.answer ? s.score + 1 : s.score,
          };
        }
        case "NEXT": {
          if (s.status !== "answered") return s;
          if (s.index >= total - 1) return { ...s, status: "finished" };
          return { ...s, status: "answering", index: s.index + 1, picked: null };
        }
        case "TRY_AGAIN":
          // Reshuffle QUESTION order only; option order must stay stable
          // because `answer` is an index into the options array.
          return freshState(total, true);
      }
    },
    undefined,
    () => loadProgress(quizId, total) ?? freshState(total, false),
  );

  // Persist the in-progress attempt; clear it on finish.
  useEffect(() => {
    if (typeof window === "undefined" || total === 0) return;
    try {
      if (quiz.status === "finished") sessionStorage.removeItem(storageKey(quizId));
      else sessionStorage.setItem(storageKey(quizId), JSON.stringify(quiz));
    } catch {
      /* storage unavailable — the quiz still works in memory */
    }
  }, [quiz, quizId, total]);

  // Friendly guard instead of a blank screen for an empty quiz.
  if (total === 0) {
    return (
      <LargeCard>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-3 text-lg text-muted-foreground">{t("quizNoQuestions")}</p>
      </LargeCard>
    );
  }

  /* ---------------- Finish screen ---------------- */
  if (quiz.status === "finished") {
    const bandKey =
      quiz.score === total ? "quizPerfect" : quiz.score / total >= 0.6 ? "quizGreat" : "quizFew";
    return (
      <LargeCard>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-3 text-2xl font-bold">
          🎉 {t("youGotScore")} {quiz.score} {t("ofWord")} {total} {t("correct")}
        </p>
        <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{t(bandKey)}</p>
        <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
          {t("scoreFeedback")}
        </p>
        {best ? (
          <p className="mt-2 text-lg font-semibold">
            {t("bestScore")}: {best.best}/{best.total}
          </p>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-3">
          <ElderButton onClick={() => dispatch({ type: "TRY_AGAIN" })}>
            <RotateCcw aria-hidden="true" /> {t("tryAgain")}
          </ElderButton>
          {onBack ? (
            <ElderButton variant="outline" onClick={onBack}>
              {t("back")}
            </ElderButton>
          ) : null}
        </div>
      </LargeCard>
    );
  }

  /* ---------------- Question screen ---------------- */
  const qIdx = quiz.order[quiz.index];
  const q = qIdx === undefined ? undefined : questions[qIdx];
  if (!q) {
    // Saved attempt no longer matches the questions: offer a clean restart.
    return (
      <LargeCard>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4">
          <ElderButton onClick={() => dispatch({ type: "TRY_AGAIN" })}>
            <RotateCcw aria-hidden="true" /> {t("tryAgain")}
          </ElderButton>
        </div>
      </LargeCard>
    );
  }
  const options = pickList(q.options, state.lang);
  const explanation = pick(q.explanation, state.lang);
  const answered = quiz.status === "answered";
  const progressPct = Math.round(((quiz.index + (answered ? 1 : 0)) / total) * 100);

  const answer = (i: number) => {
    if (quiz.status !== "answering") return;
    onStart?.();
    dispatch({ type: "PICK", option: i });
  };

  const next = () => {
    // On the last question `quiz.score` is already final (computed in the
    // reducer), so record it exactly once here before finishing.
    if (quiz.index === total - 1) recordQuiz(quizId, quiz.score, total);
    dispatch({ type: "NEXT" });
  };

  return (
    <LargeCard>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        {best ? (
          <Chip tone="success">
            {t("bestScore")}: {best.best}/{best.total}
          </Chip>
        ) : null}
      </div>
      <p className="mt-1 text-sm font-semibold text-muted-foreground">
        {t("questionOf")} {quiz.index + 1} {t("ofWord")} {total}
      </p>
      {/* Visible progress bar */}
      <div
        className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={progressPct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={title}
      >
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <p className="mt-3 text-xl font-bold leading-relaxed">{pick(q.question, state.lang)}</p>
      <div className="mt-4 grid gap-3">
        {options.map((opt, i) => {
          const isAnswer = i === q.answer;
          const chosen = quiz.picked === i;
          return (
            <button
              key={i}
              onClick={() => answer(i)}
              disabled={answered}
              className={`min-h-14 rounded-xl border-2 px-4 py-3 text-left text-lg font-medium transition-colors ${
                answered && isAnswer
                  ? "border-success bg-success-soft font-bold text-success"
                  : answered && chosen
                    ? "border-destructive bg-destructive-soft font-bold text-destructive"
                    : "border-border bg-card hover:bg-muted"
              }`}
            >
              {answered && isAnswer ? "✓ " : answered && chosen ? "✗ " : ""}
              {opt}
            </button>
          );
        })}
      </div>
      {/* Reveal: correct/incorrect + explanation + Next. Nothing else changes. */}
      {answered ? (
        <div className="mt-4 space-y-3" role="status">
          <p className="text-lg font-bold">
            {quiz.picked === q.answer ? `🎉 ${t("correct")}` : t("notQuite")}
          </p>
          {explanation ? (
            <p className="rounded-xl bg-muted/50 p-3 text-base leading-relaxed text-muted-foreground">
              💡 {explanation}
            </p>
          ) : null}
          <ElderButton onClick={next}>
            {quiz.index === total - 1 ? t("finish") : t("next")}
          </ElderButton>
        </div>
      ) : null}
    </LargeCard>
  );
}