import type { Metadata } from 'next';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import CustomCursor from '../src/components/CustomCursor';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';
import '../src/index.css';

import type { Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Jagdamba Timber Works & Plywood | Premium Sourcing in Rishikesh',
  description: 'Retail and wholesale supplier of premium plywood, HDMR boards, laminates, hardware, and custom Jagdamba Doors in Rishikesh, Uttarakhand.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
