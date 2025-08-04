import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://euumovpwxxkmgplpntwp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dW1vdnB3eHhrbWdwbHBudHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNzQyNDIsImV4cCI6MjA2OTc1MDI0Mn0.xNLh8LN0q1_uCuIcyUMD7ktqKhgOPWZo7Zn00ZKx89k';

export const supabase = createClient(supabaseUrl, supabaseKey);
