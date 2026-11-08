'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 200);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span
      className={cn(
        'inline-block transition-all duration-300 font-semibold text-accent-fill',
        fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95',
        className
      )}
    >
      {words[index]}
    </span>
  );
}
