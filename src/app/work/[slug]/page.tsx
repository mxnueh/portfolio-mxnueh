import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section, Card } from '@/components/Section';
import { TextLink } from '@/components/Button';
import { getCaseStudy, getCaseStudies, getContent } from '@/lib/getContent';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudies('en').map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug, 'en');
  const allStudies = getCaseStudies('en');

  if (!study) {
    return (
      <div className="flex flex-col min-h-screen">
        <GlobalNav lang="en" />
        <Section variant="white">
          <h1 className="text-section font-600 mb-4">Not found</h1>
        </Section>
        <Footer lang="en" />
      </div>
    );
  }

  const currentIndex = allStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang="en" />
      <Section variant="white">
        <div className="max-w-reading mx-auto">
          <div className="mb-8">
            <TextLink href="/work">← Back to work</TextLink>
          </div>
          <h1 className="text-section font-600 mb-6">{study.title}</h1>
          <p className="text-lead text-text-secondary mb-12">{study.description}</p>
          {study.image && (
            <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-96 flex items-center justify-center text-white p-8 mb-12">
              {study.image}
            </div>
          )}
          <Card>
            <div className="prose dark:prose-invert">{study.content}</div>
          </Card>

          {(prevStudy || nextStudy) && (
            <nav className="mt-16 pt-8 border-t border-stroke flex justify-between gap-8">
              {prevStudy ? (
                <div className="flex-1">
                  <p className="text-caption text-text-tertiary mb-2">Previous</p>
                  <TextLink href={`/work/${prevStudy.slug}`}>{prevStudy.title}</TextLink>
                </div>
              ) : (
                <div className="flex-1" />
              )}
              {nextStudy ? (
                <div className="flex-1 text-right">
                  <p className="text-caption text-text-tertiary mb-2">Next</p>
                  <TextLink href={`/work/${nextStudy.slug}`}>{nextStudy.title}</TextLink>
                </div>
              ) : (
                <div className="flex-1" />
              )}
            </nav>
          )}
        </div>
      </Section>
      <Footer lang="en" />
    </div>
  );
}
