import { Link, useRouterState } from "@tanstack/react-router";
import {
  Award,
  BookMarked,
  BookOpen,
  Gamepad2,
  Heart,
  Home,
  Menu,
  Search,
  Settings,
  Shield,
  Siren,
  Users,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useApp } from "@/lib/store";
import { LANGUAGES } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";
import { Onboarding } from "./Onboarding";

const NAV = [
  { to: "/", key: "home", shortKey: "navHome", Icon: Home },
  { to: "/learn", key: "learn", shortKey: "navLearn", Icon: BookOpen },
  { to: "/safe", key: "staySafe", shortKey: "navSafe", Icon: Shield },
  { to: "/dictionary", key: "dictionary", shortKey: "navDict", Icon: BookMarked },
  { to: "/games", key: "games", shortKey: "navGames", Icon: Gamepad2 },
  { to: "/community", key: "community", shortKey: "community", Icon: Users },
] as const;

function LanguageSelector({ compact }: { compact?: boolean }) {
  const { state, update } = useApp();
  return (
    <div className="flex gap-1" role="group" aria-label="Language">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          onClick={() => update({ lang: l.code })}
          aria-pressed={state.lang === l.code}
          className={cn(
            "min-h-11 rounded-lg border-2 px-3 text-base font-semibold transition-colors",
            compact ? "px-2 text-sm" : "",
            state.lang === l.code
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function OfflineBanner() {
  const { t } = useApp();
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    const sync = () => setOffline(!navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);
  if (!offline) return null;
  return (
    <p role="status" className="bg-warning-soft px-4 py-3 text-center text-base font-medium">
      ⚠️ {t("offline")}
    </p>
  );
}

function SideMenu({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (to: string) => boolean;
}) {
  const { t } = useApp();
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close on navigation and lock body scroll while open
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const rowCls = (active: boolean) =>
    cn(
      "flex min-h-14 items-center gap-3 rounded-xl px-4 text-lg font-semibold transition-colors",
      active ? "bg-primary-soft text-primary" : "text-foreground hover:bg-muted",
    );

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label={t("closeMenu")}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/50"
        tabIndex={-1}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t("menu")}
        className="absolute inset-y-0 right-0 flex w-80 max-w-[85vw] flex-col overflow-y-auto border-l border-border bg-card shadow-lift"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-xl font-bold">{t("appName")}</span>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label={t("closeMenu")}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border hover:bg-muted"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
        <nav aria-label={t("menu")} className="flex flex-col gap-1 p-3">
          {NAV.map(({ to, key, Icon }) => (
            <Link key={to} to={to} className={rowCls(isActive(to))}>
              <Icon aria-hidden="true" className="size-6" />
              {t(key)}
            </Link>
          ))}
          <div className="my-2 border-t border-border" />
          <Link
            to="/emergency"
            className="flex min-h-14 items-center gap-3 rounded-xl bg-destructive-soft px-4 text-lg font-bold text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
          >
            <Siren aria-hidden="true" className="size-6" />
            {t("emergency")}
          </Link>
          <Link to="/saved" className={rowCls(isActive("/saved"))}>
            <Heart aria-hidden="true" className="size-6" />
            {t("saved")}
          </Link>
          <Link to="/search" className={rowCls(isActive("/search"))}>
            <Search aria-hidden="true" className="size-6" />
            {t("search")}
          </Link>
          <Link to="/settings" className={rowCls(isActive("/settings"))}>
            <Settings aria-hidden="true" className="size-6" />
            {t("settings")}
          </Link>
          <Link to="/credits" className={rowCls(isActive("/credits"))}>
            <Award aria-hidden="true" className="size-6" />
            {t("credits")}
          </Link>
        </nav>
      </div>
    </div>
  );
}

function EmergencyConfirm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useApp();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label={t("cancel")}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/60"
        tabIndex={-1}
      />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-label={t("emergency")}
        className="relative w-full max-w-sm rounded-2xl border-2 border-destructive bg-card p-6 shadow-lift"
      >
        <div className="flex justify-center">
          <span
            className="flex size-16 items-center justify-center rounded-2xl bg-destructive-soft text-destructive"
            aria-hidden="true"
          >
            <Siren className="size-9" />
          </span>
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold">{t("needHelpNow")}</h2>
        <div className="mt-6 grid gap-3">
          <Link
            to="/emergency"
            onClick={onClose}
            className="flex min-h-14 items-center justify-center rounded-xl bg-destructive px-6 text-xl font-bold text-destructive-foreground hover:opacity-90"
          >
            {t("openEmergencyHelp")}
          </Link>
          <button
            onClick={onClose}
            className="min-h-14 rounded-xl border-2 border-border bg-card px-6 text-xl font-semibold hover:bg-muted"
          >
            {t("cancel")}
          </button>
        </div>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const { state, t, ready } = useApp();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background">
        <p className="text-xl font-semibold">सहायक · Sahayak</p>
      </div>
    );
  }

  if (!state.onboarded) return <Onboarding />;

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <OfflineBanner />

      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label={t("appName")}>
            <BrandLogo variant="dashboard" className="size-10 sm:size-11" />
            <span className="hidden text-2xl font-bold sm:block">{t("appName")}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="ml-2 hidden items-center gap-1 xl:flex" aria-label="Main">
            {NAV.map(({ to, key, Icon }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  "inline-flex min-h-12 items-center gap-2 rounded-xl px-3 text-base font-semibold",
                  isActive(to) ? "bg-primary-soft text-primary" : "text-foreground hover:bg-muted",
                )}
              >
                <Icon aria-hidden="true" className="size-5" />
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            {/* Emergency — confirm dialog guards against accidental taps */}
            <button
              onClick={() => setConfirmOpen(true)}
              aria-label={t("emergency")}
              aria-haspopup="dialog"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border-2 border-destructive bg-destructive-soft px-2.5 sm:px-3 text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
            >
              <Siren aria-hidden="true" className="size-5 shrink-0" />
              <span className="hidden text-base font-bold sm:inline">{t("emergency")}</span>
            </button>

            {/* Side menu — all navigation lives here */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label={t("menu")}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border hover:bg-muted"
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        {/* Mobile Language Switcher */}
        <div className="mx-auto max-w-6xl px-3 sm:px-4 pb-2.5 md:hidden">
          <LanguageSelector />
        </div>
      </header>

      <main
        id="main"
        className="mx-auto min-w-0 max-w-6xl px-4 py-6 pb-[calc(8.5rem+env(safe-area-inset-bottom))] lg:pb-10"
      >
        {children}
      </main>

      {/* Mobile Bottom Navigation — short labels so nothing gets clipped */}
      <nav
        aria-label="Main"
        className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card xl:hidden shadow-lift pb-[env(safe-area-inset-bottom)]"
      >
        <ul className="mx-auto flex max-w-3xl">
          {NAV.slice(0, 5).map(({ to, shortKey, Icon }) => (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className={cn(
                  "flex min-h-16 flex-col items-center justify-center gap-0.5 px-0.5 py-2 text-center font-semibold",
                  isActive(to) ? "text-primary font-bold" : "text-muted-foreground",
                )}
                aria-current={isActive(to) ? "page" : undefined}
              >
                <Icon aria-hidden="true" className="size-6" />
                <span className="text-[11px] leading-tight sm:text-xs line-clamp-2">
                  {t(shortKey)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} isActive={isActive} />
      <EmergencyConfirm open={confirmOpen} onClose={() => setConfirmOpen(false)} />
    </div>
  );
}
