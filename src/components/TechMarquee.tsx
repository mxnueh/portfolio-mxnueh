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
  siDotnet,
  siPostgresql,
  siSupabase,
  siMysql,
  siRaspberrypi,
  siGithub,
} from 'simple-icons';
import { CsharpIcon } from '@/components/icons/CsharpIcon';
import { getContent } from '@/lib/getContent';
import type { Language } from '@/lib/types';

interface TechMarqueeProps {
  lang: Language;
}

const TECH_ITEMS = [
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
  { title: 'C#', Component: CsharpIcon, hex: siDotnet.hex },
  siPostgresql,
  siSupabase,
  siMysql,
  siRaspberrypi,
  siGithub,
];

const iconClassName = 'size-6 shrink-0 md:size-7';
const trackClassName = 'flex items-center motion-safe:w-max motion-safe:shrink-0 motion-safe:gap-14 motion-safe:pr-14 motion-safe:animate-[marquee_60s_linear_infinite] motion-safe:group-hover:[animation-play-state:paused] md:motion-safe:gap-16 md:motion-safe:pr-16';

export function TechMarquee({ lang }: TechMarqueeProps) {
  const { techMarquee } = getContent(lang).home;
  const items = TECH_ITEMS.map((item) => (
    <li key={item.title} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-base md:gap-3 md:text-lg">
      {'Component' in item ? (
        <item.Component aria-hidden="true" fill={`#${item.hex}`} className={iconClassName} />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill={`#${item.hex}`}
          className={item === siNextdotjs || item === siGithub ? `${iconClassName} dark:fill-white` : iconClassName}
        >
          <path d={item.path} />
        </svg>
      )}
      <span className="[font-family:var(--font-geist-sans),system-ui,sans-serif] font-[450] tracking-[-0.02em]">
        {item.title}
      </span>
    </li>
  ));

  return (
    <section
      id="tech-marquee-wrapper"
      className="px-4 pt-6 pb-12 text-(--tech-icon) sm:px-8 md:pt-8 md:pb-16 lg:px-12"
      aria-label={techMarquee.ariaLabel}
    >
      <div className="group mx-auto flex max-w-[96rem] overflow-hidden motion-safe:mask-[linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <ul role="list" className={`${trackClassName} motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-8 motion-reduce:gap-y-5`}>
          {items}
        </ul>
        <ul aria-hidden="true" className={`${trackClassName} motion-reduce:hidden`}>
          {items}
        </ul>
      </div>
    </section>
  );
}
