import { GeneratedLead } from '@/components/GeneratedLead';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { WorkGallery } from '@/components/WorkGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work & Systems Architecture | Enmanuel Nunez Matias',
  description: 'Detailed case studies in telemetry platforms, offline-first architectures, and full-stack web applications.',
};

export default async function WorkPage() {
  const lang = 'en';

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

      <Section variant="gray">
        <WorkGallery lang={lang} />
      </Section>

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
