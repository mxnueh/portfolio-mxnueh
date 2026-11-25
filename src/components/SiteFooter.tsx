/**
 * SiteFooter: Full-width footer (Server Component)
 *
 * 12-column Apple-inspired grid:
 *   Brand     cols 1-5   Name, role, philosophy
 *   Navigate  cols 7-8   Work, Blog, About
 *   Elsewhere cols 9-10  GitHub, LinkedIn
 *   Contact   cols 11-12 Project questionnaire, Gmail, Discord
 *
 * Bottom row: © year + name (computed at build time)
 */

import Image from 'next/image';
import Link from 'next/link';
import { CtaSection } from './CtaSection';
import { CopyEmailButton } from '@/components/CopyEmailButton';
import { siteConfig } from '@/config/site';
import { getGmailComposeUrl } from '@/lib/gmail';
import { getContent } from '@/lib/getContent';

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
    elsewhere: 'Elsewhere',
    contact: {
      title: 'Contact',
      label: 'Tell me about your project',
      href: '/contact',
    },
    copyright: (year: number) => `© ${year} Enmanuel Núñez Matías. All rights reserved.`,
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
    elsewhere: 'Redes',
    contact: {
      title: 'Contacto',
      label: 'Cuéntame sobre tu proyecto',
      href: '/es/contact',
    },
    copyright: (year: number) => `© ${year} Enmanuel Núñez Matías. Todos los derechos reservados.`,
  },
};

const BUILD_YEAR = new Date().getFullYear();

export function SiteFooter({ lang = 'en', cta }: SiteFooterProps) {
  const c = copy[lang];
  const { contactDetails } = getContent(lang);
  const { profiles, discord } = siteConfig.contact;

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
              {c.elsewhere}
            </p>
            <ul className="space-y-4">
              {profiles.map((link) => (
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
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href={c.contact.href} className="inline-block py-1 transition-colors hover:text-link">
                  {c.contact.label}
                </Link>
              </li>
              <li>
                <a href={getGmailComposeUrl()} className="inline-block py-1 transition-colors hover:text-link">
                  {contactDetails.openGmail}
                </a>
              </li>
              <li>
                <CopyEmailButton labels={contactDetails} />
              </li>
              <li>
                <span className="block">Discord</span>
                <span className="font-mono">@{discord}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline before bottom row */}
        <div
          aria-hidden="true"
          className="w-full h-px opacity-20 mb-8"
          style={{ backgroundColor: 'var(--separator)' }}
        />

        <p className="text-xs text-text-secondary">
          {c.copyright(BUILD_YEAR)}
        </p>
      </div>
    </footer>
  );
}
