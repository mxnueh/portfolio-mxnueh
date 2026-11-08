import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { getCaseStudies } from '@/lib/getContent';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Enmanuel Nunez Matias',
  description: 'Case studies and projects: telemetry systems, web applications, and IoT solutions.',
};

export default async function WorkPage() {
  const lang = 'en';
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Work</h1>
          <p className="text-xl text-text-secondary mb-12 max-w-3xl">
            Case studies from telemetry platforms to web systems. Each project shows real decisions, technical choices, and outcomes.
          </p>

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/work/${study.slug}`} className="group block">
                <Tile interactive elevation="e1">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-wider text-accent-fill mb-2">{study.eyebrow}</p>
                      <h2 className="text-3xl font-semibold mb-3 group-hover:text-accent-fill transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-lg text-text-secondary mb-4">{study.description}</p>
                      {study.stack && study.stack.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {study.stack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-bg-alt dark:bg-dark-bg-alt rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
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
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
