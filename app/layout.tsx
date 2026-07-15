import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import '../src/index.css';

const CustomCursor = dynamic(() => import('../src/components/CustomCursor'));
const FloatingWhatsApp = dynamic(() => import('../src/components/FloatingWhatsApp'));

import type { Viewport } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jagdamba Timber Works & Plywood | Premium Sourcing in Rishikesh',
  description: 'Retail and wholesale supplier of premium plywood, HDMR boards, laminates, hardware, and custom Jagdamba Doors in Rishikesh, Uttarakhand.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} scroll-smooth`}>
      <body className="relative min-h-screen bg-black text-white antialiased selection:bg-amber-300/30 selection:text-amber-100 flex flex-col justify-between">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
