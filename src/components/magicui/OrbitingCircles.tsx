'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 120,
  path = true,
  iconSize = 32,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/15"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={{
          ['--duration' as string]: calculatedDuration,
          ['--radius' as string]: radius,
          ['--delay' as string]: -delay,
        }}
        className={cn(
          'absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border-0 [animation-delay:calc(var(--delay)*1s)]',
          reverse && '[animation-direction:reverse]',
          className
        )}
        {...props}
      >
        <div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-md border border-black/5 dark:border-white/10"
        >
          {children}
        </div>
      </div>
    </>
  );
}
