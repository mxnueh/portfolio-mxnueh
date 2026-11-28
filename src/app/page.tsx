import { GlobalNav } from '@/components/GlobalNav';
import { FeaturedBlog } from '@/components/FeaturedBlog';
import { HomeHero } from '@/components/HomeHero';
import { SiteFooter } from '@/components/SiteFooter';
import { StackedPanels } from '@/components/StackedPanels';
import { SelectedWork } from '@/components/SelectedWork';
import { getContent } from '@/lib/getContent';
import { TechMarquee } from '@/components/TechMarquee';

interface HomePageProps {
  params: Promise<{ lang?: string[] }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const lang = 'en';
  const { stackedPanels, selectedWork } = getContent(lang).home;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} home />

      <HomeHero lang={lang} />

      {/* Tech Stack Reel */}
      <TechMarquee lang={lang} />

      {/* Stacked Panels (5 At a Glance Panels) */}
      <StackedPanels lang={lang} panels={stackedPanels.panels} />

      {/* Selected Work Section */}
      <SelectedWork selectedWork={selectedWork} />

      <FeaturedBlog lang={lang} />

      <SiteFooter cta="actions" lang={lang} />
    </div>
  );
}
