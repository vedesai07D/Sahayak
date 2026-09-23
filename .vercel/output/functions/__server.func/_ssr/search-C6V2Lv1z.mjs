import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Search } from "../_libs/lucide-react.mjs";
import { S as useApp, b as SectionHeader, h as EmptyState, r as DICTIONARY, v as PageHeader, w as pick } from "./router-Pl2TF-rv.mjs";
import { i as SCAM_STORIES, n as LESSONS } from "./scams-DamAVN7M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-C6V2Lv1z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { state, t } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const needle = q.trim().toLowerCase();
	const lessons = needle ? LESSONS.filter((l) => pick(l.title, state.lang).toLowerCase().includes(needle) || l.title.en.toLowerCase().includes(needle) || pick(l.description, state.lang).toLowerCase().includes(needle) || l.description.en.toLowerCase().includes(needle)) : [];
	const stories = needle ? SCAM_STORIES.filter((s) => pick(s.title, state.lang).toLowerCase().includes(needle) || s.title.en.toLowerCase().includes(needle) || pick(s.summary, state.lang).toLowerCase().includes(needle) || s.summary.en.toLowerCase().includes(needle)) : [];
	const terms = needle ? DICTIONARY.filter((d) => d.term.toLowerCase().includes(needle) || (d.full ?? "").toLowerCase().includes(needle) || pick(d.meaning, state.lang).toLowerCase().includes(needle) || d.meaning.en.toLowerCase().includes(needle)) : [];
	const total = lessons.length + stories.length + terms.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("search"),
				subtitle: t("searchPromptSub"),
				emoji: "🔎"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						"aria-hidden": "true",
						className: "text-muted-foreground size-6 shrink-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("searchWordPlaceholder"),
						"aria-label": t("search"),
						className: "min-h-16 w-full bg-transparent text-xl outline-none"
					}),
					q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setQ(""),
						className: "min-h-11 rounded-lg px-3 text-base font-semibold text-muted-foreground hover:text-foreground",
						children: "✕"
					}) : null
				]
			}),
			needle && total === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				emoji: "🔍",
				title: t("noResults"),
				hint: t("trySimplerSearch")
			}) : null,
			lessons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("learn"),
				emoji: "📚"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: lessons.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/learn/$lessonId",
					params: { lessonId: l.id },
					className: "card-surface block p-4 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-bold",
						children: pick(l.title, state.lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-muted-foreground line-clamp-2",
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
					className: "card-surface block p-4 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-bold",
						children: pick(s.title, state.lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-muted-foreground line-clamp-2",
						children: pick(s.summary, state.lang)
					})]
				}, s.id))
			})] }) : null,
			terms.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("dictionary"),
				emoji: "📖"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: terms.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dictionary",
					className: "card-surface block p-4 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xl font-bold",
						children: [d.term, d.full ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-base font-normal",
							children: [
								" (",
								d.full,
								")"
							]
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-lg text-foreground",
						children: pick(d.meaning, state.lang)
					})]
				}, d.id))
			})] }) : null
		]
	});
}
//#endregion
export { SearchPage as component };
