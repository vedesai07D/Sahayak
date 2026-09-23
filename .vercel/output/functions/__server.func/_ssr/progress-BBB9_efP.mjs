import { i as SCAM_STORIES, n as LESSONS } from "./scams-DamAVN7M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-BBB9_efP.js
/**
* Progress engine: turns completed ids + recency into a single progress bar
* and a "what comes next" pointer for lessons and scam stories.
* No tiers or numeric levels — just ordered content, done/total and a percent.
*/
var DIFFICULTY_RANK = {
	beginner: 0,
	comfortable: 1,
	confident: 2
};
function buildTrack(items, completed, recentIds) {
	const ordered = [...items].sort((a, b) => DIFFICULTY_RANK[a.difficulty] - DIFFICULTY_RANK[b.difficulty]);
	const doneSet = new Set(completed);
	const uncompleted = ordered.filter((i) => !doneSet.has(i.id));
	const current = uncompleted.find((i) => recentIds.includes(i.id)) ?? uncompleted[0];
	const currentIndex = current ? ordered.indexOf(current) : -1;
	const next = uncompleted.find((i) => ordered.indexOf(i) > currentIndex);
	const total = ordered.length;
	const done = total - uncompleted.length;
	return {
		ordered,
		done,
		total,
		percent: total === 0 ? 0 : Math.round(done / total * 100),
		current,
		next
	};
}
function lessonTrack(state) {
	const recentIds = state.recent.filter((r) => r.kind === "lesson").map((r) => r.id);
	return buildTrack(LESSONS, state.completedLessons, recentIds);
}
function storyTrack(state) {
	const recentIds = state.recent.filter((r) => r.kind === "story").map((r) => r.id);
	return buildTrack(SCAM_STORIES, state.completedStories ?? [], recentIds);
}
/** Per-category lesson counts for the Learn category cards. */
function categoryLessonProgress(state, categoryId) {
	const lessons = LESSONS.filter((l) => l.category === categoryId);
	return {
		done: lessons.filter((l) => state.completedLessons.includes(l.id)).length,
		total: lessons.length
	};
}
/** Keep the one-at-a-time scam cursor inside bounds. */
function clampCursor(cursor, total) {
	if (total <= 0) return 0;
	return Math.min(Math.max(cursor, 0), total - 1);
}
//#endregion
export { storyTrack as i, clampCursor as n, lessonTrack as r, categoryLessonProgress as t };
