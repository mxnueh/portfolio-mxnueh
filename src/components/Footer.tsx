'use client';

import Link from 'next/link';
import { Language } from '@/lib/types';
import { getContent } from '@/lib/getContent';
import { siteConfig } from '@/config/site';
import { useState, useEffect } from 'react';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [currentYear, setCurrentYear] = useState(2024);
  const content = getContent(lang);

  // Set current year on client side to avoid prerender issues
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Filter footer columns based on feature flags
  const footerColumns = content.footer.columns
    .map(column => ({
      ...column,
      links: column.links.filter(link => {
        if (!link.href && !link.url) return false;
        if (link.href?.includes('[ADD]') || link.url?.includes('[ADD]')) return false;
        if (link.href === '/products' && !siteConfig.features.products) return false;
        return true;
      }),
    }))
    .filter(column => column.links.length > 0);

  // D4: Remove legal links until pages exist (privacy only if data collection is introduced)
  const legalLinks = content.footer.legal
    .filter(link => !link.href.includes('[ADD]'))
    .filter(link => {
      // Only show legal pages that actually exist and are needed
      if (link.href === '/privacy') return false; // No data collection yet
      if (link.href === '/terms') return false; // No products yet
      if (link.href === '/refunds') return false; // No products yet
      return true;
    });

  return (
    <footer className="bg-bg-alt dark:bg-dark-bg-alt border-t border-separator dark:border-separator">
      <div className="max-w-container mx-auto px-8 py-24">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-caption font-600 text-text-secondary dark:text-dark-text-secondary uppercase mb-8">
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
          {/* Link columns */}
          {legalLinks.length > 0 && (
            <div className="flex flex-wrap gap-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-caption text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-8">
            {/* Language */}
            {siteConfig.locales.length > 1 && (
              <button
                onClick={() => {
                  const newLang = lang === 'es' ? 'en' : 'es';
                  window.location.href = `/${newLang === 'es' ? 'es' : ''}${window.location.pathname.replace(/^\/(es|en)?/, '')}`;
                }}
                className="text-caption text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui min-h-[44px] px-4 flex items-center"
                aria-label="Switch language"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            )}

            {/* Theme toggle */}
            <button
              onClick={() => {
                const html = document.documentElement;
                html.classList.toggle('dark');
                try {
                  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
                } catch (e) {
                  // Storage not available
                }
              }}
              className="text-caption text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui min-h-[44px] px-4 flex items-center"
              aria-label="Toggle dark mode"
            >
              {lang === 'es' ? 'Tema' : 'Theme'}
            </button>

            {/* Pause animations */}
            <button
              onClick={() => {
                setAnimationsEnabled(!animationsEnabled);
                try {
                  localStorage.setItem('animations', animationsEnabled ? 'off' : 'on');
                } catch (e) {
                  // Storage not available
                }
              }}
              className="text-caption text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-ui min-h-[44px] px-4 flex items-center"
              aria-label="Toggle animations"
            >
              {lang === 'es' ? (animationsEnabled ? 'Pausar' : 'Reanudar') : (animationsEnabled ? 'Pause' : 'Resume')}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-separator dark:border-separator">
          <p className="text-caption text-text-secondary dark:text-dark-text-secondary">
            © {currentYear} {siteConfig.name}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
