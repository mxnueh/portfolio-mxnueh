'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: React.ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = 'Explore',
}: BentoCardProps) {
  const content = (
    <div
      className={cn(
        'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl',
        'bg-white dark:bg-[#1c1c1e] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        'dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60 transition-opacity duration-300 group-hover:opacity-100">
        {background}
      </div>

      {/* Top icon and content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-bg-alt dark:bg-white/10 flex items-center justify-center text-text-primary dark:text-white mb-4 transition-transform duration-300 group-hover:scale-110">
              <Icon className="w-6 h-6" />
            </div>
          )}
          <h3 className="text-xl font-semibold tracking-tight text-text-primary dark:text-white mb-2">
            {name}
          </h3>
          <p className="text-sm text-text-secondary dark:text-gray-400 max-w-[260px] leading-relaxed">
            {description}
          </p>
        </div>

        {href && (
          <div className="flex items-center gap-2 text-sm font-medium text-accent-fill group-hover:translate-x-1 transition-transform duration-200 mt-4">
            <span>{cta}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Subtle bottom gradient glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 dark:from-[#1c1c1e] to-transparent z-[5]" />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="contents">
        {content}
      </Link>
    );
  }

  return content;
}
