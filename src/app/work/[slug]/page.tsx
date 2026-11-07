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

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang="en" />
      <Section variant="white">
        <div className="max-w-reading mx-auto">
          <h1 className="text-section font-600 mb-6">{study.title}</h1>
          <p className="text-lead text-text-secondary mb-12">{study.description}</p>
          <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-96 flex items-center justify-center text-white p-8 mb-12">
            {study.image}
          </div>
          <Card>
            <div className="prose dark:prose-invert">{study.content}</div>
          </Card>
        </div>
      </Section>
      <Footer lang="en" />
    </div>
  );
}
