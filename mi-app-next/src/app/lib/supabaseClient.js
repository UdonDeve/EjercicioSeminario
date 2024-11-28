import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bfmvcdsuaazaiwrdzcyl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmbXZjZHN1YWF6YWl3cmR6Y3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDkwOTMsImV4cCI6MjA0NzYyNTA5M30.Jy_1Euf_Mg55PNLrqPBRAn3xFmRnvHzVE2BWkgAekZk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
