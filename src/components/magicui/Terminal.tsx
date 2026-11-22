'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check, Copy, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalLine {
  text: string;
  type?: 'command' | 'output' | 'success' | 'warning' | 'error';
  delay?: number;
}

interface TerminalProps {
  title?: string;
  lines?: TerminalLine[];
  className?: string;
  autoPlay?: boolean;
}

export function Terminal({
  title = 'bash - enmanuel@portfolio ~',
  lines = [
    { text: 'whoami', type: 'command' },
    { text: 'Enmanuel Nunez Matias: Full Stack Developer & Systems Designer', type: 'output' },
    { text: 'cat current_focus.json', type: 'command' },
    { text: '{\n  "role": "Full Stack / React & Python",\n  "telemetry": "NASA Space Apps Finalist & HERC",\n  "status": "Ready to build ambitious systems"\n}', type: 'output' },
    { text: 'ping -c 3 opportunity.world', type: 'command' },
    { text: '64 bytes from opportunity: icmp_seq=1 ttl=64 time=0.042 ms', type: 'success' },
  ],
  className,
  autoPlay = true,
}: TerminalProps) {
  const [visibleCount, setVisibleCount] = useState(autoPlay ? 1 : lines.length);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!autoPlay || visibleCount >= lines.length) return;
    const current = lines[visibleCount];
    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, current?.delay || 600);
    return () => clearTimeout(timer);
  }, [autoPlay, visibleCount, lines]);

  const copyCode = () => {
    const textToCopy = lines.map((l) => (l.type === 'command' ? `$ ${l.text}` : l.text)).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'w-full max-w-2xl rounded-2xl overflow-hidden border border-separator/40 dark:border-white/10 bg-[#161617] text-white shadow-2xl font-mono text-xs md:text-sm',
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e20] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs text-white/50 flex items-center gap-1.5 font-sans">
            <TerminalIcon className="w-3.5 h-3.5 text-accent-fill" />
            {title}
          </span>
        </div>
        <button
          onClick={copyCode}
          className="text-white/40 hover:text-white transition-colors p-1 rounded hover:bg-white/5"
          title="Copy output"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal content */}
      <div className="p-4 space-y-2 min-h-[220px] max-h-[360px] overflow-y-auto leading-relaxed">
        {lines.slice(0, visibleCount).map((line, idx) => (
          <div key={idx} className="transition-all duration-300">
            {line.type === 'command' ? (
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-white/40 select-none">❯</span>
                <span>{line.text}</span>
              </div>
            ) : line.type === 'success' ? (
              <div className="text-emerald-400 pl-4 whitespace-pre-wrap">{line.text}</div>
            ) : line.type === 'warning' ? (
              <div className="text-amber-400 pl-4 whitespace-pre-wrap">{line.text}</div>
            ) : line.type === 'error' ? (
              <div className="text-rose-400 pl-4 whitespace-pre-wrap">{line.text}</div>
            ) : (
              <div className="text-gray-300 pl-4 whitespace-pre-wrap">{line.text}</div>
            )}
          </div>
        ))}
        {visibleCount < lines.length && (
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="text-white/40 select-none">❯</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
