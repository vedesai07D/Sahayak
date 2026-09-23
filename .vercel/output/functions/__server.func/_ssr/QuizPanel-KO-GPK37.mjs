import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as useApp, T as pickList, _ as LargeCard, f as Chip, p as ElderButton, s as QUIZ_QUESTIONS, w as pick } from "./router-Pl2TF-rv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuizPanel-KO-GPK37.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuizPanel({ quizId, title }) {
	const { state, t, recordQuiz } = useApp();
	const questions = QUIZ_QUESTIONS.filter((q) => q.quizId === quizId);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const best = state.quizScores[quizId];
	const q = questions[index];
	if (!q) return null;
	const options = pickList(q.options, state.lang);
	const explanation = pick(q.explanation, state.lang);
	const answer = (i) => {
		if (picked !== null) return;
		setPicked(i);
		if (i === q.answer) setScore((s) => s + 1);
	};
	const next = () => {
		if (index === questions.length - 1) {
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
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-xl font-bold",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-2xl font-bold",
			children: [
				"🎉 ",
				t("youGotScore"),
				" ",
				score,
				" ",
				t("ofWord"),
				" ",
				questions.length,
				" ",
				t("correct")
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-lg text-muted-foreground leading-relaxed",
			children: t("scoreFeedback")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
				onClick: restart,
				children: t("tryAgain")
			})
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold",
				children: title
			}), best ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
				tone: "success",
				children: [
					t("bestScore"),
					": ",
					best.best,
					"/",
					best.total
				]
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm font-semibold text-muted-foreground",
			children: [
				t("questionOf"),
				" ",
				index + 1,
				" ",
				t("ofWord"),
				" ",
				questions.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xl font-bold leading-relaxed",
			children: pick(q.question, state.lang)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3",
			children: options.map((opt, i) => {
				const isAnswer = i === q.answer;
				const chosen = picked === i;
				const show = picked !== null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => answer(i),
					disabled: show,
					className: `min-h-14 rounded-xl border-2 px-4 py-3 text-left text-lg font-medium transition-colors ${show && isAnswer ? "border-success bg-success-soft font-bold text-success" : show && chosen ? "border-destructive bg-destructive-soft font-bold text-destructive" : "border-border bg-card hover:bg-muted"}`,
					children: [show && isAnswer ? "✓ " : show && chosen ? "✗ " : "", opt]
				}, opt);
			})
		}),
		picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-3",
			role: "status",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-bold",
					children: picked === q.answer ? `🎉 ${t("correct")}` : t("notQuite")
				}),
				explanation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base text-muted-foreground leading-relaxed bg-muted/50 p-3 rounded-xl",
					children: ["💡 ", explanation]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
					onClick: next,
					children: index === questions.length - 1 ? t("finish") : t("next")
				})
			]
		}) : null
	] });
}
//#endregion
export { QuizPanel as t };
