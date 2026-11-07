import { login } from './actions';
export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <section className="bg-white rounded-xl shadow-sm border p-8 w-full max-w-md">
      <h1 className="text-2xl font-black">IRON SPORTS <span className="text-red-600">360º</span></h1>
      <p className="text-gray-600 mt-2 mb-6">Acesso administrativo</p>
      {error && <p role="alert" className="text-red-700 text-sm mb-4">{error === 'unauthorized' ? 'Seu usuário não possui permissão administrativa.' : 'Não foi possível entrar. Confira seus dados.'}</p>}
      <form action={login} className="space-y-4">
        <label className="block text-sm">E-mail<input type="email" name="email" required autoComplete="username" className="block w-full border rounded-lg p-3 mt-1" /></label>
        <label className="block text-sm">Senha<input type="password" name="password" required autoComplete="current-password" className="block w-full border rounded-lg p-3 mt-1" /></label>
        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white w-full rounded-lg p-3 font-bold">Entrar</button>
      </form>
    </section>
  </main>;
}
