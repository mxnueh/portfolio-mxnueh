'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface DockProps {
  className?: string;
  children?: React.ReactNode;
}

export function Dock({ className, children }: DockProps) {
  return (
    <div
      className={cn(
        'mx-auto flex h-16 w-max items-center gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-2 backdrop-blur-md shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}

export interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: number;
  className?: string;
  children?: React.ReactNode;
  label?: string;
}

export function DockIcon({
  className,
  children,
  label,
  ...props
}: DockIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative flex aspect-square cursor-pointer items-center justify-center rounded-xl transition-all duration-200 ease-out hover:scale-125 hover:-translate-y-1 bg-black/5 dark:bg-white/10 p-2.5',
        className
      )}
      {...props}
    >
      {children}
      {label && isHovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 dark:bg-white/90 px-2 py-0.5 text-[11px] font-medium text-white dark:text-black shadow-md pointer-events-none animate-fade-in">
          {label}
        </span>
      )}
    </div>
  );
}
