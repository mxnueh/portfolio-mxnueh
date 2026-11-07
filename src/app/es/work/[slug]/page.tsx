import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { TextLink } from '@/components/Button';
import { Markdown } from '@/components/Markdown';
import { getCaseStudy, getCaseStudies, getContent } from '@/lib/getContent';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudies('es').map((study) => ({ slug: study.slug }));
}

export default async function EsCaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug, 'es');
  const allStudies = getCaseStudies('es');

  if (!study) {
    return (
      <div className="flex flex-col min-h-screen">
        <GlobalNav lang="es" />
        <Section variant="white">
          <h1 className="text-section font-600 mb-4">No encontrado</h1>
        </Section>
        <Footer lang="es" />
      </div>
    );
  }

  const currentIndex = allStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang="es" />
      <Section variant="white">
        <div className="max-w-reading mx-auto">
          <div className="mb-8">
            <TextLink href="/es/work">← Volver al trabajo</TextLink>
          </div>
          <h1 className="text-section font-600 mb-6">{study.title}</h1>
          <p className="text-lead text-text-secondary mb-12">{study.description}</p>
          {study.image && (
            <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-96 flex items-center justify-center text-white p-8 mb-12">
              {study.image}
            </div>
          )}
          <Markdown content={study.content} />

          {(prevStudy || nextStudy) && (
            <nav className="mt-16 pt-8 border-t border-stroke flex justify-between gap-8">
              {prevStudy ? (
                <div className="flex-1">
                  <p className="text-caption text-text-tertiary mb-2">Anterior</p>
                  <TextLink href={`/es/work/${prevStudy.slug}`}>{prevStudy.title}</TextLink>
                </div>
              ) : (
                <div className="flex-1" />
              )}
              {nextStudy ? (
                <div className="flex-1 text-right">
                  <p className="text-caption text-text-tertiary mb-2">Siguiente</p>
                  <TextLink href={`/es/work/${nextStudy.slug}`}>{nextStudy.title}</TextLink>
                </div>
              ) : (
                <div className="flex-1" />
              )}
            </nav>
          )}
        </div>
      </Section>
      <Footer lang="es" />
    </div>
  );
}
