/**
 * CtaSection — Closing call-to-action component
 *
 * Variants:
 *   A "statement" — headline only (detail pages)
 *   B "actions"   — headline + lead + primary CTA + secondary link (default)
 *   C "evidence"  — B with optional screenshot (falls back to B if no image)
 *
 * Design decisions:
 *   • Always dark: rendered inside .chapter-dark wrapper (see page integrations)
 *   • Solid accent fill background, radius-large (28px), no gradient
 *   • E1: CSS-only repeating grid pattern, aria-hidden, pointer-events-none
 *   • Primary CTA: 48px height desktop / 44px mobile, arrow nudges 3px on hover
 *   • Min heights: A=240px, B=360px, C=420px
 *   • Padding: 64px desktop, 48px tablet, 32px mobile
 *   • WCAG focus ring from globals.css (:focus-visible)
 *   • Respects prefers-reduced-motion
 *
 * Exceptions documented in docs/cta-footer-selection.md
 */

import Link from 'next/link';

export type CtaVariant = 'statement' | 'actions' | 'evidence';

interface CtaSectionProps {
  variant?: CtaVariant;
  lang?: 'en' | 'es';
  /** Optional screenshot URL for variant C (falls back to B if undefined) */
  screenshotSrc?: string;
  screenshotAlt?: string;
}

const copy = {
  en: {
    headline: 'Hiring a Frontend or Full Stack (React) developer? Email me.',
    lead: 'I build systems from sensor data to the interface, with React, TypeScript, Python and PostgreSQL.',
    primaryLabel: 'Email me',
    primaryHref: 'mailto:enmanuelnunezmatias@gmail.com',
    secondaryLabel: 'View case studies',
    secondaryHref: '/work',
  },
  es: {
    headline: '¿Buscas un desarrollador Frontend o Full Stack (React)? Escríbeme.',
    lead: 'Construyo sistemas desde el dato del sensor hasta la interfaz, con React, TypeScript, Python y PostgreSQL.',
    primaryLabel: 'Escríbeme',
    primaryHref: 'mailto:enmanuelnunezmatias@gmail.com',
    secondaryLabel: 'Ver casos de estudio',
    secondaryHref: '/es/work',
  },
};

/** Returns Tailwind min-height class per variant */
function minHeight(variant: CtaVariant): string {
  if (variant === 'statement') return 'min-h-[240px]';
  if (variant === 'evidence') return 'min-h-[420px]';
  return 'min-h-[360px]'; // actions
}

export function CtaSection({
  variant = 'actions',
  lang = 'en',
  screenshotSrc,
  screenshotAlt,
}: CtaSectionProps) {
  const c = copy[lang];

  // Variant C degrades to B when no screenshot provided
  const effectiveVariant: CtaVariant =
    variant === 'evidence' && !screenshotSrc ? 'actions' : variant;

  const isStatement = effectiveVariant === 'statement';
  const showLead = !isStatement;
  const showActions = !isStatement;
  const showScreenshot = effectiveVariant === 'evidence' && !!screenshotSrc;

  return (
    /* Outer: 64px bottom margin before the footer */
    <div className="px-8 md:px-12 lg:px-16 mb-16">
      <div
        className={[
          /* Tile */
          'relative overflow-hidden rounded-large',
          'bg-accent-fill',
          /* Padding: 32px mobile → 48px tablet → 64px desktop */
          'p-8 md:p-12 lg:p-16',
          /* Min heights */
          minHeight(effectiveVariant),
          /* Flex layout */
          'flex flex-col justify-center',
          /* Screenshot layout for variant C */
          showScreenshot ? 'lg:flex-row lg:items-center lg:gap-16' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="complementary"
        aria-label={lang === 'es' ? 'Contáctame' : 'Contact me'}
      >
        {/* E1: CSS-only grid pattern — aria-hidden, pointer-events-none
            64px cells, 1px lines at rgba(255,255,255,0.08),
            radial mask fades toward edges */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
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

        {/* Content — above the grid pattern */}
        <div
          className={[
            'relative z-10',
            showScreenshot ? 'flex-1' : '',
            isStatement ? 'text-center max-w-3xl mx-auto w-full' : 'max-w-2xl',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {/* Headline */}
          <h2
            className="text-subhead font-semibold mb-8 leading-snug"
            style={{ color: 'var(--on-accent)', letterSpacing: 'var(--optical-display)' }}
          >
            {c.headline}
          </h2>

          {/* Lead (B + C only) */}
          {showLead && (
            <p
              className="text-lead mb-12 leading-relaxed"
              style={{ color: 'var(--on-accent-secondary)' }}
            >
              {c.lead}
            </p>
          )}

          {/* Actions (B + C only) */}
          {showActions && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Primary pill CTA */}
              <a
                href={c.primaryHref}
                className="cta-pill group inline-flex items-center gap-4 rounded-full px-8 font-semibold text-sm transition-colors"
                style={{
                  height: '48px',
                  minHeight: '44px',
                  backgroundColor: 'var(--on-accent)',
                  color: 'var(--accent-fill)',
                }}
              >
                <span>{c.primaryLabel}</span>
                {/* Arrow nudges 3px on hover — CSS transition, reduced-motion respected */}
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="cta-arrow"
                  style={{
                    transition: `transform var(--duration-micro) var(--easing-smooth)`,
                  }}
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

              {/* Secondary text link */}
              <Link
                href={c.secondaryHref}
                className="text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: 'var(--on-accent-secondary)' }}
              >
                {c.secondaryLabel} ›
              </Link>
            </div>
          )}
        </div>

        {/* Screenshot — variant C */}
        {showScreenshot && (
          <div className="relative z-10 flex-shrink-0 w-full lg:w-80 xl:w-96 mt-8 lg:mt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshotSrc}
              alt={screenshotAlt ?? ''}
              className="rounded-large shadow-e3 w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </div>
  );
}
