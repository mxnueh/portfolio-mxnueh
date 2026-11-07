'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Language } from '@/lib/types';
import { getContent } from '@/lib/getContent';

interface GlobalNavProps {
  lang: Language;
}

export function GlobalNav({ lang }: GlobalNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = getContent(lang);

  return (
    <nav className="sticky top-0 z-40 h-12 bg-white/72 dark:bg-black/72 backdrop-blur-nav border-b border-separator dark:border-separator transition-opacity duration-ui">
      <div className="h-full max-w-container mx-auto px-8 flex items-center justify-between">
        {/* Logo / Home link */}
        <Link
          href={`/${lang === 'es' ? 'es' : ''}`}
          className="text-body font-600 text-text-primary dark:text-dark-text-primary hover:opacity-75 transition-opacity duration-ui"
        >
          {content.nav.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={`/${lang === 'es' ? 'es' : ''}${link.href}`}
              className="text-body text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button + Language */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={`/${lang === 'es' ? 'es' : ''}/contact`}
            className="h-7 px-4 rounded-full bg-accent-fill hover:bg-accent-hover text-white text-button font-500 flex items-center transition-colors duration-ui"
          >
            {lang === 'es' ? 'Contratarme' : 'Hire me'}
          </Link>
          <button
            onClick={() => {
              const newLang = lang === 'es' ? 'en' : 'es';
              window.location.href = `/${newLang === 'es' ? 'es' : ''}${window.location.pathname.replace(/^\/(es|en)?/, '')}`;
            }}
            className="text-caption text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-text-primary dark:bg-dark-text-primary transition-all duration-ui ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-text-primary dark:bg-dark-text-primary transition-opacity duration-ui ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-text-primary dark:bg-dark-text-primary transition-all duration-ui ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-12 left-0 right-0 bg-white dark:bg-black border-b border-separator dark:border-separator p-8 flex flex-col gap-4 animate-fade-in">
          {content.nav.links.map((link, i) => (
            <Link
              key={link.href}
              href={`/${lang === 'es' ? 'es' : ''}${link.href}`}
              className="text-body text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
              style={{ animation: `slideUp 0.3s ease-out ${i * 0.04}s both` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${lang === 'es' ? 'es' : ''}/contact`}
            className="h-11 px-6 rounded-full bg-accent-fill hover:bg-accent-hover text-white text-button font-500 flex items-center justify-center transition-colors duration-ui mt-4"
          >
            {lang === 'es' ? 'Contratarme' : 'Hire me'}
          </Link>
        </div>
      )}
    </nav>
  );
}
