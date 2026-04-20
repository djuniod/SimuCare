-- ══════════════════════════════════════════════════════════════════
--  SIMUCARE — Row Level Security (RLS)
-- ══════════════════════════════════════════════════════════════════
--  Cole no SQL Editor do Supabase e clique em RUN, logo depois do
--  schema.sql. Execute UMA ÚNICA VEZ.
-- ══════════════════════════════════════════════════════════════════

-- Ativa RLS em todas as tabelas
alter table public.turmas     enable row level security;
alter table public.alunos     enable row level security;
alter table public.resultados enable row level security;

-- ------------------------------------------------------------------
-- POLÍTICAS PERMISSIVAS (beta educacional)
-- ------------------------------------------------------------------
--  Como neste beta NÃO usamos Supabase Auth (o app tem seu próprio
--  login de aluno/professor), precisamos permitir que o cliente
--  anônimo leia e escreva nessas tabelas. Isso é aceitável para um
--  ambiente de aula com alunos cooperativos.
--
--  ⚠ Quando evoluir para produção / múltiplas instituições, troque
--  estas políticas por regras baseadas em auth.uid() + Supabase Auth.
-- ------------------------------------------------------------------

-- TURMAS — qualquer um (app) pode ler, inserir, atualizar, deletar
drop policy if exists "turmas_select" on public.turmas;
drop policy if exists "turmas_insert" on public.turmas;
drop policy if exists "turmas_update" on public.turmas;
drop policy if exists "turmas_delete" on public.turmas;

create policy "turmas_select" on public.turmas for select to anon using (true);
create policy "turmas_insert" on public.turmas for insert to anon with check (true);
create policy "turmas_update" on public.turmas for update to anon using (true) with check (true);
create policy "turmas_delete" on public.turmas for delete to anon using (true);

-- ALUNOS — mesmas permissões
drop policy if exists "alunos_select" on public.alunos;
drop policy if exists "alunos_insert" on public.alunos;
drop policy if exists "alunos_update" on public.alunos;
drop policy if exists "alunos_delete" on public.alunos;

create policy "alunos_select" on public.alunos for select to anon using (true);
create policy "alunos_insert" on public.alunos for insert to anon with check (true);
create policy "alunos_update" on public.alunos for update to anon using (true) with check (true);
create policy "alunos_delete" on public.alunos for delete to anon using (true);

-- RESULTADOS — mesmas permissões
drop policy if exists "resultados_select" on public.resultados;
drop policy if exists "resultados_insert" on public.resultados;
drop policy if exists "resultados_update" on public.resultados;
drop policy if exists "resultados_delete" on public.resultados;

create policy "resultados_select" on public.resultados for select to anon using (true);
create policy "resultados_insert" on public.resultados for insert to anon with check (true);
create policy "resultados_update" on public.resultados for update to anon using (true) with check (true);
create policy "resultados_delete" on public.resultados for delete to anon using (true);
