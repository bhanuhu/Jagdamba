export default function Brands() {
  const brands = [
    { 
      name: 'Century Ply', 
      type: 'Premium Plywood & Veneers',
      logo: (
        <img 
          src="/images/century-ply-logo.png" 
          alt="Century Ply" 
          className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia(1) saturate(5) hue-rotate(345deg) brightness(0.9) contrast(1.4) transform group-hover:scale-105" 
        />
      )
    },
    { 
      name: 'Action TESA', 
      type: 'HDMR & Particle Boards',
      logo: (
        <img 
          src="/images/action-tesa-logo.png" 
          alt="Action TESA" 
          className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia(1) saturate(5) hue-rotate(345deg) brightness(0.9) contrast(1.4) transform group-hover:scale-105" 
        />
      )
    },
    { 
      name: 'Novopan', 
      type: 'Engineered Wood Panels',
      logo: (
        <svg className="w-10 h-10 text-amber-200/40 group-hover:text-amber-200 transition-all duration-500 transform group-hover:scale-105" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="12" height="12" rx="1" />
          <rect x="9" y="9" width="12" height="12" rx="1" strokeDasharray="3 3" />
        </svg>
      )
    },
    { 
      name: 'Saptam', 
      type: 'Luxury Flush Doors',
      logo: (
        <img 
          src="/images/saptam-logo.jpg" 
          alt="Saptam" 
          className="h-9 w-9 rounded-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia(1) saturate(5) hue-rotate(345deg) brightness(0.9) contrast(1.4) transform group-hover:scale-105" 
        />
      )
    },
    { 
      name: 'Black Cobra', 
      type: 'Decorative Laminates',
      logo: (
        <img 
          src="/images/black-cobra-logo.jpg" 
          alt="Black Cobra" 
          className="h-9 w-9 rounded-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia(1) saturate(5) hue-rotate(345deg) brightness(0.9) contrast(1.4) transform group-hover:scale-105" 
        />
      )
    },
    { 
      name: 'Virgo Laminates', 
      type: 'High-Gloss Sheets',
      logo: (
        <img 
          src="/images/virgo-logo.jpg" 
          alt="Virgo" 
          className="h-9 w-9 rounded-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia(1) saturate(5) hue-rotate(345deg) brightness(0.9) contrast(1.4) transform group-hover:scale-105" 
        />
      )
    },
    { 
      name: 'Mazix', 
      type: 'Premium Cabinet Hinges',
      logo: (
        <img 
          src="/images/mazix-logo.jpg" 
          alt="Mazix" 
          className="h-9 w-9 rounded-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 filter sepia(1) saturate(5) hue-rotate(345deg) brightness(0.9) contrast(1.4) transform group-hover:scale-105" 
        />
      )
    },
    { 
      name: 'HEPO', 
      type: 'Silent Drawer Fittings',
      logo: (
        <img 
          src="/images/hepo-logo.png" 
          alt="HEPO" 
          className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter brightness-0 invert transform group-hover:scale-105" 
        />
      )
    }
  ];

  return (
    <section className="relative bg-neutral-950 py-24 border-t border-b border-white/5 overflow-hidden flex items-center justify-center">
      {/* Decorative subtle sunbeams */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="sunbeam" style={{ left: '30%', transform: 'skewX(-15deg)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
        <div className="text-[9px] tracking-[0.4em] text-amber-200/70 uppercase mb-12 font-semibold">
          Authorized Distributors & Industry Partners
        </div>

        {/* Responsive Brand badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-amber-200/20 transition-all duration-500 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden cursor-default space-y-4"
            >
              {/* Gold border shine overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/0 via-amber-200/0 to-amber-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Vector Logo Stamp */}
              <div className="h-12 flex items-center justify-center">
                {brand.logo}
              </div>

              <div>
                <div className="font-serif-display text-base text-white group-hover:text-amber-100 tracking-wide font-light transition-colors">
                  {brand.name}
                </div>
                <div className="text-[8px] md:text-[9px] text-white/40 group-hover:text-white/60 tracking-[0.15em] uppercase mt-1.5 font-sans font-light transition-colors">
                  {brand.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
