"use client";

import { useState, useCallback, useRef } from 'react';

// Door catalogue data
const DOORS = [
  // ── MEMBRANE ──────────────────────────────────────
  {
    id: 1,
    name: 'Royal Walnut',
    category: 'membrane',
    image: '/images/membrane-door-walnut.webp',
    finish: 'Membrane Door',
    material: 'High-Density MDF Core with PVC Membrane',
    bestUse: 'Bedroom, Study, Pooja Room',
    features: ['Vacuum-pressed seamless finish', 'Solid 30 mm wooden core', 'Durable and low maintenance', 'Scratch and stain resistance', 'Wide design options'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', 'Custom'],
    colors: ['Walnut Brown', 'Dark Espresso', 'Natural Oak'],
    description: 'Premium PVC Membrane Doors feature a seamless PVC membrane vacuum-pressed over a solid 30 mm wooden core, ensuring a flawless finish with exceptional durability. Designed for modern interiors, they resist everyday wear, are easy to maintain, and are available in a wide range of wood textures, solid colours, and contemporary designs.',
    priceTag: 'Premium'
  },
  {
    id: 2,
    name: 'Golden Diamond',
    category: 'membrane',
    image: '/images/membrane-door-diamond.png',
    finish: 'Membrane Door',
    material: 'HDF Core with Glossy PVC Membrane',
    bestUse: 'Kitchen, Bathroom, Utility',
    features: ['Vacuum-pressed seamless finish', 'Solid 30 mm wooden core', 'Durable and low maintenance', 'Scratch and stain resistance', 'Wide design options'],
    sizes: ['7×3 ft', '7×3.5 ft', 'Custom'],
    colors: ['Pure White', 'Off-White', 'Pearl Grey'],
    description: 'Premium PVC Membrane Doors feature a seamless PVC membrane vacuum-pressed over a solid 30 mm wooden core, ensuring a flawless finish with exceptional durability. Designed for modern interiors, they resist everyday wear, are easy to maintain, and are available in a wide range of wood textures, solid colours, and contemporary designs.',
    priceTag: 'Standard'
  },
  // ── MICA ──────────────────────────────────────────
  {
    id: 3,
    name: 'Heritage Mica',
    category: 'mica',
    image: '/images/mica-door-heritage.jpg',
    finish: 'Mica Door',
    material: 'Solid Flush Core + High-Pressure Mica Laminate',
    bestUse: 'Main Entry, Drawing Room, Office',
    features: ['Premium Laminates', 'Elegant Finish', 'Superior Durability', 'Modern Designs', 'Textured Surfaces', 'Designer Laminates'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', '8×3.5 ft', 'Custom'],
    colors: ['Teak Wood', 'Rosewood', 'Wenge', 'Light Maple'],
    description: 'Mica Doors are crafted by bonding premium decorative laminates (mica) onto a solid 30 mm engineered wooden door, offering a durable and elegant finish. Resistant to everyday scratches, stains, and wear, they are easy to maintain and available in a wide range of wood grains, solid colours, matte, glossy, and textured finishes.',
    priceTag: 'Standard'
  },
  {
    id: 4,
    name: 'Obsidian Mica',
    category: 'mica',
    image: '/images/mica-door-classic.png',
    finish: 'Mica Door',
    material: 'Engineered Wood Core + Matte Mica',
    bestUse: 'Bedroom, Study, Commercial Space',
    features: ['Premium Laminates', 'Elegant Finish', 'Superior Durability', 'Modern Designs', 'Textured Surfaces', 'Designer Laminates'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft'],
    colors: ['Midnight Black', 'Charcoal Grey', 'Stone Beige'],
    description: 'Mica Doors are crafted by bonding premium decorative laminates (mica) onto a solid 30 mm engineered wooden door, offering a durable and elegant finish. Resistant to everyday scratches, stains, and wear, they are easy to maintain and available in a wide range of wood grains, solid colours, matte, glossy, and textured finishes.',
    priceTag: 'Standard'
  },
  // ── WPC ───────────────────────────────────────────
  {
    id: 5,
    name: 'WPC Marine',
    category: 'wpc',
    image: '/images/wpc-door-marine.png',
    finish: 'WPC Door',
    material: 'Wood-Plastic Composite (WPC)',
    bestUse: 'Bathroom, Balcony, Outdoor-Facing',
    features: ['Water Resistant', 'Termite Proof', 'Moisture Resistant', 'Long Lasting'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', 'Custom'],
    colors: ['Natural Teak', 'Walnut', 'Ivory White', 'Grey'],
    description: 'Premium WPC Doors combine the strength of Wood Plastic Composite with contemporary design, delivering doors that are moisture-resistant, termite-proof, and highly durable. Ideal for high-humidity spaces, they offer lasting performance with minimal maintenance.',
    priceTag: 'Premium'
  },
  {
    id: 6,
    name: 'WPC Luxe',
    category: 'wpc',
    image: '/images/wpc-door-luxe.png',
    finish: 'WPC Door',
    material: 'Premium WPC with Textured Surface',
    bestUse: 'Master Bathroom, Kitchen, Service Areas',
    features: ['Water Resistant', 'Termite Proof', 'Moisture Resistant', 'Long Lasting'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', 'Custom'],
    colors: ['Dark Walnut', 'Sand Beige', 'Charcoal'],
    description: 'Premium WPC Doors combine the strength of Wood Plastic Composite with contemporary design, delivering doors that are moisture-resistant, termite-proof, and highly durable. Ideal for high-humidity spaces, they offer lasting performance with minimal maintenance.',
    priceTag: 'Premium'
  },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'membrane', label: 'Membrane' },
  { id: 'mica', label: 'Mica' },
  { id: 'wpc', label: 'WPC' }
];

const PRICE_COLORS: Record<string, string> = {
  Standard: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Premium: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Luxury: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Bespoke: 'text-rose-400 bg-rose-400/10 border-rose-400/20'
};

type Door = typeof DOORS[0];

export default function JagdambaDoors() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDoor, setSelectedDoor] = useState<Door | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  }, []);

  const handleCardClick = (door: Door) => {
    setClickedCard(door.id);
    setTimeout(() => setClickedCard(null), 400);
    setTimeout(() => setSelectedDoor(door), 100);
  };

  const filteredDoors = DOORS.filter(d => {
    if (activeFilter === 'all') return true;
    return d.category === activeFilter;
  });

  const scroll = (dir: 'left' | 'right') => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ─── COLLECTION & GALLERY ────────────────────────────── */}
      <section id="jagdamba-doors" className="relative bg-neutral-950 pt-12 overflow-hidden">

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">

          {/* Section heading */}
          <div className="text-center mb-8">
            <p className="text-amber-400/60 tracking-[0.4em] text-xs uppercase font-light mb-4">
              The Collection
            </p>
            <h3 className="text-4xl md:text-5xl font-thin text-white mb-4">
              Door <span className="font-semibold text-amber-300">Showcase</span>
            </h3>
            <p className="text-white/40 max-w-xl mx-auto">
              Every door is engineered to perfection. Crafted from premium materials, finished to last.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeFilter === f.id
                  ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-amber-400/40 hover:text-white'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Horizontal Slider */}
          <div className="relative">

            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-black/80 border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-sm"
              aria-label="Scroll left"
            >
              ←
            </button>

            {/* Door Cards Scroll Container */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto pb-6 px-2 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredDoors.map(door => {
                const isHovered = hoveredCard === door.id;
                const isClicked = clickedCard === door.id;
                const tiltX = isHovered ? (mousePos.y - 0.5) * -10 : 0;
                const tiltY = isHovered ? (mousePos.x - 0.5) * 10 : 0;
                const lightX = isHovered ? mousePos.x * 100 : 50;
                const lightY = isHovered ? mousePos.y * 100 : 30;

                return (
                  <div
                    key={door.id}
                    className="flex-none w-[320px] group"
                    style={{ perspective: '800px' }}
                    onMouseEnter={() => setHoveredCard(door.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onMouseMove={handleCardMouseMove}
                    onClick={() => handleCardClick(door)}
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-neutral-900 transition-all duration-300"
                      style={{
                        transform: `rotateX(${tiltX}deg) rotateY(${isClicked ? tiltY + 6 : tiltY}deg) scale(${isClicked ? 1.02 : isHovered ? 1.03 : 1})`,
                        transition: isClicked ? 'transform 0.15s ease-out' : 'transform 0.3s ease-out',
                        boxShadow: isHovered
                          ? '0 30px 60px -10px rgba(0,0,0,0.8), 0 0 40px rgba(251,191,36,0.08)'
                          : '0 10px 30px -10px rgba(0,0,0,0.6)'
                      }}
                    >
                      {/* Door Image */}
                      <div className="relative h-72 overflow-hidden">
                        <img loading="lazy" decoding="async"
                          src={door.image}
                          alt={door.name}
                          className="w-full h-full object-cover transition-transform duration-700"
                          style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
                        />

                        {/* Light reflection sweep on hover */}
                        <div
                          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                          style={{
                            opacity: isHovered ? 1 : 0,
                            background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,235,180,0.18) 0%, transparent 55%)`
                          }}
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

                        {/* Price tag badge */}
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${PRICE_COLORS[door.priceTag]}`}>
                          {door.priceTag}
                        </div>

                        {/* Category */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white/70 backdrop-blur-sm border border-white/10">
                          {door.finish}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">
                          {door.name}
                        </h4>
                        <p className="text-amber-400/70 text-sm mb-3">{door.finish}</p>

                        <div className="space-y-1.5 mb-5">
                          {door.features.map(f => (
                            <div key={f} className="flex items-center gap-2 text-sm text-white/60">
                              <span className="text-amber-400 text-xs">✓</span>
                              {f}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <span className="text-white/40 text-xs">
                            Best for: <span className="text-white/60">{door.bestUse}</span>
                          </span>
                          <button
                            className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors border border-amber-400/30 hover:border-amber-300/60 px-3 py-1.5 rounded-lg"
                            onClick={(e) => { e.stopPropagation(); setSelectedDoor(door); }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>

                      {/* Glowing border on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl border border-amber-400/0 transition-all duration-500 pointer-events-none"
                        style={{ borderColor: isHovered ? 'rgba(251,191,36,0.2)' : 'transparent' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-black/80 border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-sm"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>

          {/* ─── VIEW CATALOGUE CTA ─── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 mb-16 px-2">
            <p className="text-white/40 text-sm">
              Explore our complete range of door designs, finishes &amp; sizes.
            </p>
            <a
              href="/jd doors.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-7 py-3 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.25)] hover:shadow-[0_0_40px_rgba(251,191,36,0.45)] whitespace-nowrap"
            >
              <span>📄</span>
              View Catalogue
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* ─── COMPARISON TABLE ─── */}
          <div className="mt-24 mb-20">
            <div className="text-center mb-10">
              <p className="text-amber-400/60 tracking-[0.35em] text-xs uppercase mb-3">Why Choose Us</p>
              <h3 className="text-3xl font-thin text-white">
                The <span className="font-semibold text-amber-300">Jagdamba Advantage</span>
              </h3>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                {/* Table Header */}
                <div className="grid grid-cols-2 bg-amber-400/10 border-b border-white/10">
                  <div className="px-6 py-4 text-white/60 text-sm font-medium">Feature</div>
                  <div className="px-6 py-4 text-amber-300 text-sm font-semibold text-center">Jagdamba Doors</div>
                </div>
                {[
                  'Custom Sizes Available',
                  'Designer Finish Options',
                  'Premium Hardware Available',
                  'Moisture Resistant Options',
                  'Expert Installation Guidance',
                  'In-House Brand (No Middleman)',
                ].map((feature, i) => (
                  <div
                    key={feature}
                    className={`grid grid-cols-2 border-b border-white/5 transition-colors hover:bg-white/[0.02] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}
                  >
                    <div className="px-6 py-4 text-white/70 text-sm">{feature}</div>
                    <div className="px-6 py-4 flex justify-center">
                      <span className="text-emerald-400 text-lg font-bold">✅</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── CUSTOM DOOR CTA ─── */}
          <div className="relative rounded-3xl overflow-hidden border border-amber-400/15">
            <div className="absolute inset-0">
              <img loading="lazy" decoding="async"
                src="/images/jagdamba-door-walnut.jpg"
                alt="Custom Door Background"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
            </div>

            <div className="relative z-10 px-8 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-amber-400/60 tracking-widest text-xs uppercase mb-4">Made For You</p>
                <h3 className="text-3xl md:text-4xl font-thin text-white mb-4">
                  Can't Find Your<br />
                  <span className="font-semibold text-amber-300">Perfect Door?</span>
                </h3>
                <p className="text-white/50 mb-8 leading-relaxed">
                  Design one with us. Our master craftsmen will build a door to your exact vision — sizes, finishes, hardware, and style.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {['Custom Sizes', 'Custom Colors', 'Premium Hardware', 'Expert Craftsmanship'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-amber-400">✔</span> {item}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-105"
                >
                  Request Custom Door
                  <span>→</span>
                </a>
              </div>

              <div className="hidden md:flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <img loading="lazy" decoding="async" src="/images/jagdamba-door-designer.jpg" alt="Custom Designer Door" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">Bespoke Arc · Designer Series</div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-36">
                  <img loading="lazy" decoding="async" src="/images/jagdamba-door-teak.jpg" alt="Heritage Teak Door" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white/80 text-sm font-medium">Heritage Teak · Luxury Series</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOOR DETAIL MODAL ───────────────────────────────── */}
      {selectedDoor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          onClick={() => setSelectedDoor(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedDoor(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all text-lg"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left: Image */}
              <div className="relative h-80 md:h-full min-h-[300px]">
                <img loading="lazy" decoding="async"
                  src={selectedDoor.image}
                  alt={selectedDoor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/40" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${PRICE_COLORS[selectedDoor.priceTag]}`}>
                  {selectedDoor.priceTag}
                </div>
              </div>

              {/* Right: Details */}
              <div className="p-8">
                <p className="text-amber-400/60 text-xs tracking-widest uppercase mb-2">{selectedDoor.finish}</p>
                <h3 className="text-3xl font-semibold text-white mb-2">{selectedDoor.name}</h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">{selectedDoor.description}</p>

                <div className="space-y-5 mb-6">
                  {/* Material */}
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1.5">Material</p>
                    <p className="text-white/80 text-sm">{selectedDoor.material}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1.5">Features</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoor.features.map(f => (
                        <span key={f} className="text-xs px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1.5">Available Sizes</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoor.sizes.map(s => (
                        <span key={s} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 hover:border-amber-400/30 cursor-pointer transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1.5">Color Options</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoor.colors.map(c => (
                        <span key={c} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best Use */}
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1.5">Best Use</p>
                    <p className="text-white/70 text-sm">{selectedDoor.bestUse}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setSelectedDoor(null)}
                    className="flex-1 text-center px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl transition-all duration-300 text-sm hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                  >
                    Request This Door
                  </a>
                  <button
                    onClick={() => setSelectedDoor(null)}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300 text-sm border border-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
