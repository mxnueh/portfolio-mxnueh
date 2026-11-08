'use client';

import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { Eyebrow } from '@/components/Eyebrow';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import {
  AnimatedGradientText,
  BorderBeam,
  ShimmerButton,
  DotPattern,
  useConfetti,
} from '@/components/magicui';
import { ClickSpark, SpotlightCard } from '@/components/reactbits';
import { Mail, Check, Copy, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactPage() {
  const lang = 'en';
  const [copied, setCopied] = useState(false);
  const { fire: fireConfetti } = useConfetti();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      fireConfetti();
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
        <GlobalNav lang={lang} />

        <Section variant="white" className="relative overflow-hidden pt-20 pb-16">
          <DotPattern className="opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <AnimatedGradientText>
                📬 Direct Communication
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Let's build something <span className="text-accent-fill">reliable</span>.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Open to Frontend and Full Stack (React/Python) roles, as well as telemetry and custom software engineering.
            </p>

            {/* Direct Email Card with BorderBeam */}
            <div className="relative p-8 md:p-12 rounded-3xl bg-bg-alt dark:bg-[#161617] border border-black/5 dark:border-white/10 mb-12 shadow-sm text-center">
              <BorderBeam size={200} duration={10} colorFrom="#0071e3" colorTo="#38bdf8" />
              <div className="relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary block mb-3 font-semibold">
                  Primary Contact
                </span>
                <p className="text-2xl md:text-3xl font-bold tracking-tight mb-8 font-mono text-text-primary dark:text-white">
                  {siteConfig.contact.email}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="h-12 px-8 rounded-full bg-accent-fill hover:bg-accent-hover text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Direct Email</span>
                  </a>
                  <button
                    onClick={copyEmail}
                    className="h-12 px-8 rounded-full border border-black/10 dark:border-white/20 hover:border-accent-fill text-text-primary dark:text-white hover:text-accent-fill font-semibold flex items-center justify-center gap-2 transition-all bg-white dark:bg-zinc-800 shadow-sm active:scale-95 text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-500">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.contact.social.map((social) => {
                const href = 'url' in social ? social.url : `https://discord.com/users/${social.username}`;
                const isGithub = social.label === 'GitHub';
                const isLinkedin = social.label === 'LinkedIn';

                return (
                  <SpotlightCard key={social.label} className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-accent-fill/10 text-accent-fill flex items-center justify-center mx-auto mb-4">
                        {isGithub ? (
                          <GithubIcon className="w-6 h-6" />
                        ) : isLinkedin ? (
                          <LinkedinIcon className="w-6 h-6" />
                        ) : (
                          <MessageSquare className="w-6 h-6" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{social.label}</h3>
                      <p className="text-xs text-text-secondary dark:text-gray-400 mb-6">
                        {'username' in social ? `@${social.username}` : `Connect on ${social.label}`}
                      </p>
                    </div>

                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent-fill hover:underline"
                    >
                      <span>Open Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Closing chapter: always dark — no CTA on /contact per design rules */}
        <div className="chapter-dark">
          <SiteFooter lang={lang} />
        </div>
      </div>
    </ClickSpark>
  );
}
