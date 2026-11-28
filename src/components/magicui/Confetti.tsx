'use client';

import React, { useRef, useCallback } from 'react';

interface ConfettiPiece {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  color: string;
  rotation: number;
  vRot: number;
  opacity: number;
}

export function useConfetti() {
  const fire = useCallback((originX = window.innerWidth / 2, originY = window.innerHeight / 2) => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#0071e3', '#34c759', '#ff9500', '#af52de', '#ff2d55', '#5856d6', '#ffd60a'];
    const count = 100;
    const pieces: ConfettiPiece[] = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      pieces.push({
        x: originX,
        y: originY,
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        opacity: 1,
      });
    }

    let animationId: number;
    let frames = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frames++;

      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.vx *= 0.98; // drag
        p.rotation += p.vRot;
        if (frames > 40) {
          p.opacity -= 0.015;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (pieces.some((p) => p.opacity > 0)) {
        animationId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationId);
        canvas.remove();
      }
    };

    render();
  }, []);

  return { fire };
}
