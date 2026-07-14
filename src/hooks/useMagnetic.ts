import { useRef, useEffect } from 'react';

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      // Calculate distance
      const distance = Math.hypot(deltaX, deltaY);
      
      // Pull strength limit
      if (distance < 120) {
        // Move the element 35% towards the cursor
        el.style.transform = `translate(${deltaX * 0.35}px, ${deltaY * 0.35}px)`;
      } else {
        el.style.transform = 'translate(0px, 0px)';
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0px, 0px)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (el) {
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return ref;
}
