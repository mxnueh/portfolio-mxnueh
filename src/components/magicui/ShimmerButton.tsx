'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export function ShimmerButton({
  shimmerColor = '#ffffff',
  shimmerSize = '0.05em',
  shimmerDuration = '3s',
  borderRadius = '100px',
  background = 'rgba(0, 113, 227, 1)',
  className,
  children,
  href,
  ...props
}: ShimmerButtonProps) {
  const content = (
    <button
      style={
        {
          '--spread': '90deg',
          '--shimmer-color': shimmerColor,
          '--radius': borderRadius,
          '--speed': shimmerDuration,
          '--cut': shimmerSize,
          '--bg': background,
        } as React.CSSProperties
      }
      className={cn(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transition-transform duration-200 active:scale-95 shadow-md hover:shadow-lg',
        className
      )}
      {...props}
    >
      {/* Spark container */}
      <div className="absolute inset-0 -z-30 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shine [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      <span className="relative z-10 flex items-center gap-2 text-sm font-medium tracking-tight">
        {children}
      </span>
      {/* Backdrop */}
      <div className="absolute [inset:var(--cut)] -z-20 [background:var(--bg)] [border-radius:var(--radius)]" />
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
