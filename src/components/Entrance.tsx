"use client";

import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import Image from 'next/image';

export default function Entrance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(containerRef);

  // Parent container is 200vh.
  // Sticky active window is from progress ~0.33 (pin top) to ~0.66 (unpin bottom)
  // We open the door from 0.33 to 0.55, and keep it fully open from 0.55 to 0.66+
  let doorRotation = 0;
  let roomScale = 1.15;
  let roomOpacity = 0.4;

  if (scrollProgress < 0.33) {
    doorRotation = 0;
    roomScale = 1.15;
    roomOpacity = 0.4;
  } else if (scrollProgress >= 0.33 && scrollProgress <= 0.56) {
    const factor = (scrollProgress - 0.33) / 0.23; // 0 to 1
    doorRotation = -95 * factor;
    roomScale = 1.15 - factor * 0.15; // smooth zoom
    roomOpacity = 0.4 + factor * 0.6; // smooth fade-in
  } else {
    doorRotation = -95;
    roomScale = 1.0;
    roomOpacity = 1.0;
  }

  return (
    <section ref={containerRef} id="entrance" className="relative h-[200vh] bg-black">
      {/* Sticky Content Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 z-10">
          <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium">
            01 · Entrance
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl font-light text-white">
            Welcome home.
          </h2>
        </div>

        {/* 3D Door Perspective Wrapper */}
        <div 
          className="relative w-full aspect-[3/4] max-w-lg rounded-lg overflow-hidden shadow-[0_60px_120px_-30px_rgba(255,180,90,0.15)] bg-neutral-950 z-10"
          style={{ perspective: '1800px' }}
        >
          {/* Inner Room Visual (Visible when door swings open) */}
          <div 
            className="absolute inset-0 transition-all duration-100 ease-out"
            style={{
              transform: `scale(${roomScale})`,
              opacity: roomOpacity,
            }}
          >
            <Image 
              src="/images/livingroom-luxury-lounge.jpg"
              alt="Living Room Lounge"
              fill
              className="object-cover pointer-events-none"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-black/50" />

          {/* 3D Swinging Door Panel */}
          <div 
            className="door-panel absolute inset-0 origin-left"
            style={{
              transform: `rotateY(${doorRotation}deg)`,
              backfaceVisibility: 'hidden',
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* Wooden Door Surface */}
            <div className="absolute inset-0">
              <Image 
                src="/images/jagdamba-doors-timber.jpg"
                alt="Jagdamba Wood Entry"
                fill
                className="object-cover pointer-events-none"
              />
            </div>
            {/* Dark Veneer overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-black/70" />
            
            {/* Door handle handle widget */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-amber-200/80 rounded-full shadow-[0_0_15px_rgba(253,230,138,0.5)] border border-amber-100/30" />
            
            {/* Handcrafted borders inlay */}
            <div className="absolute inset-8 border border-amber-100/10 rounded pointer-events-none" />
            
            {/* Brand text */}
            <div className="absolute bottom-8 left-8 text-[9px] tracking-[0.3em] text-amber-200/60 uppercase font-medium">
              Handcrafted · Jagdamba Doors
            </div>
          </div>
        </div>

        {/* Legacy stats panel overlay (Only shows up as door completes opening or in background) */}
        <div className="w-full max-w-4xl mt-12 border-t border-white/5 pt-8 z-10 hidden md:grid grid-cols-2 gap-12">
          <div className="text-left space-y-2">
            <div className="font-serif-display text-3xl text-amber-200 font-light">40+ Years</div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-semibold">Of Woodworking & Material Expertise</div>
            <p className="text-[11px] text-white/50 font-light leading-relaxed">
              Four decades of deep industry mastery, shaping select timbers with technical precision and design excellence.
            </p>
          </div>
          <div className="text-left space-y-2">
            <div className="font-serif-display text-3xl text-amber-200 font-light">20+ Years</div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-semibold">Of Studio Workshop Heritage</div>
            <p className="text-[11px] text-white/50 font-light leading-relaxed">
              Two decades serving as a trusted local studio, delivering premium boards, hinges, and custom doors to generations of homes.
            </p>
          </div>
        </div>

        {/* Small screen alternative caption */}
        <p className="text-center text-white/40 text-xs mt-8 tracking-[0.15em] font-light z-10 md:hidden">
          Scroll to open the door and step inside.
        </p>

      </div>
    </section>
  );
}
