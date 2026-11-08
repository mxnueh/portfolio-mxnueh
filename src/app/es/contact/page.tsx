'use client';

import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { siteConfig } from '@/config/site';
import { useState } from 'react';

export default function EsContactPage() {
  const lang = 'es';
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
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Trabajemos juntos.</h1>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Abierto a roles de Frontend y Full Stack (React), así como proyectos de software personalizado.
          </p>

          {/* Email */}
          <Tile className="mb-8">
            <p className="text-sm uppercase tracking-wider text-text-secondary mb-4">Correo</p>
            <p className="text-2xl font-semibold mb-6">{siteConfig.contact.email}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="h-11 px-6 rounded-full bg-accent-fill hover:bg-accent-hover text-white text-button font-500 flex items-center justify-center transition-colors duration-ui"
              >
                Enviar correo
              </a>
              <button
                onClick={copyEmail}
                className="h-11 px-6 rounded-full border border-accent-fill text-accent-fill hover:bg-accent-fill/10 text-button font-500 flex items-center justify-center transition-colors duration-ui"
              >
                {copied ? '✓ ¡Copiado!' : 'Copiar correo'}
              </button>
            </div>
          </Tile>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <p className="text-sm uppercase tracking-wider text-text-secondary mb-2">{social.label}</p>
                    <p className="text-lg font-semibold text-accent-fill flex items-center justify-center gap-2">
                      Ver perfil
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
