import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaSection } from '@/components/CtaSection';
import { Button, TextLink } from '@/components/Button';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { CategoryBadge } from '@/components/CategoryBadge';
import { getContent, getFeaturedPosts, getFeaturedProducts, getCaseStudies } from '@/lib/getContent';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Language } from '@/lib/types';
import { NumberTicker, Marquee } from '@/components/magicui';

interface HomePageProps {
  params: Promise<{ lang?: string[] }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const lang: Language = 'en';
  const content = getContent(lang);
  const featuredPosts = getFeaturedPosts(lang, 3);
  const featuredProducts = siteConfig.features.products ? getFeaturedProducts(lang, 2) : [];
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section variant="white" className="relative overflow-hidden pt-20 pb-16">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="mb-6 flex justify-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400 bg-black/[0.04] dark:bg-white/[0.08] px-4 py-1.5 rounded-full">
              {content.home.hero.eyebrow}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-tight">
            Full Stack Developer &amp; <span className="text-accent-fill">Systems Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            {content.home.hero.lead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold bg-accent-fill text-white hover:bg-accent-hover active:bg-accent-pressed transition-colors shadow-sm"
              style={{ minHeight: '44px' }}
            >
              View case studies
            </a>
            <a
              href="mailto:enmanuelnunezmatias@gmail.com"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-text-primary dark:text-white border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-colors"
              style={{ minHeight: '44px' }}
            >
              Email me
            </a>
          </div>
        </div>
      </Section>

      {/* Tech Stack Subtle Reel */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.08] bg-bg-alt dark:bg-[#121214] py-4 overflow-hidden">
        <Marquee pauseOnHover duration="35s">
          {['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Systems Architecture'].map((tech) => (
            <span
              key={tech}
              className="mx-3 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#1c1c1e] border border-black/[0.06] dark:border-white/[0.08] text-xs font-medium text-text-secondary dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </Marquee>
      </div>

      {/* At a Glance */}
      <Section variant="gray">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight">At a glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend to Backend */}
            <Tile className="md:col-span-2 rounded-2xl p-7">
              <h3 className="text-xl font-semibold mb-4">Frontend to backend</h3>
              <div className="flex flex-wrap gap-2.5">
                {['React', 'TypeScript', 'Tailwind', 'Python', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 bg-black/[0.04] dark:bg-white/[0.08] rounded-lg text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </Tile>

            {/* Hackathons */}
            <Tile className="flex flex-col justify-center rounded-2xl p-7">
              <div className="text-4xl font-bold mb-2 text-accent-fill">
                <NumberTicker value={4} />
              </div>
              <p className="text-sm text-text-secondary dark:text-gray-400">hackathon finals, 2 of them NASA</p>
            </Tile>

            {/* GSoC */}
            <Tile className="flex flex-col justify-center rounded-2xl p-7">
              <h3 className="text-lg font-semibold mb-2">Google Summer of Code</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400">omegaUp core contributor</p>
            </Tile>

            {/* Systems Design */}
            <Tile className="rounded-2xl p-7">
              <h3 className="text-lg font-semibold mb-2">Systems design</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400">Architecture, API contracts, offline-first sync</p>
            </Tile>

            {/* Education */}
            <Tile className="rounded-2xl p-7">
              <h3 className="text-lg font-semibold mb-2">English B2</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400">Software Development at ITLA</p>
            </Tile>

            {/* Open to Roles Tile */}
            <div className="relative md:col-span-2 overflow-hidden bg-accent-fill rounded-2xl p-7 text-white flex flex-col justify-center shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Open to Frontend &amp; Full Stack (React) engineering roles
              </h3>
              <p className="text-sm text-white/85 mb-4">
                Available for full-time distributed software engineering and high-performance frontend builds.
              </p>
              <a href="mailto:enmanuelnunezmatias@gmail.com" className="text-sm text-white font-semibold underline-offset-4 hover:underline">
                Email me directly →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Selected Work */}
      <Section variant="white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight">Selected work</h2>
          <div className="space-y-6">
            {caseStudies.slice(0, 3).map((study) => (
              <Link key={study.id} href={`/work/${study.slug}`} className="group block">
                <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-bg-alt dark:bg-[#161617] p-8 transition-colors hover:border-black/[0.2] dark:hover:border-white/[0.25]">
                  <div className="flex flex-col md:flex-row gap-8 justify-between">
                    <div className="flex-1">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-fill block mb-2">
                        {study.eyebrow}
                      </span>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent-fill transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-base text-text-secondary dark:text-gray-400 mb-6 leading-relaxed">
                        {study.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-accent-fill">
                        <span>Read case study</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/work" className="text-sm font-semibold text-accent-fill hover:underline">
              View all work →
            </Link>
          </div>
        </div>
      </Section>

      {/* From the Blog */}
      <Section variant="gray">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight">From the blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
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
                  <div className="flex items-center justify-between text-xs text-text-tertiary pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <span>{post.readingTime} min read</span>
                    <span className="text-accent-fill font-semibold">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="text-sm font-semibold text-accent-fill hover:underline">
              All engineering notes →
            </Link>
          </div>
        </div>
      </Section>

      {/* Closing chapter: always dark */}
      <div className="chapter-dark">
        <CtaSection variant="actions" lang={lang} />
        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
