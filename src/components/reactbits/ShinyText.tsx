'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className,
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        'inline-block text-[#b5b5b5a4] bg-clip-text',
        !disabled && 'animate-shine',
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </span>
  );
}
