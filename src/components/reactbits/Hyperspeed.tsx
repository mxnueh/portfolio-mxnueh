'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HyperspeedProps {
  className?: string;
  speed?: number;
  starCount?: number;
  starColor?: string;
}

export function Hyperspeed({
  className,
  speed = 4,
  starCount = 200,
  starColor = '#ffffff',
}: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const stars = Array.from({ length: starCount }).map(() => ({
      x: (Math.random() - 0.5) * canvas.width * 2,
      y: (Math.random() - 0.5) * canvas.height * 2,
      z: Math.random() * canvas.width,
      pz: 0,
    }));

    stars.forEach((s) => (s.pz = s.z));

    const render = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.pz = star.z;
        }

        const k = 250 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const pk = 250 / star.pz;
          const prevX = star.x * pk + centerX;
          const prevY = star.y * pk + centerY;

          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(px, py);
          ctx.strokeStyle = starColor;
          ctx.lineWidth = Math.min(2, (1 - star.z / canvas.width) * 2.5);
          ctx.stroke();
        }

        star.pz = star.z;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [speed, starCount, starColor]);

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden bg-black', className)}>
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
