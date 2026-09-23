import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as ChevronLeft, j as ChevronRight } from "../_libs/lucide-react.mjs";
import { S as useApp, T as pickList, _ as LargeCard, a as OFFICIAL_RESOURCES, b as SectionHeader, c as SAFETY_QUESTIONS, f as Chip, i as HELP_TOPICS, v as PageHeader, w as pick, x as cn, y as ProgressCard } from "./router-Pl2TF-rv.mjs";
import { i as SCAM_STORIES, t as COMMON_SCAMS } from "./scams-DamAVN7M.mjs";
import { i as storyTrack, n as clampCursor } from "./progress-BBB9_efP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safe.index-CPmnkqOt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SafePage() {
	const { state, t, update } = useApp();
	const [tab, setTab] = (0, import_react.useState)("stories");
	const [browseAll, setBrowseAll] = (0, import_react.useState)(false);
	const track = storyTrack(state);
	const scamIndex = clampCursor(state.scamCursor, COMMON_SCAMS.length);
	const scam = COMMON_SCAMS[scamIndex];
	const completedStories = state.completedStories ?? [];
	const toggle = (id) => update((s) => ({ safetyCheck: {
		...s.safetyCheck,
		[id]: !s.safetyCheck[id]
	} }));
	const TABS = [
		{
			id: "stories",
			label: t("stories"),
			emoji: "📕"
		},
		{
			id: "scams",
			label: t("commonScamsTab"),
			emoji: "⚠️"
		},
		{
			id: "help",
			label: t("helpAndSafetyCheck"),
			emoji: "✅"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("staySafe"),
				subtitle: t("safeSubtitle"),
				emoji: "🛡️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-2 sm:grid-cols-3",
				role: "tablist",
				"aria-label": t("staySafe"),
				children: TABS.map(({ id, label, emoji }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					role: "tab",
					"aria-selected": tab === id,
					onClick: () => setTab(id),
					className: cn("flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 px-3 text-base font-semibold transition-colors", tab === id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center leading-tight",
						children: label
					})]
				}, id))
			}),
			tab === "stories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, {
						label: t("storiesProgress"),
						value: track.done,
						total: track.total
					}),
					track.current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
						className: "space-y-3 border-2 border-destructive/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-bold uppercase tracking-wider text-destructive",
								children: [
									t("nextUp"),
									" · ",
									track.done + 1,
									" / ",
									track.total
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold",
								children: pick(track.current.title, state.lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-relaxed text-muted-foreground",
								children: pick(track.current.summary, state.lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "danger",
									children: t("scam")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: t(track.current.difficulty) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/safe/$storyId",
									params: { storyId: track.current.id },
									className: "inline-flex min-h-14 items-center justify-center rounded-xl bg-destructive px-6 text-lg font-semibold text-destructive-foreground hover:brightness-110",
									children: t("readStory")
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xl font-bold",
						children: ["🎉 ", t("allStoriesRead")]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setBrowseAll(!browseAll),
						"aria-expanded": browseAll,
						className: "min-h-12 w-full rounded-xl border-2 border-border bg-card px-4 text-lg font-semibold hover:bg-muted",
						children: [
							browseAll ? "▲" : "▼",
							" ",
							t("browseAll"),
							" (",
							SCAM_STORIES.length,
							")"
						]
					}),
					browseAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 md:grid-cols-2",
						children: SCAM_STORIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/safe/$storyId",
							params: { storyId: s.id },
							className: "card-surface block p-5 transition-shadow hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: pick(s.title, state.lang)
									}), completedStories.includes(s.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "success",
										children: "✓"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-base text-muted-foreground line-clamp-2",
									children: pick(s.summary, state.lang)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "danger",
										children: t("scam")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: t(s.difficulty) })]
								})
							]
						}, s.id))
					}) : null
				]
			}) : null,
			tab === "scams" && scam ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-2xl font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"aria-hidden": "true",
									children: [scam.emoji, " "]
								}), pick(scam.name, state.lang)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { children: [
								scamIndex + 1,
								" / ",
								COMMON_SCAMS.length
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed",
							children: pick(scam.summary, state.lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-2 text-xl font-bold",
							children: ["🚩 ", t("warningSigns")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: pickList(scam.redFlags, state.lang).map((flag, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-xl bg-muted/50 p-3 text-lg leading-relaxed",
								children: flag
							}, i))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-primary-soft p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg font-semibold text-primary",
								children: ["💡 ", pick(scam.quickTip, state.lang)]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => update({ scamCursor: Math.max(0, scamIndex - 1) }),
						disabled: scamIndex === 0,
						className: "flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-4 text-lg font-semibold hover:bg-muted disabled:opacity-40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { "aria-hidden": "true" }),
							" ",
							t("previousScam")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => update({ scamCursor: Math.min(COMMON_SCAMS.length - 1, scamIndex + 1) }),
						disabled: scamIndex === COMMON_SCAMS.length - 1,
						className: "flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-lg font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-40",
						children: [
							t("nextScam"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { "aria-hidden": "true" })
						]
					})]
				})]
			}) : null,
			tab === "help" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						title: t("safetyCheck"),
						emoji: "✅"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: SAFETY_QUESTIONS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border-2 border-border p-3 transition-colors hover:bg-muted/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "size-6 shrink-0 accent-primary",
									checked: !!state.safetyCheck[q.id],
									onChange: () => toggle(q.id)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg",
									children: pick(q.q, state.lang)
								}),
								q.lesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/learn/$lessonId",
									params: { lessonId: q.lesson },
									className: "ml-auto shrink-0 text-base font-semibold text-primary underline",
									children: t("learnMore")
								}) : null
							]
						}) }, q.id))
					}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						title: t("whatShouldIDo"),
						emoji: "🤔"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: HELP_TOPICS.map((h) => {
							const steps = pickList(h.steps, state.lang);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "card-surface p-5 open:bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex cursor-pointer items-center gap-2 text-xl font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										"aria-hidden": "true",
										children: [h.emoji, " "]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pick(h.title, state.lang) })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-4 list-decimal space-y-2 pl-6 text-lg leading-relaxed",
									children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, i))
								})]
							}, h.id);
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						title: t("officialHelp"),
						emoji: "☎️"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-lg",
						children: OFFICIAL_RESOURCES.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2 last:border-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground",
								children: [pick(r.label, state.lang), ":"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold tabular-nums text-primary",
								children: r.value
							})]
						}, i))
					}) })] })
				]
			}) : null
		]
	});
}
//#endregion
export { SafePage as component };
