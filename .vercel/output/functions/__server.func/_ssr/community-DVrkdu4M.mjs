import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as Flag, S as LogOut, b as MessageCircle, s as Trash2, w as Heart } from "../_libs/lucide-react.mjs";
import { S as useApp, _ as LargeCard, b as SectionHeader, f as Chip, g as InfoNote, h as EmptyState, n as COMMUNITY_CATEGORIES, p as ElderButton, v as PageHeader } from "./router-Pl2TF-rv.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-DVrkdu4M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Supabase client for the Community feature ONLY.
* Every other part of Sahayak works without Supabase, without a login and offline.
*
* Credentials come from VITE_-prefixed env vars (safe to expose: only the anon
* key; the service-role key must NEVER appear in frontend code). When they are
* absent, Community shows a "not configured" state instead of crashing.
*/
var supabaseUrl = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_-_0AsiXstaa9utKawiIpVA_a5gCrh0W",
	"VITE_SUPABASE_URL": "https://zcklwmcickufoyfkcibz.supabase.co"
}["VITE_SUPABASE_URL"];
var supabaseAnonKey = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_-_0AsiXstaa9utKawiIpVA_a5gCrh0W",
	"VITE_SUPABASE_URL": "https://zcklwmcickufoyfkcibz.supabase.co"
}["VITE_SUPABASE_ANON_KEY"];
function isSupabaseConfigured() {
	return Boolean(supabaseUrl && supabaseAnonKey);
}
var client = null;
/** Returns null when env vars are missing — callers must handle that gracefully. */
function getSupabase() {
	if (!isSupabaseConfigured()) return null;
	if (!client) client = createClient(supabaseUrl, supabaseAnonKey, { auth: {
		persistSession: true,
		autoRefreshToken: true
	} });
	return client;
}
var inputCls = "min-h-14 rounded-xl border-2 border-border bg-card px-4 text-lg";
function formatTimeAgo(atIso, t) {
	const days = Math.floor((Date.now() - new Date(atIso).getTime()) / 864e5);
	if (days <= 0) return t("today");
	if (days === 1) return t("yesterday");
	return `${days} ${t("daysAgo")}`;
}
function AuthPanel() {
	const { t } = useApp();
	const supabase = getSupabase();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [username, setUsername] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const submit = async () => {
		if (!supabase || busy) return;
		setBusy(true);
		setError(null);
		setNotice(null);
		if (mode === "signin") {
			const { error: err } = await supabase.auth.signInWithPassword({
				email: email.trim(),
				password
			});
			setBusy(false);
			if (err) setError(t("communityAuthFailed"));
			return;
		}
		const { data, error: err } = await supabase.auth.signUp({
			email: email.trim(),
			password,
			options: { data: { display_name: username.trim() } }
		});
		setBusy(false);
		if (err || !data.user || (data.user.identities?.length ?? 0) === 0) {
			setError(t("communityAuthFailed"));
			return;
		}
		setNotice(t("communityCheckEmail"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
			className: "space-y-5 border-2 border-primary/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: t("communityLoginTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted-foreground",
					children: t("communityLoginHint")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-semibold",
						children: t("communityEmail")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						autoComplete: "email",
						className: inputCls
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-semibold",
						children: t("communityPassword")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						autoComplete: mode === "signin" ? "current-password" : "new-password",
						className: inputCls
					})]
				}),
				mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-semibold",
							children: t("communityUsername")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: username,
							onChange: (e) => setUsername(e.target.value),
							autoComplete: "username",
							className: inputCls
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base text-muted-foreground",
							children: t("communityUsernameHint")
						})
					]
				}) : null,
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-lg font-semibold text-destructive",
					children: error
				}) : null,
				notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					role: "status",
					className: "rounded-xl bg-muted p-4 text-lg font-semibold",
					children: ["✉️ ", notice]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
					fullWidth: true,
					size: "xl",
					onClick: () => void submit(),
					disabled: busy || !email.trim() || !password || mode === "signup" && !username.trim(),
					children: busy ? mode === "signin" ? t("communitySigningIn") : t("communitySigningUp") : mode === "signin" ? t("communitySignIn") : t("communitySignUp")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setMode(mode === "signin" ? "signup" : "signin");
						setError(null);
						setNotice(null);
					},
					className: "text-lg font-semibold text-primary underline",
					children: mode === "signin" ? t("communityNoAccount") : t("communityHaveAccount")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoNote, {
			tone: "warning",
			children: ["🌐 ", t("communityNeedsInternet")]
		})]
	});
}
function CommunityPage() {
	const { t } = useApp();
	const configured = isSupabaseConfigured();
	const supabase = getSupabase();
	const [sessionUserId, setSessionUserId] = (0, import_react.useState)(null);
	const [displayName, setDisplayName] = (0, import_react.useState)("");
	const [sessionChecked, setSessionChecked] = (0, import_react.useState)(false);
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [category, setCategory] = (0, import_react.useState)(COMMUNITY_CATEGORIES[0] ?? "General");
	const [text, setText] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [actionError, setActionError] = (0, import_react.useState)(null);
	const [openComments, setOpenComments] = (0, import_react.useState)(null);
	const [comment, setComment] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!supabase) {
			setSessionChecked(true);
			return;
		}
		let active = true;
		supabase.auth.getSession().then(({ data }) => {
			if (!active) return;
			setSessionUserId(data.session?.user.id ?? null);
			setDisplayName(data.session?.user.user_metadata?.["display_name"] ?? "");
			setSessionChecked(true);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
			setSessionUserId(session?.user.id ?? null);
			setDisplayName(session?.user.user_metadata?.["display_name"] ?? "");
			setSessionChecked(true);
		});
		return () => {
			active = false;
			sub.subscription.unsubscribe();
		};
	}, [supabase]);
	const loadPosts = (0, import_react.useCallback)(async () => {
		if (!supabase) return;
		const { data, error } = await supabase.from("posts").select("id, user_id, content, category, created_at, updated_at, profiles(id, display_name, created_at), likes(id, user_id), comments(id, post_id, user_id, content, created_at, profiles(id, display_name, created_at))").order("created_at", { ascending: false });
		if (error) {
			setLoadError(true);
			return;
		}
		setLoadError(false);
		setPosts(data ?? []);
	}, [supabase]);
	(0, import_react.useEffect)(() => {
		if (!supabase || !sessionUserId) return;
		setLoading(true);
		loadPosts().finally(() => setLoading(false));
	}, [
		supabase,
		sessionUserId,
		loadPosts
	]);
	const visible = (0, import_react.useMemo)(() => posts.filter((p) => filter === "All" || p.category === filter), [posts, filter]);
	const createPost = async () => {
		if (!supabase || !sessionUserId || submitting) return;
		const body = text.trim();
		if (!body) return;
		setSubmitting(true);
		setActionError(null);
		const { error } = await supabase.from("posts").insert({
			user_id: sessionUserId,
			content: body,
			category
		});
		setSubmitting(false);
		if (error) {
			setActionError(t("communityActionFailed"));
			return;
		}
		setText("");
		await loadPosts();
	};
	const toggleLike = async (postId) => {
		if (!supabase || !sessionUserId) return;
		setActionError(null);
		const { error } = posts.find((p) => p.id === postId)?.likes?.find((l) => l.user_id === sessionUserId) ? await supabase.from("likes").delete().eq("post_id", postId).eq("user_id", sessionUserId) : await supabase.from("likes").insert({
			post_id: postId,
			user_id: sessionUserId
		});
		if (error) {
			setActionError(t("communityActionFailed"));
			return;
		}
		await loadPosts();
	};
	const reportPost = async (postId) => {
		if (!supabase || !sessionUserId) return;
		setActionError(null);
		const { error } = await supabase.from("reports").insert({
			post_id: postId,
			user_id: sessionUserId
		});
		if (error) setActionError(t("communityActionFailed"));
	};
	const addComment = async (postId) => {
		if (!supabase || !sessionUserId) return;
		const body = comment.trim();
		if (!body) return;
		setActionError(null);
		const { error } = await supabase.from("comments").insert({
			post_id: postId,
			user_id: sessionUserId,
			content: body
		});
		if (error) {
			setActionError(t("communityActionFailed"));
			return;
		}
		setComment("");
		await loadPosts();
	};
	const deletePost = async (postId) => {
		if (!supabase || !sessionUserId) return;
		if (!window.confirm(t("communityConfirmDelete"))) return;
		setActionError(null);
		const { error } = await supabase.from("posts").delete().eq("id", postId).eq("user_id", sessionUserId);
		if (error) {
			setActionError(t("communityActionFailed"));
			return;
		}
		await loadPosts();
	};
	const signOut = () => void supabase?.auth.signOut();
	if (!configured) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("community"),
				subtitle: t("communitySubtitle"),
				emoji: "👥"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				emoji: "🔧",
				title: t("communityNotConfigured")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoNote, {
				tone: "warning",
				children: ["🌐 ", t("communityNeedsInternet")]
			})
		]
	});
	if (!sessionChecked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xl text-muted-foreground",
		children: "…"
	});
	if (!sessionUserId) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("community"),
			subtitle: t("communitySubtitle"),
			emoji: "👥"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthPanel, {})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					title: t("community"),
					subtitle: t("communitySubtitle"),
					emoji: "👥"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [displayName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-base text-muted-foreground",
						children: [
							t("communitySignedInAs"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: displayName })
						]
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
						variant: "outline",
						size: "md",
						onClick: signOut,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { "aria-hidden": "true" }),
							" ",
							t("communitySignOut")
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("createPost"),
				emoji: "✍️"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-semibold",
							children: t("selectCategory")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							className: "min-h-14 rounded-xl border-2 border-border bg-card px-4 text-lg",
							children: COMMUNITY_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-semibold",
							children: t("communityYourMessage")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: text,
							onChange: (e) => setText(e.target.value),
							rows: 4,
							placeholder: t("postPlaceholder"),
							className: "rounded-xl border-2 border-border bg-card p-4 text-lg"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
						onClick: () => void createPost(),
						disabled: !text.trim() || submitting,
						children: t("createPost")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base text-muted-foreground",
						children: ["⚠️ ", t("communityPrivacyNote")]
					})
				]
			}) })] }),
			actionError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "rounded-xl bg-destructive-soft p-4 text-lg font-semibold text-destructive",
				children: actionError
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Filter posts",
				children: ["All", ...COMMUNITY_CATEGORIES].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(c),
					"aria-pressed": filter === c,
					className: `min-h-12 rounded-xl border-2 px-4 text-base font-semibold ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"}`,
					children: c === "All" ? t("allFilter") : c
				}, c))
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xl text-muted-foreground",
				children: "…"
			}) : loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-destructive",
					children: t("communityLoadError")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
					variant: "outline",
					onClick: () => void loadPosts(),
					children: t("tryAgain")
				})]
			}) : visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				emoji: "📭",
				title: t("communityEmpty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "space-y-4",
				children: visible.map((p) => {
					const liked = Boolean(p.likes?.some((l) => l.user_id === sessionUserId));
					const likeCount = p.likes?.length ?? 0;
					const comments = p.comments ?? [];
					const own = p.user_id === sessionUserId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg font-bold",
										children: p.profiles?.display_name || t("communityAnonymous")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "primary",
										children: p.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base text-muted-foreground",
										children: formatTimeAgo(p.created_at, t)
									}),
									own ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => void deletePost(p.id),
										"aria-label": t("communityDelete"),
										className: "ml-auto inline-flex min-h-11 items-center gap-1 rounded-xl px-3 text-base font-semibold text-destructive hover:bg-destructive-soft",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
												"aria-hidden": "true",
												className: "size-4"
											}),
											" ",
											t("communityDelete")
										]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg leading-relaxed",
								children: p.content
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
										size: "md",
										variant: liked ? "primary" : "outline",
										onClick: () => void toggleLike(p.id),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" }),
											" ",
											t("like"),
											" · ",
											likeCount
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
										size: "md",
										variant: "outline",
										onClick: () => setOpenComments(openComments === p.id ? null : p.id),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }),
											" ",
											comments.length
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
										size: "md",
										variant: "outline",
										onClick: () => void reportPost(p.id),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { "aria-hidden": "true" }),
											" ",
											t("communityReport")
										]
									})
								]
							}),
							openComments === p.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-3 border-t border-border pt-4",
								children: [
									comments.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-muted p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base font-semibold",
											children: c.profiles?.display_name || t("communityAnonymous")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg",
											children: c.content
										})]
									}, c.id)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: comment,
										onChange: (e) => setComment(e.target.value),
										rows: 2,
										placeholder: t("communityCommentPlaceholder"),
										className: "w-full rounded-xl border-2 border-border bg-card p-3 text-lg"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
										size: "md",
										onClick: () => void addComment(p.id),
										disabled: !comment.trim(),
										children: t("comment")
									})
								]
							}) : null
						]
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base text-muted-foreground",
				children: ["🌐 ", t("communityNeedsInternet")]
			})
		]
	});
}
//#endregion
export { CommunityPage as component };
