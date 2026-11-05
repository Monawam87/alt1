import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

export function useCountUp(end: number, duration = 2000, start = false, decimal = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(end * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  if (decimal) return count.toFixed(1);
  return Math.floor(count).toLocaleString('en-US');
}

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0] || '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      // Check if we're near the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
