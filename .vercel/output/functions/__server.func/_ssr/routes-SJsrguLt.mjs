import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Shield, l as Sparkles } from "../_libs/lucide-react.mjs";
import { S as useApp, _ as LargeCard, b as SectionHeader, f as Chip, m as ElderLink, w as pick, y as ProgressCard } from "./router-Pl2TF-rv.mjs";
import { s as lessonVideoId } from "./scams-DamAVN7M.mjs";
import { i as storyTrack, r as lessonTrack } from "./progress-BBB9_efP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SJsrguLt.js
var import_jsx_runtime = require_jsx_runtime();
var LEVELS = [
	{
		id: "beginner",
		labelKey: "beginner",
		emoji: "🌱"
	},
	{
		id: "comfortable",
		labelKey: "comfortable",
		emoji: "🙂"
	},
	{
		id: "confident",
		labelKey: "confident",
		emoji: "🚀"
	}
];
function HomePage() {
	const { state, t, update } = useApp();
	const hour = (/* @__PURE__ */ new Date()).getHours();
	const greeting = hour < 12 ? t("goodMorning") : hour < 17 ? t("goodAfternoon") : t("goodEvening");
	const lessons = lessonTrack(state);
	const stories = storyTrack(state);
	const currentLesson = lessons.current;
	const recommendedLesson = lessons.next ?? lessons.current;
	const recommendedStory = stories.current;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl font-bold md:text-4xl",
				children: [
					greeting,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "👋"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xl text-muted-foreground",
				children: t("howCanHelp")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: t("yourProgress"),
					emoji: "🌱"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, {
						label: t("lessonsProgress"),
						value: lessons.done,
						total: lessons.total
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, {
						label: t("storiesProgress"),
						value: stories.done,
						total: stories.total,
						tone: "success"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-lg text-muted-foreground",
					children: [
						lessons.percent,
						"% ",
						t("percentDone"),
						" — ",
						t("keepGoing")
					]
				})
			] }),
			currentLesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("continueLearning"),
				emoji: "📖"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-bold",
					children: pick(currentLesson.title, state.lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base text-muted-foreground line-clamp-2",
					children: pick(currentLesson.description, state.lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/learn/$lessonId",
						params: { lessonId: currentLesson.id },
						className: "inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-6 text-lg font-semibold text-primary-foreground",
						children: t("continueBtn")
					})
				})
			] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("continueLearning"),
				emoji: "📖"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg",
				children: t("startWithSimpleLesson")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderLink, {
					to: "/learn",
					children: t("exploreLessons")
				})
			})] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("recommendedForYou"),
				emoji: "✨"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
				className: "space-y-5 border-2 border-primary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							"aria-hidden": "true",
							children: LEVELS.find((l) => l.id === state.skillLevel)?.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold",
							children: t(state.skillLevel)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						role: "group",
						"aria-label": t("changeLevel"),
						children: LEVELS.map((lvl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => update({ skillLevel: lvl.id }),
							"aria-pressed": state.skillLevel === lvl.id,
							className: `min-h-11 rounded-xl border-2 px-3 text-base font-semibold transition-colors ${state.skillLevel === lvl.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-hidden": "true",
								children: [lvl.emoji, " "]
							}), t(lvl.labelKey)]
						}, lvl.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [recommendedLesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 border-border bg-background p-4 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "size-5 text-primary shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold uppercase tracking-wider text-primary",
									children: t("nextUp")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: pick(recommendedLesson.title, state.lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-base text-muted-foreground line-clamp-2",
								children: pick(recommendedLesson.description, state.lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { children: [
									"⏱ ",
									recommendedLesson.estimatedTime,
									" min"
								] }), lessonVideoId(recommendedLesson, state.lang) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
									tone: "accent",
									children: ["▶️ ", t("videoIncluded")]
								}) : null]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn/$lessonId",
								params: { lessonId: recommendedLesson.id },
								className: "inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground hover:brightness-110",
								children: t("start")
							})
						})]
					}) : null, recommendedStory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 border-border bg-background p-4 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									className: "size-5 text-destructive shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold uppercase tracking-wider text-destructive",
									children: t("suggestedSafety")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: pick(recommendedStory.title, state.lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-base text-muted-foreground line-clamp-2",
								children: pick(recommendedStory.summary, state.lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "danger",
									children: t("scam")
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/safe/$storyId",
								params: { storyId: recommendedStory.id },
								className: "inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-border bg-card px-5 text-base font-semibold hover:bg-muted",
								children: t("learnMore")
							})
						})]
					}) : null]
				})]
			})] })
		]
	});
}
//#endregion
export { HomePage as component };
