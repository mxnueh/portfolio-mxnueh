'use client';

import Link from 'next/link';
import { useEffect, useState, type CSSProperties } from 'react';
import { Globe } from 'lucide-react';
import type { Language } from '@/lib/types';
import { decorativeMotion } from '@/lib/motion';

interface GlobalNavClientProps {
  lang: Language;
  home?: boolean;
  fullName: string;
  navLinks: { href: string; label: string }[];
}

let documentNavMounted = false;

export function GlobalNavClient({ lang, home = false, fullName, navLinks }: GlobalNavClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playIntro, setPlayIntro] = useState(false);

  useEffect(() => {
    if (documentNavMounted) return;
    documentNavMounted = true;
    if (home) setPlayIntro(true);
  }, [home]);

  const words = fullName.split(" ");

  return (
    <nav className="portfolio-nav sticky top-0 z-70 h-14 bg-white/80 backdrop-blur-md border-b border-separator px-4 sm:px-8 lg:px-12">
      <div className="h-full max-w-[96rem] mx-auto flex items-center justify-between">
        {/* Logo / Home link */}
        <Link
          href={lang === 'es' ? '/es' : '/'}
          aria-label={fullName}
          className="text-body font-semibold text-text-primary dark:text-dark-text-primary hover:opacity-75 transition-opacity duration-ui"
        >
          <span
            className={home && playIntro ? 'nav-name nav-name-intro' : 'nav-name'}
            aria-hidden="true"
            onAnimationEnd={(event) => {
              if (event.animationName === 'nav-name-join') setPlayIntro(false);
            }}
          >
            {words.map((word, wordIndex) => {
              const offset = words.slice(0, wordIndex).join(' ').length + Number(wordIndex > 0);
              return (
                <span key={wordIndex} className={wordIndex === 1 ? undefined : 'nav-name-outside'}>
                  <span>
                    {Array.from(word, (letter, index) => (
                      <span key={index} className="nav-name-letter" style={{ '--letter-id': offset + index } as CSSProperties}>
                        {letter}
                      </span>
                    ))}
                  </span>
                </span>
              );
            })}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const href = lang === 'es' ? `/es${link.href}` : link.href;
            return (
              <Link
                key={link.href}
                href={href}
                className="text-body text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Language toggle (no CTA pill per D3) */}
        <div className="ml-auto flex shrink-0 items-center lg:ml-0">
          <button
            type="button"
            onClick={() => {
              const url = new URL(window.location.href);
              url.pathname = lang === 'es'
                ? url.pathname.replace(/^\/es(?=\/|$)/, '') || '/'
                : '/es' + (url.pathname === '/' ? '' : url.pathname);
              window.location.assign(url);
            }}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-text-secondary/70 px-2.5 text-sm font-medium text-text-secondary"
            aria-label={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
          >
            <Globe className="size-4" aria-hidden="true" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="portfolio-button portfolio-button-icon ml-1 lg:hidden"
          aria-label={lang === "es" ? "Menú" : "Menu"}
          aria-expanded={isMenuOpen}
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
        <div className={`lg:hidden absolute top-14 left-0 right-0 bg-white dark:bg-[#18181b] border-b border-separator p-8 flex flex-col gap-4 ${decorativeMotion('animate-fade-in')}`}>
          {navLinks.map((link, i) => {
            const href = lang === 'es' ? `/es${link.href}` : link.href;
            return (
              <Link
                key={link.href}
                href={href}
                className="text-body text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
                style={{ animation: `slideUp 0.3s ease-out ${i * 0.04}s both` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
