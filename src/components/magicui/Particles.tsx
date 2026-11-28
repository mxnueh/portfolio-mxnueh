'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  color?: string;
}

// Adapted from https://magicui.design/r/particles.json with local cursor repulsion.
export function Particles({ className, quantity = 100, color = '#ffffff' }: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const panel = container?.parentElement;
    const context = canvas?.getContext('2d');
    if (!container || !canvas || !panel || !context) return;

    const repelRadius = 125;
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;

    const movePointer = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const bounds = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    };

    function clearPointer() {
      pointer = null;
    }

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      cancelAnimationFrame(frame);
      if (!width || !height) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.fillStyle = color;

      const particles = Array.from({ length: quantity }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.4,
        opacity: 0.22 + Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        offsetX: 0,
        offsetY: 0,
      }));

      const animate = () => {
        context.clearRect(0, 0, width, height);

        for (const particle of particles) {
          particle.x = (particle.x + particle.vx + width) % width;
          particle.y = (particle.y + particle.vy + height) % height;

          let targetX = 0;
          let targetY = 0;
          if (pointer) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);

            if (distance > 0 && distance < repelRadius) {
              const strength = (1 - distance / repelRadius) * 75;
              targetX = (dx / distance) * strength;
              targetY = (dy / distance) * strength;
            }
          }

          particle.offsetX += (targetX - particle.offsetX) * 0.14;
          particle.offsetY += (targetY - particle.offsetY) * 0.14;
          const x = particle.x + particle.offsetX;
          const y = particle.y + particle.offsetY;
          const edge = Math.min(x, width - x, y, height - y);

          context.globalAlpha = particle.opacity * Math.max(0, Math.min(1, edge / 16));
          context.beginPath();
          context.arc(x, y, particle.radius, 0, Math.PI * 2);
          context.fill();
        }

        frame = requestAnimationFrame(animate);
      };

      frame = requestAnimationFrame(animate);
    });

    observer.observe(container);
    panel.addEventListener('pointermove', movePointer);
    panel.addEventListener('pointerleave', clearPointer);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      panel.removeEventListener('pointermove', movePointer);
      panel.removeEventListener('pointerleave', clearPointer);
    };
  }, [color, quantity]);

  return (
    <div ref={containerRef} aria-hidden="true" className={cn('pointer-events-none', className)}>
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  );
}
