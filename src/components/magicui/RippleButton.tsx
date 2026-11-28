'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  rippleColor?: string;
  href?: string;
}

export function RippleButton({
  className,
  children,
  rippleColor = 'rgba(255, 255, 255, 0.4)',
  href,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple: Ripple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onClick?.(e);
  };

  const content = (
    <button
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden rounded-full bg-accent-fill px-6 py-3 font-medium text-sm text-white shadow transition-all duration-200 active:scale-95 hover:bg-accent-hover',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full animate-ping"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            backgroundColor: rippleColor,
            animationDuration: '600ms',
            animationTimingFunction: 'ease-out',
          }}
        />
      ))}
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
