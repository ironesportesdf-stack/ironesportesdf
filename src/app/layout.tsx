import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'IRON SPORTS 360º', description: 'Esportes, equipamentos e gestão integrada.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
