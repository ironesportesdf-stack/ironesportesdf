-- Execute no SQL Editor do Supabase. Não atribui administrador automaticamente.
create table if not exists public.admin_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'admin', 'manager')),
  created_at timestamptz not null default now()
);
alter table public.admin_roles enable row level security;
revoke all on public.admin_roles from anon, authenticated;
grant select on public.admin_roles to authenticated;
drop policy if exists "Read own administrative role" on public.admin_roles;
create policy "Read own administrative role" on public.admin_roles
  for select to authenticated using (auth.uid() = user_id);
-- Após criar o usuário em Authentication > Users, atribua o proprietário
-- substituindo o UUID abaixo e executando separadamente no SQL Editor:
-- insert into public.admin_roles (user_id, role)
-- values ('UUID-DO-USUARIO', 'owner')
-- on conflict (user_id) do update set role = excluded.role;
