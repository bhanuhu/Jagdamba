import type { Metadata } from 'next';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import CustomCursor from '../src/components/CustomCursor';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';
import '../src/index.css';

import type { Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
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
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}>
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
