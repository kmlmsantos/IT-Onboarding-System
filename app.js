
// app.js
import { supabase } from './supabase.js';

// Load Data
export async function loadData() {
  const { data, error } = await supabase.from('employees').select('*');
  if (error) console.error("Error loading:", error);
  else {
    window.data = data;
    render(); // Assumes 'render' is defined globally in index.html
  }
}

// Save Data
export async function saveData(payload) {
  const { error } = await supabase.from('employees').insert([payload]);
  if (error) alert("Error: " + error.message);
  else {
    alert("Saved!");
    loadData();
  }
}
