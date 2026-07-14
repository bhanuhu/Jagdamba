import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Dining() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(containerRef);

  // Parallax translation calculation:
  // Move the background image slightly slower/faster than scroll
  const backgroundTranslateY = -15 + scrollProgress * 30; // ranges from -15% to 15%

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] overflow-hidden bg-black flex items-center justify-center py-32"
    >
      {/* Background Parallax Layer */}
      <div 
        className="absolute inset-0 w-full h-[130%]"
        style={{
          transform: `translateY(${backgroundTranslateY}%)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1621963325509-9a1959c2343b?auto=format&fit=crop&w=1800&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.55)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      {/* Content Overlay */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
          04 · Dining
        </div>
        <h2 className="font-serif-display text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
          Gather in warm light.
        </h2>
        <p className="text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Wood ceilings hush the room. Pendant light pools on our laminates. Every meal becomes an occasion.
        </p>
      </div>
    </section>
  );
}
