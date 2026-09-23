import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as useApp, f as Chip, p as ElderButton, u as TUTORIALS, v as PageHeader, w as pick } from "./router-Pl2TF-rv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/watch-BoIHAjU0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WatchPage() {
	const { state, t, completeVideo } = useApp();
	const [playing, setPlaying] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("watchLearn"),
			subtitle: t("hostedByYouTube"),
			emoji: "▶️"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: TUTORIALS.map((v) => {
				const done = state.completedVideos.includes(v.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-surface overflow-hidden p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: pick(v.title, state.lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-base text-muted-foreground",
							children: pick(v.description, state.lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { children: ["⏱ ", v.duration] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "primary",
									children: t(v.difficulty)
								}),
								done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
									tone: "success",
									children: ["✓ ", t("completed")]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 aspect-video w-full overflow-hidden rounded-xl bg-muted",
							children: playing === v.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								className: "size-full",
								src: `https://www.youtube-nocookie.com/embed/${v.videoId}?rel=0&autoplay=1`,
								title: pick(v.title, state.lang),
								allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",
								allowFullScreen: true,
								loading: "lazy"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setPlaying(v.id),
								className: "flex size-full flex-col items-center justify-center gap-2",
								"aria-label": `Play ${pick(v.title, state.lang)}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-5xl",
										"aria-hidden": "true",
										children: "▶️"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg font-semibold",
										children: t("start")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-4 text-sm text-muted-foreground",
										children: t("videoNeedsInternet")
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
								variant: done ? "secondary" : "primary",
								onClick: () => completeVideo(v.id),
								children: done ? t("completed") : t("markComplete")
							})
						})
					]
				}, v.id);
			})
		})]
	});
}
//#endregion
export { WatchPage as component };
