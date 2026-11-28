'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MeteorsProps {
  number?: number;
  className?: string;
}

interface MeteorStyle {
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => ({
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${(Math.random() * 2).toFixed(2)}s`,
      animationDuration: `${(Math.random() * 4 + 3).toFixed(2)}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            'pointer-events-none absolute h-0.5 w-0.5 [transform:rotate(215deg)] animate-meteor rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff10]',
            className
          )}
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        >
          {/* Meteor Tail */}
          <span className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-400 to-transparent" />
        </span>
      ))}
    </div>
  );
}
