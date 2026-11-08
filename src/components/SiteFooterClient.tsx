'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';

interface CopyEmailButtonProps {
  email: string;
  emailLabel: string;
  copyLabel: string;
  copiedLabel: string;
}

export function CopyEmailButton({
  email,
  emailLabel,
  copyLabel,
  copiedLabel,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <a
        href={`mailto:${email}`}
        className="text-sm font-medium transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
        style={{ color: 'var(--text-primary)' }}
      >
        {emailLabel}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-4 text-sm font-medium transition-opacity hover:opacity-80 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
        style={{ color: 'var(--text-secondary)', minHeight: '44px', padding: '0' }}
        aria-label={copied ? copiedLabel : `${copyLabel} email`}
      >
        <span aria-live="polite" aria-atomic="true">
          {copied ? copiedLabel : copyLabel}
        </span>
        {!copied && (
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M2 10V3a1 1 0 011-1h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}

interface FooterControlsProps {
  lang: 'en' | 'es';
  langSwitchLabel: string;
  themeLabel: string;
}

export function FooterControls({
  lang,
  langSwitchLabel,
  themeLabel,
}: FooterControlsProps) {
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
    <div className="flex items-center gap-4">
      {siteConfig.locales.length > 1 && (
        <button
          type="button"
          onClick={handleLangSwitch}
          className="text-caption font-medium transition-opacity hover:opacity-80 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center justify-center"
          style={{
            color: 'var(--text-secondary)',
            borderColor: 'var(--separator)',
            minHeight: '44px',
            minWidth: '44px',
            padding: '0 12px',
          }}
          aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          {langSwitchLabel}
        </button>
      )}

      <button
        type="button"
        onClick={handleThemeToggle}
        className="text-caption font-medium transition-opacity hover:opacity-80 rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center justify-center"
        style={{
          color: 'var(--text-secondary)',
          borderColor: 'var(--separator)',
          minHeight: '44px',
          minWidth: '44px',
          padding: '0 12px',
        }}
        aria-label="Toggle dark/light mode"
      >
        {themeLabel}
      </button>
    </div>
  );
}
