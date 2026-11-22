import React from 'react';
import {
  siReact,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNextdotjs,
  siFlutter,
  siPython,
  siFastapi,
  siFlask,
  siNodedotjs,
  siPostgresql,
  siSupabase,
  siMysql,
  siRaspberrypi,
  siGithub,
} from 'simple-icons';
import { CsharpIcon } from '@/components/icons/CsharpIcon';
import { getContent } from '@/lib/getContent';
import { Language } from '@/lib/types';

interface TechMarqueeProps {
  lang: Language;
}

interface IconItem {
  id: string;
  title: string;
  type: 'simple' | 'custom';
  path?: string;
  Component?: React.ComponentType<{ className?: string }>;
}

const TECH_ITEMS: IconItem[] = [
  { id: 'react', title: siReact.title, type: 'simple', path: siReact.path },
  { id: 'typescript', title: siTypescript.title, type: 'simple', path: siTypescript.path },
  { id: 'javascript', title: siJavascript.title, type: 'simple', path: siJavascript.path },
  { id: 'tailwindcss', title: siTailwindcss.title, type: 'simple', path: siTailwindcss.path },
  { id: 'nextjs', title: siNextdotjs.title, type: 'simple', path: siNextdotjs.path },
  { id: 'flutter', title: siFlutter.title, type: 'simple', path: siFlutter.path },
  { id: 'python', title: siPython.title, type: 'simple', path: siPython.path },
  { id: 'fastapi', title: siFastapi.title, type: 'simple', path: siFastapi.path },
  { id: 'flask', title: siFlask.title, type: 'simple', path: siFlask.path },
  { id: 'nodejs', title: siNodedotjs.title, type: 'simple', path: siNodedotjs.path },
  { id: 'csharp', title: 'C#', type: 'custom', Component: CsharpIcon },
  { id: 'postgresql', title: siPostgresql.title, type: 'simple', path: siPostgresql.path },
  { id: 'supabase', title: siSupabase.title, type: 'simple', path: siSupabase.path },
  { id: 'mysql', title: siMysql.title, type: 'simple', path: siMysql.path },
  { id: 'raspberrypi', title: siRaspberrypi.title, type: 'simple', path: siRaspberrypi.path },
  { id: 'github', title: siGithub.title, type: 'simple', path: siGithub.path },
];

function renderIcon(item: IconItem, keyPrefix = 'prim') {
  if (item.type === 'custom' && item.Component) {
    const Comp = item.Component;
    return (
      <Comp
        key={`${keyPrefix}-${item.id}`}
        className="h-6 md:h-7 w-auto shrink-0 transition-colors"
      />
    );
  }

  return (
    <svg
      key={`${keyPrefix}-${item.id}`}
      role="img"
      aria-label={item.title}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 md:h-7 w-auto shrink-0 transition-colors"
    >
      <title>{item.title}</title>
      <path d={item.path} />
    </svg>
  );
}

export function TechMarquee({ lang }: TechMarqueeProps) {
  const content = getContent(lang);
  const marqueeContent = content.home.techMarquee || {
    ariaLabel: lang === 'es' ? 'Tecnologías con las que trabajo' : 'Technologies I work with',
  };

  return (
    <section
      id="tech-marquee-wrapper"
      className="relative border-y border-black/[0.06] dark:border-white/[0.08] bg-bg-alt dark:bg-[#121214] py-4 overflow-hidden transition-colors"
      aria-label={marqueeContent.ariaLabel}
    >
      {/* Left & Right Edge Gradient Blur Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-bg-alt dark:from-[#121214] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-bg-alt dark:from-[#121214] to-transparent z-10" />

      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-center">
        <div
          className="group flex flex-1 overflow-hidden"
          style={{
            color: 'var(--tech-icon)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          {/* Primary track */}
          <div className="flex shrink-0 items-center animate-marquee gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8 md:motion-reduce:gap-12 motion-reduce:pr-0">
            {TECH_ITEMS.map((item) => renderIcon(item, 'prim'))}
          </div>

          {/* Loop duplicate track */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center animate-marquee gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:hidden"
          >
            {TECH_ITEMS.map((item) => renderIcon(item, 'dup'))}
          </div>
        </div>
      </div>
    </section>
  );
}
