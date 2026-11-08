'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export function RainbowButton({
  className,
  children,
  href,
  ...props
}: RainbowButtonProps) {
  const content = (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center rounded-full p-[2px] font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95',
        'bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 via-blue-500 to-purple-600 bg-[length:200%_auto] animate-gradient-x shadow-md hover:shadow-xl',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2 rounded-full bg-white dark:bg-black px-6 py-2.5 text-text-primary dark:text-white transition-all duration-200 group-hover:bg-opacity-90">
        {children}
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
