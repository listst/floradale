import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create the client if both URL and key are provided
let supabase: SupabaseClient | null = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  let sessionId = localStorage.getItem('property_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem('property_session_id', sessionId);
  }
  return sessionId;
}

export async function saveRentalRate(rate: number): Promise<void> {
  // Skip if Supabase is not configured
  if (!supabase) return;

  const sessionId = getSessionId();
  if (!sessionId) return;

  try {
    const { data: existing } = await supabase
      .from('user_preferences')
      .select('id')
      .eq('session_id', sessionId)
      .maybeSingle();

    if (existing) {
      await supabase
        .from('user_preferences')
        .update({ rental_rate: rate, updated_at: new Date().toISOString() })
        .eq('session_id', sessionId);
    } else {
      await supabase
        .from('user_preferences')
        .insert({ session_id: sessionId, rental_rate: rate });
    }
  } catch (error) {
    console.warn('Failed to save rental rate:', error);
  }
}

export async function loadRentalRate(): Promise<number | null> {
  // Skip if Supabase is not configured
  if (!supabase) return null;

  const sessionId = getSessionId();
  if (!sessionId) return null;

  try {
    const { data } = await supabase
      .from('user_preferences')
      .select('rental_rate')
      .eq('session_id', sessionId)
      .maybeSingle();

    return data?.rental_rate ?? null;
  } catch (error) {
    console.warn('Failed to load rental rate:', error);
    return null;
  }
}
