import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Living', href: '#living' },
    { name: 'Kitchen', href: '#kitchen' },
    { name: 'Bedroom', href: '#bedroom' },
    { name: 'Studio', href: '#studio' },
    { name: 'Configurator', href: '#configurator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="font-serif-display text-lg md:text-xl tracking-wider text-amber-100 flex items-center gap-3">
            <img 
              src="/favicon.png" 
              alt="Jagdamba Logo" 
              className="h-11 md:h-14 w-auto object-contain rounded border border-amber-200/10 shadow-lg shadow-amber-950/20 bg-neutral-950/40 p-0.5"
            />
            <span className="flex flex-col md:flex-row md:items-center">
              Jagdamba
              <span className="text-amber-200/60 text-[10px] md:ml-2 tracking-[0.3em] font-sans font-light uppercase">
                TIMBER WORKS
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] tracking-[0.25em] uppercase text-white/60 hover:text-amber-200 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Get Quote Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-semibold uppercase px-5 py-2.5 rounded-full bg-amber-200 text-black hover:bg-amber-100 transition-colors"
            >
              Get Quote
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-200/40 text-white/70"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg tracking-[0.3em] uppercase text-white/80 hover:text-amber-200 transition-colors font-serif-display"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-[10px] tracking-[0.2em] font-semibold uppercase px-8 py-3 rounded-full bg-amber-200 text-black hover:bg-amber-100 transition-colors"
          >
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
}
