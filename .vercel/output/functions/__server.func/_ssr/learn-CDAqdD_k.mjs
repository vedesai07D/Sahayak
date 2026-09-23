import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CirclePlay, L as ArrowLeft, h as Search, l as Sparkles } from "../_libs/lucide-react.mjs";
import { S as useApp, _ as LargeCard, f as Chip, u as TUTORIALS, v as PageHeader, w as pick, y as ProgressCard } from "./router-Pl2TF-rv.mjs";
import { c as lessonsByCategory, n as LESSONS, r as LESSON_CATEGORIES, s as lessonVideoId } from "./scams-DamAVN7M.mjs";
import { r as lessonTrack, t as categoryLessonProgress } from "./progress-BBB9_efP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-CDAqdD_k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LearnLayout() {
	if (useRouterState({ select: (s) => s.location.pathname }) !== "/learn") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnIndex, {});
}
function LearnIndex() {
	const { state, t } = useApp();
	const [mode, setMode] = (0, import_react.useState)("home");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(null);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const track = lessonTrack(state);
	const searching = searchOpen && query.trim().length > 0;
	const results = searching ? LESSONS.filter((l) => {
		const q = query.trim().toLowerCase();
		return pick(l.title, state.lang).toLowerCase().includes(q) || pick(l.description, state.lang).toLowerCase().includes(q);
	}) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("learn"),
				subtitle: t("learnSubtitle"),
				emoji: "📚"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, {
				label: t("lessonsProgress"),
				value: track.done,
				total: track.total
			}),
			track.current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface p-5 border-2 border-primary bg-primary-soft/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "size-5 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold uppercase tracking-wider text-primary",
								children: state.recent.some((r) => r.kind === "lesson") ? t("continueLearning") : t("nextUp")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: pick(track.current.title, state.lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-muted-foreground line-clamp-1",
							children: pick(track.current.description, state.lang)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/learn/$lessonId",
					params: { lessonId: track.current.id },
					className: "inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-lg font-semibold text-primary-foreground hover:brightness-110",
					children: t("start")
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: !searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSearchOpen(true),
					className: "inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-border bg-card px-4 text-lg font-semibold hover:bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						"aria-hidden": "true",
						className: "size-5"
					}), t("findSpecificLesson")]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "search",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: t("findSpecificLesson"),
							"aria-label": t("findSpecificLesson"),
							className: "w-full min-h-14 rounded-xl border-2 border-border bg-card px-4 text-lg focus:border-primary focus:outline-none"
						}),
						searching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3",
							children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground",
								children: t("noResults")
							}) : results.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn/$lessonId",
								params: { lessonId: l.id },
								className: "card-surface block p-4 hover:shadow-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-bold",
										children: pick(l.title, state.lang)
									}), state.completedLessons.includes(l.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "success",
										children: "✓"
									}) : null]
								})
							}, l.id))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setSearchOpen(false);
								setQuery("");
							},
							className: "text-lg font-semibold text-primary underline",
							children: t("cancel")
						})
					]
				})
			}),
			mode === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode("read"),
					className: "card-surface flex min-h-32 items-center gap-4 p-5 text-left border-2 border-primary/40 hover:shadow-lift transition-shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-3xl",
						"aria-hidden": "true",
						children: "📖"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-2xl font-bold",
						children: t("readAndListen")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-base text-muted-foreground",
						children: [
							track.done,
							"/",
							track.total,
							" ",
							t("percentDone")
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode("watch"),
					className: "card-surface flex min-h-32 items-center gap-4 p-5 text-left border-2 border-border hover:shadow-lift transition-shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-3xl text-primary-foreground",
						"aria-hidden": "true",
						children: "▶️"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-2xl font-bold",
						children: t("watchVideos")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-base text-muted-foreground",
						children: t("learnWithVideosSubtitle")
					})] })]
				})]
			}) : null,
			mode === "read" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "space-y-4",
				children: selectedCategory === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: t("chooseCategory")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: LESSON_CATEGORIES.map((c) => {
							const prog = categoryLessonProgress(state, c.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedCategory(c.id),
								className: "card-surface flex items-center gap-4 p-5 text-left hover:shadow-lift transition-shadow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-3xl",
									"aria-hidden": "true",
									children: c.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xl font-bold",
										children: pick(c.title, state.lang)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-base text-muted-foreground",
										children: [
											prog.done,
											"/",
											prog.total,
											" ",
											t("percentDone")
										]
									})]
								})]
							}, c.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMode("home"),
						className: "text-lg font-semibold text-primary underline",
						children: ["← ", t("back")]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSelectedCategory(null),
					className: "inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }),
						" ",
						t("chooseCategory")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: lessonsByCategory(selectedCategory).map((l) => {
						const done = state.completedLessons.includes(l.id);
						const isNext = track.current?.id === l.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/learn/$lessonId",
							params: { lessonId: l.id },
							className: `card-surface flex items-center gap-3 p-4 transition-shadow hover:shadow-lift ${isNext ? "border-2 border-primary" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xl font-bold",
										children: pick(l.title, state.lang)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-0.5 block text-base text-muted-foreground",
										children: [
											"⏱ ",
											l.estimatedTime,
											" min"
										]
									})]
								}),
								isNext ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "primary",
									children: t("nextUp")
								}) : null,
								done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: "✓"
								}) : null
							]
						}, l.id);
					})
				})] })
			}) : null,
			mode === "watch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMode("home"),
						className: "text-lg font-semibold text-primary underline",
						children: ["← ", t("back")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 md:grid-cols-2",
						children: LESSONS.filter((l) => lessonVideoId(l, state.lang)).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/learn/$lessonId",
							params: { lessonId: l.id },
							className: "card-surface block p-5 transition-shadow hover:shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold",
									children: pick(l.title, state.lang)
								}), state.completedLessons.includes(l.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: "✓"
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
									tone: "accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {
										className: "size-4 shrink-0",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("videoIncluded") })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { children: [
									"⏱ ",
									l.estimatedTime,
									" min"
								] })]
							})]
						}, l.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: t("learnWithVideos")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-base text-muted-foreground",
							children: [
								TUTORIALS.length,
								" ",
								t("videos"),
								" · ",
								t("learnWithVideosSubtitle")
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/watch",
							className: "inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-card px-5 text-lg font-semibold hover:bg-muted",
							children: t("start")
						})]
					})
				]
			}) : null
		]
	});
}
//#endregion
export { LearnLayout as component };
