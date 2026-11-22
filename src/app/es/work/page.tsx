import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { WorkGallery, workPageCopy } from '@/components/WorkGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${workPageCopy.es.title} | Enmanuel Núñez Matías`,
  description: workPageCopy.es.description,
};

export default async function EsWorkPage() {
  const lang = 'es';

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      <Section variant="gray" className="dark:bg-[#0c0c0e] dark:text-white">
        <WorkGallery lang={lang} />
      </Section>

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
