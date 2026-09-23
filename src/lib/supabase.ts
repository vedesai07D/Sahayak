import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client for the Community feature ONLY.
 * Every other part of Sahayak works without Supabase, without a login and offline.
 *
 * Credentials come from VITE_-prefixed env vars (safe to expose: only the anon
 * key; the service-role key must NEVER appear in frontend code). When they are
 * absent, Community shows a "not configured" state instead of crashing.
 */

const supabaseUrl = import.meta.env["VITE_SUPABASE_URL"] as string | undefined;
const supabaseAnonKey = import.meta.env["VITE_SUPABASE_ANON_KEY"] as string | undefined;

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

let client: SupabaseClient | null = null;

/** Returns null when env vars are missing — callers must handle that gracefully. */
export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;
  if (!client) {
    client = createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: { persistSession: true, autoRefreshToken: true },
    });
  }
  return client;
}
