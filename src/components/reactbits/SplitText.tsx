'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  by?: 'chars' | 'words';
  textAlign?: 'left' | 'center' | 'right';
}

export function SplitText({
  text,
  className,
  delay = 30,
  by = 'chars',
  textAlign = 'left',
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const items = by === 'chars' ? text.split('') : text.split(' ');

  return (
    <div
      ref={containerRef}
      className={cn('inline-block overflow-hidden', className)}
      style={{ textAlign }}
    >
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${index * delay}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(120%) rotate(4deg)',
          }}
        >
          {item === ' ' ? '\u00A0' : item}
          {by === 'words' && index < items.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </div>
  );
}
