'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
}

export function DecryptedText({
  text,
  speed = 45,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~|}{[]:;?><',
  className,
  parentClassName,
  encryptedClassName = 'text-accent-fill/80 font-mono',
  animateOn = 'hover',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const getNextChar = () => characters[Math.floor(Math.random() * characters.length)];

  const runDecryption = () => {
    setIsScrambling(true);
    let iteration = 0;
    const textLength = text.length;

    const interval = setInterval(() => {
      iteration++;
      const revealedCount = Math.floor((iteration / maxIterations) * textLength);

      const result = text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        const isRevealed =
          revealDirection === 'start'
            ? index < revealedCount
            : revealDirection === 'end'
            ? index >= textLength - revealedCount
            : Math.abs(index - textLength / 2) < revealedCount / 2;

        return isRevealed ? char : getNextChar();
      });

      setDisplayText(result.join(''));

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrambling) {
            runDecryption();
          }
        },
        { threshold: 0.2 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => {
        setIsHovering(true);
        if (animateOn === 'hover') runDecryption();
      }}
      onMouseLeave={() => setIsHovering(false)}
      className={cn('inline-block cursor-default select-none font-medium', parentClassName)}
    >
      <span className={cn(isScrambling ? encryptedClassName : '', className)}>
        {displayText}
      </span>
    </span>
  );
}
