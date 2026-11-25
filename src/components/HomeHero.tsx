import Image from 'next/image';
import Link from 'next/link';
import { Fragment, type CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getContent } from '@/lib/getContent';
import type { Language } from '@/lib/types';
import './HomeHero.css';

function staggerIndex(index: number): CSSProperties {
  return { '--i': index } as CSSProperties;
}

function HeroWords({ text, stagger = false }: { text: string; stagger?: boolean }) {
  return text.split(/(\s+)/).map((part, index) => {
    if (index % 2 === 1) return part;

    const style = stagger ? staggerIndex(index / 2) : undefined;
    // Keep the existing line-break opportunity in words such as “real-time”.
    const fragments = stagger ? part.split(/(?<=-)(?=.)/) : [part];

    return (
      <Fragment key={index}>
        {fragments.map((fragment, fragmentIndex) => (
          <span key={fragmentIndex} style={style}>{fragment}</span>
        ))}
      </Fragment>
    );
  });
}

function HeroLead({ text }: { text: string }) {
  return (
    <p className="intro-lead home-lead mb-6 text-text-secondary dark:text-gray-300">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="home-hero-lead-words">
        <HeroWords text={text} stagger />
      </span>
    </p>
  );
}

export function HomeHero({ lang }: { lang: Language }) {
  const { meta, home: { hero } } = getContent(lang);

  return (
    <section className="home-hero bg-white px-4 pt-10 pb-6 sm:px-8 lg:px-12 lg:pt-16 dark:bg-[#0c0c0e]">
      <div className="relative isolate mx-auto max-w-[96rem] rounded-large bg-bg-alt lg:flex lg:min-h-[clamp(30rem,35vw,36rem)] lg:items-center dark:bg-surface-dark">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
          <div className="home-hero-ribbon absolute inset-x-0 bottom-4 mx-auto aspect-square max-w-[34rem] lg:inset-x-auto lg:top-[-15%] lg:left-[60.5%] lg:mx-0 lg:h-[112%] lg:w-1/2 lg:max-w-none">
            <div className="absolute inset-0 bg-[url('/assets/blue_ribbon.webp')] bg-size-[100%_100%] bg-no-repeat lg:origin-top-left lg:[transform:skewX(-10deg)_rotate(4deg)]" />
          </div>
        </div>
        <div className="px-5 pt-8 pb-6 sm:px-10 sm:pt-12 lg:w-[58%] lg:py-10 lg:pr-4 xl:py-12 xl:pl-16">
          <h1 className="home-hero-title home-heading relative mb-6 wrap-anywhere">
            <span className="home-hero-title-static heading-ink block">
              {hero.headline}{' '}<span className="text-accent-fill">{hero.headlineAccent}</span>
            </span>
            <span className="home-hero-title-entrance absolute inset-0" aria-hidden="true">
              <span className="home-hero-title-line home-hero-title-ink heading-ink">
                <HeroWords text={hero.headline} />
              </span>{' '}
              <span className="home-hero-title-line text-accent-fill" style={staggerIndex(1)}>
                <HeroWords text={hero.headlineAccent} />
              </span>
            </span>
          </h1>
          <HeroLead text={hero.lead} />
          <div className="home-actions flex flex-wrap items-center gap-2">
            <div className="home-hero-action flex">
              <Link
                href={hero.primaryCTA.href}
                className="portfolio-button min-h-[38px] border-accent-fill bg-accent-fill px-3 py-1.5 text-white"
              >
                {hero.primaryCTA.label}
              </Link>
            </div>
            <Link
              href={hero.secondaryCTA.href}
              className="portfolio-button home-hero-action min-h-[38px] px-3 py-1.5"
              style={staggerIndex(1)}
            >
              {hero.secondaryCTA.label}
            </Link>
          </div>
          <dl className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-4 min-[380px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)] sm:flex sm:flex-wrap sm:gap-x-8">
            {hero.highlights.map(({ value, label }, index) => (
              <div key={label} className="home-hero-highlight flex flex-col-reverse justify-end gap-1" style={staggerIndex(index)}>
                <dt className="wrap-break-word text-sm text-text-secondary dark:text-gray-300">{label}</dt>
                <dd className="text-2xl font-semibold tracking-tight">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto max-w-[34rem] overflow-hidden rounded-b-large pb-4 lg:absolute lg:inset-y-0 lg:right-0 lg:-top-[4.5rem] lg:mx-0 lg:w-[42%] lg:max-w-none lg:rounded-bl-none lg:pb-0">
          <div className="relative aspect-square lg:absolute lg:inset-y-0 lg:-inset-x-8 lg:-bottom-2 lg:aspect-auto xl:-bottom-6">
            <Image
              src="/img/enmanuel_microfono.png"
              alt={lang === 'es' ? `${meta.author} con un micrófono` : `${meta.author} holding a microphone`}
              fill
              sizes="(min-width: 102rem) 44.32rem, (min-width: 64rem) calc(42vw + 1.48rem), (min-width: 40rem) 34rem, calc(100vw - 2rem)"
              className="home-hero-portrait object-contain object-bottom"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <Link
            href={hero.contactCard.href}
            className="home-hero-contact relative z-10 mx-4 -mt-12 flex items-center justify-between gap-3 rounded-medium border border-white/25 bg-surface-dark/75 bg-linear-135 from-white/12 to-transparent p-4 text-white shadow-e2 backdrop-blur-xl focus-visible:outline-white focus-visible:outline-offset-[-3px] sm:ml-auto sm:w-80 lg:absolute lg:right-6 lg:bottom-6 lg:m-0"
          >
            <span>
              <span className="mb-1 block text-xs text-gray-300">{hero.contactCard.label}</span>
              <span className="block font-medium">{hero.contactCard.title}</span>
              <span className="mt-1 block text-sm text-white/90">{hero.contactCard.description}</span>
            </span>
            <span className="portfolio-button portfolio-button-icon self-end" aria-hidden="true">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
