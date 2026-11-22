import { GeneratedLead } from '@/components/GeneratedLead';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { StackedPanels } from '@/components/StackedPanels';
import { SelectedWork } from '@/components/SelectedWork';
import { CategoryBadge } from '@/components/CategoryBadge';
import { getContent, getFeaturedPosts, getFeaturedProducts, getCaseStudies } from '@/lib/getContent';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Language } from '@/lib/types';
import { TechMarquee } from '@/components/TechMarquee';

export default async function EsHomePage() {
  const lang: Language = 'es';
  const content = getContent(lang);
  const featuredPosts = getFeaturedPosts(lang, 3);
  const featuredProducts = siteConfig.features.products ? getFeaturedProducts(lang, 2) : [];
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} home />

      {/* Hero */}
      <Section variant="white" className="relative overflow-hidden pt-20 pb-16">
        <div className="relative z-10 max-w-[96rem] mx-auto text-center px-4">
          <h1 className="heading-ink intro-heading home-heading mb-8">
            Desarrollador Full Stack &amp; <span className="text-accent-fill">Diseñador de Sistemas</span>
          </h1>
          <GeneratedLead className="home-lead mb-10 mx-auto text-text-secondary dark:text-gray-300">
            {content.home.hero.lead}
          </GeneratedLead>
          <div className="home-actions flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/es/work"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold bg-accent-fill text-white hover:bg-accent-hover active:bg-accent-pressed transition-colors shadow-sm"
              style={{ minHeight: '44px' }}
            >
              Ver casos de estudio
            </a>
            <a
              href="mailto:enmanuelnunezmatias@gmail.com"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-text-primary dark:text-white border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-colors"
              style={{ minHeight: '44px' }}
            >
              Escríbeme
            </a>
          </div>
        </div>
      </Section>

      {/* Tech Stack Reel */}
      <TechMarquee lang={lang} />

      {/* Stacked Panels (5 At a Glance Panels) */}
      <StackedPanels lang={lang} />

      {/* Selected Work Section */}
      <SelectedWork lang={lang} />

      {/* From the Blog */}
      <Section variant="gray">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="heading-ink text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight">Del blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/es/blog/${post.slug}`} className="group block h-full">
                <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-7 transition-colors hover:border-black/[0.2] dark:hover:border-white/[0.25] h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <CategoryBadge category={post.category as 'Case study' | 'Notes' | 'Beyond code'} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-fill transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-secondary dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-tertiary pt-4">
                    <span>{post.readingTime} min de lectura</span>
                    <span className="text-accent-fill font-semibold">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/es/blog" className="text-sm font-semibold text-accent-fill hover:underline">
              Todas las notas técnicas →
            </Link>
          </div>
        </div>
      </Section>

      <SiteFooter cta="actions" lang={lang} />
    </div>
  );
}
