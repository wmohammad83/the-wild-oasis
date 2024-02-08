
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hoejqdlibyhxlkekbtqm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvZWpxZGxpYnloeGxrZWtidHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNDE5NzcsImV4cCI6MjAyMjkxNzk3N30.HprjebN6hJ2uafSDOLILmESlHERwbmenk-2aQQ_137M";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase