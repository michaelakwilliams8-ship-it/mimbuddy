import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// The forms only insert rows with the public key, so no login session is kept.
export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } },
);
