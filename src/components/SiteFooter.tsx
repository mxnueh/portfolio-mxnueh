/**
 * SiteFooter — Full-width dark footer
 *
 * Layout (12-column grid):
 *   Brand     cols 1-5   Name, descriptor, location
 *   Navigate  cols 7-8   Work, Blog, About, Contact
 *   Elsewhere cols 9-10  GitHub, LinkedIn
 *   Contact   cols 11-12 Email + copy button, Discord
 *
 * Bottom row:
 *   Left  © year + name
 *   Right language switch (if ES enabled) + theme toggle
 *
 * E2: Oversized fluid wordmark "Enmanuel Nunez" in display
 * face, opacity 0.07, bottom ~30% clipped by overflow-hidden,
 * aria-hidden="true", placed below the bottom row.
 *
 * Always rendered inside .chapter-dark wrapper.
 * Hairline separator: rgba(255,255,255,0.16) = var(--separator).
 */

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

interface SiteFooterProps {
  lang?: 'en' | 'es';
}

const copy = {
  en: {
    descriptor: 'Full Stack Developer & Systems Designer',
    location: 'Santo Domingo, Dominican Republic',
    nav: { title: 'Navigate', links: [
      { label: 'Work', href: '/work' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ]},
    elsewhere: { title: 'Elsewhere', links: [
      { label: 'GitHub', url: 'https://github.com/mxnueh' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/enmanuel-nunez-matias-249560340/' },
    ]},
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
    nav: { title: 'Navegar', links: [
      { label: 'Trabajo', href: '/es/work' },
      { label: 'Blog', href: '/es/blog' },
      { label: 'Sobre mí', href: '/es/about' },
      { label: 'Contacto', href: '/es/contact' },
    ]},
    elsewhere: { title: 'Redes', links: [
      { label: 'GitHub', url: 'https://github.com/mxnueh' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/enmanuel-nunez-matias-249560340/' },
    ]},
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

function CopyEmailButton({ emailLabel, copyLabel, copiedLabel }: {
  emailLabel: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <a
        href={`mailto:${EMAIL}`}
        className="text-sm font-medium transition-opacity hover:opacity-80"
        style={{ color: 'var(--text-primary)' }}
      >
        {emailLabel}
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-4 text-sm font-medium transition-opacity hover:opacity-80 w-fit"
        style={{ color: 'var(--text-secondary)', minHeight: '44px', padding: '0' }}
        aria-label={copied ? copiedLabel : `${copyLabel} email`}
      >
        <span aria-live="polite" aria-atomic="true">
          {copied ? copiedLabel : copyLabel}
        </span>
        {!copied && (
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M2 10V3a1 1 0 011-1h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}

export function SiteFooter({ lang = 'en' }: SiteFooterProps) {
  const [year, setYear] = useState(new Date().getFullYear());
  const c = copy[lang];

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  function handleLangSwitch() {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname;
    if (lang === 'es') {
      const newPath = path.replace(/^\/es(\/|$)/, '$1') || '/';
      window.location.href = newPath;
    } else {
      window.location.href = path === '/' ? '/es' : `/es${path}`;
    }
  }

  function handleThemeToggle() {
    if (typeof window === 'undefined') return;
    document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    } catch {
      // storage not available
    }
  }

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
                    className="text-sm font-medium transition-opacity hover:opacity-80 underline-offset-4 hover:underline"
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
                    className="text-sm font-medium transition-opacity hover:opacity-80 underline-offset-4 hover:underline"
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
          {/* Copyright */}
          <p
            className="text-caption"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {c.copy(year)}
          </p>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language switch (only when multi-locale enabled) */}
            {siteConfig.locales.length > 1 && (
              <button
                onClick={handleLangSwitch}
                className="text-caption font-medium transition-opacity hover:opacity-80"
                style={{
                  color: 'var(--text-secondary)',
                  minHeight: '44px',
                  minWidth: '44px',
                  padding: '0 8px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                {c.langSwitch}
              </button>
            )}

            {/* Theme toggle */}
            <button
              onClick={handleThemeToggle}
              className="text-caption font-medium transition-opacity hover:opacity-80"
              style={{
                color: 'var(--text-secondary)',
                minHeight: '44px',
                minWidth: '44px',
                padding: '0 8px',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Toggle dark/light mode"
            >
              {c.themeLabel}
            </button>
          </div>
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
