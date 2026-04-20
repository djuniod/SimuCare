# SimuCare

Simulador web de atendimento odontológico para uso em cursos e faculdades.
Alunos praticam a condução de casos clínicos através de cenários de múltipla
escolha com mecânica pedagógica A+B e atividades de agendamento. Professores
acompanham o desempenho de cada turma em tempo real.

## Stack

- **Frontend:** HTML + CSS + JavaScript puro (sem build step)
- **Backend:** Supabase (PostgreSQL gerenciado + API REST)
- **Hospedagem:** GitHub Pages (ou Vercel/Netlify)

## Estrutura do repositório

```
simucare/
├── index.html            Aplicativo principal
├── cenarios.js           Casos clínicos de múltipla escolha
├── agendamentos.js       Casos de agendamento
├── config.example.js     Template de configuração (comitado)
├── config.js             Suas credenciais (NÃO comitado, .gitignore)
├── schema.sql            Script de criação do banco (rodar 1× no Supabase)
├── rls-policies.sql      Políticas de segurança (rodar 1× no Supabase)
├── PASSO_A_PASSO.md      Guia completo de implantação
├── README.md             Este arquivo
└── .gitignore
```

## Como colocar para funcionar

O processo completo — criar projeto no Supabase, rodar SQLs, configurar
o `config.js`, subir no GitHub e ativar o GitHub Pages — está descrito
passo a passo em **[PASSO_A_PASSO.md](PASSO_A_PASSO.md)**.

Resumo em três linhas:

1. Criar projeto no Supabase e rodar `schema.sql` + `rls-policies.sql`
2. Copiar `config.example.js` para `config.js` e preencher URL e anon key
3. `git push` para GitHub → ativar Pages → pronto

## Como funciona a persistência

Toda a informação (alunos, turmas, resultados, reflexões) fica em um banco
PostgreSQL no Supabase. Qualquer dispositivo que abre o app vê a mesma
verdade: quando um aluno termina um cenário, o professor já consegue ver
o resultado no painel dele, sem precisar exportar CSV nem depender do
navegador local.

A versão original do SimuCare guardava tudo em `localStorage`, o que só
funcionava no dispositivo onde o dado foi criado. Essa versão resolve
isso centralizando no Supabase.

## Custos

Rodando com as ferramentas gratuitas (Supabase free tier + GitHub Pages),
o custo é **R$ 0** para um beta com dezenas/centenas de alunos.
Ver [PASSO_A_PASSO.md](PASSO_A_PASSO.md) para detalhes de limites.

## Segurança — aviso

Neste beta, senhas de alunos ficam em texto simples no banco e as
políticas de Row Level Security são permissivas (qualquer cliente
com a anon key pode ler/gravar nas tabelas). Isso é aceitável para
uso educacional interno com alunos cooperativos, mas **não é adequado
para produção pública**. Para evoluir, migre a autenticação para
Supabase Auth e restrinja as políticas a `auth.uid()`.
