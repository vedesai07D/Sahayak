import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Search } from "../_libs/lucide-react.mjs";
import { S as useApp, f as Chip, h as EmptyState, r as DICTIONARY, v as PageHeader, w as pick } from "./router-Pl2TF-rv.mjs";
import { t as ListenButton } from "./ListenButton-B3hMeGdK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dictionary-PT5okFOy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = ["All", ...Array.from(new Set(DICTIONARY.map((w) => w.category).filter((c) => Boolean(c))))];
function DictionaryPage() {
	const { state, t } = useApp();
	const [query, setQuery] = (0, import_react.useState)("");
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const q = query.trim().toLowerCase();
	const filteredTerms = DICTIONARY.filter((term) => {
		if (!(activeCategory === "All" || term.category === activeCategory)) return false;
		if (!q) return true;
		const termText = term.term.toLowerCase();
		const fullText = (term.full ?? "").toLowerCase();
		const meaningText = pick(term.meaning, state.lang).toLowerCase();
		const tipText = pick(term.tip, state.lang).toLowerCase();
		return termText.includes(q) || fullText.includes(q) || meaningText.includes(q) || tipText.includes(q);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("dictionary"),
				subtitle: t("dictionarySubtitle"),
				emoji: "📖"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						"aria-hidden": "true",
						className: "size-6 text-muted-foreground shrink-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: t("searchDictionary"),
						"aria-label": t("searchDictionary"),
						className: "min-h-16 w-full bg-transparent text-xl outline-none"
					}),
					query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setQuery(""),
						className: "min-h-11 rounded-lg px-3 text-base font-semibold text-muted-foreground hover:text-foreground",
						children: "✕"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Dictionary Categories",
				children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveCategory(cat),
					"aria-pressed": activeCategory === cat,
					className: `min-h-12 rounded-xl border-2 px-4 text-base font-semibold transition-colors ${activeCategory === cat ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"}`,
					children: cat === "All" ? t("allWords") : cat
				}, cat))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base text-muted-foreground",
				children: [
					filteredTerms.length,
					" ",
					t("wordsCount")
				]
			}),
			filteredTerms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				emoji: "🔍",
				title: t("noResults"),
				hint: t("trySimplerSearch")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: filteredTerms.map((item) => {
					const meaning = pick(item.meaning, state.lang);
					const tip = pick(item.tip, state.lang);
					const speechText = `${item.term}. ${item.full ? item.full + ". " : ""}${meaning}. ${tip ? t("dictionaryTip") + ": " + tip : ""}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-surface flex flex-col justify-between gap-4 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-bold text-foreground",
									children: item.term
								}), item.full ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-base font-medium text-primary",
									children: [
										"(",
										item.full,
										")"
									]
								}) : null] }), item.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "primary",
									children: item.category
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg leading-relaxed text-foreground",
								children: meaning
							}),
							tip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-xl bg-warning-soft border border-warning p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-base leading-relaxed text-foreground",
									children: [
										"💡 ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [t("dictionaryTip"), ":"] }),
										" ",
										tip
									]
								})
							}) : null
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenButton, {
								text: speechText,
								label: t("listen")
							})
						})]
					}, item.id);
				})
			})
		]
	});
}
//#endregion
export { DictionaryPage as component };
