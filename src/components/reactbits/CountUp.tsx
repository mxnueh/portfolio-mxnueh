'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

export function CountUp({
  to,
  from = 0,
  duration = 2,
  className,
  prefix = '',
  suffix = '',
  separator = ',',
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + (to - from) * eased);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(animate);
  }, [started, from, to, duration]);

  const formatted = count.toLocaleString().replace(/,/g, separator);

  return (
    <span ref={ref} className={cn('tabular-nums font-bold', className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
