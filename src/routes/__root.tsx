import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AppProvider } from "@/lib/store";
import { AppShell } from "@/components/AppShell";
import { SEED_POSTS } from "@/data/content";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center card-surface p-8 shadow-lift">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold">पेज नहीं मिला · Page not found</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          यह पेज उपलब्ध नहीं है। आइए आपको सुरक्षित मुख्यपृष्ठ पर वापस ले चलते हैं।
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-6 text-lg font-bold text-primary-foreground shadow-lift hover:brightness-110"
          >
            🏠 मुख्यपृष्ठ · Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center card-surface p-8 shadow-lift">
        <h1 className="text-2xl font-bold">कुछ गड़बड़ हुई · Something went wrong</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          आपकी कोई भी सहेजी गई जानकारी खोई नहीं है।
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-6 text-lg font-bold text-primary-foreground shadow-lift hover:brightness-110"
          >
            🔄 फिर कोशिश करें · Try Again
          </button>
          <Link
            to="/"
            className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-border bg-card px-6 text-lg font-bold"
          >
            🏠 मुख्यपृष्ठ · Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sahayak — Learn. Stay Safe. Stay Connected." },
      {
        name: "description",
        content:
          "Sahayak is a friendly digital education and safety companion for older adults: simple lessons, scam awareness and brain games.",
      },
      { name: "theme-color", content: "#1b6b72" },
      { name: "theme-color", content: "#1d2230", media: "(prefers-color-scheme: dark)" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/assets/branding/app-logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/assets/branding/app-logo.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// Applies the saved theme before first paint so dark-mode users don't
// see a flash of the light theme on load (runs before React hydrates).
const THEME_INIT_SCRIPT = `try{var s=JSON.parse(localStorage.getItem("sahayak.state.v1")||"{}");var d=s.theme==="dark"||(s.theme==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider seedPosts={SEED_POSTS}>
        <AppShell>
          {/* Required: nested routes render here. */}
          <Outlet />
        </AppShell>
      </AppProvider>
    </QueryClientProvider>
  );
}
