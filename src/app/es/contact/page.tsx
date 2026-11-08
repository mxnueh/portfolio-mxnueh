'use client';

import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

export default function EsContactPage() {
  const lang = 'es';
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      <Section variant="white" className="pt-16 pb-24">
        <div className="max-w-2xl mx-auto px-4">
          {/* Page header */}
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent-fill bg-accent-fill/[0.08] dark:bg-accent-fill/[0.15] px-3 py-1 rounded-full mb-4">
              Contacto
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
              Trabajemos juntos.
            </h1>
            <p className="text-lg text-text-secondary dark:text-gray-300 leading-relaxed">
              Abierto a vacantes de Frontend y Full Stack (React / Next.js / TypeScript). El correo es la mejor forma de contactarme.
            </p>
          </div>

          {/* Email card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/[0.08] dark:border-white/[0.1] mb-8">
            <span className="text-xs uppercase font-medium tracking-wider text-text-tertiary dark:text-gray-400 block mb-3">
              Canal Principal
            </span>
            <p className="text-xl sm:text-2xl font-semibold font-mono text-text-primary dark:text-white mb-6 break-all">
              {siteConfig.contact.email}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-accent-fill hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar Correo</span>
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-black/[0.1] dark:border-white/[0.15] hover:border-black/[0.2] dark:hover:border-white/[0.3] bg-white dark:bg-transparent text-text-primary dark:text-white text-sm font-semibold transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-status-dot" />
                    <span className="text-status-dot">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Dirección</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siteConfig.contact.social.map((social) => {
              const href = 'url' in social ? social.url : `https://discord.com/users/${social.username}`;
              const isGithub = social.label === 'GitHub';
              const isLinkedin = social.label === 'LinkedIn';

              return (
                <a
                  key={social.label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.1] hover:border-black/[0.18] dark:hover:border-white/[0.22] bg-white dark:bg-[#161617] transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-black/[0.04] dark:bg-white/[0.07] flex items-center justify-center shrink-0 text-text-primary dark:text-white">
                    {isGithub ? (
                      <GithubIcon className="w-4 h-4" />
                    ) : isLinkedin ? (
                      <LinkedinIcon className="w-4 h-4" />
                    ) : (
                      <MessageSquare className="w-4 h-4" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-text-primary dark:text-white">{social.label}</p>
                    <p className="text-xs text-text-tertiary dark:text-gray-400 truncate">
                      {'username' in social ? `@${social.username}` : `Conectar en ${social.label}`}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-tertiary dark:text-gray-400 ml-auto shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </Section>

      <div className="chapter-dark">
        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
