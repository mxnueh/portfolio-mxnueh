'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function GlitchText({ text, className, speed = 1 }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('relative inline-block font-mono font-bold select-none cursor-pointer', className)}
    >
      <span className="relative z-10">{text}</span>
      {isHovered && (
        <>
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 text-rose-500 opacity-80 animate-[glitch_0.3s_infinite] pointer-events-none -translate-x-[2px]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
          >
            {text}
          </span>
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 text-cyan-400 opacity-80 animate-[glitch_0.25s_infinite_reverse] pointer-events-none translate-x-[2px]"
            style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  );
}
