/**
 * SiteFooter — Full-width dark footer (Server Component)
 *
 * Layout (12-column grid):
 *   Brand     cols 1-5   Name, descriptor, location
 *   Navigate  cols 7-8   Work, Blog, About, Contact
 *   Elsewhere cols 9-10  GitHub, LinkedIn
 *   Contact   cols 11-12 Email + copy button, Discord
 *
 * Bottom row:
 *   Left  © year + name (computed at build time)
 *   Right language switch (if ES enabled) + theme toggle (client island)
 *
 * E2: Oversized fluid wordmark "Enmanuel Nunez" in display
 * face, opacity 0.07, bottom ~30% clipped by overflow-hidden,
 * aria-hidden="true", placed below the bottom row.
 *
 * Always rendered inside .chapter-dark wrapper.
 * Hairline separator: rgba(255,255,255,0.16) = var(--separator).
 */

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { CopyEmailButton, FooterControls } from '@/components/SiteFooterClient';

interface SiteFooterProps {
  lang?: 'en' | 'es';
}

const copy = {
  en: {
    descriptor: 'Full Stack Developer & Systems Designer',
    location: 'Santo Domingo, Dominican Republic',
    nav: {
      title: 'Navigate',
      links: [
        { label: 'Work', href: '/work' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    elsewhere: {
      title: 'Elsewhere',
      links: [
        { label: 'GitHub', url: 'https://github.com/mxnueh' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/enmanuel-nunez-matias-249560340/' },
      ],
    },
    contact: {
      title: 'Contact',
      emailLabel: 'Email',
      copyLabel: 'Copy',
      copiedLabel: 'Copied!',
      discord: 'Discord',
      discordHandle: 'm4ti_.',
    },
    copy: (year: number) => `© ${year} Enmanuel Nunez Matias`,
    langSwitch: 'ES',
    themeLabel: 'Theme',
  },
  es: {
    descriptor: 'Desarrollador Full Stack y Diseñador de Sistemas',
    location: 'Santo Domingo, República Dominicana',
    nav: {
      title: 'Navegar',
      links: [
        { label: 'Trabajo', href: '/es/work' },
        { label: 'Blog', href: '/es/blog' },
        { label: 'Sobre mí', href: '/es/about' },
        { label: 'Contacto', href: '/es/contact' },
      ],
    },
    elsewhere: {
      title: 'Redes',
      links: [
        { label: 'GitHub', url: 'https://github.com/mxnueh' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/enmanuel-nunez-matias-249560340/' },
      ],
    },
    contact: {
      title: 'Contacto',
      emailLabel: 'Correo',
      copyLabel: 'Copiar',
      copiedLabel: '¡Copiado!',
      discord: 'Discord',
      discordHandle: 'm4ti_.',
    },
    copy: (year: number) => `© ${year} Enmanuel Nunez Matias`,
    langSwitch: 'EN',
    themeLabel: 'Tema',
  },
};

const EMAIL = siteConfig.contact.email;
const BUILD_YEAR = new Date().getFullYear();

export function SiteFooter({ lang = 'en' }: SiteFooterProps) {
  const c = copy[lang];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      {/* Hairline top border */}
      <div
        aria-hidden="true"
        style={{ height: '1px', backgroundColor: 'var(--separator)', width: '100%' }}
      />

      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16 pt-16 pb-8">
        {/* 12-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand — cols 1-5 */}
          <div className="md:col-span-5">
            <p
              className="text-card-title font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {siteConfig.name}
            </p>
            <p
              className="text-body mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {c.descriptor}
            </p>
            <p
              className="text-caption"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {c.location}
            </p>
          </div>

          {/* Spacer col 6 */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigate — cols 7-8 */}
          <div className="md:col-span-2">
            <p
              className="text-eyebrow mb-8"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {c.nav.title}
            </p>
            <ul className="space-y-8">
              {c.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-opacity hover:opacity-80 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    style={{ color: 'var(--text-secondary)', textDecorationColor: 'var(--separator)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere — cols 9-10 */}
          <div className="md:col-span-2">
            <p
              className="text-eyebrow mb-8"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {c.elsewhere.title}
            </p>
            <ul className="space-y-8">
              {c.elsewhere.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-opacity hover:opacity-80 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    style={{ color: 'var(--text-secondary)', textDecorationColor: 'var(--separator)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — cols 11-12 */}
          <div className="md:col-span-2">
            <p
              className="text-eyebrow mb-8"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {c.contact.title}
            </p>
            <div className="space-y-8">
              <CopyEmailButton
                email={EMAIL}
                emailLabel={c.contact.emailLabel}
                copyLabel={c.contact.copyLabel}
                copiedLabel={c.contact.copiedLabel}
              />
              <div>
                <p
                    className="text-caption mb-4"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {c.contact.discord}
                </p>
                <p
                  className="text-sm font-medium font-mono"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {c.contact.discordHandle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline before bottom row */}
        <div
          aria-hidden="true"
          style={{ height: '1px', backgroundColor: 'var(--separator)', marginBottom: '24px' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Copyright (year computed at build time) */}
          <p
            className="text-caption"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {c.copy(BUILD_YEAR)}
          </p>

          {/* Controls: client islands for language and theme */}
          <FooterControls
            lang={lang}
            langSwitchLabel={c.langSwitch}
            themeLabel={c.themeLabel}
          />
        </div>

        {/* E2: Oversized fluid signature wordmark
            aria-hidden="true", color currentColor at --wordmark-opacity,
            bottom ~30% clipped by parent overflow-hidden */}
        <p
          aria-hidden="true"
          className="font-semibold select-none leading-none"
          style={{
            fontSize: 'clamp(72px, 14vw, 180px)',
            color: 'currentColor',
            opacity: 'var(--wordmark-opacity)',
            marginTop: '16px',
            marginBottom: '-30%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            letterSpacing: '-0.03em',
            pointerEvents: 'none',
          }}
        >
          Enmanuel Nunez
        </p>
      </div>
    </footer>
  );
}
