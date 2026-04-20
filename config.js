// ══════════════════════════════════════════════════════════════════
//  SIMUCARE — Configuração
// ══════════════════════════════════════════════════════════════════
//  Este arquivo conecta o SimuCare ao seu banco de dados Supabase.
//  NUNCA comite no GitHub (já está no .gitignore por segurança).
// ══════════════════════════════════════════════════════════════════

window.SIMUCARE_CONFIG = {
  SUPABASE_URL: "https://urdsvyszymbbxibhslhk.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZHN2eXN6eW1iYnhpYmhzbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NTAzMDQsImV4cCI6MjA5MjIyNjMwNH0.gnEHF0Gceu41T9eNE1G_Q6TEoMAKA7AoJyyhpCGP1dc",

  // ----------------------------------------------------------------
  // Lista de professores com acesso ao sistema.
  // Para adicionar um professor novo, inclua uma linha abaixo.
  // ----------------------------------------------------------------
  PROFESSORES: {
    david:    { nome: "Prof. David",    senha: "dY5mUYAj" },
    milton:   { nome: "Prof. Milton",   senha: "ruw6dJjq" },
    mirna:    { nome: "Prof. Mirna",    senha: "A8n3SFYX" },
    janaina:  { nome: "Prof. Janaína",  senha: "hGH01Gj5" },
    fernando: { nome: "Prof. Fernando", senha: "zpx0erox" },
    paula:    { nome: "Prof. Paula",    senha: "6rg1onPN" }
  }
};
