import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/elder";
import { EmergencyContent } from "@/components/EmergencyContent";
import { useApp } from "@/lib/store";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Help & Helplines — Sahayak" },
      {
        name: "description",
        content:
          "Trusted family contacts, Cyber Crime 1930, National 112, Senior Citizens 14567, Ambulance 108 — one tap to call.",
      },
      { property: "og:title", content: "Emergency Help — Sahayak" },
      { property: "og:description", content: "One-tap emergency calls and instant safety steps for seniors." },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  const { t } = useApp();

  return (
    <div className="space-y-8">
      <Link
        to="/"
        className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary"
      >
        <ArrowLeft aria-hidden="true" /> {t("back")} {t("home")}
      </Link>

      <PageHeader
        title={t("emergency")}
        subtitle={t("emergencySubtitle")}
        emoji="🚨"
      />

      {/* Contacts first, then helplines, then first-aid steps */}
      <EmergencyContent />

      {/* Offline capability reminder */}
      <p className="text-base text-muted-foreground text-center">
        {t("allLessonsWorkOffline")}
      </p>
    </div>
  );
}