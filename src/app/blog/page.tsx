import { GeneratedLead } from '@/components/GeneratedLead';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { BlogPosts } from '@/components/BlogPosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Engineering Notes | Enmanuel Nunez Matias',
  description: 'Technical notes on distributed systems, telemetry architectures, and software engineering.',
};

export default async function BlogPage() {
  const lang = 'en';

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section variant="white" className="pt-20 pb-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 data-reveal className="heading-ink intro-heading font-semibold leading-tight tracking-tight mb-6">
            Engineering Notes &amp; <span className="text-accent-fill">Field Reflections</span>
          </h1>
          <GeneratedLead className="max-w-2xl mx-auto text-text-secondary dark:text-gray-300">
            Deep dives on systems design, reliable offline architectures, and practical lessons from hackathons and open-source contributions.
          </GeneratedLead>
        </div>
      </Section>

      <BlogPosts lang={lang} />

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
