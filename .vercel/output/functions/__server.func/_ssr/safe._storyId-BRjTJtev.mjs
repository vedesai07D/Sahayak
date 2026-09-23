import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useParams, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ArrowLeft, p as ShieldAlert, w as Heart } from "../_libs/lucide-react.mjs";
import { S as useApp, T as pickList, _ as LargeCard, b as SectionHeader, p as ElderButton, v as PageHeader, w as pick } from "./router-Pl2TF-rv.mjs";
import { t as ListenButton } from "./ListenButton-B3hMeGdK.mjs";
import { o as getStory } from "./scams-DamAVN7M.mjs";
import { i as storyTrack } from "./progress-BBB9_efP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safe._storyId-BRjTJtev.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StoryPage() {
	const { storyId } = useParams({ from: "/safe/$storyId" });
	const { state, t, toggleFavorite, isFavorite, completeStory, trackRecent } = useApp();
	const story = getStory(storyId);
	(0, import_react.useEffect)(() => {
		if (story) trackRecent({
			id: story.id,
			kind: "story",
			title: pick(story.title, state.lang)
		});
	}, [storyId]);
	if (!story) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("noResults"),
			emoji: "🔎"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/safe",
			className: "text-lg font-semibold text-primary underline",
			children: t("staySafe")
		})]
	});
	const title = pick(story.title, state.lang);
	const summary = pick(story.summary, state.lang);
	const body = pick(story.story, state.lang);
	const warningSigns = pickList(story.warningSigns, state.lang);
	const whatWentWrong = pick(story.whatWentWrong, state.lang);
	const shouldHaveDone = pickList(story.shouldHaveDone, state.lang);
	const whatToDoIfHappened = pickList(story.whatToDoIfHappened, state.lang);
	const keyLesson = pick(story.keyLesson, state.lang);
	const readAloud = `${title}. ${body}. ${t("warningSigns")}: ${warningSigns.join(". ")}. ${t("keyLesson")}: ${keyLesson}`;
	const completed = (state.completedStories ?? []).includes(story.id);
	const nextStory = storyTrack(state).ordered.find((s) => s.id !== story.id && !(state.completedStories ?? []).includes(s.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/safe",
				className: "inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }),
					" ",
					t("back"),
					" ",
					t("staySafe")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title,
				subtitle: summary,
				emoji: "📕"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xl leading-relaxed",
				children: body
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenButton, {
					text: readAloud,
					audioKey: story.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
					variant: "outline",
					onClick: () => toggleFavorite(story.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" }),
						" ",
						isFavorite(story.id) ? t("savedLabel") : t("save")
					]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("warningSigns"),
				emoji: "🚩"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: warningSigns.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card-surface p-4 text-lg flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl shrink-0",
						"aria-hidden": "true",
						children: "🚩"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leading-relaxed",
						children: w
					})]
				}, i))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("whatWentWrong"),
				emoji: "❗"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeCard, {
				className: "bg-destructive-soft border-2 border-destructive",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-foreground",
					children: whatWentWrong
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("whatToDo"),
				emoji: "✅"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "list-decimal space-y-2 pl-6 text-lg leading-relaxed",
				children: shouldHaveDone.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, i))
			})] }),
			whatToDoIfHappened.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("whatToDoIfHappened"),
				emoji: "🚨"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
				className: "bg-warning-soft border-2 border-warning space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
						className: "size-6 text-warning shrink-0",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-bold text-foreground",
						children: [t("quickEmergencySteps"), ":"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "list-decimal space-y-2 pl-6 text-lg leading-relaxed",
					children: whatToDoIfHappened.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, i))
				})]
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("keyLesson"),
				emoji: "🌟"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeCard, {
				className: "bg-primary-soft border-2 border-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xl font-bold leading-relaxed text-primary",
					children: ["🌟 ", keyLesson]
				})
			})] }),
			!completed ? nextStory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/safe/$storyId",
				params: { storyId: nextStory.id },
				onClick: () => completeStory(story.id),
				className: "flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-6 text-lg font-semibold text-primary-foreground hover:brightness-110",
				children: ["✓ ", t("markAsRead")]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
				onClick: () => completeStory(story.id),
				size: "xl",
				children: ["✓ ", t("markAsRead")]
			}) : nextStory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/safe/$storyId",
				params: { storyId: nextStory.id },
				className: "card-surface flex items-center gap-4 border-2 border-destructive/40 p-5 transition-shadow hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-bold uppercase tracking-wider text-destructive",
						children: t("nextStory")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-xl font-bold",
						children: pick(nextStory.title, state.lang)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-destructive px-5 text-base font-semibold text-destructive-foreground",
					children: t("readStory")
				})]
			}) : null
		]
	});
}
//#endregion
export { StoryPage as component };
