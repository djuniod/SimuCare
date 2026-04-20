# SimuCare — Passo a passo para colocar no ar

Este guia te leva do zero até o SimuCare **rodando online com backend
compartilhado**, onde todos os alunos e professores veem a mesma
verdade dos dados em tempo real.

**Tempo estimado na primeira vez:** 45 a 60 minutos.
**Custo:** R$ 0 — tudo dentro do plano gratuito.

## O que vamos fazer

1. Criar um banco de dados online (Supabase)
2. Rodar dois scripts SQL que criam as tabelas e as regras de acesso
3. Preencher o arquivo `config.js` com as chaves do seu Supabase
4. Subir o código no GitHub
5. Publicar o site no GitHub Pages (URL pública)
6. Testar com uma conta de aluno e uma de professor

No final você terá uma URL tipo
`https://seuusuario.github.io/simucare/` que pode compartilhar com a
turma.

---

## Pré-requisitos

Antes de começar, crie estas contas (todas gratuitas):

- **GitHub** → https://github.com (se ainda não tem)
- **Supabase** → https://supabase.com (pode entrar com sua conta GitHub)

Não precisa instalar nada no computador. Tudo é pelo navegador.

---

## PARTE 1 — Criar o projeto no Supabase

O Supabase é o "backend" — é ele que vai guardar alunos, turmas e
resultados num banco de dados online.

### 1.1 Criar um novo projeto

1. Acesse https://supabase.com e clique em **Start your project** (ou
   **Dashboard** se já estiver logado).
2. Clique em **New project**.
3. Preencha:
   - **Name:** `simucare` (ou o nome que preferir)
   - **Database password:** gere uma senha forte e **salve num lugar
     seguro** — você raramente vai usar, mas vai precisar se quiser
     acessar o banco por outras ferramentas
   - **Region:** escolha a mais próxima (para Brasil, `South America (São Paulo)`)
   - **Pricing plan:** Free
4. Clique em **Create new project**.
5. Aguarde 1–2 minutos enquanto o Supabase provisiona tudo.

### 1.2 Copiar a URL e a anon key

Quando o projeto terminar de criar:

1. No menu da esquerda, clique no ícone de engrenagem (**Project
   Settings**).
2. Clique em **API**.
3. Você vai ver duas informações importantes na seção **Project API
   keys**:
   - **Project URL** (algo tipo `https://abcdefghij.supabase.co`) →
     anota num bloco de notas
   - **anon / public** key (uma string bem longa começando com
     `eyJ...`) → anota também

> ⚠ **Não copie a `service_role` key.** Ela ignora as regras de
> segurança e NÃO deve ir para o frontend. Use sempre a `anon`.

Guarde esses dois valores — você vai usar daqui a pouco no `config.js`.

---

## PARTE 2 — Criar as tabelas e as regras de segurança

Agora você vai rodar dois scripts SQL no Supabase. Eles criam as
tabelas e definem quem pode ler e escrever.

### 2.1 Rodar o schema.sql

1. No Supabase, no menu da esquerda, clique em **SQL Editor**.
2. Clique em **+ New query** (canto superior direito).
3. Abra o arquivo `schema.sql` no seu computador, **copie todo o
   conteúdo**, e cole no editor do Supabase.
4. Clique em **Run** (ou aperte `Ctrl+Enter` / `Cmd+Enter`).
5. Deve aparecer uma mensagem **Success. No rows returned.** no canto
   inferior.

Para conferir, no menu da esquerda clique em **Table Editor**. Você
deve ver 3 tabelas: `turmas`, `alunos`, `resultados`.

### 2.2 Rodar o rls-policies.sql

1. Ainda no **SQL Editor**, clique em **+ New query** de novo.
2. Abra o arquivo `rls-policies.sql` no seu computador, copie todo o
   conteúdo e cole.
3. Clique em **Run**.
4. Deve aparecer **Success. No rows returned.** de novo.

**Pronto!** O banco está criado e pronto para receber dados.

---

## PARTE 3 — Preparar o config.js

O `config.js` é o arquivo que liga o SimuCare ao seu Supabase. Ele
fica **só na sua máquina** (não vai para o GitHub).

### 3.1 Criar o config.js

1. Na pasta do projeto, localize o arquivo `config.example.js`.
2. **Duplique** esse arquivo e renomeie a cópia para `config.js`.
3. Abra o `config.js` num editor de texto simples (Bloco de Notas,
   TextEdit, VS Code, o que você tiver).
4. Substitua:
   - `COLE_AQUI_A_URL_DO_SEU_PROJETO` → pela Project URL que você
     copiou na Parte 1.2
   - `COLE_AQUI_A_ANON_KEY` → pela anon key

Exemplo de como deve ficar o começo:

```js
window.SIMUCARE_CONFIG = {
  SUPABASE_URL: "https://abcdefghij.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  PROFESSORES: {
    david: { nome: "Prof. David", senha: "dY5mUYAj" },
    ...
  }
};
```

5. Salve o arquivo.

### 3.2 Testar localmente (opcional mas recomendado)

Antes de subir para o GitHub, vale testar no seu próprio computador:

1. Abra o `index.html` clicando duas vezes nele.
2. Tente cadastrar um aluno com qualquer nome e senha de 4 dígitos.
3. Entre como aluno e faça um cenário até o fim.
4. No Supabase, abra **Table Editor → alunos** e **resultados**. Os
   dados que você criou devem aparecer lá.

Se funcionou: tudo certo, segue para a Parte 4.

Se não funcionou: pule para a seção **Troubleshooting** no final deste
guia.

---

## PARTE 4 — Subir o código no GitHub

Agora vamos colocar o projeto num repositório GitHub para poder
publicar no GitHub Pages.

Existem dois caminhos. O **caminho A** é só pela web, sem instalar
nada (recomendado para quem não é desenvolvedor). O **caminho B** usa
Git pelo terminal (mais rápido se já conhece).

### Caminho A — Pelo site do GitHub (sem instalar nada)

#### 4A.1 Criar o repositório

1. Acesse https://github.com e faça login.
2. No canto superior direito, clique no **+** → **New repository**.
3. Preencha:
   - **Repository name:** `simucare`
   - **Description** (opcional): `Simulador de atendimento odontológico`
   - Deixe marcado **Public** (preciso para usar GitHub Pages
     gratuito) ou **Private** se tiver plano pago
   - **NÃO** marque "Add a README file" (você já tem um)
   - **NÃO** marque ".gitignore" (você já tem um)
4. Clique em **Create repository**.

#### 4A.2 Subir os arquivos

Na página que abriu, procure o link **uploading an existing file** (ou
vá em **Add file → Upload files**).

1. Arraste todos os arquivos do projeto de uma vez, **MENOS o
   `config.js`**. Os arquivos que devem ir:
   - `index.html`
   - `cenarios.js`
   - `agendamentos.js`
   - `config.example.js`
   - `schema.sql`
   - `rls-policies.sql`
   - `README.md`
   - `PASSO_A_PASSO.md`
   - `.gitignore`
2. **NÃO suba o `config.js`** — ele contém sua anon key e as senhas
   dos professores.
3. Na caixa **Commit changes** embaixo, deixe a mensagem padrão e
   clique em **Commit changes**.

### Caminho B — Pelo terminal (se já conhece Git)

```bash
cd pasta-do-simucare
git init
git add index.html cenarios.js agendamentos.js config.example.js schema.sql rls-policies.sql README.md PASSO_A_PASSO.md .gitignore
git commit -m "Versão inicial do SimuCare"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/simucare.git
git push -u origin main
```

O `.gitignore` já protege o `config.js` de ser enviado, mas **confira
no site do GitHub** depois do push que `config.js` **não** aparece na
lista de arquivos.

---

## PARTE 5 — Publicar no GitHub Pages

Agora o site vai ganhar uma URL pública.

1. No repositório do GitHub, clique em **Settings** (aba no topo).
2. No menu da esquerda, clique em **Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Em **Branch**, escolha `main` (ou `master`) e pasta `/ (root)`.
5. Clique em **Save**.
6. Aguarde 1–2 minutos. Atualize a página e aparecerá em cima:
   > Your site is live at `https://seuusuario.github.io/simucare/`

Clique no link para abrir.

### 5.1 Configurar o config.js no site publicado

Como o `config.js` não foi para o GitHub, o site publicado **ainda
não tem as credenciais** — vai aparecer um alerta pedindo para
configurar.

Você tem duas opções:

#### Opção 1 — Subir o config.js mesmo assim (mais simples)

Se o seu repositório é **Privado** (planos pagos do GitHub), dá para
subir o `config.js` direto — só você tem acesso.

Se é **Público** (plano gratuito), qualquer um pode ler. A anon key
do Supabase **foi desenhada para ser pública** (por isso chama "anon
public"). Ela só permite o que as políticas RLS deixam. No nosso
caso, as políticas permitem tudo na tabela (porque não usamos
Supabase Auth neste beta), então alguém poderia escrever dados falsos
se descobrisse a URL.

Para um beta de turma pequena, isso é aceitável — não é dado sensível
e o professor vê se aparecer algo estranho. Se preferir ir por esse
caminho:

1. No GitHub, clique em **Add file → Upload files** no seu repositório.
2. Suba o `config.js`.
3. Commit.
4. Em 1 minuto o GitHub Pages atualiza e o app funciona.

**Porém:** as senhas dos professores ficam visíveis para qualquer um
com a URL do repositório. **Troque essas senhas** se for por esse
caminho (ou use o caminho da Opção 2).

#### Opção 2 — Deixar o repositório público mas não subir config.js

Uma solução mais segura: mantém o repositório público, não sobe o
`config.js`, e em vez disso cria um **segundo repositório privado**
só com o `config.js`, ou hospeda só o HTML final em outro serviço
como Vercel/Netlify (que aceitam variáveis de ambiente).

Para manter simples neste beta, a recomendação prática é:

- **Repositório privado** no GitHub (se você tem plano Pro ou conta
  Teacher gratuita) + subir o `config.js`
- **OU** repositório público + subir o `config.js` com senhas de
  professor que você esteja disposto a trocar periodicamente

> 💡 **Dica para professores:** o GitHub dá **repositórios privados
> ilimitados gratuitos** via https://education.github.com/ (Teacher
> Pack). Vale pedir.

---

## PARTE 6 — Testar tudo

Abra a URL pública (`https://seuusuario.github.io/simucare/`) em um
navegador **normal** (não anônimo), e em outro dispositivo ou aba
anônima para simular um segundo usuário.

### 6.1 Teste como professor

1. Clique em **👩‍🏫 Professor**.
2. Use um dos usuários/senhas do `config.js` (ex.: `david` /
   `dY5mUYAj`).
3. Clique em **Entrar**.
4. No menu, vá em **Turmas** → digite um nome (ex.: "TSB 2026 Manhã")
   → **Criar**.
5. Clique em **Gerar código** na turma criada. Anote o código (ex.:
   `A7K9M3`).

Confira no Supabase → Table Editor → `turmas` → a turma deve aparecer
lá.

### 6.2 Teste como aluno

Em outra aba anônima (ou outro dispositivo):

1. Abra a mesma URL.
2. Clique em **Não tem cadastro? Cadastre-se**.
3. Preencha nome, sobrenome, senha (4 dígitos numéricos) e cole o
   código da turma.
4. Clique em **Criar cadastro**.
5. Volte para o login, entre com os dados do aluno.
6. Abra um cenário, faça até o fim, escreva a reflexão e finalize.

### 6.3 Verifique a sincronização

Volte para a aba do **professor**:

1. Clique em **Painel** no menu.
2. O cenário que o aluno acabou de fazer deve aparecer na tabela
   "Desempenho por aluno".
3. Clique em **Ver** no aluno para ver os detalhes, reflexões, etc.

**Se chegou até aqui, o sistema está funcionando!** Os dados estão no
Supabase, todo mundo vê a mesma verdade, e você pode distribuir a URL
para a turma.

---

## PARTE 7 — Como atualizar o código depois

Quando você quiser mudar alguma coisa (um cenário, um texto, um
estilo):

### Via site do GitHub

1. Abra o arquivo no GitHub.
2. Clique no ícone de lápis (canto superior direito do arquivo).
3. Edite direto no navegador.
4. Role para baixo, escreva uma mensagem de commit, clique em
   **Commit changes**.
5. Em 1–2 minutos o GitHub Pages atualiza automaticamente.

### Via terminal

```bash
# Edite os arquivos localmente
git add .
git commit -m "Descrição da mudança"
git push
```

## Como adicionar um professor novo

1. Abra o `config.js`.
2. Dentro do bloco `PROFESSORES`, adicione uma linha:
   ```js
   novoprof: { nome: "Prof. Nome", senha: "senhaforte123" },
   ```
3. Salve, faça commit e push (ou re-upload pelo site do GitHub).

## Como resetar um aluno / turma

No Supabase → **Table Editor** → clique na tabela → clique na linha →
ícone de lixeira.

Se excluir uma turma: os alunos dela ficam sem turma (não são
apagados). Se excluir um aluno: os resultados dele são apagados em
cascata.

---

## Troubleshooting

### "Configuração do Supabase ausente" ao abrir a página

O `config.js` não está sendo carregado ou tem placeholders.
- Verifique se existe um arquivo `config.js` (não `.example.js`) na
  mesma pasta do `index.html`.
- Verifique se `SUPABASE_URL` e `SUPABASE_ANON_KEY` foram preenchidos
  corretamente (sem aspas a mais, sem espaços).

### "Aluno não encontrado" logo depois de cadastrar

- Atualize a página (F5) e tente de novo.
- No Supabase, confirme que o aluno aparece na tabela `alunos`.

### Cadastro dá erro "Já existe um aluno com esse nome"

- O índice único no banco é case/acento-insensível. "Ana Silva" e
  "ana silva" colidem. Peça ao aluno para usar um sobrenome composto
  ou acentuação diferente.

### Professor loga mas não vê alunos

- No Supabase, confirme que a tabela `alunos` tem linhas.
- Abra o Console do navegador (F12 → Console). Se aparecer erro de
  permissão, confirme que o `rls-policies.sql` foi executado.

### Erro "Failed to fetch" ou "Network error"

- Confirme que a `SUPABASE_URL` está certa e começa com `https://`.
- Teste a URL no navegador — deve mostrar uma página do Supabase.

### GitHub Pages retorna 404

- Aguarde até 5 minutos após o commit; pode levar um tempo.
- Confirme que o nome do arquivo é exatamente `index.html` (minúsculo).
- Em Settings → Pages, confirme que a source está no branch correto.

### Quero migrar os dados antigos do localStorage para o banco

Se você já tinha alunos/resultados no SimuCare antigo, eles estão no
navegador de cada aluno. Para migrar:

1. Peça para cada aluno exportar o CSV pelo app antigo.
2. Você pode importar esses CSVs manualmente via Supabase → Table
   Editor → Insert → Import CSV.

Ou mais simples: considere o beta como um novo começo, e o CSV antigo
como um arquivo morto de referência.

---

## Próximos passos (quando o beta estiver estável)

1. **Domínio próprio** (`simucare.com.br`, ~R$ 40/ano) — configure no
   GitHub Pages em Settings → Pages → Custom domain.
2. **Supabase Auth** — migre a autenticação dos alunos para email +
   senha com as ferramentas nativas do Supabase. Remove a senha em
   texto simples e permite políticas RLS mais restritas.
3. **Monitoramento** — Supabase tem dashboard de uso. Vale olhar de
   vez em quando para acompanhar quanto espaço seu banco está usando.

---

## Suporte

Problemas de código: crie uma Issue no repositório do GitHub.
Problemas de conta Supabase: https://supabase.com/docs.
Problemas de GitHub: https://docs.github.com.
