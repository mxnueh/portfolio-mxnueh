'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientASCIIProps {
  art?: string;
  className?: string;
}

const DEFAULT_ASCII = `
  _   _  _____ _____ _   _ 
 | \\ | |/ ____|_   _| \\ | |
 |  \\| | |  __  | | |  \\| |
 | . \` | | |_ | | | | . \` |
 | |\\  | |__| |_| |_| |\\  |
 |_| \\_|\\_____|_____|_| \\_|
`;

export function GradientASCII({
  art = DEFAULT_ASCII,
  className,
}: GradientASCIIProps) {
  return (
    <pre
      className={cn(
        'font-mono text-[9px] md:text-xs leading-none select-none font-bold bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x p-2',
        className
      )}
    >
      {art}
    </pre>
  );
}
