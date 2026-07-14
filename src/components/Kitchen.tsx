import { useState } from 'react';
import { Check } from 'lucide-react';

interface HDMRBrand {
  id: string;
  name: string;
  slogan: string;
  color: string;
  image: string;
  density: string;
  thickness: string;
  warranty: string;
}

export default function Kitchen() {
  const brands: HDMRBrand[] = [
    {
      id: 'century',
      name: 'Century HDMR',
      slogan: 'Legendary strength and high moisture resistance.',
      color: '#8a5a2b',
      image: 'https://images.unsplash.com/photo-1608626598070-2bb3615b6426?auto=format&fit=crop&w=1800&q=85',
      density: '880 kg/m³',
      thickness: '18mm, 25mm',
      warranty: 'Lifetime Warranty',
    },
    {
      id: 'tesa',
      name: 'Action TESA',
      slogan: 'Precision engineered core for heavy loads and modular fit.',
      color: '#c9a06b',
      image: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1800&q=85',
      density: '850 kg/m³',
      thickness: '12mm, 18mm',
      warranty: '15 Years',
    },
    {
      id: 'saptam',
      name: 'Saptam Boards',
      slogan: 'Contemporary craft with high density fiberboard core.',
      color: '#6b4520',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85',
      density: '820 kg/m³',
      thickness: '18mm',
      warranty: '10 Years',
    },
    {
      id: 'novopan',
      name: 'Novopan',
      slogan: 'European finish panels with high load-bearing capacity.',
      color: '#a37b45',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      density: '780 kg/m³',
      thickness: '18mm, 22mm',
      warranty: '12 Years',
    },
  ];

  const [activeBrand, setActiveBrand] = useState<HDMRBrand>(brands[0]);

  return (
    <section id="kitchen" className="relative min-h-screen bg-neutral-950 py-32 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
            03 · Kitchen
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white">
            The heart, engineered.
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Choose the HDMR core. Watch the room become itself.
          </p>
        </div>

        {/* Brand Selector Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-center w-full mt-8">
          
          {/* Left Column: Interactive Image Panel */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl bg-neutral-900 group">
            {brands.map((b) => (
              <img
                key={b.id}
                src={b.image}
                alt={b.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  activeBrand.id === b.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            {/* Live brand badge */}
            <div className="absolute bottom-6 left-6 pin-badge rounded-full px-5 py-2 text-xs tracking-widest uppercase text-white flex items-center gap-3">
              <span>{activeBrand.name}</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeBrand.color }} />
            </div>
          </div>

          {/* Right Column: Control Buttons & Specs */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-semibold">
              HDMR Boards
            </div>

            <div className="space-y-3 mb-8">
              {brands.map((b) => {
                const isActive = activeBrand.id === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setActiveBrand(b)}
                    className={`w-full text-left flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'border-amber-200/50 bg-amber-200/5 shadow-[0_4px_20px_rgba(255,200,120,0.05)]'
                        : 'border-white/10 hover:border-white/20 bg-transparent'
                    }`}
                  >
                    <div>
                      <div className="font-serif-display text-2xl text-white font-light">{b.name}</div>
                      <div className="text-[11px] text-white/50 tracking-wide mt-0.5">
                        {b.slogan.slice(0, 30)}...
                      </div>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full border border-white/20 shadow-inner flex items-center justify-center transition-transform"
                      style={{ backgroundColor: b.color }}
                    >
                      {isActive && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Specifications Details List */}
            <div className="border-t border-white/10 pt-6">
              <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-semibold">
                Technical details
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3 rounded-lg border border-white/5 bg-white/2">
                  <div className="text-[9px] tracking-[0.1em] uppercase text-white/40 mb-1">Density</div>
                  <div className="text-sm font-semibold text-amber-100">{activeBrand.density}</div>
                </div>
                <div className="p-3 rounded-lg border border-white/5 bg-white/2">
                  <div className="text-[9px] tracking-[0.1em] uppercase text-white/40 mb-1">Thickness</div>
                  <div className="text-sm font-semibold text-amber-100">{activeBrand.thickness}</div>
                </div>
                <div className="p-3 rounded-lg border border-white/5 bg-white/2">
                  <div className="text-[9px] tracking-[0.1em] uppercase text-white/40 mb-1">Warranty</div>
                  <div className="text-sm font-semibold text-amber-100">{activeBrand.warranty}</div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  'ISI-certified premium hardwood core',
                  'Zero-warp and termite proof guarantee',
                  'High moisture resistant formulation (HMR)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white/80">
                    <Check className="w-4 h-4 text-amber-200 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
