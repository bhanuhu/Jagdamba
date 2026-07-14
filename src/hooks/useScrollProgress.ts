import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element has scrolled past
      // 0 means element is just entering from the bottom
      // 1 means element has fully scrolled out of the top
      const totalScrollHeight = element.offsetHeight + windowHeight;
      const scrolled = windowHeight - rect.top;
      
      const currentProgress = Math.max(0, Math.min(1, scrolled / totalScrollHeight));
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return progress;
}
