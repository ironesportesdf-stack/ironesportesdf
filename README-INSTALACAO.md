# IRON SPORTS 360º — Etapa 1: login administrativo

Pacote incremental: copie os arquivos **sobre o repositório atual**, preservando os arquivos não incluídos. Não substitua o projeto inteiro por este ZIP.

1. Execute `npm install @supabase/supabase-js @supabase/ssr` na raiz do projeto; confirme que o `package.json` e o lockfile foram atualizados e faça commit deles.
2. Copie `src/` para a raiz do projeto, mesclando as pastas. **Mova** o arquivo existente `src/app/admin/page.tsx` para `src/app/admin/(protected)/page.tsx` (remova o original, não duplique). O grupo `(protected)` não altera a URL `/admin`.
3. No Supabase SQL Editor execute `supabase/001_admin_roles.sql`. Confirme previamente se já existe uma tabela `admin_roles` com outro formato; nesse caso adapte a migração em vez de executá-la sem revisão.
4. Em Supabase Authentication > Users, crie ou localize seu usuário, copie o UUID e execute separadamente o INSERT comentado no fim do SQL, trocando `UUID-DO-USUARIO` pelo valor real.
5. Na Vercel > Project > Settings > Environment Variables, configure `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` para Production, Preview e Development conforme o ambiente. **Não** use service_role nem publique segredos privados. Redeploy após salvar.
6. Verifique `/admin/login`, login válido, login inválido, usuário comum sem perfil e logout. A página `/admin` deve exigir sessão e papel autorizado.
7. O dashboard antigo contém aviso de demonstração; ainda não possui dados reais. Para botão de saída, importe `logout` de `@/app/admin/login/actions` no dashboard e renderize `<form action={logout}><button type="submit">Sair</button></form>`.

Nota: este pacote inclui apenas a camada de autenticação. As rotas futuras de API e mutações de dados também devem validar autorização no servidor; o layout sozinho não as protege. Antes de disponibilizar a aplicação para clientes, validar as regras RLS das demais tabelas.
