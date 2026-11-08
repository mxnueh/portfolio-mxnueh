'use client';

import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import type { Metadata } from 'next';

export default function ContactPage() {
  const lang = 'en';
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-8">Get in touch</h1>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Open to Frontend and Full Stack (React) roles, as well as custom software projects.
          </p>

          {/* Email */}
          <Tile className="mb-8">
            <p className="text-sm uppercase tracking-wider text-text-secondary mb-4">Email</p>
            <p className="text-2xl font-semibold mb-8">{siteConfig.contact.email}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="h-11 px-8 rounded-full bg-accent-fill hover:bg-accent-hover text-white text-button font-500 flex items-center justify-center transition-colors duration-ui"
              >
                Send email
              </a>
              <button
                onClick={copyEmail}
                className="h-11 px-8 rounded-full border border-accent-fill text-accent-fill hover:bg-accent-fill/10 text-button font-500 flex items-center justify-center transition-colors duration-ui"
              >
                {copied ? '✓ Copied!' : 'Copy email'}
              </button>
            </div>
          </Tile>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.contact.social.map((social) => {
              const href = 'url' in social ? social.url : `https://discord.com/users/${social.username}`;
              return (
                <Tile key={social.label} interactive elevation="e1">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <p className="text-sm uppercase tracking-wider text-text-secondary mb-4">{social.label}</p>
                    <p className="text-lg font-semibold text-accent-fill flex items-center justify-center gap-4">
                      View profile
                      <span className="text-xs">→</span>
                    </p>
                  </a>
                </Tile>
              );
            })}
          </div>
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
