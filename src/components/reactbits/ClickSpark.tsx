'use client';

import React, { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface ClickSparkProps {
  sparkColor?: string;
  sparkCount?: number;
  sparkSize?: number;
  sparkDuration?: number;
  children?: React.ReactNode;
}

export function ClickSpark({
  sparkColor = '#0071e3',
  sparkCount = 12,
  sparkSize = 3,
  sparkDuration = 500,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleClick = (e: MouseEvent) => {
      const colors = [sparkColor, '#60a5fa', '#ffffff', '#38bdf8'];
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 3 + 2;
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle,
          speed,
          life: 0,
          maxLife: sparkDuration / 16,
          size: sparkSize,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    window.addEventListener('click', handleClick);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((s) => s.life < s.maxLife);

      sparksRef.current.forEach((s) => {
        s.life++;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.speed *= 0.95;

        const alpha = 1 - s.life / s.maxLife;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, [sparkColor, sparkCount, sparkSize, sparkDuration]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 size-full"
      />
      {children}
    </>
  );
}
