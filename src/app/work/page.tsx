import { GeneratedLead } from '@/components/GeneratedLead';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { getCaseStudies } from '@/lib/getContent';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Work & Systems Architecture | Enmanuel Nunez Matias',
  description: 'Detailed case studies in telemetry platforms, offline-first architectures, and full-stack web applications.',
};

export default async function WorkPage() {
  const lang = 'en';
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section variant="white" className="pt-20 pb-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 data-reveal className="heading-ink intro-heading font-semibold leading-tight tracking-tight mb-6">
            Selected Work &amp; <span className="text-accent-fill">Architecture</span>
          </h1>
          <GeneratedLead className="max-w-2xl mx-auto text-text-secondary dark:text-gray-300">
            Production-grade systems designed for real constraints: from telemetry platforms and offline-first mobile apps to parametric calculation engines and distributed APIs.
          </GeneratedLead>
        </div>
      </Section>

      {/* Case Studies List: Clean Apple Design */}
      <Section reveal variant="gray">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              data-reveal
              className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-8 md:p-10 transition-colors hover:border-black/[0.2] dark:hover:border-white/[0.25]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="flex-1">
                  {/* Eyebrow & Role */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-fill bg-accent-fill/10 px-3 py-1 rounded-full">
                      {study.eyebrow}
                    </span>
                    <span className="text-xs text-text-tertiary dark:text-gray-400">
                      Role: <strong className="text-text-primary dark:text-gray-200 font-medium">{study.role}</strong>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
                    <Link href={`/work/${study.slug}`} className="hover:text-accent-fill transition-colors">
                      {study.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="text-base text-text-secondary dark:text-gray-400 leading-relaxed mb-6 font-normal">
                    {study.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-black/[0.03] dark:bg-white/[0.06] text-text-secondary dark:text-gray-300 border border-black/[0.04] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <Link
                      href={`/work/${study.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-fill hover:underline"
                    >
                      <span>Read deep dive</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {study.links?.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{link.label}</span>
                      </a>
                    ))}

                    {study.github && (
                      <a
                        href={study.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
