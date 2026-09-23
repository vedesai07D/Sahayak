import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useParams, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ArrowLeft, N as Check, _ as Play, n as Wifi, w as Heart } from "../_libs/lucide-react.mjs";
import { S as useApp, T as pickList, _ as LargeCard, f as Chip, o as QUIZZES, p as ElderButton, v as PageHeader, w as pick } from "./router-Pl2TF-rv.mjs";
import { t as ListenButton } from "./ListenButton-B3hMeGdK.mjs";
import { t as QuizPanel } from "./QuizPanel-KO-GPK37.mjs";
import { a as getLesson, c as lessonsByCategory, s as lessonVideoId } from "./scams-DamAVN7M.mjs";
import { r as lessonTrack } from "./progress-BBB9_efP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn._lessonId-D1-Dig2H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LessonPage() {
	const { lessonId } = useParams({ from: "/learn/$lessonId" });
	const { state, t, completeLesson, toggleFavorite, isFavorite, trackRecent } = useApp();
	const lesson = getLesson(lessonId);
	const [playingVideo, setPlayingVideo] = (0, import_react.useState)(false);
	const [videoFailed, setVideoFailed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (lesson) trackRecent({
			id: lesson.id,
			kind: "lesson",
			title: pick(lesson.title, state.lang)
		});
		setPlayingVideo(false);
		setVideoFailed(false);
	}, [lessonId]);
	if (!lesson) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("noResults"),
			emoji: "🔎"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/learn",
			className: "text-lg font-semibold text-primary underline",
			children: t("exploreLessons")
		})]
	});
	const title = pick(lesson.title, state.lang);
	const description = pick(lesson.description, state.lang);
	const steps = pickList(lesson.steps, state.lang);
	const done = state.completedLessons.includes(lesson.id);
	const saved = isFavorite(lesson.id);
	const related = lessonsByCategory(lesson.category).filter((l) => l.id !== lesson.id).slice(0, 4);
	const readAloud = [
		title,
		description,
		...steps
	].join(". ");
	const quiz = lesson.quizId ? QUIZZES.find((q) => q.id === lesson.quizId) : void 0;
	const nextLesson = lessonTrack(state).next;
	const videoId = lessonVideoId(lesson, state.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/learn",
				className: "inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }),
					" ",
					t("back"),
					" ",
					t("learn")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title,
				subtitle: description,
				emoji: "📖"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { children: [
						"⏱ ",
						lesson.estimatedTime,
						" min"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						tone: "primary",
						children: t(lesson.difficulty)
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
						tone: "success",
						children: ["✓ ", t("completed")]
					}) : null,
					videoId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
						tone: "accent",
						children: ["▶️ ", t("videoIncluded")]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenButton, {
				text: readAloud,
				audioKey: lesson.id
			}),
			videoId && !videoFailed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
				className: "border-2 border-primary/40 bg-card space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-2xl font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "▶️"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("watchVideo") })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "warning",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, {
								className: "size-4 shrink-0",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("requiresInternet") })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-muted-foreground",
						children: t("videoSectionDesc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-card",
						children: playingVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							className: "size-full",
							src: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`,
							title,
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",
							allowFullScreen: true,
							loading: "lazy",
							onError: () => setVideoFailed(true)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPlayingVideo(true),
							className: "flex size-full flex-col items-center justify-center gap-3 p-6 text-center hover:bg-muted/80 transition-colors",
							"aria-label": `Play ${title}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "size-8 ml-1",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold text-foreground",
									children: t("start")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground max-w-sm",
									children: t("videoNeedsInternet")
								})
							]
						})
					})
				]
			}) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-2xl font-bold",
				children: t("steps")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card-surface flex items-start gap-4 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xl font-bold text-primary",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl leading-relaxed pt-1",
						children: s
					})]
				}, i))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
					onClick: () => completeLesson(lesson.id),
					variant: done ? "secondary" : "primary",
					size: "xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": "true" }),
						" ",
						done ? t("completed") : t("markComplete")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
					variant: "outline",
					size: "xl",
					onClick: () => toggleFavorite(lesson.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" }),
						" ",
						saved ? t("savedLabel") : t("save")
					]
				})]
			}),
			quiz && done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-3 text-2xl font-bold",
				children: ["✏️ ", t("quickQuiz")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPanel, {
				quizId: quiz.id,
				title: pick(quiz.title, state.lang)
			})] }) : null,
			done && nextLesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-2xl font-bold",
				children: t("nextLesson")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/learn/$lessonId",
				params: { lessonId: nextLesson.id },
				className: "card-surface flex items-center gap-4 p-5 border-2 border-primary/40 transition-shadow hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xl font-bold",
						children: pick(nextLesson.title, state.lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-base text-muted-foreground",
						children: [
							"⏱ ",
							nextLesson.estimatedTime,
							" min"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground",
					children: t("start")
				})]
			})] }) : null,
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-2xl font-bold",
				children: t("relatedLessons")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/learn/$lessonId",
					params: { lessonId: r.id },
					className: "card-surface block p-4 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-bold",
						children: pick(r.title, state.lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-base text-muted-foreground line-clamp-2",
						children: pick(r.description, state.lang)
					})]
				}, r.id))
			})] }) : null
		]
	});
}
//#endregion
export { LessonPage as component };
