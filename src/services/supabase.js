import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://tpbbozlybbcssxtbzctp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYmJvemx5YmJjc3N4dGJ6Y3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0ODE2NjEsImV4cCI6MjAzNDA1NzY2MX0.jjJplzV-jozXYwS2OcacJV1lr4h1EAW-lTpUK7XwU9o';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;