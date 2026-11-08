'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedGradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  pill?: boolean;
}

export function AnimatedGradientText({
  children,
  className,
  pill = true,
  ...props
}: AnimatedGradientTextProps) {
  if (!pill) {
    return (
      <span
        className={cn(
          'inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x font-semibold',
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <div
      className={cn(
        'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-sm',
        'border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-fill/40',
        className
      )}
      {...props}
    >
      <span className="inline-block bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
        {children}
      </span>
    </div>
  );
}
