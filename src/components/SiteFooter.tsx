/**
 * SiteFooter: Full-width footer (Server Component)
 *
 * 12-column Apple-inspired grid:
 *   Brand     cols 1-5   Name, role, philosophy
 *   Navigate  cols 7-8   Work, Blog, About
 *   Elsewhere cols 9-10  GitHub, LinkedIn
 *   Direct    cols 11-12 Email + copy island, Discord
 *
 * Bottom row:
 *   Left  © year + name (computed at build time)
 *   Right Language switch + theme toggle (client island)
 *
 * E2: Subtle fluid signature wordmark placed below the bottom row.
 */

import Image from 'next/image';
import Link from 'next/link';
import { CtaSection } from './CtaSection';
import { siteConfig } from '@/config/site';
import { CopyEmailButton, FooterControls } from '@/components/SiteFooterClient';

interface SiteFooterProps {
  cta?: 'statement' | 'actions';
  lang?: 'en' | 'es';
}

const copy = {
  en: {
    role: 'Frontend & Full Stack (React) Engineer',
    bio: 'Designing clean software architectures, high-performance web applications, and intuitive user experiences.',
    nav: {
      title: 'Navigate',
      links: [
        { label: 'Work', href: '/work' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
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
    copyright: (year: number) => `© ${year} Enmanuel Núñez Matías. All rights reserved.`,
    langSwitch: 'ES',
    themeLabel: 'Theme',
  },
  es: {
    role: 'Ingeniero Frontend y Full Stack (React)',
    bio: 'Diseñando arquitecturas de software limpias, aplicaciones web de alto rendimiento y experiencias intuitivas.',
    nav: {
      title: 'Navegación',
      links: [
        { label: 'Trabajo', href: '/es/work' },
        { label: 'Blog', href: '/es/blog' },
        { label: 'Sobre mí', href: '/es/about' },
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
    copyright: (year: number) => `© ${year} Enmanuel Núñez Matías. Todos los derechos reservados.`,
    langSwitch: 'EN',
    themeLabel: 'Tema',
  },
};

const EMAIL = siteConfig.contact.email;
const BUILD_YEAR = new Date().getFullYear();

export function SiteFooter({ lang = 'en', cta }: SiteFooterProps) {
  const c = copy[lang];

  return (
    <footer className="site-footer relative overflow-hidden bg-white text-text-primary">
      {cta && <CtaSection variant={cta} lang={lang} />}
      {/* Hairline top separator */}
      <div
        aria-hidden="true"
        className="w-full h-px opacity-20"
        style={{ backgroundColor: 'var(--separator)' }}
      />

      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-10">
        {/* 12-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Brand: cols 1-5 */}
          <div className="md:col-span-5 pr-0 md:pr-6">
            {!cta && (
              <Image src="/img/enmanuel_cover.png" alt="Enmanuel Nunez Matias" width={1448} height={1086} sizes="192px" className="mb-5 h-auto w-48" />
            )}
            <h3 className="text-xl font-semibold mb-2 tracking-tight text-text-primary">
              {siteConfig.name}
            </h3>
            <p className="text-sm font-medium text-text-secondary mb-4">
              {c.role}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              {c.bio}
            </p>
          </div>

          {/* Spacer col 6 */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigate: cols 7-8 */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-6">
              {c.nav.title}
            </p>
            <ul className="space-y-4">
              {c.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-link transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere: cols 9-10 */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-6">
              {c.elsewhere.title}
            </p>
            <ul className="space-y-4">
              {c.elsewhere.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-link transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact: cols 11-12 */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-6">
              {c.contact.title}
            </p>
            <div className="space-y-6">
              <CopyEmailButton
                email={EMAIL}
                emailLabel={c.contact.emailLabel}
                copyLabel={c.contact.copyLabel}
                copiedLabel={c.contact.copiedLabel}
              />
              <div>
                <span className="text-xs text-text-secondary block mb-1">
                  {c.contact.discord}
                </span>
                <span className="text-sm font-mono text-text-secondary">
                  {c.contact.discordHandle}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline before bottom row */}
        <div
          aria-hidden="true"
          className="w-full h-px opacity-20 mb-8"
          style={{ backgroundColor: 'var(--separator)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-xs text-text-secondary">
            {c.copyright(BUILD_YEAR)}
          </p>

          <FooterControls
            lang={lang}
            langSwitchLabel={c.langSwitch}
            themeLabel={c.themeLabel}
          />
        </div>

        {/* E2: Subtle fluid signature wordmark */}
        <p
          aria-hidden="true"
          className="font-semibold select-none leading-none pointer-events-none mt-6 -mb-6 text-center"
          style={{
            fontSize: 'clamp(48px, 10vw, 120px)',
            color: 'currentColor',
            opacity: 0.035,
            whiteSpace: 'nowrap',
            letterSpacing: '-0.03em',
          }}
        >
          Enmanuel Núñez
        </p>
      </div>
    </footer>
  );
}
