import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect('/admin/login');
  const { data: role, error: roleError } = await supabase.from('admin_roles')
    .select('role').eq('user_id', user.id).maybeSingle();
  if (roleError || !role || !['owner', 'admin', 'manager'].includes(role.role)) redirect('/admin/login?error=unauthorized');
  return <>{children}</>;
}
