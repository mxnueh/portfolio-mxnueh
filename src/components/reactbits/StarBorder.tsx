'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

export function StarBorder({
  as: Component = 'div',
  className,
  color = '#0071e3',
  speed = '4s',
  children,
  ...props
}: StarBorderProps) {
  return (
    <Component
      className={cn(
        'relative inline-block overflow-hidden rounded-2xl p-[1px]',
        className
      )}
      {...props}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-0 right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-0 left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 rounded-2xl bg-white dark:bg-[#18181b] p-4">
        {children}
      </div>
    </Component>
  );
}
