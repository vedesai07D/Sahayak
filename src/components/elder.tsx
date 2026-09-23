import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- ElderButton ---------------- */

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "warning";
type Size = "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:brightness-110",
  secondary: "bg-secondary text-secondary-foreground hover:brightness-95 border border-border",
  outline: "bg-card text-foreground border-2 border-border hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  danger: "bg-destructive text-destructive-foreground hover:brightness-110",
  success: "bg-success text-success-foreground hover:brightness-110",
  warning: "bg-warning text-warning-foreground hover:brightness-110",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-4 py-2 text-base gap-2",
  lg: "min-h-14 px-5 py-3 text-lg gap-3",
  xl: "min-h-16 px-6 py-4 text-xl gap-3",
};

const base =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-[filter,background-color,transform] duration-150 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none";

export function ElderButton({
  variant = "primary",
  size = "lg",
  className,
  fullWidth,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}) {
  return (
    <button
      {...props}
      className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
    />
  );
}

export function ElderLink({
  variant = "primary",
  size = "lg",
  className,
  fullWidth,
  children,
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}) {
  return (
    <Link
      {...props}
      className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
    >
      {children}
    </Link>
  );
}

/* ---------------- Layout pieces ---------------- */

export function PageHeader({
  title,
  subtitle,
  emoji,
}: {
  title: string;
  subtitle?: string;
  emoji?: string;
}) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold md:text-4xl">
        {emoji ? <span aria-hidden="true">{emoji} </span> : null}
        {title}
      </h1>
      {subtitle ? <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p> : null}
    </header>
  );
}

export function SectionHeader({
  title,
  action,
  emoji,
}: {
  title: string;
  action?: ReactNode;
  emoji?: string;
}) {
  return (
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <h2 className="text-2xl font-bold">
        {emoji ? <span aria-hidden="true">{emoji} </span> : null}
        {title}
      </h2>
      {action}
    </div>
  );
}

export function LargeCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} data-surface className={cn("card-surface p-5", className)}>
      {children}
    </div>
  );
}

export function Chip({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "primary" | "danger" | "success" | "warning" | "accent";
}) {
  const tones = {
    muted: "bg-muted text-muted-foreground",
    primary: "bg-primary-soft text-primary",
    danger: "bg-destructive-soft text-destructive",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning",
    accent: "bg-accent-soft text-accent",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function ProgressCard({
  label,
  value,
  total,
  tone = "primary",
}: {
  label: string;
  value: number;
  total: number;
  tone?: "primary" | "success" | "accent";
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  const bar = {
    primary: "bg-primary",
    success: "bg-success",
    accent: "bg-accent",
  }[tone];
  return (
    <div data-surface className="card-surface p-4">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-lg font-semibold">{label}</span>
        <span className="text-lg font-bold tabular-nums">{pct}%</span>
      </div>
      <div
        className="mt-3 h-4 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className={cn("h-full rounded-full transition-all", bar)} style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        {value} / {total}
      </p>
    </div>
  );
}

export function EmptyState({
  emoji = "📭",
  title,
  hint,
  action,
}: {
  emoji?: string;
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <div data-surface className="card-surface flex flex-col items-center p-8 text-center">
      <div className="text-5xl" aria-hidden="true">
        {emoji}
      </div>
      <p className="mt-3 text-xl font-semibold">{title}</p>
      {hint ? <p className="mt-1 text-base text-muted-foreground">{hint}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

export function InfoNote({ children, tone = "primary" }: { children: ReactNode; tone?: "primary" | "warning" }) {
  return (
    <p
      className={cn(
        "rounded-xl border p-4 text-base",
        tone === "primary"
          ? "border-border bg-primary-soft text-foreground"
          : "border-border bg-warning-soft text-foreground",
      )}
    >
      {children}
    </p>
  );
}
