import { createClient }
from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl =
"https://vzincxupmtllcqvaqchw.supabase.co/rest/v1/";

const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aW5jeHVwbXRsbGNxdmFxY2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjU4MzYsImV4cCI6MjA5NjE0MTgzNn0.3CMEusNbf2XIEwV3PNkXCAQNYHEEjyu4s5ARxOsse2g";

export const supabase =
createClient(
  supabaseUrl,
  supabaseKey
);