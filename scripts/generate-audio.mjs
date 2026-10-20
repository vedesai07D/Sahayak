/**
 * Generates Microsoft Edge neural-voice recordings for every lesson and scam
 * story, so "Listen" sounds clear and the same on every phone (and works
 * offline once cached). The app already plays public/audio/<lang>/<id>.mp3
 * when it is listed in public/audio/manifest.json and falls back to the
 * browser voice otherwise.
 *
 * One-time setup (needs internet + Python):   pip install edge-tts
 * Run from the project root:                  node scripts/generate-audio.mjs
 * Regenerate everything after editing text:   node scripts/generate-audio.mjs --force
 *
 * Voices are chosen for older listeners: clear, neutral accent, steady pace.
 * Volume is boosted a little and the pace slowed slightly.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "audio");
const FORCE = process.argv.includes("--force");

const VOICES = {
  en: "en-IN-NeerjaNeural", // Indian English, clear and warm
  hi: "hi-IN-SwaraNeural", // Hindi, clear and friendly
  mr: "mr-IN-AarohiNeural", // Marathi, clear and calm
};
const RATE = "-8%";
const VOLUME = "+25%";

// Load the app's own data + translations (so the text matches the pages exactly).
// These files only import types, so a plain TypeScript transpile is enough.
const tmp = mkdtempSync(join(tmpdir(), "sahayak-audio-"));
async function load(file, name) {
  const src = readFileSync(join(ROOT, "src", file), "utf8");
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const out = join(tmp, name + ".mjs");
  writeFileSync(out, js);
  return import(pathToFileURL(out).href);
}
const { LESSONS } = await load("data/lessons.ts", "lessons");
const { SCAM_STORIES } = await load("data/scams.ts", "scams");
const { translate } = await load("lib/i18n.ts", "i18n");
rmSync(tmp, { recursive: true, force: true });

const has = (v, lang) => Boolean(v && v[lang] && (!Array.isArray(v[lang]) || v[lang].length));

function jobs(lang) {
  const list = [];
  for (const l of LESSONS) {
    if (!has(l.title, lang) || !has(l.description, lang) || !has(l.steps, lang)) continue;
    // Mirrors learn.$lessonId.tsx
    list.push({ id: l.id, text: [l.title[lang], l.description[lang], ...l.steps[lang]].join(". ") });
  }
  for (const s of SCAM_STORIES) {
    if (!["title", "story", "warningSigns", "keyLesson"].every((k) => has(s[k], lang))) continue;
    // Mirrors safe.$storyId.tsx
    list.push({
      id: s.id,
      text: `${s.title[lang]}. ${s.story[lang]}. ${translate(lang, "warningSigns")}: ${s.warningSigns[lang].join(". ")}. ${translate(lang, "keyLesson")}: ${s.keyLesson[lang]}`,
    });
  }
  return list;
}

const manifestPath = join(OUT, "manifest.json");
const manifest = { en: [], hi: [], mr: [] };
if (existsSync(manifestPath)) {
  try {
    Object.assign(manifest, JSON.parse(readFileSync(manifestPath, "utf8")));
  } catch {
    /* start from an empty manifest */
  }
}

// pip's "edge-tts" command is not always on PATH on Windows — fall back to python -m.
const RUNNERS = [["edge-tts"], ["python", "-m", "edge_tts"], ["py", "-m", "edge_tts"]];
const runner = RUNNERS.find(
  ([cmd, ...pre]) => spawnSync(cmd, [...pre, "--help"], { stdio: "ignore" }).status === 0,
);
if (!runner) {
  console.error("edge-tts not found. Install it first:  pip install edge-tts");
  process.exit(1);
}
const [runCmd, ...runPre] = runner;

let made = 0;
let failed = 0;
for (const lang of Object.keys(VOICES)) {
  mkdirSync(join(OUT, lang), { recursive: true });
  const ids = new Set(manifest[lang] ?? []);
  for (const job of jobs(lang)) {
    const file = join(OUT, lang, `${job.id}.mp3`);
    if (!FORCE && existsSync(file)) {
      ids.add(job.id);
      continue;
    }
    const txt = join(OUT, `.tmp-${lang}-${job.id}.txt`);
    writeFileSync(txt, job.text, "utf8");
    const res = spawnSync(
      runCmd,
      [...runPre, "--voice", VOICES[lang], `--rate=${RATE}`, `--volume=${VOLUME}`, "--file", txt, "--write-media", file],
      { stdio: "inherit" },
    );
    rmSync(txt, { force: true });
    if (res.status === 0 && existsSync(file)) {
      ids.add(job.id);
      made += 1;
      console.log(`✓ ${lang}/${job.id}`);
    } else {
      failed += 1;
      console.error(`✗ ${lang}/${job.id} (is edge-tts installed? pip install edge-tts)`);
    }
  }
  manifest[lang] = [...ids].sort();
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Done: ${made} generated, ${failed} failed. Manifest updated.`);
