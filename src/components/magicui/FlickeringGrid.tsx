'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  connectionChance?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.25,
  color = 'rgb(0, 113, 227)',
  className,
  maxOpacity = 0.3,
  connectionChance = 0,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setDimensions({ width, height });
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const step = squareSize + gridGap;
    const cols = Math.floor(dimensions.width / step);
    const rows = Math.floor(dimensions.height / step);
    const opacities = new Float32Array(cols * rows);

    for (let i = 0; i < opacities.length; i++) {
      opacities[i] = Math.random() * maxOpacity;
    }

    const connections = new Path2D();
    if (connectionChance > 0) {
      for (let col = 0; col < cols - 1; col++) {
        for (let row = 0; row < rows - 1; row++) {
          if (Math.random() >= connectionChance) continue;

          const x = col * step + squareSize / 2;
          const y = row * step + squareSize / 2;
          const horizontal = Math.random() < 0.5;
          connections.moveTo(x, y);
          connections.lineTo(horizontal ? x + step : x, horizontal ? y : y + step);
        }
      }
    }

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      if (connectionChance > 0) {
        ctx.globalAlpha = maxOpacity * 0.6;
        ctx.stroke(connections);
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          if (Math.random() < flickerChance) {
            opacities[idx] = Math.random() * maxOpacity;
          }

          ctx.globalAlpha = opacities[idx];
          ctx.fillRect(i * step, j * step, squareSize, squareSize);
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [dimensions, squareSize, gridGap, flickerChance, color, maxOpacity, connectionChance]);

  return (
    <div ref={containerRef} className={cn('absolute inset-0 pointer-events-none', className)} aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
