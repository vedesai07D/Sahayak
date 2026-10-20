import { LESSONS, type Lesson } from "@/data/lessons";
import { SCAM_STORIES, type ScamStory } from "@/data/scams";
import type { AppState } from "./store";

/**
 * Progress engine: turns completed ids + recency into a single progress bar
 * and a "what comes next" pointer for lessons and scam stories.
 * No tiers or numeric levels — just ordered content, done/total and a percent.
 */

const DIFFICULTY_RANK: Record<"beginner" | "comfortable" | "confident", number> = {
  beginner: 0,
  comfortable: 1,
  confident: 2,
};

export type Track<T> = {
  ordered: T[];
  done: number;
  total: number;
  percent: number;
  /** The lesson/story the user is currently working on (most recent uncompleted). */
  current: T | undefined;
  /** The suggested next item after `current`. */
  next: T | undefined;
};

function buildTrack<T extends { id: string; difficulty: "beginner" | "comfortable" | "confident" }>(
  items: T[],
  completed: string[],
  recentIds: string[],
): Track<T> {
  const ordered = [...items].sort(
    (a, b) => DIFFICULTY_RANK[a.difficulty] - DIFFICULTY_RANK[b.difficulty],
  );
  const existing = new Set(ordered.map((i) => i.id));
  // Ignore stale ids from localStorage that no longer exist in the content.
  const doneSet = new Set(completed.filter((id) => existing.has(id)));
  const uncompleted = ordered.filter((i) => !doneSet.has(i.id));
  // Recency only counts items that still exist and are still uncompleted, so
  // `current` is stable and never points at a stale or finished item.
  const validRecent = recentIds.filter((id) => existing.has(id) && !doneSet.has(id));
  const current =
    uncompleted.find((i) => validRecent.includes(i.id)) ?? uncompleted[0];
  const currentIndex = current ? ordered.indexOf(current) : -1;
  const next = uncompleted.find((i) => ordered.indexOf(i) > currentIndex);
  const total = ordered.length;
  const done = total - uncompleted.length;
  return {
    ordered,
    done,
    total,
    percent: total === 0 ? 0 : Math.min(100, Math.round((done / total) * 100)),
    current,
    next,
  };
}

export function lessonTrack(state: AppState): Track<Lesson> {
  const recentIds = state.recent.filter((r) => r.kind === "lesson").map((r) => r.id);
  return buildTrack(LESSONS, state.completedLessons, recentIds);
}

export function storyTrack(state: AppState): Track<ScamStory> {
  const recentIds = state.recent.filter((r) => r.kind === "story").map((r) => r.id);
  return buildTrack(SCAM_STORIES, state.completedStories ?? [], recentIds);
}

/** Per-category lesson counts for the Learn category cards. */
export function categoryLessonProgress(state: AppState, categoryId: string) {
  const lessons = LESSONS.filter((l) => l.category === categoryId);
  const done = lessons.filter((l) => state.completedLessons.includes(l.id)).length;
  return { done, total: lessons.length };
}

/** Keep the one-at-a-time scam cursor inside bounds. */
export function clampCursor(cursor: number, total: number) {
  if (total <= 0) return 0;
  return Math.min(Math.max(cursor, 0), total - 1);
}