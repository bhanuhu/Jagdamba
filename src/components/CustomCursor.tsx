"use client";

import { useState, useEffect } from 'react';
import { ambientSynth } from '../utils/audioSynth';

export default function CustomCursor() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show custom cursor only when mouse moves inside window
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse is over an interactive element
      const target = e.target as HTMLElement;
      if (target) {
        const isInteractive = target.closest('a, button, select, [role="button"], input, textarea, .cursor-pointer') !== null;
        setIsHovering(isInteractive);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target && target.closest('a, button, select, [role="button"], input, textarea, .cursor-pointer') !== null;
      
      setIsClicking(true);
      
      // Play a short premium wood-tap/hammer click sound when hitting an interactive button
      if (isInteractive) {
        try {
          ambientSynth.playHammerHit();
        } catch (err) {
          console.warn('AudioContext hit sound failed:', err);
        }
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
        // Anchor the tip of the nail (bottom-left corner of the nail image)
        // Offset by 2px on X and -34px on Y so the sharp tip aligns with the mouse hotspot
        transform: 'translate3d(2px, -34px, 0)',
      }}
    >
      {/* Container */}
      <div className="relative w-16 h-16">
        
        {/* High-Graphic 3D Golden Nail */}
        <img loading="lazy" decoding="async"
          src="/nail_3d.png"
          alt="3D Gold Nail Cursor"
          className="absolute left-0 top-0 w-9 h-9 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] z-10"
        />

        {/* High-Graphic 3D Carpentry Hammer (Hovering above the nail head) */}
        <div
          className="absolute origin-[40px_40px] transition-all duration-75 ease-out z-20"
          style={{
            left: '20px',
            top: '-26px',
            opacity: isHovering ? 1 : 0,
            transform: isClicking
              ? 'translate3d(2px, -2px, 0) rotate(-5deg)'  // swing down to strike nail head precisely at the top
              : isHovering
              ? 'translate3d(0, 0, 0) rotate(15deg)'         // ready stance
              : 'translate3d(20px, -20px, 0) rotate(45deg)', // hidden state
          }}
        >
          <img loading="lazy" decoding="async"
            src="/hammer_3d.png"
            alt="3D Hammer Strike"
            className="w-14 h-14 object-contain drop-shadow-[0_6px_8px_rgba(0,0,0,0.6)]"
          />
        </div>

      </div>
    </div>
  );
}
