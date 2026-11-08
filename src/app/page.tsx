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

import {
  DotPattern,
  SparklesText,
  AnimatedGradientText,
  ShimmerButton,
  InteractiveHoverButton,
  NumberTicker,
  BorderBeam,
  Marquee,
  Terminal,
} from '@/components/magicui';
import { ClickSpark } from '@/components/reactbits';

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
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen">
        <GlobalNav lang={lang} />

        {/* Hero */}
        <Section variant="white" className="relative overflow-hidden">
          <DotPattern className="opacity-35" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <AnimatedGradientText>
                📍 {content.home.hero.eyebrow}
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight">
              Full Stack Developer & <SparklesText text="Systems Designer" className="text-accent-fill" />
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              {content.home.hero.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <ShimmerButton href={siteConfig.ctas.hero.primary.href} background="#0071e3">
                {siteConfig.ctas.hero.primary.label}
              </ShimmerButton>
              <InteractiveHoverButton
                href={siteConfig.ctas.hero.secondary.href}
                text={siteConfig.ctas.hero.secondary.label}
              />
            </div>
          </div>
        </Section>

        {/* Tech Marquee Ticker */}
        <div className="border-y border-black/5 dark:border-white/10 bg-bg-alt py-4 overflow-hidden">
          <Marquee pauseOnHover duration="35s">
            {['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'IoT Telemetry', 'NASA Space Apps Finalist', 'Systems Architecture'].map((tech) => (
              <span
                key={tech}
                className="mx-3 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/10 text-xs font-semibold shadow-sm text-text-secondary hover:text-accent-fill transition-colors"
              >
                ✦ {tech}
              </span>
            ))}
          </Marquee>
        </div>

        {/* At a Glance */}
        <Section variant="gray">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">At a glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend to Backend */}
              <Tile className="md:col-span-2">
                <h3 className="text-2xl font-semibold mb-4">Frontend to backend</h3>
                <div className="flex flex-wrap gap-4">
                  {['React', 'TypeScript', 'Tailwind', 'Python', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="px-4 py-4 bg-bg-alt dark:bg-dark-bg-alt rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </Tile>

              {/* Hackathons */}
              <Tile className="flex flex-col justify-center">
                <div className="text-5xl font-bold mb-4 text-accent-fill">
                  <NumberTicker value={4} />
                </div>
                <p className="text-text-secondary">hackathon finals, 2 of them NASA</p>
              </Tile>

              {/* GSoC */}
              <Tile className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Google Summer of Code 2026</h3>
                <p className="text-text-secondary">omegaUp contributor</p>
              </Tile>

              {/* Systems Design */}
              <Tile>
                <h3 className="text-xl font-semibold mb-4">Systems design</h3>
                <p className="text-text-secondary">Architecture, data flow, roles and permissions</p>
              </Tile>

              {/* Education */}
              <Tile>
                <h3 className="text-xl font-semibold mb-4">English B2</h3>
                <p className="text-text-secondary">Software Development at ITLA</p>
              </Tile>

              {/* CTA with BorderBeam */}
              <div className="relative md:col-span-2 overflow-hidden bg-accent-fill dark:bg-accent-fill rounded-large p-8 text-white flex flex-col justify-center shadow-lg">
                <BorderBeam size={180} duration={10} colorFrom="#ffffff" colorTo="#93c5fd" />
                <h3 className="text-2xl font-semibold mb-4 relative z-10">
                  Open to Frontend / Full Stack (React) roles and custom software projects
                </h3>
                <TextLink href="/contact" className="text-white relative z-10 font-semibold">
                  Get in touch →
                </TextLink>
              </div>
            </div>

            {/* Developer Terminal Showcase */}
            <div className="mt-12 flex justify-center">
              <Terminal
                title="enmanuel@portfolio ~ telemetry-engine"
                lines={[
                  { text: 'whoami', type: 'command' },
                  { text: 'Enmanuel Nunez Matias — Full Stack Developer & Systems Designer', type: 'output' },
                  { text: 'cat core_mission.json', type: 'command' },
                  { text: '{\n  "focus": "High-reliability web & telemetry architectures",\n  "awards": "NASA Space Apps 2x Global Finalist",\n  "status": "Available for ambitious engineering challenges"\n}', type: 'output' },
                  { text: 'curl -s https://enmanuelnunez.dev/healthz', type: 'command' },
                  { text: 'status: 200 OK — 99.98% packet delivery', type: 'success' },
                ]}
              />
            </div>
          </div>
        </Section>

      {/* Products */}
      {siteConfig.features.products && featuredProducts.length > 0 && (
        <Section variant="black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-large p-8 shadow-e1">
                  <p className="text-sm uppercase tracking-wider text-accent-fill mb-4">{product.category}</p>
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">{product.name}</h3>
                  <p className="text-text-secondary mb-4">{product.tagline}</p>
                  <p className="text-xl font-semibold text-text-primary mb-8">From {product.price}</p>
                  <div className="flex gap-4">
                    <Button href={`/products/${product.slug}`} variant="primary">
                      {product.status === 'Available' ? 'Buy' : 'Learn more'}
                    </Button>
                  </div>
                  {product.hero && (
                    <div className="rounded-large bg-bg-alt h-40 mt-8 flex items-center justify-center text-text-tertiary">
                      {product.hero}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <TextLink href="/products">All products</TextLink>
            </div>
          </div>
        </Section>
      )}

      {/* Selected Work */}
      <Section variant="white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">Selected work</h2>
          <div className="space-y-8">
            {caseStudies.slice(0, 3).map((study) => (
              <Link key={study.id} href={`/work/${study.slug}`} className="group block">
                <Tile interactive elevation="e1">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-3xl font-semibold mb-4 group-hover:text-accent-fill transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-lg text-text-secondary mb-4">{study.description}</p>
                      <div className="flex items-center gap-4 text-accent-fill">
                        Read case study
                        <span>→</span>
                      </div>
                    </div>
                    {study.image && (
                      <div className="w-full md:w-80 h-48 rounded-large bg-bg-alt flex items-center justify-center text-text-tertiary flex-shrink-0">
                        {study.image}
                      </div>
                    )}
                  </div>
                </Tile>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <TextLink href="/work">View all work</TextLink>
          </div>
        </div>
      </Section>

      {/* From the Blog */}
      <Section variant="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">From the blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <Tile interactive elevation="e1" className="h-full">
                  <div className="mb-4">
                    <CategoryBadge category={post.category as 'Case study' | 'Notes' | 'Beyond code'} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-accent-fill transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-text-tertiary">
                    <span>{post.readingTime} min read</span>
                    <span className="text-accent-fill">→</span>
                  </div>
                </Tile>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <TextLink href="/blog">All posts</TextLink>
          </div>
        </div>
      </Section>

      {/* Closing chapter: always dark */}
      <div className="chapter-dark">
        <CtaSection variant="actions" lang={lang} />
        <SiteFooter lang={lang} />
      </div>
      </div>
    </ClickSpark>
  );
}
