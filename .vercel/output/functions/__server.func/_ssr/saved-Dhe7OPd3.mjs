import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as useApp, b as SectionHeader, h as EmptyState, m as ElderLink, v as PageHeader, w as pick } from "./router-Pl2TF-rv.mjs";
import { a as getLesson, o as getStory } from "./scams-DamAVN7M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saved-Dhe7OPd3.js
var import_jsx_runtime = require_jsx_runtime();
function SavedPage() {
	const { state, t } = useApp();
	const lessons = state.favorites.map(getLesson).filter(Boolean);
	const stories = state.favorites.map(getStory).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("mySaved"),
				emoji: "❤️"
			}),
			lessons.length === 0 && stories.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				emoji: "📭",
				title: t("emptySaved"),
				hint: t("emptySavedHint"),
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderLink, {
					to: "/learn",
					children: t("exploreLessons")
				})
			}) : null,
			lessons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("learn"),
				emoji: "📚"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: lessons.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/learn/$lessonId",
					params: { lessonId: l.id },
					className: "card-surface block p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-bold",
						children: pick(l.title, state.lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-muted-foreground",
						children: pick(l.description, state.lang)
					})]
				}, l.id))
			})] }) : null,
			stories.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("scamStories"),
				emoji: "📕"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: stories.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/safe/$storyId",
					params: { storyId: s.id },
					className: "card-surface block p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-bold",
						children: pick(s.title, state.lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-muted-foreground",
						children: pick(s.summary, state.lang)
					})]
				}, s.id))
			})] }) : null
		]
	});
}
//#endregion
export { SavedPage as component };
