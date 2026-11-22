import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { getCaseStudies } from '@/lib/getContent';
import type { Language } from '@/lib/types';
import { WorkGalleryCarousel } from './WorkGalleryCarousel';
import './WorkGallery.css';

export function WorkGallery({ lang }: { lang: Language }) {
  const caseStudies = getCaseStudies(lang);
  const isSpanish = lang === 'es';
  const projectsPath = isSpanish ? '/es/work' : '/work';

  return (
    <WorkGalleryCarousel lang={lang}>
      {caseStudies.map(study => {
        const href = `${projectsPath}/${study.slug}`;

        return (
          <li key={study.id} className="work-gallery-card project-cover">
            <header className="work-gallery-card-header">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider">{study.eyebrow}</p>
              <h2 className="work-gallery-title">
                <Link href={href}>{study.title}</Link>
              </h2>
            </header>

            <div className="work-gallery-details">
              <p className="text-sm">
                {isSpanish ? 'Rol' : 'Role'}: <strong className="font-semibold">{study.role}</strong>
              </p>
              <p className="max-w-[65ch] text-base leading-relaxed">{study.description}</p>

              <div className="flex flex-wrap gap-2">
                {study.stack.map(tech => (
                  <span key={tech} className="rounded-md bg-white/60 px-3 py-1 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="work-gallery-actions">
                <Link href={href} className="work-gallery-primary-action">
                  {isSpanish ? 'Ver caso de estudio completo' : 'Read deep dive'}
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
                    {isSpanish ? 'Código fuente' : 'Source code'}
                  </a>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </WorkGalleryCarousel>
  );
}
