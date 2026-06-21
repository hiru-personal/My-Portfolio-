import { useEffect, useRef } from 'react';

/**
 * Smooth scroll-reveal hook.
 * Observes all `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`
 * children inside the ref element and adds `.visible` with staggered delays
 * when they scroll into view.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(
              '.reveal, .reveal-left, .reveal-right, .reveal-scale'
            );
            reveals.forEach((child, i) => {
              child.style.transitionDelay = `${i * 0.1}s`;
              requestAnimationFrame(() => {
                child.classList.add('visible');
              });
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
