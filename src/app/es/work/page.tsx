import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section, SectionHeading } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { TextLink } from '@/components/Button';
import { getCaseStudies, getContent } from '@/lib/getContent';
import Link from 'next/link';

export default async function EsWorkPage() {
  const lang = 'es';
  const content = getContent(lang);
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <SectionHeading headline={content.home.work.headline} />
        <div className="space-y-8 mb-12">
          {caseStudies.map((study) => (
            <Link key={study.id} href={`/es/work/${study.slug}`} className="group block">
              <Tile interactive elevation="e1">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <p className="text-eyebrow text-text-tertiary mb-4 group-hover:text-text-secondary transition-colors">
                      {study.eyebrow}
                    </p>
                    <h3 className="text-card-title font-600 mb-2">{study.title}</h3>
                    <p className="text-body text-text-secondary mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-caption bg-separator/20 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {study.stack.length > 3 && (
                        <span className="text-caption text-text-secondary px-3 py-1">
                          +{study.stack.length - 3} more
                        </span>
                      )}
                    </div>
                    <TextLink href={`/es/work/${study.slug}`}>
                      Leer más →
                    </TextLink>
                  </div>
                  {study.image && (
                    <div className="w-full md:w-80 h-48 rounded-large bg-bg-alt dark:bg-dark-bg-alt flex items-center justify-center flex-shrink-0">
                      <span className="text-text-tertiary text-sm">{study.image}</span>
                    </div>
                  )}
                </div>
              </Tile>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <TextLink href={content.home.work.cta.href}>
            {content.home.work.cta.label}
          </TextLink>
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
