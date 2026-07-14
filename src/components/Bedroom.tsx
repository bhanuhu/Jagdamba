"use client";

import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Bedroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(containerRef);

  // Parent container is h-[280vh].
  // Sticky viewport tracks scroll progress from 0.0 to 1.0.
  //
  // 1. Bedroom background image transitions
  // Starts at scale 1.4, zooms out to 1.0 as we scroll
  const bgScale = Math.max(1.0, 1.4 - scrollProgress * 0.8);
  // Fades in from 0.2 to 1.0 as the central card fades out (0.45 -> 0.7)
  let bgOpacity = 0.25;
  if (scrollProgress < 0.45) {
    bgOpacity = 0.25;
  } else if (scrollProgress >= 0.45 && scrollProgress <= 0.7) {
    const factor = (scrollProgress - 0.45) / 0.25; // 0 to 1
    bgOpacity = 0.25 + factor * 0.75;
  } else {
    bgOpacity = 1.0;
  }

  // 2. Door card container transitions
  // Starts fully visible (opacity 1, scale 1.0), and fades out later
  let cardOpacity = 1.0;
  let cardScale = 1.0;

  if (scrollProgress < 0.45) {
    cardOpacity = 1.0;
    cardScale = 1.0;
  } else if (scrollProgress >= 0.45 && scrollProgress <= 0.7) {
    const factor = (scrollProgress - 0.45) / 0.25; // 0 to 1
    cardOpacity = 1.0 - factor;
    cardScale = 1.0 - factor * 0.1; // slight scale down as it fades
  } else {
    cardOpacity = 0;
    cardScale = 0.9;
  }

  // 3. Door swing inside the card (Phase 3)
  // Starts closed, opens between 0.15 and 0.45
  let doorRotation = 0;

  if (scrollProgress < 0.15) {
    doorRotation = 0;
  } else if (scrollProgress >= 0.15 && scrollProgress <= 0.45) {
    const factor = (scrollProgress - 0.15) / 0.3; // 0 to 1
    doorRotation = -95 * factor;
  } else {
    doorRotation = -95;
  }

  // 4. Large narrative text details (fades in as card fades out)
  let textOpacity = 0;
  let textTranslateY = 40;
  if (scrollProgress >= 0.4 && scrollProgress < 0.65) {
    const factor = (scrollProgress - 0.4) / 0.25; // 0 to 1
    textOpacity = Math.min(1, factor);
    textTranslateY = Math.max(0, 40 - factor * 40);
  } else if (scrollProgress >= 0.65 && scrollProgress < 0.9) {
    textOpacity = 1.0;
    textTranslateY = 0;
  } else if (scrollProgress >= 0.9) {
    const factor = (scrollProgress - 0.9) / 0.1; // 0 to 1
    textOpacity = Math.max(0, 1 - factor);
  }

  return (
    <section ref={containerRef} id="bedroom" className="relative h-[280vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Master Bedroom Background Image */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transform: `scale(${bgScale})`,
            opacity: bgOpacity,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            src="/images/master-bedroom-design.jpg"
            alt="Master Bedroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        {/* 3D Opening Door Card (Starts fully visible, fades out later) */}
        <div
          className="absolute z-20 flex items-center justify-center"
          style={{
            opacity: cardOpacity,
            transform: `scale(${cardScale})`,
            transition: 'transform 0.1s ease-out',
            pointerEvents: cardOpacity > 0.5 ? 'auto' : 'none'
          }}
        >
          {/* Card Container with Perspective */}
          <div
            className="relative w-[min(80vw,520px)] aspect-[3/5] rounded-lg overflow-hidden shadow-[0_60px_120px_-20px_rgba(255,180,90,0.4)] bg-neutral-900 border border-white/10"
            style={{ perspective: '1500px' }}
          >
            {/* Underlying Room Visual (Inside the door) */}
            {/* <div 
              className="absolute inset-0 transition-all duration-100 ease-out"
              style={{
                backgroundImage: 'url(/images/bedroom-material-card.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `scale(${roomScale})`,
                opacity: roomOpacity,
              }}
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

            {/* 3D Swinging Door Panel */}
            <div
              className="door-panel absolute inset-0 origin-left"
              style={{
                transform: `rotateY(${doorRotation}deg)`,
                backfaceVisibility: 'hidden',
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Door Surface Image */}
              <img
                src="/images/doors-bedroom-inside.jpg"
                alt="Jagdamba Door Veneer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60 pointer-events-none" />

              {/* Gold Handle */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-amber-200/80 rounded-full shadow-[0_0_15px_rgba(253,230,138,0.5)] border border-amber-100/30" />

              {/* Inlay Borders */}
              <div className="absolute inset-5 border border-amber-100/10 rounded pointer-events-none" />
            </div>

            {/* STATIC text label overlay (Stays centered at bottom of card, even when door panel opens) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
              <div className="text-[10px] tracking-[0.5em] text-amber-200/70 uppercase mb-2">
                Flagship
              </div>
              <div className="font-serif-display text-2xl text-white font-light">
                Jagdamba Doors
              </div>
            </div>

            {/* Card frame borders inlay */}
            <div className="absolute inset-4 border border-amber-100/10 rounded pointer-events-none z-10" />
          </div>
        </div>

        {/* Narrative details (Fades in as the card fades out) */}
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${textTranslateY}px, 0)`,
          }}
        >
          <div className="text-[10px] tracking-[0.5em] text-amber-200/80 uppercase mb-6 font-semibold">
            Crafted by
          </div>
          <h2 className="font-serif-display text-6xl md:text-9xl font-light leading-[0.95] text-white">
            Jagdamba<br />
            <span className="italic text-amber-200/90 font-light">Doors</span>
          </h2>
          <p className="max-w-xl text-white/70 mt-8 leading-relaxed font-light text-xs md:text-sm">
            Our flagship. Solid engineered cores. Hand-finished veneers. Silent-close mechanisms. A door that greets you every day for decades.
          </p>
        </div>

      </div>
    </section>
  );
}
