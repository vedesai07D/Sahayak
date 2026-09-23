import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Heart, Users } from "lucide-react";
import { LargeCard, PageHeader } from "@/components/elder";
import { useApp } from "@/lib/store";

export const Route = createFileRoute("/credits")({
  head: () => ({
    meta: [
      { title: "Credits — Sahayak" },
      {
        name: "description",
        content: "Sahayak was made with ❤️ at PICT, Department of Computer Engineering.",
      },
      { property: "og:title", content: "Credits — Sahayak" },
      { property: "og:description", content: "The people and place behind Sahayak." },
    ],
  }),
  component: CreditsPage,
});

function CreditsPage() {
  const { t } = useApp();

  const lines: { Icon: typeof Heart; text: string; emphasis?: boolean }[] = [
    { Icon: Heart, text: t("creditsMadeWithLove"), emphasis: true },
    { Icon: Award, text: t("creditsDept") },
    { Icon: GraduationCap, text: t("creditsGuide") },
    { Icon: Users, text: t("creditsMentor") },
  ];

  return (
    <div className="space-y-8">
      <PageHeader title={t("credits")} subtitle={t("creditsSubtitle")} emoji="🏅" />

      <div className="space-y-4">
        {lines.map(({ Icon, text, emphasis }) => (
          <LargeCard
            key={text}
            className={
              emphasis
                ? "flex items-center gap-4 border-2 border-primary/40"
                : "flex items-center gap-4"
            }
          >
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary"
              aria-hidden="true"
            >
              <Icon className="size-6" />
            </span>
            <p className={`text-xl leading-relaxed ${emphasis ? "font-bold" : ""}`}>{text}</p>
          </LargeCard>
        ))}
      </div>
    </div>
  );
}
