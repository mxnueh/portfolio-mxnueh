'use client';

import React, { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 250,
  gradientColor = '#0071e3',
  gradientOpacity = 0.15,
  ...props
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#18181b] p-6 transition-all duration-300',
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? gradientOpacity : 0,
          background: `radial-gradient(${gradientSize}px circle at ${mousePos.x}px ${mousePos.y}px, ${gradientColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
