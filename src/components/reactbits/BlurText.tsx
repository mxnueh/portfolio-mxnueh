'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
}

export function BlurText({
  text,
  delay = 100,
  className,
  animateBy = 'words',
  direction = 'top',
}: BlurTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <p ref={ref} className={cn('inline-flex flex-wrap', className)}>
      {elements.map((el, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${index * delay}ms`,
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView
              ? 'translateY(0)'
              : direction === 'top'
              ? 'translateY(-16px)'
              : 'translateY(16px)',
          }}
        >
          {el === ' ' ? '\u00A0' : el}
          {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </p>
  );
}
