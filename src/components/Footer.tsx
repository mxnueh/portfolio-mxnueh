'use client';

import Link from 'next/link';
import { Language } from '@/lib/types';
import { getContent } from '@/lib/getContent';
import { useState } from 'react';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const content = getContent(lang);

  return (
    <footer className="bg-bg-alt dark:bg-dark-bg-alt border-t border-separator dark:border-separator">
      <div className="max-w-container mx-auto px-8 py-24">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {content.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-caption font-600 text-text-secondary dark:text-dark-text-secondary uppercase mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-body text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-separator dark:bg-separator mb-8" />

        {/* Legal + Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Legal links */}
          <div className="flex flex-wrap gap-6">
            {content.footer.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-caption text-text-tertiary dark:text-dark-text-secondary hover:text-text-secondary dark:hover:text-dark-text-primary transition-colors duration-ui"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            {/* Language */}
            <button
              onClick={() => {
                const newLang = lang === 'es' ? 'en' : 'es';
                window.location.href = `/${newLang === 'es' ? 'es' : ''}${window.location.pathname.replace(/^\/(es|en)?/, '')}`;
              }}
              className="text-caption text-text-tertiary dark:text-dark-text-secondary hover:text-text-secondary dark:hover:text-dark-text-primary transition-colors duration-ui"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => {
                const html = document.documentElement;
                html.classList.toggle('dark');
              }}
              className="text-caption text-text-tertiary dark:text-dark-text-secondary hover:text-text-secondary dark:hover:text-dark-text-primary transition-colors duration-ui"
              aria-label="Toggle dark mode"
            >
              {lang === 'es' ? 'Tema' : 'Theme'}
            </button>

            {/* Pause animations */}
            <button
              onClick={() => setAnimationsEnabled(!animationsEnabled)}
              className="text-caption text-text-tertiary dark:text-dark-text-secondary hover:text-text-secondary dark:hover:text-dark-text-primary transition-colors duration-ui"
            >
              {lang === 'es' ? (animationsEnabled ? 'Pausar' : 'Reanudar') : (animationsEnabled ? 'Pause' : 'Resume')}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-separator dark:border-separator">
          <p className="text-caption text-text-tertiary dark:text-dark-text-secondary">
            © 2026 Enmanuel Nunez Matias. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
