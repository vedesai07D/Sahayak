import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translate, type Lang } from "./i18n";

export type TextSize = "normal" | "large" | "xlarge";
export type Theme = "light" | "dark" | "system";
export type SkillLevel = "beginner" | "comfortable" | "confident";
export type SpeechRate = "slow" | "normal" | "fast";

export type CommunityComment = { id: string; author: string; text: string; at: number };
export type CommunityPost = {
  id: string;
  author: string;
  category: string;
  text: string;
  at: number;
  likes: number;
  comments: CommunityComment[];
  reported?: boolean;
  blocked?: boolean;
};
export type TrustedContact = {
  id: string;
  name: string;
  relationship: string;
  phone: string;
};

export type AppState = {
  version: number;
  onboarded: boolean;
  skillLevel: SkillLevel;
  lang: Lang;
  textSize: TextSize;
  highContrast: boolean;
  reduceMotion: boolean;
  theme: Theme;
  speechRate: SpeechRate;
  notify: "off" | "morning" | "afternoon" | "evening";
  completedLessons: string[];
  completedVideos: string[];
  completedStories: string[];
  scamCursor: number;
  favorites: string[];
  recent: { id: string; kind: string; title: string; at: number }[];
  quizScores: Record<string, { best: number; total: number }>;
  gameScores: Record<string, { best: number; played: number }>;
  posts: CommunityPost[];
  likedPosts: string[];
  contacts: TrustedContact[];
  safetyCheck: Record<string, boolean>;
  lastTipIndex: number;
};

const STORAGE_KEY = "sahayak.state.v1";

export const defaultState: AppState = {
  version: 1,
  onboarded: false,
  skillLevel: "beginner",
  lang: "en",
  textSize: "large",
  highContrast: false,
  reduceMotion: false,
  theme: "light",
  speechRate: "normal",
  notify: "off",
  completedLessons: [],
  completedVideos: [],
  completedStories: [],
  scamCursor: 0,
  favorites: [],
  recent: [],
  quizScores: {},
  gameScores: {},
  posts: [],
  likedPosts: [],
  contacts: [],
  safetyCheck: {},
  lastTipIndex: 0,
};

type Ctx = {
  state: AppState;
  ready: boolean;
  update: (patch: Partial<AppState> | ((s: AppState) => Partial<AppState>)) => void;
  t: (key: string) => string;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  completeLesson: (id: string) => void;
  completeVideo: (id: string) => void;
  completeStory: (id: string) => void;
  trackRecent: (item: { id: string; kind: string; title: string }) => void;
  recordQuiz: (id: string, score: number, total: number) => void;
  recordGame: (id: string, score: number) => void;
  resetAll: () => void;
};

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({
  children,
  seedPosts,
}: {
  children: ReactNode;
  seedPosts: CommunityPost[];
}) {
  const [state, setState] = useState<AppState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded: AppState = { ...defaultState, posts: seedPosts };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<AppState>;
        loaded = { ...defaultState, ...parsed };
        if (!parsed.posts || parsed.posts.length === 0) loaded.posts = seedPosts;
      }
    } catch {
      /* corrupted storage — fall back to defaults */
    }
    setState(loaded);
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage full or unavailable — app keeps working in memory */
    }
  }, [state, ready]);

  // Apply presentation settings to <html>
  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    el.setAttribute("data-text", state.textSize);
    el.setAttribute("data-motion", state.reduceMotion ? "reduced" : "full");
    el.classList.toggle("contrast-high", state.highContrast);
    el.lang = state.lang;

    const applyTheme = () => {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches === true;
      const dark = state.theme === "dark" || (state.theme === "system" && prefersDark);
      el.classList.toggle("dark", dark);
    };

    applyTheme();

    // Listen for OS theme changes when in "system" mode
    if (state.theme === "system" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", applyTheme);
      return () => mq.removeEventListener("change", applyTheme);
    }
    return undefined;
  }, [state.textSize, state.reduceMotion, state.highContrast, state.theme, state.lang]);

  const update = useCallback<Ctx["update"]>((patch) => {
    setState((s) => ({ ...s, ...(typeof patch === "function" ? patch(s) : patch) }));
  }, []);

  const value = useMemo<Ctx>(() => {
    const t = (key: string) => translate(state.lang, key);
    return {
      state,
      ready,
      update,
      t,
      isFavorite: (id) => state.favorites.includes(id),
      toggleFavorite: (id) =>
        update((s) => ({
          favorites: s.favorites.includes(id)
            ? s.favorites.filter((f) => f !== id)
            : [...s.favorites, id],
        })),
      completeLesson: (id) =>
        update((s) =>
          s.completedLessons.includes(id)
            ? { completedLessons: s.completedLessons.filter((x) => x !== id) }
            : { completedLessons: [...s.completedLessons, id] },
        ),
      completeVideo: (id) =>
        update((s) =>
          s.completedVideos.includes(id)
            ? { completedVideos: s.completedVideos.filter((x) => x !== id) }
            : { completedVideos: [...s.completedVideos, id] },
        ),
      completeStory: (id) =>
        update((s) =>
          (s.completedStories ?? []).includes(id)
            ? { completedStories: (s.completedStories ?? []).filter((x) => x !== id) }
            : { completedStories: [...(s.completedStories ?? []), id] },
        ),
      trackRecent: (item) =>
        update((s) => ({
          recent: [{ ...item, at: Date.now() }, ...s.recent.filter((r) => r.id !== item.id)].slice(
            0,
            12,
          ),
        })),
      recordQuiz: (id, score, total) =>
        update((s) => ({
          quizScores: {
            ...s.quizScores,
            [id]: { best: Math.max(score, s.quizScores[id]?.best ?? 0), total },
          },
        })),
      recordGame: (id, score) =>
        update((s) => ({
          gameScores: {
            ...s.gameScores,
            [id]: {
              best: Math.max(score, s.gameScores[id]?.best ?? 0),
              played: (s.gameScores[id]?.played ?? 0) + 1,
            },
          },
        })),
      resetAll: () => {
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {
          /* ignore */
        }
        setState({ ...defaultState, posts: seedPosts, onboarded: true });
      },
    };
  }, [state, ready, update, seedPosts]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}

export function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}
