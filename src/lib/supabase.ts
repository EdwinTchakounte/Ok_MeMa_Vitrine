import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Only create client if we have valid environment variables
export const supabase = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key' 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface Meditation {
  id: string;
  title_fr: string;
  title_en: string;
  content_fr: string;
  content_en: string;
  youtube_url?: string;
  thumbnail_url?: string;
  date: string;
  created_at: string;
}

export async function getMeditations(): Promise<Meditation[]> {
  try {
    if (!supabase) {
      console.warn('Supabase not configured, returning empty meditations');
      return [];
    }
    
    const { data, error } = await supabase
      .from('meditations')
      .select('*')
      .order('date', { ascending: false })
      .limit(6);

    if (error) {
      console.error('Error fetching meditations:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching meditations:', error);
    return [];
  }
}

export async function submitContact(name: string, email: string, message: string) {
  try {
    if (!supabase) {
      console.warn('Supabase not configured, contact submission disabled');
      return false;
    }
    
    const { error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error submitting contact:', error);
    return false;
  }
}