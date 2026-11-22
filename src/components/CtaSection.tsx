/**
 * CtaSection: Closing call-to-action component
 *
 * Variants:
 *   A "statement": headline left, primary pill right (for detail pages & subpages)
 *   B "actions":   headline + lead + primary pill + secondary link (Home)
 *   C "evidence":  B with screenshot on right
 *
 * Design principles:
 *   • Solid accent fill background, Apple radius (20px-24px), no gradient
 *   • Faint technical grid pattern (Exception E1)
 *   • Separates software engineering completely from sensor hardware in copy
 *   • 44px/48px touch targets, full reduced-motion support
 */

import Image from 'next/image';
import Link from 'next/link';

export type CtaVariant = 'statement' | 'actions' | 'evidence';

interface CtaSectionProps {
  variant?: CtaVariant;
  lang?: 'en' | 'es';
  screenshotSrc?: string;
  screenshotAlt?: string;
}

const copy = {
  en: {
    headline: 'Looking for a Frontend or Full Stack engineer?',
    lead: 'I build high-performance web applications and scalable software architectures with React, TypeScript, Next.js, and Python.',
    primaryLabel: 'Email me',
    primaryHref: 'mailto:enmanuelnunezmatias@gmail.com',
    secondaryLabel: 'View case studies ›',
    secondaryHref: '/work',
  },
  es: {
    headline: '¿Buscas un desarrollador Frontend o Ingeniero Full Stack?',
    lead: 'Desarrollo aplicaciones web de alto rendimiento y arquitecturas escalables con React, TypeScript, Next.js y Python.',
    primaryLabel: 'Escríbeme',
    primaryHref: 'mailto:enmanuelnunezmatias@gmail.com',
    secondaryLabel: 'Ver casos de estudio ›',
    secondaryHref: '/es/work',
  },
};

export function CtaSection({
  variant = 'actions',
  lang = 'en',
  screenshotSrc,
  screenshotAlt,
}: CtaSectionProps) {
  const c = copy[lang];
  const effectiveVariant: CtaVariant =
    variant === 'evidence' && !screenshotSrc ? 'actions' : variant;

  const isStatement = effectiveVariant === 'statement';
  const showPortrait = effectiveVariant !== 'evidence';

  return (
    <div className="pt-12 md:pt-16 lg:pt-20 px-6 md:px-12 lg:px-16 mb-16">
      <div
        className={[
          'relative rounded-2xl md:rounded-3xl',
          showPortrait ? 'cta-with-portrait' : 'overflow-hidden',
          'bg-accent-fill',
          isStatement ? 'p-8 md:p-10 lg:p-12' : 'p-8 md:p-12 lg:p-16',
          'flex flex-col justify-center',
        ].join(' ')}
      >
        {/* E1: Faint CSS-only technical grid pattern */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            backgroundImage: [
              'repeating-linear-gradient(0deg, var(--cta-grid-line) 0px, var(--cta-grid-line) 1px, transparent 1px, transparent var(--cta-grid-cell))',
              'repeating-linear-gradient(90deg, var(--cta-grid-line) 0px, var(--cta-grid-line) 1px, transparent 1px, transparent var(--cta-grid-cell))',
            ].join(', '),
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Variant A: Statement layout (Headline left, Action button right) */}
        {isStatement ? (
          <div className="cta-portrait-copy relative z-10 flex flex-col items-start gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight max-w-xl leading-snug">
              {c.headline}
            </h2>
            <a
              href={c.primaryHref}
              className="cta-pill group inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 font-semibold text-sm bg-white text-accent-fill hover:bg-white/95 active:bg-white/90 transition-all duration-200 shadow-sm flex-shrink-0"
              style={{ minHeight: '44px' }}
            >
              <span>{c.primaryLabel}</span>
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="cta-arrow transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ) : (
          /* Variant B & C: Actions layout */
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className={showPortrait ? "cta-portrait-copy max-w-2xl" : "max-w-2xl"}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
                {c.headline}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-normal">
                {c.lead}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href={c.primaryHref}
                  className="cta-pill group inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 font-semibold text-sm bg-white text-accent-fill hover:bg-white/95 active:bg-white/90 transition-all duration-200 shadow-sm"
                  style={{ minHeight: '44px' }}
                >
                  <span>{c.primaryLabel}</span>
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="cta-arrow transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link
                  href={c.secondaryHref}
                  className="text-sm font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline transition-colors py-2"
                >
                  {c.secondaryLabel}
                </Link>
              </div>
            </div>

            {effectiveVariant === 'evidence' && screenshotSrc && (
              <div className="relative z-10 flex-shrink-0 w-full lg:w-80 xl:w-96 mt-6 lg:mt-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={screenshotSrc}
                  alt={screenshotAlt ?? ''}
                  className="rounded-xl shadow-lg w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
        )}
        {showPortrait && (
          <Image
            src="/img/enmanuel_cover.png"
            alt="Enmanuel Nunez Matias"
            width={1448}
            height={1086}
            sizes="(min-width: 768px) 48vw, (min-width: 480px) 400px, 90vw"
            className={isStatement ? "cta-portrait cta-portrait-statement" : "cta-portrait"}
          />
        )}
      </div>
    </div>
  );
}
