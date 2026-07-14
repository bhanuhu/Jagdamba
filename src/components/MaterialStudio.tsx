import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';

interface MaterialItem {
  id: string;
  name: string;
  category: 'board' | 'laminate' | 'plywood' | 'doors';
  image: string;
}

// 3D Tilt Card Component for a premium spatial interaction
function TiltCard({ item }: { item: MaterialItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // Limit rotation to max 12 degrees
    const rotateY = (x / (width / 2)) * 12;
    const rotateX = -(y / (height / 2)) * 12;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div className="group cursor-pointer">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="aspect-square relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-200"
        style={{ 
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D inner plane container */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
          style={{ 
            transform,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Main floating image card */}
          <div 
            className="relative w-3/4 aspect-square rounded-xl overflow-hidden shadow-2xl transition-shadow group-hover:shadow-[0_20px_50px_rgba(255,200,120,0.15)] border border-white/10"
            style={{ transform: 'translateZ(40px)' }}
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
          </div>
        </div>

        {/* Shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
        
        {/* Top-right floating category tag */}
        <div className="absolute top-4 right-4 text-[9px] tracking-[0.3em] text-amber-200/70 uppercase pin-badge px-3 py-1.5 rounded-full font-semibold">
          {item.category}
        </div>
      </div>

      {/* Card Info footer */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div className="font-serif-display text-lg text-white font-light group-hover:text-amber-200 transition-colors">
          {item.name}
        </div>
        <ArrowRight className="w-4 h-4 text-amber-200/60 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

export default function MaterialStudio() {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'board', name: 'Board' },
    { id: 'laminate', name: 'Laminate' },
    { id: 'plywood', name: 'Plywood' },
    { id: 'doors', name: 'Doors' },
  ];

  const items: MaterialItem[] = [
    {
      id: 'century-hdmr',
      name: 'Century HDMR',
      category: 'board',
      image: '/images/century-hdmr-kitchen.png',
    },
    {
      id: 'tesa-board',
      name: 'Action TESA',
      category: 'board',
      image: '/images/action-tesa-kitchen.png',
    },
    {
      id: 'saptam-board',
      name: 'Saptam Board',
      category: 'board',
      image: '/images/saptam-board.jpg',
    },
    {
      id: 'novopan-board',
      name: 'Novopan Board',
      category: 'board',
      image: '/images/novopan-board.jpg',
    },
    {
      id: 'black-cobra',
      name: 'Black Cobra',
      category: 'laminate',
      image: '/images/black-cobra-laminate.jpg',
    },
    {
      id: 'vidyalam',
      name: 'Vidyalam Laminate',
      category: 'laminate',
      image: '/images/vidyalam-laminate.jpg',
    },
    {
      id: 'virgo',
      name: 'Virgo Laminate',
      category: 'laminate',
      image: '/images/virgo-laminate.jpg',
    },
    {
      id: 'assam-plywood',
      name: 'Assam Plywood',
      category: 'plywood',
      image: '/images/assam-plywood-board.jpg',
    },
    {
      id: 'jagdamba-doors',
      name: 'Jagdamba Doors',
      category: 'doors',
      image: '/images/jagdamba-doors-timber.jpg',
    },
  ];

  const [activeCat, setActiveCat] = useState('all');

  const filteredItems = activeCat === 'all' 
    ? items 
    : items.filter(item => item.category === activeCat);

  return (
    <section id="studio" className="relative min-h-screen bg-neutral-950 py-32 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
            07 · Material Studio
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white">
            Every surface, catalogued.
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Rotate. Inspect. Compare. Our library, laid out for the discerning eye.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center gap-3 flex-wrap mb-16 max-w-xl">
          {categories.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all font-semibold cursor-pointer ${
                  isActive
                    ? 'bg-amber-200 text-black shadow-lg shadow-amber-200/20'
                    : 'border border-white/10 text-white/70 hover:border-amber-200/40 hover:text-white bg-transparent'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Catalog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mt-4">
          {filteredItems.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
