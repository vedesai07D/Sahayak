import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { I as Award, T as GraduationCap, i as Users, w as Heart } from "../_libs/lucide-react.mjs";
import { S as useApp, _ as LargeCard, v as PageHeader } from "./router-Pl2TF-rv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/credits-CmomAeP5.js
var import_jsx_runtime = require_jsx_runtime();
function CreditsPage() {
	const { t } = useApp();
	const lines = [
		{
			Icon: Heart,
			text: t("creditsMadeWithLove"),
			emphasis: true
		},
		{
			Icon: Award,
			text: t("creditsDept")
		},
		{
			Icon: GraduationCap,
			text: t("creditsGuide")
		},
		{
			Icon: Users,
			text: t("creditsMentor")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("credits"),
			subtitle: t("creditsSubtitle"),
			emoji: "🏅"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: lines.map(({ Icon, text, emphasis }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
				className: emphasis ? "flex items-center gap-4 border-2 border-primary/40" : "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-xl leading-relaxed ${emphasis ? "font-bold" : ""}`,
					children: text
				})]
			}, text))
		})]
	});
}
//#endregion
export { CreditsPage as component };
