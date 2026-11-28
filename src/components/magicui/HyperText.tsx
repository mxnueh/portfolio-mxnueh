'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HyperTextProps {
  text: string;
  duration?: number;
  className?: string;
  animateOnHover?: boolean;
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export function HyperText({
  text,
  duration = 800,
  className,
  animateOnHover = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isTriggered, setIsTriggered] = useState(false);
  const iterations = useRef(0);

  const triggerAnimation = () => {
    iterations.current = 0;
    const intervalTime = duration / (text.length * 2);

    const interval = setInterval(() => {
      setDisplayText((_) =>
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iterations.current) {
              return text[index];
            }
            return alphabets[Math.floor(Math.random() * alphabets.length)];
          })
          .join('')
      );

      if (iterations.current >= text.length) {
        clearInterval(interval);
      }
      iterations.current += 1 / 2;
    }, intervalTime);
  };

  useEffect(() => {
    triggerAnimation();
  }, [text]);

  return (
    <span
      onMouseEnter={() => {
        if (animateOnHover) triggerAnimation();
      }}
      className={cn('inline-block cursor-pointer font-mono font-bold tracking-wide select-none', className)}
    >
      {displayText}
    </span>
  );
}
