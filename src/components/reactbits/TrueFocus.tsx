'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TrueFocusProps {
  sentence: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

export function TrueFocus({
  sentence = 'Building telemetry and ambitious systems',
  manualMode = false,
  blurAmount = 4,
  borderColor = '#0071e3',
  glowColor = 'rgba(0, 113, 227, 0.4)',
  animationDuration = 0.4,
  pauseBetweenAnimations = 1.5,
  className,
}: TrueFocusProps) {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<{ x: number; y: number; width: number; height: number }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    const activeEl = wordRefs.current[currentIndex];
    const container = containerRef.current;
    if (activeEl && container) {
      const cRect = container.getBoundingClientRect();
      const wRect = activeEl.getBoundingClientRect();
      setFocusRect({
        x: wRect.left - cRect.left,
        y: wRect.top - cRect.top,
        width: wRect.width,
        height: wRect.height,
      });
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-flex flex-wrap gap-x-2 gap-y-1 items-center select-none py-1', className)}
    >
      {words.map((word, idx) => {
        const isCurrent = idx === currentIndex;
        return (
          <span
            key={idx}
            ref={(el) => {
              wordRefs.current[idx] = el;
            }}
            onMouseEnter={() => {
              if (manualMode) setCurrentIndex(idx);
            }}
            className="relative cursor-pointer px-1 text-inherit transition-all duration-300 font-semibold"
            style={{
              filter: isCurrent ? 'none' : `blur(${blurAmount}px)`,
              opacity: isCurrent ? 1 : 0.45,
            }}
          >
            {word}
          </span>
        );
      })}

      {/* Focus Box Frame */}
      <div
        className="pointer-events-none absolute border-2 rounded-lg transition-all duration-300 ease-out"
        style={{
          transform: `translate(${focusRect.x - 4}px, ${focusRect.y - 2}px)`,
          width: `${focusRect.width + 8}px`,
          height: `${focusRect.height + 4}px`,
          borderColor: borderColor,
          boxShadow: `0 0 12px ${glowColor}`,
        }}
      >
        <span
          className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2"
          style={{ borderColor: borderColor }}
        />
        <span
          className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2"
          style={{ borderColor: borderColor }}
        />
        <span
          className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2"
          style={{ borderColor: borderColor }}
        />
        <span
          className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2"
          style={{ borderColor: borderColor }}
        />
      </div>
    </div>
  );
}
