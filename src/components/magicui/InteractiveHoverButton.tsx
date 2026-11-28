'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  href?: string;
}

export function InteractiveHoverButton({
  text = 'Button',
  className,
  href,
  ...props
}: InteractiveHoverButtonProps) {
  const content = (
    <button
      className={cn(
        'group relative w-auto cursor-pointer overflow-hidden rounded-full border border-black/10 dark:border-white/20 bg-white dark:bg-zinc-900 p-2 px-6 text-center font-semibold text-sm transition-all duration-300 hover:shadow-lg',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-accent-fill transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-text-primary dark:text-white">
          {text}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
