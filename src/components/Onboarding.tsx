import { useState } from "react";
import { ElderButton } from "./elder";
import { useApp, type SkillLevel } from "@/lib/store";
import { LANGUAGES, pick, type Localized } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";

const SLIDES: { emoji: string; title: Localized; text: Localized }[] = [
  {
    emoji: "🪔",
    title: { en: "Welcome to Sahayak", hi: "सहायक में आपका स्वागत है", mr: "सहायकमध्ये आपले स्वागत आहे" },
    text: {
      en: "Your friendly digital education and safety companion, designed especially for seniors.",
      hi: "वरिष्ठ नागरिकों के लिए बनाया गया आपका सरल और सुरक्षित डिजिटल साथी।",
      mr: "ज्येष्ठ नागरिकांसाठी तयार केलेला तुमचा सोपा आणि सुरक्षित डिजिटल मार्गदर्शक.",
    },
  },
  {
    emoji: "📚",
    title: { en: "Learn Step-by-Step", hi: "आराम से नया सीखें", mr: "सावकाश नवीन शिका" },
    text: {
      en: "Clear lessons on smartphones, WhatsApp, UPI payments, and online services at your own pace.",
      hi: "स्मार्टफ़ोन, व्हाट्सएप और यूपीआई भुगतान अपनी गति से सरल चरणों में सीखें।",
      mr: "स्मार्टफोन, व्हॉट्सअ‍ॅप आणि यूपीआय पेमेंट तुमच्या गतीने सोप्या पायऱ्यांत शिका.",
    },
  },
  {
    emoji: "🛡️",
    title: { en: "Stay Safe from Scams", hi: "ठगी से सुरक्षित रहें", mr: "फसवणुकीपासून सावध राहा" },
    text: {
      en: "Recognize fake bank calls, OTP tricks and phishing messages before anyone can fool you.",
      hi: "नकली बैंक कॉल, ओटीपी धोखाधड़ी और फ़िशिंग संदेशों को समय रहते पहचानना सीखें।",
      mr: "बनावट बँक कॉल, ओटीपी फसवणूक आणि संशयास्पद मेसेज वेळेत ओळखायला शिका.",
    },
  },
  {
    emoji: "🚨",
    title: { en: "One-Tap Emergency Help", hi: "एक टैप पर आपातकालीन मदद", mr: "एका टॅपवर तातडीची मदत" },
    text: {
      en: "Immediate access to 112, 1930 cyber helpline, elderline, and family contacts anytime.",
      hi: "112, 1930 साइबर हेल्पलाइन और परिवार के नंबरों पर तुरंत आपातकालीन कॉल सुविधा।",
      mr: "११२, १९३० सायबर हेल्पलाइन आणि कुटुंबाच्या नंबरवर थेट आपत्कालीन कॉल सुविधा.",
    },
  },
  {
    emoji: "🎮",
    title: { en: "Brain Games & Dictionary", hi: "दिमागी खेल और शब्दकोश", mr: "मेंदूचे खेळ आणि शब्दकोश" },
    text: {
      en: "Exercise your memory with gentle games and look up technology words in simple language.",
      hi: "आसान खेलों से याददाश्त तेज़ करें और तकनीक के शब्दों के सरल अर्थ जानें।",
      mr: "सोप्या खेळांनी स्मरणशक्ती वाढवा आणि तांत्रिक शब्दांचे सोपे अर्थ समजून घ्या.",
    },
  },
];

const LEVELS: { id: SkillLevel; emoji: string; labelKey: string; note: Localized }[] = [
  {
    id: "beginner",
    emoji: "🌱",
    labelKey: "beginner",
    note: {
      en: "I am just starting out with smartphones.",
      hi: "मैं स्मार्टफ़ोन में नया हूँ, धीरे-धीरे सीखना चाहता हूँ।",
      mr: "मी स्मार्टफोन नवीन वापरत आहे, सावकाश शिकायचे आहे.",
    },
  },
  {
    id: "comfortable",
    emoji: "🙂",
    labelKey: "comfortable",
    note: {
      en: "I manage everyday calls and WhatsApp, but want more confidence.",
      hi: "मैं कॉल और व्हाट्सएप चला लेता हूँ, पर डिजिटल भुगतान और सुरक्षा सीखना चाहता हूँ।",
      mr: "मी कॉल आणि व्हॉट्सअ‍ॅप वापरतो, पण पेमेंट आणि सुरक्षितता शिकायची आहे.",
    },
  },
  {
    id: "confident",
    emoji: "🚀",
    labelKey: "confident",
    note: {
      en: "I use apps regularly and want to master online services and fraud protection.",
      hi: "मैं ऐप्स खुद चलाता हूँ और डिजिटल सेवाएँ व उन्नत सुरक्षा सीखना चाहता हूँ।",
      mr: "मी अ‍ॅप्स वापरतो आणि प्रगत डिजिटल सेवा व फसवणुकीपासून बचाव शिकायचा आहे.",
    },
  },
];

export function Onboarding() {
  const { state, update, t } = useApp();
  const [step, setStep] = useState(0);
  const finish = (level: SkillLevel) => update({ skillLevel: level, onboarded: true });
  const slide = SLIDES[step];

  return (
    <div className="flex min-h-dvh flex-col bg-background px-4 sm:px-6 py-6 sm:py-8">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-between">
        {/* Top bar with App Logo and Language Selector — wraps on narrow screens */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="flex min-w-0 items-center gap-2 text-xl font-bold">
            <BrandLogo variant="dashboard" className="size-11 shrink-0" />
            {t("appName")}
          </span>
          <div className="flex flex-wrap gap-1" role="group" aria-label="Language">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => update({ lang: l.code })}
                aria-pressed={state.lang === l.code}
                className={cn(
                  "min-h-11 rounded-lg border-2 px-2.5 sm:px-3 font-semibold transition-colors",
                  state.lang === l.code
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:bg-muted",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Slide Content or Skill Assessment */}
        {slide ? (
          <div className="card-surface flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center shadow-lift">
            <div className="text-7xl" aria-hidden="true">
              {slide.emoji}
            </div>
            <h1 className="mt-6 text-3xl font-bold leading-tight">
              {pick(slide.title, state.lang)}
            </h1>
            <p className="mt-3 max-w-md text-xl leading-relaxed text-muted-foreground">
              {pick(slide.text, state.lang)}
            </p>
            <p className="mt-6 text-base font-semibold text-muted-foreground">
              {t("stepNumber")} {step + 1} {t("ofWord")} {SLIDES.length + 1}
            </p>
          </div>
        ) : (
          <div className="card-surface flex-1 p-6 sm:p-8 shadow-lift">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              {t("comfortQuestion")}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {state.lang === "hi"
                ? "कोई भी उत्तर ग़लत नहीं है। यह सिर्फ़ आपके लिए सही पाठ चुनने में मदद करता है।"
                : state.lang === "mr"
                  ? "कोणतेही उत्तर चुकीचे नाही. हे फक्त तुमच्यासाठी योग्य धडे निवडण्यास मदत करते."
                  : "There is no wrong answer. This only helps us suggest useful lessons."}
            </p>
            <div className="mt-6 grid gap-4">
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => finish(l.id)}
                  className="flex min-h-20 items-center gap-4 rounded-2xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-primary-soft active:scale-[0.99]"
                >
                  <span className="text-4xl shrink-0" aria-hidden="true">
                    {l.emoji}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xl font-bold">{t(l.labelKey)}</span>
                    <span className="block text-base text-muted-foreground mt-0.5">
                      {pick(l.note, state.lang)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {slide ? (
            <ElderButton size="xl" fullWidth onClick={() => setStep((s) => s + 1)}>
              {t("next")}
            </ElderButton>
          ) : null}
          <ElderButton
            variant="outline"
            size="xl"
            fullWidth
            onClick={() => update({ onboarded: true })}
          >
            {t("skipIntro")}
          </ElderButton>
        </div>
      </div>
    </div>
  );
}
