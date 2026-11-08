import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { getCaseStudies } from '@/lib/getContent';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  AnimatedGradientText,
  BorderBeam,
  ShimmerButton,
  DotPattern,
} from '@/components/magicui';
import { ClickSpark, SpotlightCard } from '@/components/reactbits';
import { ArrowRight, ExternalLink, Award, Cpu, Globe, Rocket } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Work & Systems Architecture | Enmanuel Nunez Matias',
  description: 'Detailed case studies in telemetry platforms, offline-first architectures, IoT sensor networks, and full-stack web applications.',
};

export default async function WorkPage() {
  const lang = 'en';
  const caseStudies = getCaseStudies(lang);

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
        <GlobalNav lang={lang} />

        {/* Hero */}
        <Section variant="white" className="relative overflow-hidden pt-20 pb-12">
          <DotPattern className="opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <AnimatedGradientText>
                🛰️ Systems, Telemetry & Web Platforms
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Selected Work & <span className="text-accent-fill">Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Engineering solutions designed for real operational constraints: from Mars-analog telemetry and flood monitoring networks to parametric calculation engines and distributed web apps.
            </p>
          </div>
        </Section>

        {/* Work Grid */}
        <Section variant="gray">
          <div className="max-w-6xl mx-auto space-y-10">
            {caseStudies.map((study, index) => {
              const isFeatured = index === 0;
              return (
                <div key={study.id} className="relative group">
                  <SpotlightCard className={`p-8 md:p-10 ${isFeatured ? 'border-accent-fill/30 dark:border-accent-fill/40' : ''}`}>
                    {isFeatured && (
                      <BorderBeam size={200} duration={10} colorFrom="#0071e3" colorTo="#38bdf8" />
                    )}

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                      <div className="flex-1">
                        {/* Eyebrow & Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-fill bg-accent-fill/10 px-3 py-1 rounded-full">
                            {study.eyebrow}
                          </span>
                          <span className="text-xs text-text-tertiary">
                            Role: <strong className="text-text-primary dark:text-gray-200">{study.role}</strong>
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-fill transition-colors">
                          <Link href={`/work/${study.slug}`}>
                            {study.title}
                          </Link>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-lg text-text-secondary dark:text-gray-400 leading-relaxed mb-6">
                          {study.description}
                        </p>

                        {/* Technology Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {study.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-bg-alt dark:bg-white/10 text-text-secondary dark:text-gray-300 border border-black/5 dark:border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links & CTA */}
                        <div className="flex flex-wrap items-center gap-4">
                          <Link
                            href={`/work/${study.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent-fill hover:bg-accent-hover text-white text-sm font-semibold transition-colors shadow-sm"
                          >
                            <span>Read Full Case Study</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>

                          {study.github && (
                            <a
                              href={study.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-text-secondary dark:text-gray-300 hover:text-text-primary dark:hover:text-white text-sm font-medium transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Repository / Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Bottom CTA */}
        <Section variant="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a project or engineering role in mind?
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-400 mb-8 max-w-xl mx-auto">
              I am open to full-time Frontend & Full Stack (React/Python) engineering opportunities and custom telemetry systems development.
            </p>
            <div className="flex justify-center">
              <ShimmerButton href="/contact" background="#0071e3">
                Let's Talk About Your Project
              </ShimmerButton>
            </div>
          </div>
        </Section>

        <Footer lang={lang} />
      </div>
    </ClickSpark>
  );
}
