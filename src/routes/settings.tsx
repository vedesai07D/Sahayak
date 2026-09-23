import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ElderButton, LargeCard, PageHeader, SectionHeader } from "@/components/elder";
import { useApp } from "@/lib/store";
import { LANGUAGES } from "@/lib/i18n";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Sahayak" },
      {
        name: "description",
        content:
          "Change language, text size, contrast and speech speed, and manage your data.",
      },
      { property: "og:title", content: "Settings — Sahayak" },
      { property: "og:description", content: "Make Sahayak comfortable for your eyes and ears." },
    ],
  }),
  component: SettingsPage,
});

function Choice({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-lg font-semibold">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`min-h-14 rounded-xl border-2 px-4 text-lg font-semibold transition-colors ${
              value === o.value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-muted"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SettingsPage() {
  const { state, t, update, resetAll } = useApp();
  const [confirming, setConfirming] = useState(false);

  const exportData = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sahayak-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const onLabel = state.lang === "hi" ? "चालू" : state.lang === "mr" ? "चालू" : "On";
  const offLabel = state.lang === "hi" ? "बंद" : state.lang === "mr" ? "बंद" : "Off";

  return (
    <div className="space-y-10">
      <PageHeader title={t("settings")} emoji="⚙️" />

      {/* Appearance & Comfort */}
      <section className="space-y-5">
        <SectionHeader title={t("appearance")} emoji="🎨" />
        <LargeCard className="space-y-5">
          <Choice
            label={t("language")}
            value={state.lang}
            options={LANGUAGES.map((l) => ({ value: l.code, label: l.label }))}
            onChange={(v) => update({ lang: v as typeof state.lang })}
          />
          <Choice
            label={t("textSize")}
            value={state.textSize}
            options={[
              { value: "normal", label: t("normal") },
              { value: "large", label: t("large") },
              { value: "xlarge", label: t("extraLarge") },
            ]}
            onChange={(v) => update({ textSize: v as typeof state.textSize })}
          />
          <Choice
            label={t("appearance")}
            value={state.theme}
            options={[
              { value: "light", label: t("light") },
              { value: "dark", label: t("dark") },
              { value: "system", label: t("system") },
            ]}
            onChange={(v) => update({ theme: v as typeof state.theme })}
          />
          <Choice
            label={t("highContrast")}
            value={state.highContrast ? "on" : "off"}
            options={[
              { value: "off", label: offLabel },
              { value: "on", label: onLabel },
            ]}
            onChange={(v) => update({ highContrast: v === "on" })}
          />
          <Choice
            label={t("reduceMotion")}
            value={state.reduceMotion ? "on" : "off"}
            options={[
              { value: "off", label: offLabel },
              { value: "on", label: onLabel },
            ]}
            onChange={(v) => update({ reduceMotion: v === "on" })}
          />
          <Choice
            label={t("speechSpeed")}
            value={state.speechRate}
            options={[
              { value: "slow", label: t("slow") },
              { value: "normal", label: t("normal") },
              { value: "fast", label: t("fast") },
            ]}
            onChange={(v) => update({ speechRate: v as typeof state.speechRate })}
          />
        </LargeCard>
      </section>

      {/* Local Storage & Data Privacy */}
      <section>
        <SectionHeader title={t("data")} emoji="🗄️" />
        <LargeCard className="space-y-4">
          <p className="text-lg text-muted-foreground">
            {t("dataStorageNote")}
          </p>
          <div className="flex flex-wrap gap-3">
            <ElderButton variant="outline" onClick={exportData}>
              {t("exportData")}
            </ElderButton>

            {!confirming ? (
              <ElderButton variant="danger" onClick={() => setConfirming(true)}>
                {t("deleteData")}
              </ElderButton>
            ) : (
              <div className="flex flex-wrap gap-2">
                <ElderButton variant="danger" onClick={() => resetAll()}>
                  {t("confirm")}
                </ElderButton>
                <ElderButton variant="ghost" onClick={() => setConfirming(false)}>
                  {t("cancel")}
                </ElderButton>
              </div>
            )}
          </div>
        </LargeCard>
      </section>
    </div>
  );
}