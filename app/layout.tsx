import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Horizonte | Brasil Mobile RP',
  description:
    'Baixe Horizonte, um jogo mobile RP de simulacao de vida inspirado no Brasil com carros, motos, policia, crime e comunidade online.',
  openGraph: {
    title: 'Horizonte | Brasil Mobile RP',
    description:
      'Viva um RP mobile inspirado no Brasil com veiculos, carreiras, missoes e amigos online.',
    images: ['/horizonte-hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizonte | Brasil Mobile RP',
    description:
      'Viva um RP mobile inspirado no Brasil com veiculos, carreiras, missoes e amigos online.',
    images: ['/horizonte-hero.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

