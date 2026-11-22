import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { linkedCardClass } from '@/components/Section';
import { getCaseStudies } from '@/lib/getContent';
import type { CaseStudy, Language } from '@/lib/types';
import { WorkGalleryCarousel } from './WorkGalleryCarousel';
import './WorkGallery.css';

export const workPageCopy = {
  en: {
    title: 'Systems I’ve Built',
    description: 'I build telemetry platforms, mobile apps, and web tools for real-world constraints.',
    more: 'More projects and work',
    role: 'Role',
    read: 'Read deep dive',
    source: 'Source code',
  },
  es: {
    title: 'Sistemas que he construido',
    description: 'Desarrollo plataformas de telemetría, apps móviles y herramientas web para entornos reales.',
    more: 'Más proyectos y trabajos',
    role: 'Rol',
    read: 'Ver caso de estudio completo',
    source: 'Código fuente',
  },
};

function FeaturedProject({ study, href, lang }: { study: CaseStudy; href: string; lang: Language }) {
  const copy = workPageCopy[lang];

  return (
    <li className="work-gallery-card project-cover">
      <header className="work-gallery-card-header">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider">{study.eyebrow}</p>
        <h3 className="work-gallery-title">
          <Link href={href}>{study.title}</Link>
        </h3>
      </header>

      <div className="work-gallery-details">
        <p className="text-sm">
          {copy.role}: <strong className="font-semibold">{study.role}</strong>
        </p>
        <p className="max-w-[65ch] text-base leading-relaxed">{study.description}</p>

        <div className="flex flex-wrap gap-2">
          {study.stack.map(tech => (
            <span key={tech} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="work-gallery-actions">
          <Link href={href} className="work-gallery-primary-action">
            {copy.read}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>

          {study.links?.map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} aria-hidden="true" />
              {link.label}
            </a>
          ))}

          {study.github && (
            <a href={study.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon width={14} height={14} aria-hidden="true" />
              {copy.source}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export function WorkGallery({ lang }: { lang: Language }) {
  const caseStudies = getCaseStudies(lang);
  const featured = caseStudies.slice(0, 3);
  const more = caseStudies.slice(3);
  const projectsPath = lang === 'es' ? '/es/work' : '/work';
  const copy = workPageCopy[lang];

  return (
    <div className="work-gallery">
      <WorkGalleryCarousel
        lang={lang}
        intro={(
          <header className="work-gallery-intro">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{copy.title}</h2>
            <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-text-secondary dark:text-gray-300">
              {copy.description}
            </p>
          </header>
        )}
      >
        {featured.map(study => (
          <FeaturedProject key={study.id} study={study} href={`${projectsPath}/${study.slug}`} lang={lang} />
        ))}
      </WorkGalleryCarousel>

      {more.length > 0 && (
        <section className="mt-12" aria-labelledby="more-projects">
          <h2 id="more-projects" className="mb-5 text-2xl font-semibold tracking-tight">{copy.more}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map(study => (
              <Link key={study.id} href={`${projectsPath}/${study.slug}`} className={linkedCardClass}>
                <div className="flex-1 px-5 pt-4">
                  <p className="font-mono text-xs font-medium text-text-secondary dark:text-gray-400">{study.eyebrow}</p>
                  <h3 className="mb-2 mt-2 text-xl font-semibold leading-snug tracking-tight group-hover:text-accent-fill">
                    {study.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary dark:text-gray-400">{study.description}</p>
                </div>
                <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-4 text-xs text-text-secondary dark:text-gray-400">
                  <span>{study.role}</span>
                  <ArrowRight size={16} className="shrink-0 text-accent-fill" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
