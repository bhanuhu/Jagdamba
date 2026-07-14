import { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(containerRef);

  // Mouse cursor glow position
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate dust particle configurations
  const [dustParticles, setDustParticles] = useState<any[]>([]);
  useEffect(() => {
    const particles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      dx: `${(Math.random() - 0.5) * 80}px`,
      dur: `${15 + Math.random() * 15}s`,
      delay: `${Math.random() * 15}s`,
    }));
    setDustParticles(particles);
  }, []);

  // Interpolations based on scroll progress (0 to 1)
  const blackOverlayOpacity = Math.max(0, 1 - scrollProgress * 3.5);
  
  // Title (JAGDAMBA) opacity and scale
  let titleOpacity = 0;
  let titleScale = 1.0;
  if (scrollProgress < 0.35) {
    titleOpacity = Math.min(1, scrollProgress * 3.5);
  } else if (scrollProgress < 0.6) {
    titleOpacity = Math.max(0, 1 - (scrollProgress - 0.35) * 4);
    titleScale = 1.0 + (scrollProgress - 0.35) * 0.4;
  }

  // Backdrop 2 (Living space overview) opacity and scale
  let backdropOpacity = 0;
  let backdropScale = 1.35;
  if (scrollProgress >= 0.3 && scrollProgress < 0.6) {
    backdropOpacity = (scrollProgress - 0.3) * 3.3;
    backdropScale = 1.35 - (scrollProgress - 0.3) * 0.5;
  } else if (scrollProgress >= 0.6) {
    backdropOpacity = Math.max(0, 1 - (scrollProgress - 0.8) * 5);
    backdropScale = 1.0;
  }

  // Content (From Timber to Timeless...) opacity
  let contentOpacity = 0;
  let contentTranslate = 40; // translateY (px)
  if (scrollProgress >= 0.5 && scrollProgress < 0.95) {
    contentOpacity = Math.min(1, (scrollProgress - 0.5) * 5);
    contentTranslate = Math.max(0, 40 - (scrollProgress - 0.5) * 150);
  } else if (scrollProgress >= 0.95) {
    contentOpacity = Math.max(0, 1 - (scrollProgress - 0.95) * 20);
  }

  return (
    <section ref={containerRef} id="top" className="relative h-[300vh]">
      {/* Interactive cursor glow */}
      <div
        className="cursor-glow hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
          left: 0,
          top: 0,
        }}
      />

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Phase 1 Overlay (Fades out quickly) */}
        <div 
          className="absolute inset-0 bg-black z-30 pointer-events-none" 
          style={{ opacity: blackOverlayOpacity }} 
        />

        {/* Ambient background layout: sunbeams & dust */}
        <div className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000" style={{ opacity: scrollProgress > 0.1 ? 1 : 0 }}>
          <div className="sunbeam" />
          <div className="sunbeam" style={{ left: '46%', width: '220px', filter: 'blur(50px)', opacity: 0.6 }} />
          
          {/* Dust particle emitter */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dustParticles.map((p, idx) => (
              <span
                key={idx}
                className="dust"
                style={{
                  left: p.left,
                  '--dx': p.dx,
                  '--dur': p.dur,
                  '--delay': p.delay,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Phase 2: Wood Grain Title Backdrop */}
        <div 
          className="absolute inset-0 z-20 wood-grain flex items-center justify-center pointer-events-none"
          style={{ opacity: titleOpacity }}
        >
          <div 
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1502639625928-9e0198ae7dfb?auto=format&fit=crop&w=1200&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.35) contrast(1.15) saturate(0.7)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          
          <div className="relative z-10 text-center px-6" style={{ transform: `scale(${titleScale})` }}>
            <div className="text-[10px] md:text-xs tracking-[0.5em] text-amber-200/60 mb-8 uppercase font-medium">
              Est. Craftsmanship · Rishikesh
            </div>
            <h1 className="font-serif-display text-6xl md:text-9xl font-light leading-[0.9] engraved">
              JAGDAMBA
            </h1>
            <div className="mt-6 text-xs md:text-sm tracking-[0.35em] text-amber-200/80 uppercase font-light">
              Timber Works & Plywood · Rishikesh
            </div>
          </div>
        </div>

        {/* Phase 3: Secondary Backdrop Image (Living Space Zoom-Out) */}
        <div 
          className="absolute inset-0 z-[15] pointer-events-none" 
          style={{ 
            opacity: backdropOpacity,
            transform: `scale(${backdropScale})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1703953606885-0bbc4fd40911?auto=format&fit=crop&w=1800&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.65) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
        </div>

        {/* Hero Headline content */}
        <div 
          className="absolute inset-0 z-40 flex flex-col items-center justify-end pb-24 px-6 text-center"
          style={{ 
            opacity: contentOpacity,
            transform: `translate3d(0, ${contentTranslate}px, 0)`,
            pointerEvents: contentOpacity > 0.5 ? 'auto' : 'none'
          }}
        >
          <div className="text-[10px] tracking-[0.5em] text-amber-200/70 mb-6 uppercase font-medium">
            A House. A Feeling. A Legacy.
          </div>
          <h2 className="font-serif-display text-5xl md:text-8xl font-light leading-[0.95] max-w-5xl text-white">
            From Timber<br />
            <span className="italic text-amber-200/90 font-light">to Timeless</span> Interiors
          </h2>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-amber-200/60 text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-3 pointer-events-none transition-opacity duration-500"
          style={{ opacity: scrollProgress < 0.8 ? 1 : 0 }}
        >
          <span>Scroll to enter</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-200/60" />
        </div>
      </div>
    </section>
  );
}
