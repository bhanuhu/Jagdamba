import { useRef, useState, useEffect } from 'react';
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
    const particles = Array.from({ length: 25 }).map(() => ({
      left: `${Math.random() * 100}%`,
      dx: `${(Math.random() - 0.5) * 80}px`,
      dur: `${15 + Math.random() * 15}s`,
      delay: `${Math.random() * 15}s`,
    }));
    setDustParticles(particles);
  }, []);

  // 1. Initial title fade-out as user begins scrolling down
  let titleOpacity = 1;
  let titleScale = 1.0;
  if (scrollProgress < 0.1) {
    titleOpacity = 1;
    titleScale = 1.0;
  } else if (scrollProgress >= 0.1 && scrollProgress <= 0.3) {
    const factor = (scrollProgress - 0.1) / 0.2; // 0 to 1
    titleOpacity = 1 - factor;
    titleScale = 1.0 + factor * 0.1;
  } else {
    titleOpacity = 0;
    titleScale = 1.1;
  }

  // 2. 3D Door opening parameters (Scroll progress 0.3 to 0.7)
  let doorRotation = 0;
  let roomScale = 1.25;
  let roomOpacity = 0.2;
  let doorOpacity = 1.0;

  if (scrollProgress < 0.28) {
    doorRotation = 0;
    roomScale = 1.25;
    roomOpacity = 0.2;
    doorOpacity = 1.0;
  } else if (scrollProgress >= 0.28 && scrollProgress <= 0.68) {
    const factor = (scrollProgress - 0.28) / 0.4; // 0 to 1
    doorRotation = -98 * factor;
    roomScale = 1.25 - factor * 0.25; // camera zooms into the room
    roomOpacity = 0.2 + factor * 0.8; // room fades in fully
    doorOpacity = 1.0 - factor * 0.4; // door fades slightly as it opens
  } else {
    doorRotation = -98;
    roomScale = 1.0;
    roomOpacity = 1.0;
    doorOpacity = 0.6;
  }

  // 3. Heritage stats fade-in at final scroll phase (0.68 to 0.9)
  let statsOpacity = 0;
  let statsTranslateY = 30;
  if (scrollProgress >= 0.65 && scrollProgress <= 0.88) {
    const factor = (scrollProgress - 0.65) / 0.23; // 0 to 1
    statsOpacity = factor;
    statsTranslateY = 30 - factor * 30;
  } else if (scrollProgress > 0.88) {
    statsOpacity = 1;
    statsTranslateY = 0;
  }

  // 4. Clean exit transition fade-out for the entire hero section as it leaves view (0.9 to 1.0)
  let sectionOpacity = 1;
  if (scrollProgress > 0.9) {
    sectionOpacity = Math.max(0, 1 - (scrollProgress - 0.9) * 10);
  }

  return (
    <section ref={containerRef} id="top" className="relative h-[320vh] bg-black">
      {/* Interactive cursor glow */}
      <div
        className="cursor-glow hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
          left: 0,
          top: 0,
        }}
      />

      {/* Sticky viewport container */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: sectionOpacity }}
      >
        {/* Cinematic Backdrop: 3D Door Perspective Viewport */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ perspective: '2000px' }}
        >
          {/* Inner Room Visual (revealed as door opens) */}
          <div 
            className="absolute inset-0 transition-all duration-100 ease-out"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1663811397207-418a92396ad5?auto=format&fit=crop&w=1800&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `scale(${roomScale})`,
              opacity: roomOpacity,
            }}
          />
          {/* Ambient lighting overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/70 z-10 pointer-events-none" />

          {/* Full-screen 3D Swinging Door Panel */}
          <div 
            className="absolute inset-0 origin-left"
            style={{
              transform: `rotateY(${doorRotation}deg)`,
              backfaceVisibility: 'hidden',
              transition: 'transform 0.1s ease-out',
              opacity: doorOpacity,
            }}
          >
            {/* Wooden Door Surface texture */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1652185396416-77aeccd1dce0?auto=format&fit=crop&w=1800&q=85)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            {/* Dark wood veneer overlay shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/80" />
            
            {/* Premium Gold Handle */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-2 h-24 bg-amber-200/90 rounded-full shadow-[0_0_20px_rgba(253,230,138,0.4)] border border-amber-100/20" />
            
            {/* Signature inlay borders */}
            <div className="absolute inset-16 border border-amber-100/10 rounded pointer-events-none" />
            
            {/* Brand overlay on closed door */}
            <div className="absolute bottom-12 left-12 text-[10px] tracking-[0.3em] text-amber-200/60 uppercase font-medium">
              Handcrafted · Jagdamba Doors
            </div>
          </div>
        </div>

        {/* Emitter of floating sunbeam dust particles */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div className="sunbeam opacity-30" />
          <div className="sunbeam opacity-20" style={{ left: '46%', width: '220px', filter: 'blur(50px)' }} />
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

        {/* Phase 1: Landing Title Block (Fades out during initial scroll) */}
        <div 
          className="relative z-20 text-center px-6 transition-all duration-100 ease-out" 
          style={{ 
            opacity: titleOpacity,
            transform: `scale(${titleScale})`
          }}
        >
          <div className="text-[10px] md:text-xs tracking-[0.5em] text-amber-200/60 mb-8 uppercase font-medium">
            Est. Craftsmanship · Rishikesh
          </div>
          <h1 className="font-serif-display text-6xl md:text-9xl font-light leading-[0.9] engraved tracking-wider">
            JAGDAMBA
          </h1>
          <div className="mt-6 text-xs md:text-sm tracking-[0.35em] text-amber-200/80 uppercase font-light">
            Timber Works & Plywood · Rishikesh
          </div>
        </div>

        {/* Phase 3: Heritage stats overlay at the end of the camera glide through the door */}
        <div 
          className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 z-30 text-center transition-all duration-300 ease-out"
          style={{ 
            opacity: statsOpacity,
            transform: `translate3d(0, ${statsTranslateY}px, 0)`
          }}
        >
          <div className="grid grid-cols-2 gap-8 md:gap-16 border-t border-white/10 pt-8 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="font-serif-display text-3xl md:text-5xl text-amber-200 font-light">40+ Years</div>
              <div className="text-[9px] tracking-[0.25em] text-white/50 uppercase font-light">Woodworking Expertise</div>
            </div>
            <div className="space-y-1">
              <div className="font-serif-display text-3xl md:text-5xl text-amber-200 font-light">20+ Years</div>
              <div className="text-[9px] tracking-[0.25em] text-white/50 uppercase font-light">Showroom Heritage</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
