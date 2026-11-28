'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  cursor?: boolean;
}

export function TypingAnimation({
  text,
  duration = 50,
  className,
  cursor = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    setDisplayedText('');
    setI(0);
  }, [text]);

  useEffect(() => {
    if (i < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(i));
        setI((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [i, text, duration]);

  return (
    <span className={cn('inline-block font-sans', className)}>
      {displayedText}
      {cursor && (
        <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-accent-fill align-middle animate-pulse" />
      )}
    </span>
  );
}
