import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { L as ArrowLeft, O as ClipboardCheck, f as ShieldCheck, k as CircleQuestionMark, o as Type } from "../_libs/lucide-react.mjs";
import { S as useApp, _ as LargeCard, c as SAFETY_QUESTIONS, d as WORD_PUZZLES, f as Chip, l as SCENARIOS, o as QUIZZES, p as ElderButton, v as PageHeader, w as pick } from "./router-Pl2TF-rv.mjs";
import { t as QuizPanel } from "./QuizPanel-KO-GPK37.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/games-DM1z7T4c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScamOrSafe() {
	const { state, t, recordGame } = useApp();
	const [i, setI] = (0, import_react.useState)(0);
	const [answer, setAnswer] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const s = SCENARIOS[i];
	const last = i === SCENARIOS.length - 1;
	const correct = answer !== null && answer === s.isScam;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-lg font-semibold",
			children: [
				t("score"),
				": ",
				score,
				" / ",
				SCENARIOS.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xl leading-relaxed",
			children: pick(s.text, state.lang)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
				variant: "danger",
				onClick: () => {
					if (answer !== null) return;
					setAnswer(true);
					if (s.isScam) setScore((v) => v + 1);
				},
				children: t("scam")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
				variant: "secondary",
				onClick: () => {
					if (answer !== null) return;
					setAnswer(false);
					if (!s.isScam) setScore((v) => v + 1);
				},
				children: t("safe")
			})]
		}),
		answer !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-xl font-bold ${correct ? "text-success" : "text-destructive"}`,
					children: correct ? t("correct") : t("notQuite")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-muted-foreground",
					children: pick(s.explanation, state.lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
					onClick: () => {
						if (last) {
							recordGame("scamOrSafe", score);
							setI(0);
							setScore(0);
						} else setI(i + 1);
						setAnswer(null);
					},
					children: last ? t("finish") : t("next")
				})
			]
		}) : null
	] });
}
function WordPuzzle() {
	const { state, t, recordGame } = useApp();
	const [i, setI] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const q = WORD_PUZZLES[i];
	const last = i === WORD_PUZZLES.length - 1;
	const choose = (n) => {
		if (picked !== null) return;
		setPicked(n);
		if (n === q.answer) setScore((s) => s + 1);
	};
	const next = () => {
		if (last) {
			recordGame("word", score);
			setI(0);
			setScore(0);
		} else setI(i + 1);
		setPicked(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-lg font-semibold",
			children: [
				t("score"),
				": ",
				score,
				" / ",
				WORD_PUZZLES.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xl font-bold leading-relaxed",
			children: pick(q.q, state.lang)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3",
			children: q.options.map((o, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
				variant: picked === null ? "outline" : n === q.answer ? "primary" : n === picked ? "danger" : "outline",
				onClick: () => choose(n),
				children: o
			}, o))
		}),
		picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
				onClick: next,
				children: last ? t("finish") : t("next")
			})
		}) : null
	] });
}
function QuizChallenge() {
	const { state, t } = useApp();
	const [quizId, setQuizId] = (0, import_react.useState)(null);
	if (!quizId) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-xl font-bold",
		children: t("chooseQuiz")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 grid gap-3",
		children: QUIZZES.map((q) => {
			const best = state.quizScores[q.id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setQuizId(q.id),
				className: "flex min-h-14 items-center justify-between gap-3 rounded-xl border-2 border-border bg-background px-4 text-left text-lg font-semibold hover:bg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pick(q.title, state.lang) }), best ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
					tone: "success",
					children: [
						best.best,
						"/",
						best.total
					]
				}) : null]
			}, q.id);
		})
	})] });
	const quiz = QUIZZES.find((q) => q.id === quizId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setQuizId(null),
			className: "inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }),
				" ",
				t("chooseQuiz")
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPanel, {
			quizId: quiz.id,
			title: pick(quiz.title, state.lang)
		})]
	});
}
function SafetyCheckGame() {
	const { state, t, recordGame } = useApp();
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [finished, setFinished] = (0, import_react.useState)(false);
	const total = SAFETY_QUESTIONS.length;
	const answered = Object.keys(answers).length;
	const yesCount = Object.values(answers).filter(Boolean).length;
	if (finished) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "text-2xl font-bold",
			children: [
				yesCount === total ? "🎉" : "💪",
				" ",
				t("safetyCheckGame")
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-xl leading-relaxed",
			children: [
				t("score"),
				": ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: yesCount }),
				" / ",
				total
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-lg text-muted-foreground leading-relaxed",
			children: t("scoreFeedback")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
				onClick: () => {
					setAnswers({});
					setFinished(false);
				},
				children: t("playAgain")
			})
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-lg font-semibold",
			children: [
				t("questionOf"),
				" ",
				answered + 1,
				" ",
				t("ofWord"),
				" ",
				total
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-3",
			children: SAFETY_QUESTIONS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border-2 border-border bg-background p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold leading-relaxed",
					children: pick(q.q, state.lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setAnswers((a) => ({
							...a,
							[q.id]: true
						})),
						"aria-pressed": answers[q.id] === true,
						className: `min-h-12 rounded-xl border-2 px-6 text-lg font-bold transition-colors ${answers[q.id] === true ? "border-success bg-success text-success-foreground" : "border-border bg-card hover:bg-muted"}`,
						children: ["✓ ", t("yesWord")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setAnswers((a) => ({
							...a,
							[q.id]: false
						})),
						"aria-pressed": answers[q.id] === false,
						className: `min-h-12 rounded-xl border-2 px-6 text-lg font-bold transition-colors ${answers[q.id] === false ? "border-destructive bg-destructive text-destructive-foreground" : "border-border bg-card hover:bg-muted"}`,
						children: ["✗ ", t("noWord")]
					})]
				})]
			}, q.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
				onClick: () => {
					recordGame("safetyCheck", yesCount);
					setFinished(true);
				},
				disabled: answered < total,
				fullWidth: true,
				children: t("finish")
			})
		})
	] });
}
function GamesPage() {
	const { state, t } = useApp();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const games = [
		{
			id: "scamOrSafe",
			emoji: "🛡️",
			titleKey: "scamOrSafe",
			descKey: "scamOrSafeDesc",
			Icon: ShieldCheck
		},
		{
			id: "word",
			emoji: "📝",
			titleKey: "digitalWordQuiz",
			descKey: "wordQuizDesc",
			Icon: Type
		},
		{
			id: "quiz",
			emoji: "❓",
			titleKey: "quizChallenge",
			descKey: "quizChallengeDesc",
			Icon: CircleQuestionMark
		},
		{
			id: "safetyCheck",
			emoji: "✅",
			titleKey: "safetyCheckGame",
			descKey: "safetyCheckDesc",
			Icon: ClipboardCheck
		}
	];
	const bestOf = (id) => state.gameScores[id]?.best ?? 0;
	if (selected) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setSelected(null),
				className: "inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }),
					" ",
					t("backToGames")
				]
			}),
			selected === "scamOrSafe" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScamOrSafe, {}) : null,
			selected === "word" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordPuzzle, {}) : null,
			selected === "quiz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizChallenge, {}) : null,
			selected === "safetyCheck" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyCheckGame, {}) : null
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("gamesTitle"),
			subtitle: t("gamesSubtitle"),
			emoji: "🎮"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grid gap-4 sm:grid-cols-2",
			children: games.map(({ id, emoji, titleKey, descKey }) => {
				const best = bestOf(id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSelected(id),
					className: "card-surface flex flex-col justify-between gap-4 p-5 text-left transition-shadow hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-3xl",
								"aria-hidden": "true",
								children: emoji
							}), best ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
								tone: "success",
								children: [
									t("bestScore"),
									": ",
									best
								]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: t(titleKey)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-base text-muted-foreground leading-relaxed",
							children: t(descKey)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 text-lg font-semibold text-primary-foreground",
							children: t("start")
						})
					]
				}, id);
			})
		})]
	});
}
//#endregion
export { GamesPage as component };
