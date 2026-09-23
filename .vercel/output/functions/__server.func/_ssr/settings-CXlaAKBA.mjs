import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as LANGUAGES, S as useApp, _ as LargeCard, b as SectionHeader, p as ElderButton, v as PageHeader } from "./router-Pl2TF-rv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CXlaAKBA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Choice({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-lg font-semibold",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex flex-wrap gap-2",
		role: "group",
		"aria-label": label,
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(o.value),
			"aria-pressed": value === o.value,
			className: `min-h-14 rounded-xl border-2 px-4 text-lg font-semibold transition-colors ${value === o.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"}`,
			children: o.label
		}, o.value))
	})] });
}
function SettingsPage() {
	const { state, t, update, resetAll } = useApp();
	const [confirming, setConfirming] = (0, import_react.useState)(false);
	const exportData = () => {
		const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "sahayak-data.json";
		a.click();
		URL.revokeObjectURL(url);
	};
	const onLabel = state.lang === "hi" ? "चालू" : state.lang === "mr" ? "चालू" : "On";
	const offLabel = state.lang === "hi" ? "बंद" : state.lang === "mr" ? "बंद" : "Off";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("settings"),
				emoji: "⚙️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: t("appearance"),
					emoji: "🎨"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: t("language"),
							value: state.lang,
							options: LANGUAGES.map((l) => ({
								value: l.code,
								label: l.label
							})),
							onChange: (v) => update({ lang: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: t("textSize"),
							value: state.textSize,
							options: [
								{
									value: "normal",
									label: t("normal")
								},
								{
									value: "large",
									label: t("large")
								},
								{
									value: "xlarge",
									label: t("extraLarge")
								}
							],
							onChange: (v) => update({ textSize: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: t("appearance"),
							value: state.theme,
							options: [
								{
									value: "light",
									label: t("light")
								},
								{
									value: "dark",
									label: t("dark")
								},
								{
									value: "system",
									label: t("system")
								}
							],
							onChange: (v) => update({ theme: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: t("highContrast"),
							value: state.highContrast ? "on" : "off",
							options: [{
								value: "off",
								label: offLabel
							}, {
								value: "on",
								label: onLabel
							}],
							onChange: (v) => update({ highContrast: v === "on" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: t("reduceMotion"),
							value: state.reduceMotion ? "on" : "off",
							options: [{
								value: "off",
								label: offLabel
							}, {
								value: "on",
								label: onLabel
							}],
							onChange: (v) => update({ reduceMotion: v === "on" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: t("speechSpeed"),
							value: state.speechRate,
							options: [
								{
									value: "slow",
									label: t("slow")
								},
								{
									value: "normal",
									label: t("normal")
								},
								{
									value: "fast",
									label: t("fast")
								}
							],
							onChange: (v) => update({ speechRate: v })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("data"),
				emoji: "🗄️"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted-foreground",
					children: t("dataStorageNote")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
						variant: "outline",
						onClick: exportData,
						children: t("exportData")
					}), !confirming ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
						variant: "danger",
						onClick: () => setConfirming(true),
						children: t("deleteData")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
							variant: "danger",
							onClick: () => resetAll(),
							children: t("confirm")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
							variant: "ghost",
							onClick: () => setConfirming(false),
							children: t("cancel")
						})]
					})]
				})]
			})] })
		]
	});
}
//#endregion
export { SettingsPage as component };
