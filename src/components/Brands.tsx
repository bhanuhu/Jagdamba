export default function Brands() {
  const brands = [
    { name: 'Century Ply', type: 'Premium Plywood & Veneers' },
    { name: 'Action TESA', type: 'HDHMR & Particle Boards' },
    { name: 'Novopan', type: 'Engineered Wood Panels' },
    { name: 'Saptam', type: 'Luxury Flush Doors' },
    { name: 'Black Cobra', type: 'Decorative Laminates' },
    { name: 'Virgo Laminates', type: 'High-Gloss Sheets' },
    { name: 'Mazix', type: 'Premium Cabinet Hinges' },
    { name: 'HEPO', type: 'Silent Drawer Fittings' }
  ];

  return (
    <section className="relative bg-neutral-950 py-20 border-t border-b border-white/5 overflow-hidden flex items-center justify-center">
      {/* Decorative subtle sunbeams */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="sunbeam" style={{ left: '30%', transform: 'skewX(-15deg)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
        <div className="text-[9px] tracking-[0.4em] text-amber-200/70 uppercase mb-8 font-semibold">
          Authorized Distributors & Industry Partners
        </div>

        {/* Responsive Brand badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="group p-5 md:p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-amber-200/20 transition-all duration-500 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden cursor-pointer"
            >
              {/* Gold border shine overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/0 via-amber-200/0 to-amber-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="font-serif-display text-lg md:text-xl text-white group-hover:text-amber-100 tracking-wide font-light transition-colors">
                {brand.name}
              </div>
              <div className="text-[8px] md:text-[9px] text-white/40 group-hover:text-white/60 tracking-[0.15em] uppercase mt-2 font-sans font-light transition-colors">
                {brand.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
