/**
 * Supabase Configuration
 * 
 * IMPORTANT SECURITY NOTES:
 * 1. Only use the ANON (public) key in client-side code
 * 2. NEVER expose your service_role key in the browser
 * 3. Set up Row Level Security (RLS) policies in Supabase dashboard
 */

// Supabase Configuration
const SUPABASE_URL = 'https://eawqkogxwlxcginvmbyi.supabase.co';

// Anon/Public key - Safe for client-side use
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhd3Frb2d4d2x4Y2dpbnZtYnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NjA0MTEsImV4cCI6MjA3NjUzNjQxMX0.gsIuHADBwp8szOkQuu3DBP8qEEw69akSGhrmAdnKgiw';

// Initialize Supabase client
let supabaseClient = null;

// Function to initialize Supabase
function initSupabase() {
    if (typeof supabase === 'undefined') {
        console.error('Supabase library not loaded. Please include the Supabase CDN script.');
        return null;
    }
    
    if (!supabaseClient) {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    
    return supabaseClient;
}

// Export for use in other files
window.getSupabaseClient = initSupabase;
