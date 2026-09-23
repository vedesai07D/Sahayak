import { createFileRoute } from "@tanstack/react-router";

/**
 * OPTIONAL third TTS tier — seam only, intentionally not wired into the app.
 *
 * Today Sahayak speaks via (1) pre-generated recordings under public/audio/
 * and (2) the browser's built-in speechSynthesis. Both work fully offline, so
 * this route exists purely as a future integration point for a paid/online TTS
 * provider (e.g. Google Cloud TTS, Azure Neural TTS).
 *
 * To implement later:
 *   - put the provider API key in a SERVER-SIDE env var (e.g. TTS_PROVIDER_KEY)
 *     — never a VITE_-prefixed one, so it can never reach the browser bundle;
 *   - rate-limit this route and validate the `text`/`lang` input;
 *   - keep pre-generated audio + browser TTS as the fallback so Community-style
 *     connectivity is never required for learning content.
 */
export const Route = createFileRoute("/api/tts")({
  server: {
    handlers: {
      POST: async () => {
        // Stub: no online provider is configured. Keeping this unimplemented means
        // the app never depends on internet for audio.
        return new Response(
          JSON.stringify({
            error: "Online TTS tier is not configured. Use pre-generated audio or browser speech.",
          }),
          { status: 501, headers: { "content-type": "application/json" } },
        );
      },
    },
  },
});
