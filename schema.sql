-- ══════════════════════════════════════════════════════════════════
--  SIMUCARE — Schema do banco (Supabase / PostgreSQL)
-- ══════════════════════════════════════════════════════════════════
--  Cole este arquivo inteiro no SQL Editor do Supabase e clique em RUN.
--  Execute UMA ÚNICA VEZ na criação do projeto.
-- ══════════════════════════════════════════════════════════════════

-- ------------------------------------------------------------------
-- TABELA: turmas
-- ------------------------------------------------------------------
create table if not exists public.turmas (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  codigo text unique,
  criada_por text,
  created_at timestamptz not null default now()
);

create index if not exists turmas_codigo_idx on public.turmas (codigo);

-- ------------------------------------------------------------------
-- TABELA: alunos
-- ------------------------------------------------------------------
create table if not exists public.alunos (
  id uuid primary key default gen_random_uuid(),
  primeiro text not null,
  sobrenome text not null,
  senha text not null,                 -- senha de 4 a 6 dígitos (ver nota)
  turma_id uuid references public.turmas(id) on delete set null,
  created_at timestamptz not null default now()
);

-- Índice case/acento-insensível para evitar cadastros duplicados do mesmo aluno
create unique index if not exists alunos_nome_uniq
  on public.alunos (lower(primeiro), lower(sobrenome));

create index if not exists alunos_turma_idx on public.alunos (turma_id);

-- ------------------------------------------------------------------
-- TABELA: resultados
-- ------------------------------------------------------------------
--  Uma nova tentativa do mesmo cenário SOBRESCREVE a anterior
--  (mantém o comportamento do sistema atual).
-- ------------------------------------------------------------------
create table if not exists public.resultados (
  id uuid primary key default gen_random_uuid(),
  aluno_id uuid not null references public.alunos(id) on delete cascade,
  cenario_id text not null,
  titulo text,
  area text,
  modalidade text,                     -- 'multipla' ou 'agendamento'
  pontuacao numeric(4,2),
  comps jsonb,                         -- array de 8 scores por competência
  reflexoes jsonb,                     -- array de textos de reflexão
  passos_info jsonb,                   -- meta dos passos (múltipla escolha)
  dados_enviados jsonb,                -- payload do agendamento (dados/agenda/materiais)
  data timestamptz not null default now(),

  unique (aluno_id, cenario_id)
);

create index if not exists resultados_aluno_idx on public.resultados (aluno_id);
create index if not exists resultados_cenario_idx on public.resultados (cenario_id);

-- ------------------------------------------------------------------
-- NOTA DE SEGURANÇA
-- ------------------------------------------------------------------
--  Neste beta, a senha do aluno é armazenada em texto simples para
--  preservar a UX do app atual (4–6 dígitos numéricos escolhidos pelo
--  aluno). Isso é aceitável para uso educacional interno, mas NÃO use
--  esse padrão em produção com dados sensíveis. Para evoluir, troque
--  pelo Supabase Auth (email + senha) e remova a coluna `senha`.
-- ------------------------------------------------------------------
