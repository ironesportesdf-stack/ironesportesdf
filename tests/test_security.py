from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def test_admin_authorization_is_server_side():
    layout=(ROOT/'src/app/admin/(protected)/layout.tsx').read_text()
    assert 'getUser()' in layout and 'admin_roles' in layout and "redirect('/admin/login')" in layout

def test_login_not_publicly_assigning_roles():
    sql=(ROOT/'supabase/001_admin_roles.sql').read_text()
    assert 'enable row level security' in sql.lower()
    assert 'revoke all on public.admin_roles from anon, authenticated' in sql.lower()
    assert 'grant select on public.admin_roles to authenticated' in sql.lower()
    assert 'auth.uid() = user_id' in sql

def test_no_secret_in_client():
    for f in ROOT.rglob('*.tsx'):
        assert 'SERVICE_ROLE_KEY' not in f.read_text()
