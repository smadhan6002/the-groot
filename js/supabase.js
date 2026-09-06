import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './env.js';

// Initialize and export a single reusable Supabase client instance
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Helper function to generate Supabase Storage public URLs
 * @param {string} bucket - The storage bucket name
 * @param {string} fileName - The name of the file
 * @returns {string} The public URL for the image
 */
export function getStorageImageUrl(bucket, fileName) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return data.publicUrl;
}
