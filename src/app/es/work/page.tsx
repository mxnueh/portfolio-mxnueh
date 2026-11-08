import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaSection } from '@/components/CtaSection';
import { Section } from '@/components/Section';
import { getCaseStudies } from '@/lib/getContent';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Proyectos y Arquitectura de Sistemas | Enmanuel Núñez Matías',
  description: 'Casos de estudio detallados en plataformas de telemetría, arquitecturas offline-first y aplicaciones web full stack.',
};

export default async function EsWorkPage() {
  const lang = 'es';
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section variant="white" className="pt-20 pb-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400 bg-black/[0.04] dark:bg-white/[0.08] px-4 py-1.5 rounded-full mb-6">
            Sistemas de Software y Casos de Estudio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
            Proyectos &amp; <span className="text-accent-fill">Arquitectura</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Sistemas en producción diseñados para entornos reales: desde plataformas de telemetría y apps offline-first hasta motores paramétricos y APIs distribuidas.
          </p>
        </div>
      </Section>

      {/* Case Studies List — Clean Apple Design */}
      <Section variant="gray">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
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
                      Rol: <strong className="text-text-primary dark:text-gray-200 font-medium">{study.role}</strong>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
                    <Link href={`/es/work/${study.slug}`} className="hover:text-accent-fill transition-colors">
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
                      href={`/es/work/${study.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-fill hover:underline"
                    >
                      <span>Ver caso de estudio completo</span>
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
                        <span>Código fuente</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing chapter: always dark — variant A */}
      <div className="chapter-dark">
        <CtaSection variant="statement" lang={lang} />
        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
