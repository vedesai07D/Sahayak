import { useState } from "react";
import { cn } from "@/lib/utils";

type BrandVariant = "logo" | "app" | "dashboard";

// Rebrand by replacing the files in public/assets/branding/ — no code changes needed.
const SOURCES: Record<BrandVariant, string> = {
  logo: "/assets/branding/logo.png",
  app: "/assets/branding/app-logo.png",
  dashboard: "/assets/branding/dashboard-logo.png",
};

/**
 * Sahayak brand image. Falls back to the diya glyph if the PNG is missing,
 * so a deleted/renamed asset never shows a broken-image icon.
 */
export function BrandLogo({
  variant = "logo",
  className,
  alt = "",
}: {
  variant?: BrandVariant;
  className?: string;
  alt?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={cn(
          "flex items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground",
          className,
        )}
        aria-hidden="true"
      >
        🪔
      </span>
    );
  }

  return (
    <img
      src={SOURCES[variant]}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn("rounded-2xl object-contain", className)}
    />
  );
}