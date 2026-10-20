You are a senior React / TypeScript engineer working inside the project "Sahayak" (current working directory) — a digital-education and scam-safety web app for elderly Indian users. Stack: TanStack Start + TanStack Router, React 19, Tailwind v4, shadcn/ui, localStorage state (src/lib/store.tsx), trilingual UI (en / hi / mr via src/lib/i18n.ts). Your job: fix 5 bug groups and add the listed features, in ONE pass, then verify.

*** SCOPE RULE — MOST IMPORTANT ***
Inside the 5 topics below (Quiz, Input boxes, Home progress bars, Audio controls, Videos) you have FULL FREEDOM to redesign and improve the feature — better UX, richer content, cleaner architecture, new components, new i18n keys, extra polish — as long as it stays simple and elder-friendly and fits the existing look.
OUTSIDE those 5 topics everything must stay EXACTLY as it is: the UI/theme, every other route, page, layout, feature, lesson, scam story, game, setting, color, text, translation, data structure and behaviour, plus the localStorage key/format (old saved data must still load). No unrelated refactors, renames, restyling, reformatting of untouched files or dependency changes. Before finishing, review the full diff and revert anything that is neither part of the 5 topics nor required by them.

=====================================================================
GROUND RULES (apply to everything)
=====================================================================
- Users are elderly: big tap targets (min 48px), large readable text, high contrast, calm UI, no surprise resets, no jargon. Keep the existing look (ElderButton, LargeCard, Chip, card-surface). Do not redesign — visually the app must look the same except where a part below says otherwise.
- Every new or changed user-facing string must exist in all three languages (en, hi, mr) — add keys to src/lib/i18n.ts; content in src/data/* uses the Localized / LocalizedList shapes. Hindi and Marathi must be natural, simple, correct Devanagari.
- Do NOT add new npm dependencies. Do NOT touch .env, .vercel/, package-lock.json, or src/routeTree.gen.ts (generated). Do not add new lesson topics, new scam stories, new games, new routes or new pages (new quizzes are allowed — see Part 1).
- Keep TypeScript strict-clean. No `any`, no `// @ts-ignore`. Keep the existing eslint style.
- Before editing, READ these files fully: src/components/QuizPanel.tsx, src/components/ListenButton.tsx, src/lib/speech.ts, src/lib/progress.ts, src/lib/store.tsx, src/components/elder.tsx, src/routes/index.tsx, src/routes/games.tsx, src/routes/learn.$lessonId.tsx, src/routes/safe.$storyId.tsx, src/routes/safe.index.tsx, src/routes/watch.tsx, src/routes/community.tsx, src/components/EmergencyContent.tsx, src/routes/search.tsx, src/routes/settings.tsx, src/components/AppShell.tsx, src/styles.css, src/data/content.ts, src/data/lessons.ts, src/data/scams.ts.
- Use a task list; do the 5 parts in the order below; run `npm run build` and `npx tsc --noEmit` after each part and fix everything before moving on.

=====================================================================
PART 1 — QUIZ: make it seamless, bug-free, and ≥ 20 questions
=====================================================================
Symptoms: answering wrong makes the quiz reset; sometimes the quiz resets by itself / finishes instantly.

Known causes in the code (verify, then fix all of them):
a) src/data/content.ts has only 7 QUIZ_QUESTIONS spread over 4 quizzes — quiz-whatsapp and quiz-basics have ONE question each, so the quiz "finishes" instantly and looks like a reset.
b) QuizPanel keeps index/picked/score in plain useState with no `key` at its call sites (games.tsx QuizChallenge, learn.$lessonId.tsx). When the parent re-renders with a different quizId, language switch, or the store updates (recordQuiz writes to localStorage and re-renders everything), progress can be lost or `q` becomes undefined (component returns null = blank/reset).
c) In learn.$lessonId.tsx the quiz only renders while `done` is true, and completeLesson() is a TOGGLE — tapping "Mark complete" again unmounts the quiz mid-attempt.
d) QuizPanel uses `key={opt}` for options (duplicate/identical option text across languages breaks keys), and `score` is captured in the same closure as `next()`, so the final score recorded can be stale/off by one.
e) If a quiz has 0 questions QuizPanel silently returns null.

Required fixes:
1. Rewrite QuizPanel with a single `useReducer` state machine: { status: "answering" | "answered" | "finished", index, picked, score, order } — never derive the final score from a stale closure; compute it inside the reducer, and call recordQuiz exactly once (in an effect or on finish) with the final score.
2. A WRONG answer must only reveal the correct answer + explanation, then show "Next". Nothing else changes. No auto-advance, no reset, no remount. A correct answer behaves the same (celebrate + explanation).
3. Give every call site a stable `key={quiz.id}`; keep quiz progress when the UI language changes (index/picked/score are independent of language; only the text changes).
4. Persist the in-progress attempt in sessionStorage (key per quizId, wrapped in try/catch, guarded for SSR) so a route change / accidental refresh resumes at the same question. Clear it on finish or "Try again".
5. Use index-based option keys. Guard `questions.length === 0` with a friendly message instead of null.
6. Finish screen: show score, a warm message that differs by score band (all correct / most / few), best score, a "Try again" button (which may reshuffle QUESTION order only — never option order, since `answer` is an index) and a back/continue button. Add a visible progress bar and "Question X of N".
7. Lesson page: keep showing the quiz after the lesson is completed (same as now), but once the quiz has been started it must stay mounted even if the user un-toggles completion (track `quizStarted` in sessionStorage). Do not change the completion toggle itself.
8. Questions: keep all 7 existing questions and grow the bank to at least 30 total (minimum required is 20; more is better), every one in en + hi + mr, exactly 3–4 options, a correct `answer` index, and a short kind explanation (1–2 simple sentences). Target — quiz-payments 6, quiz-internet 6, quiz-whatsapp 6, quiz-basics 6, plus TWO new quizzes added to QUIZZES: "quiz-scams" (6, about the scam stories: fake bank-officer calls, fake KYC, digital arrest, lottery/KBC, electricity-bill threat, fake customer-care numbers, screen-sharing apps, WhatsApp impersonation) and "quiz-services" (5, DigiLocker, Google Maps, bills, appointments, senior schemes). Questions must be practical and situational for elders (e.g. "A caller says your electricity will be cut tonight unless you pay now. What do you do?"), based on the existing lessons and stories; wrong options plausible, never silly.
9. Link quizzes: set `quizId: "quiz-services"` on the services lessons that lack one; add an optional `quizId` to ScamStory (src/data/scams.ts) and, at the bottom of src/routes/safe.$storyId.tsx, show a "Test yourself" section with <QuizPanel quizId="quiz-scams" …/> (same behaviour as everywhere). The Games → Quiz Challenge list must show all 6 quizzes with best scores, in its current card style.
10. Quickly check the other games in games.tsx (ScamOrSafe, SafetyCheck, WordPuzzle) for the same reset-style bug; fix only if a real bug exists.

=====================================================================
PART 2 — INPUT BOXES overflowing to the right
=====================================================================
Cause: inputs are plain <input> elements with no `w-full min-w-0 max-w-full`; inside CSS grid / <label className="grid"> their intrinsic width (size≈20) pushes the grid track wider than the viewport. Affected: src/routes/community.tsx (login/sign-up: email, password, username, post box), src/components/EmergencyContent.tsx (add emergency contact: name / relationship / phone, grid sm:grid-cols-3), src/routes/search.tsx, and any other raw <input>/<textarea>/<select> (grep for them, including settings and dictionary).
Fix:
1. Create one shared `ElderInput` (and `ElderTextarea`) in src/components/elder.tsx: `box-border block w-full min-w-0 max-w-full min-h-14 rounded-xl border-2 border-border bg-background px-4 text-lg placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30`, forwardRef, forwards all props. Use it everywhere a raw input/textarea is used.
2. Add `min-w-0` to every grid/flex parent of an input; change EmergencyContent's grid to `grid grid-cols-1 gap-3 sm:grid-cols-3` with `min-w-0` children; make the community login card `w-full max-w-md mx-auto`.
3. In src/styles.css add a safe base: `html, body { max-width: 100%; overflow-x: hidden; }`, `input, textarea, select { max-width: 100%; box-sizing: border-box; font: inherit; }`, and make sure AppShell's <main> has `min-w-0`. Also add `inputMode`/`autoComplete`/`type` correctly (tel, email, etc.) and visible <label>s.
4. Test mentally and with real viewport widths 320px, 360px, 390px, 768px, 1280px: there must be NO horizontal scrollbar on any route and no input touching/crossing the screen edge. Keep consistent 16px side gutters.

=====================================================================
PART 3 — HOME: progress bars become buttons that go to the next topic
=====================================================================
In src/routes/index.tsx the two <ProgressCard>s ("Lessons progress", "Stories progress") must be clickable/tappable:
1. Extend ProgressCard in src/components/elder.tsx with an optional `to` / `params` (use TanStack <Link>), rendering the whole card as a link (real <a>, keyboard focusable, visible focus ring, hover state, a small "Continue ›" / "पुढे चलें ›" / "पुढे जा ›" affordance + chevron icon, aria-label like "Lessons progress 40 percent — continue with <title>"). Keep the progressbar role. When no `to` is given it stays a plain card (it's also used on /learn and /safe — those must keep working).
2. Lessons bar → `lessonTrack(state).current` (first uncompleted lesson, preferring the most recently opened unfinished one — already implemented in src/lib/progress.ts) → `/learn/$lessonId`. If everything is done → `/learn` and show "All lessons done 🎉".
3. Stories bar → `storyTrack(state).current` → `/safe/$storyId`; if all read → `/safe`.
4. Show the destination title under the bar ("Next: <title>") using pick(title, state.lang).
5. Review progress.ts buildTrack for correctness: `current` must be stable (don't jump around because of `recent`), `done` must count only ids that really exist in LESSONS / SCAM_STORIES (ignore stale ids in localStorage), and percent must never exceed 100.
6. The percentage line under the bars currently shows only the lessons percentage — show both (lessons % and stories %). Leave the rest of the Home page unchanged.

=====================================================================
PART 4 — AUDIO CONTROLS (ListenButton + src/lib/speech.ts) — rewrite for reliability
=====================================================================
Symptoms: (1) Restart restarts the sound but the Pause/Restart/Stop buttons vanish (UI goes idle while audio still plays). (2) Pause then Play sometimes does nothing or restarts from the beginning; controls glitch.

Root causes to fix:
a) speak() calls `speechSynthesis.cancel()` before speaking. cancel() fires `onerror` ("interrupted"/"canceled") on the PREVIOUS utterance AFTER the new one has started; ListenButton's onError then sets status "idle" and `error=true` → controls disappear while the new speech plays. Same stale-callback race for pre-recorded <audio> (onended/onerror from the old element).
b) speechSynthesis.pause()/resume() is unreliable on Chrome (Android/desktop) and some Samsung/WebView browsers: resume() often does nothing or restarts. Long utterances also get cut off after ~15 s on Chrome.
c) Pre-recorded path: stopAudioElement() resets currentTime; "pause" works but `resume` calls play() on `currentAudio` that may already be null after stop; the manifest check + fallback can start BOTH the mp3 and TTS.
d) getVoices() is empty on first call in Chrome (voices load async); `text`/`lang` effect in ListenButton cancels speech on every prop change; no cleanup on route change when two ListenButtons exist on one page (two can play at once).

Required design — implement a small speech controller in src/lib/speech.ts and make ListenButton a thin UI over it:
1. A module-level controller with an incrementing `sessionId`. Every start/restart/stop bumps it; ALL callbacks (onend/onerror/onpause/timeupdate) must ignore events whose sessionId is stale. Ignore `error` values "interrupted" and "canceled" entirely.
2. Single source of truth for status: "idle" | "loading" | "playing" | "paused" | "error". ListenButton subscribes via useSyncExternalStore (or a tiny subscribe/emit API) so the buttons ALWAYS reflect reality. Only one reader at a time app-wide: starting a new one stops any other ListenButton (which then shows idle).
3. Browser TTS: split the text into sentence-sized chunks (split on `. ` `। ` `? ` `! ` and newlines; max ~180 chars; keep punctuation) and speak them one by one, tracking `chunkIndex`. PAUSE = cancel the current utterance and remember chunkIndex (do NOT rely on speechSynthesis.pause()). RESUME = speak again from the start of the remembered chunk (so it continues from where it paused, within one sentence). RESTART = bump session, reset chunkIndex to 0, start. STOP = bump session, cancel, idle. This also removes the Chrome 15-second cutoff. Add the keep-alive-free approach (no setInterval hacks).
4. Pre-recorded mp3: one reusable HTMLAudioElement per session; PAUSE = audio.pause() (keeps currentTime); RESUME = audio.play() from currentTime; RESTART = currentTime = 0 then play(); STOP = pause + currentTime = 0. Set status from the element's real `play`/`pause`/`ended`/`error` events (guarded by sessionId). If play() rejects or the file errors, fall back to browser TTS ONCE, without playing both. Also fall back when the manifest is empty/missing (public/audio/manifest.json currently has empty arrays — that must silently use TTS).
5. Voices: await `voiceschanged` (with a 1.5 s timeout) before choosing a voice; prefer exact locale (hi-IN, mr-IN, en-IN), then same language, then default. If no voice exists for mr/hi, still speak with the lang tag set and show a small non-blocking hint, never a dead button.
6. ListenButton UI states (keep the existing buttons, icons, labels and i18n keys — only fix the logic): idle → one big "Listen" button. playing → [Pause] [Restart] [Stop]. paused → [Resume] [Restart] [Stop]. Restart must keep the controls visible and switch status to "playing". Controls never disappear while audio is audible, and never remain while silent. All buttons ≥ 48px, with icons + text, aria-live status text ("Playing…", "Paused"), and a sensible `aria-pressed`/aria-label.
7. Stop reading when: unmounting, navigating to another route, the UI language changes, or the `text` prop changes (but NOT on unrelated re-renders — compare by value). Respect the "speech rate" setting (state.speechRate); changing the rate while playing applies on next Restart/Resume.
8. Handle `visibilitychange`/page hide: pause (not reset) so returning keeps position.
9. Add brief code comments describing the state transitions, and manually reason through: Listen→Pause→Resume, Listen→Restart, Pause→Restart, Stop→Listen, Listen on page A→navigate to B, two ListenButtons on one page (dictionary).

=====================================================================
PART 5 — VIDEOS: wire real, relevant YouTube videos (no new topics)
=====================================================================
Current video IDs in src/data/lessons.ts (`video`) and src/data/content.ts (TUTORIALS) are dead/unavailable. Replace them with the verified list below. Rules: only attach a video to the lesson whose topic matches; do NOT create new lessons/topics; lessons with no match get no video and simply hide the video block (this is correct for: pay-what-is-upi, svc-doctor-appointment, svc-utility-bills, svc-senior-schemes).

YouTube IDs (video language is Hindi for all — show a "🇮🇳 Hindi video" chip; use the same ID for en/hi/mr, i.e. set `video: { en: ID, hi: ID, mr: ID }`):

LESSON ID → primary video ID [extra IDs in order]
- basics-understanding-phone → uQ1MA17A0ZA
- basics-touchscreen → uQ1MA17A0ZA
- basics-large-text → a6mIcB4Ry8c
- basics-screen-lock → GOheHJedWHI
- basics-taking-photos → dL08ykVuuhQ
- basics-torch → hzgZGUOuvvg
- basics-volume → RK9IYSndyLw
- basics-contacts → A2KwGm6Yr4E
- wa-send-message → bitdnzMEcEw
- wa-voice-message → PZzIczw2bdc
- wa-video-call → SoJ5sp1n5OQ
- wa-delete-mistake → 0fe9nzUHEHE
- wa-group-privacy → G8OtkY3dPfY
- pay-upi-pin → i7DcdpKxPsA
- pay-qr-code → 44cq5JQUBtA [0mVT6f9e-M0]
- pay-check-balance → HUztgY119Mg [VOpd9afWZIA, kjNRJRIUhS8]
- pay-failed-refund → 1OpzcIyNOI0
- net-wifi-vs-data → AgZWcWJe3yA
- net-otp → Mnj-LhF2nug
- net-search-google → dqnxgbC_xo8
- net-safe-browsing → gXoSkk73Bu0
- net-update-apps → CkeZ2TKCvPY [QPMhnBfebQo]
- svc-navigation → nfYLyYtmzW0
- svc-digilocker → MBVeEDcBCOk

STAY-SAFE STORY → video (only where clearly the same topic; add an optional `video?: string` to ScamStory and render the shared video card in src/routes/safe.$storyId.tsx, placed after the story text and only when a video exists):
- story-fake-bank-officer, scam-otp → Mnj-LhF2nug (OTP / never share)
- story-upi-request, scam-upi-collect → i7DcdpKxPsA (UPI safety, PIN is only to send money)
No other stories get a video. (Check which of these ids are actually rendered by safe.$storyId.tsx / getStory and attach only to ids that exist.)

WATCH & LEARN page (src/routes/watch.tsx + TUTORIALS in src/data/content.ts): keep the page layout, card design and "mark complete" behaviour exactly as is. Only replace the TUTORIALS data with one entry per UNIQUE video ID above (de-duplicate uQ1MA17A0ZA), each with id, title (en = lesson topic name; hi = natural Hindi — use these where given: पिन लॉक कैसे लगाएं, मोबाइल में टच स्क्रीन कैसे चलाएं, बुजुर्गों के लिए स्मार्टफ़ोन कैसे चलाएं, मोबाइल से फोटो कैसे खींचें, फोन के अक्षर बड़े कैसे करें, व्हाट्सएप वॉइस मैसेज कैसे भेजें, व्हाट्सएप पर मैसेज कैसे भेजें, व्हाट्सएप वीडियो कॉल कैसे करें, क्यूआर कोड स्कैन करके पेमेंट कैसे करें, गूगल मैप्स से रास्ता कैसे देखें, यूपीआई ऐप से बैंक बैलेंस कैसे देखें, गूगल पर बोलकर सर्च कैसे करें, प्ले स्टोर से ऐप अपडेट कैसे करें, फोन में नंबर सेव कैसे करें — write the rest in the same style; mr = natural Marathi), a short 3-language description, category, difficulty, videoId. Remove the fake `duration` values (real durations are unknown — never invent them): make the field optional and render the chip only when present. Existing `completedVideos` ids that no longer exist are simply ignored. Remove the old dead IDs (gwSHqPFP5Wg, TnZbdHtTgAA, sGDHkbAmqzc, 0v8YDvRHtLU, R2b1U0kR5bA, u2ZMr0Cf4ZM, aO858HyFbKI, kFVGvHDh6Kk, 0lYRTfF3nJ4, 5eYYtUB9wUY) everywhere in src/. Add simple category filter chips at the top of the page (All + Basics, WhatsApp, Payments, Internet, Services, Safety, in that order) so ~24 videos are easy to browse; keep the card design unchanged.

Shared video component: create src/components/VideoCard.tsx used by the lesson page, the story page and the Watch page (replacing their inline iframe blocks; same visual style). Behaviour:
- Keep the current look of the lesson video block (card, "Watch video" heading, "requires internet" chip, tap-to-play). Add the YouTube thumbnail `https://i.ytimg.com/vi/<id>/hqdefault.jpg` as the poster behind the existing play button. When offline (navigator.onLine === false) show the offline message instead of the iframe.
- Embed URL: `https://www.youtube-nocookie.com/embed/<id>?rel=0&playsinline=1&modestbranding=1&autoplay=1`, `referrerPolicy="strict-origin-when-cross-origin"`, `allowFullScreen`, correct `allow` list, `title`.
- ALWAYS show a big secondary button "Open on YouTube" → `https://www.youtube.com/watch?v=<id>` (target _blank, rel noopener noreferrer) so if the owner disabled embedding (YouTube error 150/153) the elder can still watch. (iframe onError does not fire for that case, so do not rely on it.)
- If a lesson has extra videos, show them as a small "More videos" row of tappable thumbnails (each opens in the same player).
- Update `lessonVideoId` helper (or add `lessonVideoIds(lesson, lang): string[]`) in src/data/lessons.ts; keep `videoTitle` in 3 languages.
- Learn page / lesson cards that show a "▶ video included" chip must only show it when a video really exists.
- The Home page "video included" chip uses the same helper, so it needs no other change.

=====================================================================
FINAL VERIFICATION (mandatory before you finish)
=====================================================================
1. `npm run build` and `npx tsc --noEmit` and `npm run lint` all pass with no new errors/warnings.
2. grep proves: no old dead video IDs remain; every video ID above is referenced; every QUIZ_QUESTIONS entry has `answer` < options.length in en, hi and mr (write a quick node/ts script in the scratchpad or `/tmp`, run it, don't commit it) and total questions ≥ 30; every quizId referenced by a lesson or story exists in QUIZZES and has ≥ 5 questions; every new i18n key exists in en, hi and mr.
3. Confirm no file outside Parts 1–5 changed unintentionally (review the full diff; revert stray formatting/unrelated edits). Walk through (by reading code, or with a headless browser if available): wrong answer → explanation → next → finish → score → try again; language switch mid-quiz; refresh mid-quiz; Home progress bars navigate correctly with 0 / some / all items completed; Listen→Pause→Resume→Restart→Stop on lesson and story pages; 320px width on /community, /emergency (add contact), /search with no horizontal scroll; every lesson video opens or falls back to the YouTube link.
4. Final report (short): files changed, root cause per bug in one line each, any decisions you made, and anything I must do manually (e.g. the Supabase `.env` stays untouched).
