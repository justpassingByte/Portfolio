import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/justpassingByte'),
  title: 'Thang Nguyen (@justpassingByte) | Full-Stack & Systems Engineer',
  description:
    'Product-driven Full-Stack Engineer architecting high-trust marketplaces, multi-gateway payment engines, distributed task queues, and agentic AI systems.',
  keywords: [
    'Thang Nguyen',
    'justpassingByte',
    'Full-Stack Engineer',
    'Next.js',
    'NestJS',
    'PostgreSQL',
    'Redis',
    'BullMQ',
    'System Design',
    'Agentic AI',
    'Vietnam Software Engineer',
  ],
  authors: [{ name: 'Thang Nguyen', url: 'https://github.com/justpassingByte' }],
  openGraph: {
    title: 'Thang Nguyen (@justpassingByte) | Full-Stack & Systems Engineer',
    description:
      'Architecting high-trust marketplaces, multi-gateway payment engines, distributed task queues, and agentic AI systems.',
    url: 'https://github.com/justpassingByte',
    siteName: 'Thang Nguyen Portfolio',
    images: [
      {
        url: '/me.jpg',
        width: 800,
        height: 800,
        alt: 'Thang Nguyen',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/me.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#07090E] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar />
        <main className="relative min-h-screen pt-16">{children}</main>
      </body>
    </html>
  );
}
