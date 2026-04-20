// ══════════════════════════════════════════════════════════════════
//  SIMUCARE — Configuração
// ══════════════════════════════════════════════════════════════════
//  1. Copie este arquivo para `config.js`  (mesmo nome, sem .example)
//  2. Preencha os campos abaixo com os dados do seu projeto Supabase
//  3. NUNCA comite `config.js` no GitHub (já está no .gitignore)
//
//  ⚠ Onde encontrar os valores no Supabase:
//     Project Settings → API
//       • Project URL          → cole em SUPABASE_URL
//       • anon / public key    → cole em SUPABASE_ANON_KEY
//
//  Nunca use a `service_role` key aqui — ela ignora RLS e daria
//  acesso total ao banco se vazasse. Sempre a `anon`.
// ══════════════════════════════════════════════════════════════════

window.SIMUCARE_CONFIG = {
  SUPABASE_URL: "COLE_AQUI_A_URL_DO_SEU_PROJETO",
  SUPABASE_ANON_KEY: "COLE_AQUI_A_ANON_KEY",

  // ----------------------------------------------------------------
  // Lista de professores com acesso ao sistema.
  // Para adicionar um professor novo, inclua uma linha abaixo.
  // A senha fica em texto simples apenas no navegador — compartilhe
  // com cada professor em canal privado (DM, e-mail pessoal).
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
