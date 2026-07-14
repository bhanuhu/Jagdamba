import { useRef, useState, useCallback } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

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
    features: ['Waterproof Surface', 'Scratch Resistant', 'No Swelling or Warping'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', 'Custom'],
    colors: ['Walnut Brown', 'Dark Espresso', 'Natural Oak'],
    description: 'A rich walnut-finish PVC membrane door vacuum-pressed over high-density MDF. Moisture and scratch resistant — perfect for bedrooms and humid-prone rooms.',
    priceTag: 'Premium'
  },
  {
    id: 2,
    name: 'Glacier White',
    category: 'membrane',
    image: '/images/membrane-door-classic.webp',
    finish: 'Membrane Door',
    material: 'HDF Core with Glossy PVC Membrane',
    bestUse: 'Kitchen, Bathroom, Utility',
    features: ['100% Waterproof', 'Easy to Clean', 'High-Gloss Finish'],
    sizes: ['7×3 ft', '7×3.5 ft', 'Custom'],
    colors: ['Pure White', 'Off-White', 'Pearl Grey'],
    description: 'Sleek glossy membrane door on HDF core. The high-gloss surface is non-porous, moisture-proof, and effortlessly wipes clean — ideal for kitchens and bathrooms.',
    priceTag: 'Standard'
  },
  // ── MICA ──────────────────────────────────────────
  {
    id: 3,
    name: 'Heritage Mica',
    category: 'mica',
    image: '/images/jagdamba-door-teak.jpg',
    finish: 'Mica Door',
    material: 'Solid Flush Core + High-Pressure Mica Laminate',
    bestUse: 'Main Entry, Drawing Room, Office',
    features: ['Heat Resistant', 'Durable Surface', 'Premium Texture'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', '8×3.5 ft', 'Custom'],
    colors: ['Teak Wood', 'Rosewood', 'Wenge', 'Light Maple'],
    description: 'High-pressure mica laminate bonded over a solid flush core. Delivers rich wood-look texture with superior heat and impact resistance — a practical classic.',
    priceTag: 'Standard'
  },
  {
    id: 4,
    name: 'Obsidian Mica',
    category: 'mica',
    image: '/images/jagdamba-door-flush.jpg',
    finish: 'Mica Door',
    material: 'Engineered Wood Core + Matte Mica',
    bestUse: 'Bedroom, Study, Commercial Space',
    features: ['Uniform Matte Surface', 'Scratch Resistant', 'Cost Effective'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft'],
    colors: ['Midnight Black', 'Charcoal Grey', 'Stone Beige'],
    description: 'Contemporary matte mica door on engineered wood core. Clean, architectural lines with a durable surface — a versatile choice for modern homes and offices.',
    priceTag: 'Standard'
  },
  // ── WPC ───────────────────────────────────────────
  {
    id: 5,
    name: 'WPC Marine',
    category: 'wpc',
    image: '/images/jagdamba-door-veneer.jpg',
    finish: 'WPC Door',
    material: 'Wood-Plastic Composite (WPC)',
    bestUse: 'Bathroom, Balcony, Outdoor-Facing',
    features: ['100% Waterproof', 'Termite Proof', 'No Rot or Rust'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', 'Custom'],
    colors: ['Natural Teak', 'Walnut', 'Ivory White', 'Grey'],
    description: 'Engineered from wood-plastic composite — completely waterproof, termite-proof, and rot-proof. The ideal door for bathrooms, wet areas, and outdoor-facing rooms.',
    priceTag: 'Premium'
  },
  {
    id: 6,
    name: 'WPC Luxe',
    category: 'wpc',
    image: '/images/jagdamba-door-walnut.jpg',
    finish: 'WPC Door',
    material: 'Premium WPC with Textured Surface',
    bestUse: 'Master Bathroom, Kitchen, Service Areas',
    features: ['Zero Maintenance', 'UV Resistant', 'Fire Retardant Grade'],
    sizes: ['7×3 ft', '7×3.5 ft', '8×3 ft', 'Custom'],
    colors: ['Dark Walnut', 'Sand Beige', 'Charcoal'],
    description: 'Premium WPC door with a tactile wood-grain texture and fire-retardant core. Built for high-moisture and heavy-use areas where quality cannot be compromised.',
    priceTag: 'Premium'
  },
  // ── CUSTOM ────────────────────────────────────────
  {
    id: 7,
    name: 'Bespoke Arc',
    category: 'custom',
    image: '/images/jagdamba-door-designer.jpg',
    finish: 'Custom Design Door',
    material: 'Client-Specified Core + Finish',
    bestUse: 'Villa Entry, Living Room, Statement Spaces',
    features: ['CNC Panel Carving', 'Any Finish Possible', 'Unique Every Time'],
    sizes: ['Any Size — Fully Custom'],
    colors: ['Your Choice', 'Champagne Gold Inlay', 'Ivory + Walnut Combo'],
    description: 'A true one-of-a-kind. You decide the size, finish, color, and panel design. Our craftsmen bring your vision to life with CNC precision and handcrafted detailing.',
    priceTag: 'Bespoke'
  }
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'membrane', label: 'Membrane' },
  { id: 'mica', label: 'Mica' },
  { id: 'wpc', label: 'WPC' },
  { id: 'custom', label: 'Custom' }
];

const PRICE_COLORS: Record<string, string> = {
  Standard: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Premium: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Luxury: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Bespoke: 'text-rose-400 bg-rose-400/10 border-rose-400/20'
};

type Door = typeof DOORS[0];

export default function JagdambaDoors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(containerRef);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDoor, setSelectedDoor] = useState<Door | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Scroll-based cinematic animation values
  // Door swing opens: 0.05 → 0.35
  let doorRotation = 0;
  if (scrollProgress >= 0.05 && scrollProgress <= 0.35) {
    doorRotation = -85 * ((scrollProgress - 0.05) / 0.3);
  } else if (scrollProgress > 0.35) {
    doorRotation = -85;
  }

  // Hero overlay fades out as door opens
  let heroTextOpacity = 1;
  if (scrollProgress >= 0.1 && scrollProgress <= 0.4) {
    heroTextOpacity = 1 - (scrollProgress - 0.1) / 0.3;
  } else if (scrollProgress > 0.4) {
    heroTextOpacity = 0;
  }

  // Bedroom image behind door fades in as door opens
  let bedroomOpacity = 0;
  if (scrollProgress >= 0.05 && scrollProgress <= 0.4) {
    bedroomOpacity = (scrollProgress - 0.05) / 0.35;
  } else if (scrollProgress > 0.4) {
    bedroomOpacity = 1;
  }

  // Gallery section fades in after door is fully open
  let galleryOpacity = 0;
  let galleryTranslateY = 60;
  if (scrollProgress >= 0.45 && scrollProgress <= 0.65) {
    galleryOpacity = (scrollProgress - 0.45) / 0.2;
    galleryTranslateY = 60 - galleryOpacity * 60;
  } else if (scrollProgress > 0.65) {
    galleryOpacity = 1;
    galleryTranslateY = 0;
  }

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
      {/* ─── CINEMATIC HERO ─────────────────────────────────── */}
      <section
        ref={containerRef}
        id="jagdamba-doors"
        className="relative h-[300vh] bg-black"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

          {/* Ambient dark gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-radial from-amber-950/20 via-black to-black pointer-events-none" />

          {/* Spotlight beam from above */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-[80vh] pointer-events-none"
            style={{
              background: 'conic-gradient(from 180deg at 50% 0%, transparent 75deg, rgba(251,191,36,0.08) 90deg, rgba(251,191,36,0.15) 100deg, rgba(251,191,36,0.08) 110deg, transparent 135deg)',
              opacity: Math.max(0, 1 - scrollProgress * 2)
            }}
          />

          {/* Background bedroom image (revealed as door opens) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: bedroomOpacity, transition: 'opacity 0.05s linear' }}
          >
            <img
              src="/images/doors-bedroom-inside.jpg"
              alt="Luxury Bedroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          </div>

          {/* ── The Door ── */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">

            {/* Hero text — fades out as door opens */}
            <div
              className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center w-full px-4 z-20 pointer-events-none"
              style={{ opacity: heroTextOpacity }}
            >
              <p className="text-amber-400/60 tracking-[0.4em] text-xs uppercase font-light mb-4">
                Jagdamba Exclusive
              </p>
              <h2 className="text-5xl md:text-7xl font-thin text-white leading-none tracking-tight mb-5">
                Crafted by<br />
                <span className="font-semibold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                  Jagdamba Doors
                </span>
              </h2>
              <p className="text-white/50 text-lg font-light max-w-md mx-auto mb-8">
                Premium doors handcrafted to elevate every space.
              </p>
              <p className="text-amber-400/40 text-sm tracking-widest animate-pulse">
                ↓ Scroll to open
              </p>
            </div>

            {/* 3D Door with perspective */}
            <div
              className="relative flex items-center justify-center"
              style={{ perspective: '1200px', perspectiveOrigin: '30% 50%' }}
            >
              {/* Door frame */}
              <div
                className="relative"
                style={{ width: '280px', height: '480px' }}
              >
                {/* Door frame surround */}
                <div
                  className="absolute inset-0 rounded-t-xl border-[10px] border-amber-900/60 bg-gradient-to-b from-amber-950/30 to-stone-950/50 shadow-2xl"
                  style={{ borderRadius: '12px 12px 2px 2px' }}
                />

                {/* The swinging door leaf */}
                <div
                  className="absolute inset-[10px] origin-left"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${doorRotation}deg)`,
                    transition: 'transform 0.08s ease-out',
                    borderRadius: '8px 8px 2px 2px',
                    overflow: 'hidden'
                  }}
                >
                  {/* Door face */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-900 via-amber-950 to-stone-950 rounded-t-lg overflow-hidden shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]">
                    <img
                      src="/images/jagdamba-doors-timber.jpg"
                      alt="Jagdamba Premium Door"
                      className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />

                    {/* Wood grain overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-amber-900/20" />

                    {/* Door panel carved lines */}
                    <div className="absolute inset-6 border border-amber-700/30 rounded-sm" />
                    <div className="absolute inset-10 border border-amber-700/20 rounded-sm" />

                    {/* Top panel */}
                    <div className="absolute top-14 left-10 right-10 h-[30%] border border-amber-700/25 rounded-sm bg-amber-950/20" />
                    {/* Bottom panel */}
                    <div className="absolute bottom-14 left-10 right-10 h-[35%] border border-amber-700/25 rounded-sm bg-amber-950/20" />

                    {/* Door handle */}
                    <div
                      className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 transition-all duration-300"
                      style={{
                        filter: doorRotation < -30 ? 'drop-shadow(0 0 8px rgba(251,191,36,0.6))' : 'none'
                      }}
                    >
                      <div className="w-2 h-10 rounded-full bg-gradient-to-b from-amber-400 via-yellow-300 to-amber-500 shadow-lg" />
                      <div className="w-3 h-3 rounded-full bg-amber-300 shadow-md" />
                    </div>

                    {/* Light reflection sweep */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(${105 + doorRotation * 0.3}deg, transparent 30%, rgba(255,235,180,0.12) 50%, transparent 70%)`
                      }}
                    />
                  </div>

                  {/* Door back face (visible when open) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950 rounded-t-lg"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                  />

                  {/* Door side edge (depth illusion) */}
                  <div
                    className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-r from-amber-800 to-amber-950"
                    style={{ transform: 'rotateY(90deg) translateZ(-8px)', transformOrigin: 'right center' }}
                  />
                </div>

                {/* Door shadow on floor */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.6) 0%, transparent 70%)',
                    transform: `scaleX(${1 + Math.abs(doorRotation) * 0.015}) translateY(4px)`,
                    transformOrigin: 'bottom center'
                  }}
                />
              </div>
            </div>

            {/* Post-open overlay text */}
            {scrollProgress > 0.4 && (
              <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none"
                style={{ opacity: Math.min(1, (scrollProgress - 0.4) / 0.15) }}
              >
                <p className="text-white/70 text-sm tracking-widest uppercase">
                  Continue to Explore the Collection ↓
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── COLLECTION & GALLERY ────────────────────────────── */}
      <section className="relative bg-neutral-950 py-24 overflow-hidden">

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">

          {/* Section heading */}
          <div
            className="text-center mb-16"
            style={{ opacity: galleryOpacity, transform: `translateY(${galleryTranslateY}px)` }}
          >
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
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeFilter === f.id
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
                        <img
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
                  'Premium Hardware Included',
                  'Moisture Resistant Options',
                  'Expert Installation Guidance',
                  'In-House Brand (No Middleman)',
                  'CNC Panel Customization',
                  'Lifetime Craftsmanship Warranty'
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
              <img
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
                  <img src="/images/jagdamba-door-designer.jpg" alt="Custom Designer Door" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">Bespoke Arc · Designer Series</div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-36">
                  <img src="/images/jagdamba-door-teak.jpg" alt="Heritage Teak Door" className="w-full h-full object-cover" />
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
                <img
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
