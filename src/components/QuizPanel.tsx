import { useState } from "react";
import { Chip, ElderButton, LargeCard } from "@/components/elder";
import { useApp } from "@/lib/store";
import { pick, pickList } from "@/lib/i18n";
import { QUIZ_QUESTIONS } from "@/data/content";

export function QuizPanel({ quizId, title }: { quizId: string; title: string }) {
  const { state, t, recordQuiz } = useApp();
  const questions = QUIZ_QUESTIONS.filter((q) => q.quizId === quizId);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const best = state.quizScores[quizId];
  const q = questions[index];

  if (!q) return null;

  const options = pickList(q.options, state.lang);
  const explanation = pick(q.explanation, state.lang);

  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    const last = index === questions.length - 1;
    if (last) {
      recordQuiz(quizId, score, questions.length);
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <LargeCard>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-3 text-2xl font-bold">
          🎉 {t("youGotScore")} {score} {t("ofWord")} {questions.length} {t("correct")}
        </p>
        <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
          {t("scoreFeedback")}
        </p>
        <div className="mt-4">
          <ElderButton onClick={restart}>{t("tryAgain")}</ElderButton>
        </div>
      </LargeCard>
    );
  }

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
        {t("questionOf")} {index + 1} {t("ofWord")} {questions.length}
      </p>
      <p className="mt-3 text-xl font-bold leading-relaxed">{pick(q.question, state.lang)}</p>
      <div className="mt-4 grid gap-3">
        {options.map((opt, i) => {
          const isAnswer = i === q.answer;
          const chosen = picked === i;
          const show = picked !== null;
          return (
            <button
              key={opt}
              onClick={() => answer(i)}
              disabled={show}
              className={`min-h-14 rounded-xl border-2 px-4 py-3 text-left text-lg font-medium transition-colors ${
                show && isAnswer
                  ? "border-success bg-success-soft font-bold text-success"
                  : show && chosen
                    ? "border-destructive bg-destructive-soft font-bold text-destructive"
                    : "border-border bg-card hover:bg-muted"
              }`}
            >
              {show && isAnswer ? "✓ " : show && chosen ? "✗ " : ""}
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <div className="mt-4 space-y-3" role="status">
          <p className="text-lg font-bold">
            {picked === q.answer ? `🎉 ${t("correct")}` : t("notQuite")}
          </p>
          {explanation ? (
            <p className="text-base text-muted-foreground leading-relaxed bg-muted/50 p-3 rounded-xl">
              💡 {explanation}
            </p>
          ) : null}
          <ElderButton onClick={next}>
            {index === questions.length - 1 ? t("finish") : t("next")}
          </ElderButton>
        </div>
      ) : null}
    </LargeCard>
  );
}
