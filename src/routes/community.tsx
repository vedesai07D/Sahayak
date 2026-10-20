import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Flag, LogOut, MessageCircle, Trash2 } from "lucide-react";
import { AnimatedHeart } from "@/components/AnimatedHeart";
import {
  Chip,
  ElderButton,
  ElderInput,
  ElderTextarea,
  EmptyState,
  InfoNote,
  LargeCard,
  PageHeader,
  SectionHeader,
} from "@/components/elder";
import { useApp } from "@/lib/store";
import { COMMUNITY_CATEGORIES } from "@/data/content";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Sahayak" },
      {
        name: "description",
        content:
          "A friendly space for older adults to ask questions, share tips and warn each other about scams.",
      },
      { property: "og:title", content: "Community — Sahayak" },
      { property: "og:description", content: "Ask, share and learn together." },
    ],
  }),
  component: CommunityPage,
});

/* ---------------- Types mirroring the Supabase tables (adapted from the old
   CommunityPost/CommunityComment shapes in store.tsx) ---------------- */

type Profile = { id: string; display_name: string; created_at: string };
type PostRow = {
  id: string;
  user_id: string;
  content: string;
  category: string;
  created_at: string;
  updated_at: string;
  profiles?: Profile | null;
  likes?: { id: string; user_id: string }[];
  comments?: CommentRow[];
};
type CommentRow = {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
  profiles?: Profile | null;
};

function formatTimeAgo(atIso: string, t: (k: string) => string) {
  const days = Math.floor((Date.now() - new Date(atIso).getTime()) / 86400000);
  if (days <= 0) return t("today");
  if (days === 1) return t("yesterday");
  return `${days} ${t("daysAgo")}`;
}

/* ---------------- Auth (email/password, elder-friendly: two fields only) ---------------- */

function AuthPanel() {
  const { t } = useApp();
  const supabase = getSupabase();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const submit = async () => {
    if (!supabase || busy) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    if (mode === "signin") {
      const { error: err } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      setBusy(false);
      if (err) setError(t("communityAuthFailed"));
      return;
    }
    // Username is stored as user_metadata.display_name; the DB trigger copies
    // it into profiles so chats show the username instead of the email.
    const { data, error: err } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { display_name: username.trim() } },
    });
    setBusy(false);
    if (err || !data.user || (data.user.identities?.length ?? 0) === 0) {
      setError(t("communityAuthFailed"));
      return;
    }
    // Email confirmation is on → no session yet; tell them to check their inbox
    setNotice(t("communityCheckEmail"));
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <LargeCard className="space-y-5 border-2 border-primary/40">
        <h2 className="text-2xl font-bold">{t("communityLoginTitle")}</h2>
        <p className="text-lg text-muted-foreground">{t("communityLoginHint")}</p>

        <label className="grid min-w-0 gap-1">
          <span className="text-lg font-semibold">{t("communityEmail")}</span>
          <ElderInput
            type="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="grid min-w-0 gap-1">
          <span className="text-lg font-semibold">{t("communityPassword")}</span>
          <ElderInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
          />
        </label>

        {mode === "signup" ? (
          <label className="grid min-w-0 gap-1">
            <span className="text-lg font-semibold">{t("communityUsername")}</span>
            <ElderInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
            <span className="text-base text-muted-foreground">{t("communityUsernameHint")}</span>
          </label>
        ) : null}

        {error ? (
          <p role="alert" className="text-lg font-semibold text-destructive">
            {error}
          </p>
        ) : null}

        {notice ? (
          <p role="status" className="rounded-xl bg-muted p-4 text-lg font-semibold">
            ✉️ {notice}
          </p>
        ) : null}

        <ElderButton
          fullWidth
          size="xl"
          onClick={() => void submit()}
          disabled={
            busy || !email.trim() || !password || (mode === "signup" && !username.trim())
          }
        >
          {busy
            ? mode === "signin"
              ? t("communitySigningIn")
              : t("communitySigningUp")
            : mode === "signin"
              ? t("communitySignIn")
              : t("communitySignUp")}
        </ElderButton>

        <button
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
            setNotice(null);
          }}
          className="text-lg font-semibold text-primary underline"
        >
          {mode === "signin" ? t("communityNoAccount") : t("communityHaveAccount")}
        </button>
      </LargeCard>

      <InfoNote tone="warning">🌐 {t("communityNeedsInternet")}</InfoNote>
    </div>
  );
}

/* ---------------- Community page ---------------- */

function CommunityPage() {
  const { t } = useApp();
  const configured = isSupabaseConfigured();
  const supabase = getSupabase();

  const [sessionUserId, setSessionUserId] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [sessionChecked, setSessionChecked] = useState(false);

  const [posts, setPosts] = useState<PostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState(COMMUNITY_CATEGORIES[0] ?? "General");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [openComments, setOpenComments] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  /* Session */
  useEffect(() => {
    if (!supabase) {
      setSessionChecked(true);
      return;
    }
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSessionUserId(data.session?.user.id ?? null);
      setDisplayName(
        (data.session?.user.user_metadata?.["display_name"] as string | undefined) ?? "",
      );
      setSessionChecked(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionUserId(session?.user.id ?? null);
      setDisplayName((session?.user.user_metadata?.["display_name"] as string | undefined) ?? "");
      setSessionChecked(true);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [supabase]);

  /* Load posts (posts + author profiles + like rows + comment rows in one query) */
  const loadPosts = useCallback(async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("posts")
      .select(
        "id, user_id, content, category, created_at, updated_at, profiles(id, display_name, created_at), likes(id, user_id), comments(id, post_id, user_id, content, created_at, profiles(id, display_name, created_at))",
      )
      .order("created_at", { ascending: false });
    if (error) {
      setLoadError(true);
      return;
    }
    setLoadError(false);
    setPosts((data as unknown as PostRow[]) ?? []);
  }, [supabase]);

  useEffect(() => {
    if (!supabase || !sessionUserId) return;
    setLoading(true);
    void loadPosts().finally(() => setLoading(false));
  }, [supabase, sessionUserId, loadPosts]);

  const visible = useMemo(
    () => posts.filter((p) => filter === "All" || p.category === filter),
    [posts, filter],
  );

  /* Actions — on failure keep the user's typed text and show an inline error */
  const createPost = async () => {
    if (!supabase || !sessionUserId || submitting) return;
    const body = text.trim();
    if (!body) return;
    setSubmitting(true);
    setActionError(null);
    const { error } = await supabase
      .from("posts")
      .insert({ user_id: sessionUserId, content: body, category });
    setSubmitting(false);
    if (error) {
      setActionError(t("communityActionFailed"));
      return;
    }
    setText("");
    await loadPosts();
  };

  const toggleLike = async (postId: string) => {
    if (!supabase || !sessionUserId) return;
    setActionError(null);
    const post = posts.find((p) => p.id === postId);
    const existing = post?.likes?.find((l) => l.user_id === sessionUserId);
    const { error } = existing
      ? await supabase.from("likes").delete().eq("post_id", postId).eq("user_id", sessionUserId)
      : await supabase.from("likes").insert({ post_id: postId, user_id: sessionUserId });
    if (error) {
      setActionError(t("communityActionFailed"));
      return;
    }
    await loadPosts();
  };

  const reportPost = async (postId: string) => {
    if (!supabase || !sessionUserId) return;
    setActionError(null);
    const { error } = await supabase
      .from("reports")
      .insert({ post_id: postId, user_id: sessionUserId });
    if (error) setActionError(t("communityActionFailed"));
  };

  const addComment = async (postId: string) => {
    if (!supabase || !sessionUserId) return;
    const body = comment.trim();
    if (!body) return;
    setActionError(null);
    const { error } = await supabase
      .from("comments")
      .insert({ post_id: postId, user_id: sessionUserId, content: body });
    if (error) {
      setActionError(t("communityActionFailed"));
      return;
    }
    setComment("");
    await loadPosts();
  };

  const deletePost = async (postId: string) => {
    if (!supabase || !sessionUserId) return;
    if (!window.confirm(t("communityConfirmDelete"))) return;
    setActionError(null);
    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", postId)
      .eq("user_id", sessionUserId);
    if (error) {
      setActionError(t("communityActionFailed"));
      return;
    }
    await loadPosts();
  };

  const signOut = () => void supabase?.auth.signOut();

  /* Not configured → clear state, rest of the app unaffected */
  if (!configured) {
    return (
      <div className="space-y-8">
        <PageHeader title={t("community")} subtitle={t("communitySubtitle")} emoji="👥" />
        <EmptyState emoji="🔧" title={t("communityNotConfigured")} />
        <InfoNote tone="warning">🌐 {t("communityNeedsInternet")}</InfoNote>
      </div>
    );
  }

  if (!sessionChecked) {
    return <p className="text-xl text-muted-foreground">…</p>;
  }

  /* Logged-out → auth screen only for /community */
  if (!sessionUserId) {
    return (
      <div className="space-y-8">
        <PageHeader title={t("community")} subtitle={t("communitySubtitle")} emoji="👥" />
        <AuthPanel />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <PageHeader title={t("community")} subtitle={t("communitySubtitle")} emoji="👥" />
        <div className="flex items-center gap-3">
          {displayName ? (
            <span className="text-base text-muted-foreground">
              {t("communitySignedInAs")} <strong>{displayName}</strong>
            </span>
          ) : null}
          <ElderButton variant="outline" size="md" onClick={signOut}>
            <LogOut aria-hidden="true" /> {t("communitySignOut")}
          </ElderButton>
        </div>
      </div>

      <section>
        <SectionHeader title={t("createPost")} emoji="✍️" />
        <LargeCard>
          <div className="grid min-w-0 gap-4">
            <label className="grid min-w-0 gap-1">
              <span className="text-lg font-semibold">{t("selectCategory")}</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="box-border block min-h-14 w-full min-w-0 max-w-full rounded-xl border-2 border-border bg-card px-4 text-lg"
              >
                {COMMUNITY_CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="grid min-w-0 gap-1">
              <span className="text-lg font-semibold">{t("communityYourMessage")}</span>
              <ElderTextarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                placeholder={t("postPlaceholder")}
              />
            </label>
            <ElderButton onClick={() => void createPost()} disabled={!text.trim() || submitting}>
              {t("createPost")}
            </ElderButton>
            <p className="text-base text-muted-foreground">⚠️ {t("communityPrivacyNote")}</p>
          </div>
        </LargeCard>
      </section>

      {actionError ? (
        <p
          role="alert"
          className="rounded-xl bg-destructive-soft p-4 text-lg font-semibold text-destructive"
        >
          {actionError}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts">
        {["All", ...COMMUNITY_CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`min-h-12 rounded-xl border-2 px-4 text-base font-semibold ${
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-muted"
            }`}
          >
            {c === "All" ? t("allFilter") : c}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-xl text-muted-foreground">…</p>
      ) : loadError ? (
        <div className="space-y-4">
          <p className="text-lg font-semibold text-destructive">{t("communityLoadError")}</p>
          <ElderButton variant="outline" onClick={() => void loadPosts()}>
            {t("tryAgain")}
          </ElderButton>
        </div>
      ) : visible.length === 0 ? (
        <EmptyState emoji="📭" title={t("communityEmpty")} />
      ) : (
        <section className="space-y-4">
          {visible.map((p) => {
            const liked = Boolean(p.likes?.some((l) => l.user_id === sessionUserId));
            const likeCount = p.likes?.length ?? 0;
            const comments = p.comments ?? [];
            const own = p.user_id === sessionUserId;
            return (
              <article key={p.id} className="card-surface p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-bold">
                    {p.profiles?.display_name || t("communityAnonymous")}
                  </span>
                  <Chip tone="primary">{p.category}</Chip>
                  <span className="text-base text-muted-foreground">
                    {formatTimeAgo(p.created_at, t)}
                  </span>
                  {own ? (
                    <button
                      onClick={() => void deletePost(p.id)}
                      aria-label={t("communityDelete")}
                      className="ml-auto inline-flex min-h-11 items-center gap-1 rounded-xl px-3 text-base font-semibold text-destructive hover:bg-destructive-soft"
                    >
                      <Trash2 aria-hidden="true" className="size-4" /> {t("communityDelete")}
                    </button>
                  ) : null}
                </div>
                <p className="mt-3 text-lg leading-relaxed">{p.content}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ElderButton
                    size="md"
                    variant={liked ? "primary" : "outline"}
                    onClick={() => void toggleLike(p.id)}
                  >
                    <AnimatedHeart active={liked} /> {t("like")} · {likeCount}
                  </ElderButton>
                  <ElderButton
                    size="md"
                    variant="outline"
                    onClick={() => setOpenComments(openComments === p.id ? null : p.id)}
                  >
                    <MessageCircle aria-hidden="true" /> {comments.length}
                  </ElderButton>
                  <ElderButton size="md" variant="outline" onClick={() => void reportPost(p.id)}>
                    <Flag aria-hidden="true" /> {t("communityReport")}
                  </ElderButton>
                </div>

                {openComments === p.id ? (
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    {comments.map((c) => (
                      <div key={c.id} className="rounded-xl bg-muted p-3">
                        <p className="text-base font-semibold">
                          {c.profiles?.display_name || t("communityAnonymous")}
                        </p>
                        <p className="text-lg">{c.content}</p>
                      </div>
                    ))}
                    <ElderTextarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={2}
                      placeholder={t("communityCommentPlaceholder")}
                      aria-label={t("communityCommentPlaceholder")}
                    />
                    <ElderButton
                      size="md"
                      onClick={() => void addComment(p.id)}
                      disabled={!comment.trim()}
                    >
                      {t("comment")}
                    </ElderButton>
                  </div>
                ) : null}
              </article>
            );
          })}
        </section>
      )}

      <p className="text-base text-muted-foreground">🌐 {t("communityNeedsInternet")}</p>
    </div>
  );
}
