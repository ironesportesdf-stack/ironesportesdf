import Link from 'next/link';
import { ArrowRight, Dumbbell, Bike, Mountain, Shield, Waves, Search, ShoppingBag } from 'lucide-react';
const categories = [
  { name: 'Treinamento', icon: Dumbbell, description: 'Equipamentos para sua evolução' },
  { name: 'Ciclismo', icon: Bike, description: 'Aventura em cada percurso' },
  { name: 'Outdoor', icon: Mountain, description: 'Explore novos caminhos' },
  { name: 'Tático', icon: Shield, description: 'Performance e resistência' },
  { name: 'Natação', icon: Waves, description: 'Movimento dentro d’água' }
];
export default function Home() {
  return <main className="min-h-screen bg-white">
    <div className="bg-iron text-white text-center text-xs tracking-wide py-2">IRON SPORTS 360º • ESPORTE, PERFORMANCE E AVENTURA</div>
    <header className="mx-auto max-w-7xl px-5 py-6 flex items-center justify-between gap-5">
      <Link href="/" className="font-black tracking-tight text-2xl">IRON <span className="text-accent">SPORTS</span><span className="text-xs align-top ml-1">360º</span></Link>
      <nav className="hidden md:flex gap-7 text-sm font-semibold"><a href="#categorias">Categorias</a><a href="#destaques">Destaques</a><Link href="/admin">Painel administrativo</Link></nav>
      <div className="flex gap-4"><Search size={21}/><ShoppingBag size={21}/></div>
    </header>
    <section className="bg-iron text-white overflow-hidden"><div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
      <div><p className="text-red-400 uppercase text-xs font-bold tracking-[.3em] mb-5">Feito para ir além</p><h1 className="text-5xl md:text-7xl font-black leading-[1.05]">SUPERE <span className="text-red-500">SEUS</span> LIMITES.</h1><p className="text-gray-300 mt-6 text-lg max-w-lg">Esporte, aventura e equipamentos em uma experiência de compra pensada para você.</p><a href="#categorias" className="inline-flex items-center gap-3 mt-9 bg-accent px-6 py-4 font-bold rounded-sm">Explorar categorias <ArrowRight size={18}/></a></div>
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 aspect-[5/4] flex flex-col items-center justify-center text-center p-10"><Dumbbell size={110} strokeWidth={1} className="text-red-500 mb-6"/><p className="text-2xl font-black tracking-widest">FORÇA • FOCO • AÇÃO</p><p className="text-sm text-gray-400 mt-3">Espaço reservado para campanha fotográfica oficial</p></div>
    </div></section>
    <section id="categorias" className="mx-auto max-w-7xl px-6 py-20"><div className="flex justify-between items-end mb-9"><div><p className="text-accent text-xs font-bold tracking-widest">ENCONTRE SEU ESPORTE</p><h2 className="text-3xl font-black mt-2">Nossas categorias</h2></div></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">{categories.map(({name,icon:Icon,description})=><div key={name} className="border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors"><Icon size={36} className="text-forest mb-8"/><h3 className="font-bold text-lg">{name}</h3><p className="text-xs text-gray-500 mt-2">{description}</p></div>)}</div>
    </section>
    <section id="destaques" className="bg-gray-100 py-16"><div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl font-black">Produtos em destaque</h2><p className="text-gray-600 mt-3">O catálogo será exibido aqui após o cadastro de produtos e integração com Supabase.</p></div></section>
    <footer className="bg-iron text-white px-6 py-10 text-center text-sm">© IRON SPORTS 360º — Protótipo inicial • <Link className="underline" href="/admin">Administração</Link></footer>
  </main>;
}
