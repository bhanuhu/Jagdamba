"use client";

import { useState } from 'react';

interface Hotspot {
  id: string;
  name: string;
  desc: string;
  material: string;
  top: string;
  left: string;
}

export default function LivingRoom() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 'tv-unit',
      name: 'TV Unit',
      desc: 'Sleek floating console with concealed cable runs.',
      material: 'Century HDMR + Walnut Veneer',
      top: '55%',
      left: '30%',
    },
    {
      id: 'wall-panel',
      name: 'Wall Panel',
      desc: 'Seamless textured wall cladding with accent lighting.',
      material: 'Charcoal Fluted Louvers',
      top: '38%',
      left: '68%',
    },
    {
      id: 'coffee-table',
      name: 'Coffee Table',
      desc: 'Low-profile minimalist table with grain matching.',
      material: 'Solid Teak + Saptam Laminate',
      top: '78%',
      left: '50%',
    },
  ];

  return (
    <section id="living" className="relative min-h-screen bg-black py-32 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
            02 · Living Room
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white">
            Where the house breathes.
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Every surface tells a story. Every object earns its place.
          </p>
        </div>

        {/* Hotspots Showcase Board */}
        <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/10] border border-white/5 shadow-2xl">
          <img loading="lazy" decoding="async"
            src="/images/livingroom-luxury-lounge.jpg"
            alt="Living Room"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

          {/* Map Hotspots */}
          {hotspots.map((spot) => {
            const isActive = activeId === spot.id;
            return (
              <div
                key={spot.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                style={{ top: spot.top, left: spot.left }}
              >
                {/* Hotspot Pulse Trigger Button */}
                <button
                  onMouseEnter={() => setActiveId(spot.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
                  className="relative flex items-center justify-center w-12 h-12 cursor-pointer focus:outline-none"
                  aria-label={spot.name}
                >
                  <span className="absolute inset-0 rounded-full bg-amber-200/25 animate-ping pointer-events-none" />
                  <span className="relative w-3.5 h-3.5 rounded-full bg-amber-200 shadow-[0_0_20px_rgba(255,200,120,0.9)] transition-transform duration-300 group-hover:scale-125 border border-white/30" />
                </button>

                {/* Hotspot Tooltip */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 whitespace-normal w-60 p-4 rounded-xl pin-badge text-left transition-all duration-300 shadow-2xl ${
                    isActive
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="text-amber-200 text-xs tracking-wider font-semibold uppercase mb-1">
                    {spot.name}
                  </div>
                  <div className="text-white text-xs font-light mb-2 leading-relaxed">
                    {spot.desc}
                  </div>
                  <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.1em] uppercase text-white/40">Material</span>
                    <span className="text-[10px] text-amber-100 font-medium truncate max-w-[140px]">
                      {spot.material}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-white/40 text-xs tracking-wide">
          Hover over or tap the glowing points to inspect materials.
        </div>

      </div>
    </section>
  );
}
