'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ShapeWavesProps {
  className?: string;
  waveColor?: string;
  speed?: number;
  waveCount?: number;
}

export function ShapeWaves({
  className,
  waveColor = '#0071e3',
  speed = 0.02,
  waveCount = 3,
}: ShapeWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 300;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += speed;

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const baseHeight = canvas.height * (0.6 + i * 0.1);
        ctx.moveTo(0, baseHeight);

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            Math.sin(x * 0.005 + step + i * 1.5) * 25 +
            Math.cos(x * 0.01 + step * 0.5) * 15 +
            baseHeight;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = waveColor;
        ctx.globalAlpha = 0.08 + i * 0.05;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [waveColor, speed, waveCount]);

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
