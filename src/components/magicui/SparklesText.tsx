'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

interface SparklesTextProps {
  text: string;
  sparklesCount?: number;
  className?: string;
  sparkleColor?: string;
}

export function SparklesText({
  text,
  sparklesCount = 8,
  className,
  sparkleColor = '#38bdf8',
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: sparklesCount }).map((_, i) => ({
        id: `${i}-${Date.now()}`,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: sparkleColor,
        delay: Math.random() * 2,
        scale: Math.random() * 0.6 + 0.6,
      }));
    };

    setSparkles(generateSparkles());
    const interval = setInterval(() => {
      setSparkles(generateSparkles());
    }, 2500);

    return () => clearInterval(interval);
  }, [sparklesCount, sparkleColor]);

  return (
    <span className={cn('relative inline-block font-semibold', className)}>
      <span className="relative z-10">{text}</span>
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="pointer-events-none absolute block animate-ping opacity-75"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: `translate(-50%, -50%) scale(${sparkle.scale})`,
            animationDuration: '2s',
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            className="w-4 h-4 text-sky-400 dark:text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </span>
      ))}
    </span>
  );
}
