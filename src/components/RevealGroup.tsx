'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function RevealGroup({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) return;

    const items = ref.current.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-children] > *');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const item = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          item.dataset.revealState = 'entered';
          observer.unobserve(item);
        } else {
          item.dataset.revealState = 'pending';
        }
      }
    }, { rootMargin: '0px 0px -24px' });

    items.forEach(item => observer.observe(item));
    return () => {
      observer.disconnect();
      items.forEach(item => { delete item.dataset.revealState; });
    };
  }, [children]);

  return <div ref={ref} className={className}>{children}</div>;
}
