import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaSection } from '@/components/CtaSection';
import { Button, TextLink } from '@/components/Button';
import { Section, SectionHeading } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { CategoryBadge } from '@/components/CategoryBadge';
import { getContent, getFeaturedPosts, getFeaturedProducts, getCaseStudies } from '@/lib/getContent';
import { decorativeMotion, decorativeDelay } from '@/lib/motion';
import Link from 'next/link';

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

export default async function EsHomePage() {
  const lang = 'es';
  const content = getContent(lang);
  const featuredPosts = getFeaturedPosts(lang, 3);
  const featuredProducts = getFeaturedProducts(lang, 2);
  const caseStudies = getCaseStudies(lang);

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen">
        <GlobalNav lang={lang} />

        {/* Hero */}
        <Section variant="white" className="relative overflow-hidden">
          <DotPattern className="opacity-35" />
          <div className="relative z-10 max-w-text mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <AnimatedGradientText>
                📍 {content.home.hero.eyebrow}
              </AnimatedGradientText>
            </div>
            <h1 className="text-hero md:text-hero-tablet lg:text-hero-mobile font-600 mb-8 tracking-tight">
              Desarrollador Full Stack & <SparklesText text="Diseñador de Sistemas" className="text-accent-fill" />
            </h1>
            <p className="text-lead md:text-lead-tablet lg:text-lead-mobile text-text-secondary dark:text-dark-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              {content.home.hero.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <ShimmerButton href="/es/contact" background="#0071e3">
                {content.home.hero.primaryCTA.label}
              </ShimmerButton>
              <InteractiveHoverButton
                href="/es/work"
                text={content.home.hero.secondaryCTA.label}
              />
            </div>
          </div>
        </Section>

        {/* Tech Marquee Ticker */}
        <div className="border-y border-black/5 dark:border-white/10 bg-bg-alt py-4 overflow-hidden">
          <Marquee pauseOnHover duration="35s">
            {['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Telemetría IoT', 'Finalista NASA Space Apps', 'Arquitectura de Sistemas'].map((tech) => (
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
          <SectionHeading headline={content.home.atGlance.headline} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {content.home.atGlance.cards.map((card, idx) => (
              <Tile
                key={idx}
                className={`p-8 flex flex-col justify-between ${
                  card.span === 2 ? 'md:col-span-2' : ''
                } ${card.isHighlight ? 'relative overflow-hidden' : ''}`}
              >
                {card.isHighlight ? (
                  <>
                    <BorderBeam size={180} duration={10} colorFrom="#ffffff" colorTo="#93c5fd" />
                    <p className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 mb-8 relative z-10">
                      {card.title}
                    </p>
                    <TextLink href={card.cta?.href || '/'} className="relative z-10 font-semibold">
                      {card.cta?.label} →
                    </TextLink>
                  </>
                ) : card.stat ? (
                  <>
                    <p className="text-hero md:text-hero-tablet lg:text-hero-mobile font-600 text-accent-fill">
                      <NumberTicker value={parseInt(card.stat, 10) || 4} />
                    </p>
                    <p className="text-body text-text-secondary dark:text-dark-text-secondary">{card.label}</p>
                  </>
                ) : (
                  <>
                    <p className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 mb-4">
                      {card.title}
                    </p>
                    <p className="text-body text-text-secondary dark:text-dark-text-secondary mb-4">{card.label}</p>
                    {card.chips && (
                      <div className="flex flex-wrap gap-4 mt-auto">
                        {card.chips.map((chip) => (
                          <span
                            key={chip}
                            className="inline-flex px-4 py-4 rounded-full bg-bg-alt dark:bg-dark-bg-alt text-caption text-text-secondary dark:text-dark-text-secondary font-medium"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </Tile>
            ))}
          </div>

          {/* Consola Terminal */}
          <div className="mt-12 flex justify-center">
            <Terminal
              title="enmanuel@portfolio ~ motor-telemetria"
              lines={[
                { text: 'whoami', type: 'command' },
                { text: 'Enmanuel Núñez Matías — Desarrollador Full Stack & Diseñador de Sistemas', type: 'output' },
                { text: 'cat mision_principal.json', type: 'command' },
                { text: '{\n  "enfoque": "Arquitecturas web y telemetría de alta fiabilidad",\n  "reconocimientos": "Finalista Global 2x NASA Space Apps",\n  "estado": "Disponible para retos de ingeniería ambiciosos"\n}', type: 'output' },
                { text: 'curl -s https://enmanuelnunez.dev/salud', type: 'command' },
                { text: 'estado: 200 OK — 99.98% entrega de paquetes', type: 'success' },
              ]}
            />
          </div>
        </Section>

      {/* Products */}
      {featuredProducts.length > 0 && (
        <Section variant="black">
          <SectionHeading
            headline={content.home.products.headline}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Tile key={product.id}>
                <p className="text-eyebrow text-text-tertiary dark:text-white mb-4">{product.category}</p>
                <h3 className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 text-text-primary dark:text-white mb-4">
                  {product.name}
                </h3>
                <p className="text-body text-text-secondary dark:text-gray-400 mb-8">{product.tagline}</p>
                <p className="text-price text-text-primary dark:text-white mb-8">Desde {product.price}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href={`/es/products/${product.slug}`} variant="primary">Comprar</Button>
                  <TextLink href={`/es/products/${product.slug}`}>Aprende más</TextLink>
                </div>
                {product.hero && (
                  <div className="rounded-large bg-bg-alt h-40 mt-8 flex items-center justify-center text-text-tertiary text-center text-caption">
                    {product.hero}
                  </div>
                )}
              </Tile>
            ))}
          </div>
          <div className="text-center">
            <TextLink href="/es/products">Todos los productos</TextLink>
          </div>
        </Section>
      )}

      {/* Selected Work */}
      <Section variant="white">
        <SectionHeading headline={content.home.work.headline} />
        <div className="space-y-8 mb-12">
          {caseStudies.slice(0, 3).map((study) => (
            <Link key={study.id} href={`/es/work/${study.slug}`} className="group block">
              <Tile interactive elevation="e1">
                <h3 className="text-subhead md:text-subhead-tablet lg:text-subhead-mobile font-600 mb-4 group-hover:opacity-75 transition-opacity">
                  {study.title}
                </h3>
                <p className="text-body text-text-secondary mb-8 group-hover:text-text-primary transition-colors">
                  {study.description}
                </p>
                <div className="flex items-center gap-4 text-link group-hover:opacity-75 transition-opacity">
                  Leer el caso de estudio
                  <span className="text-xs">›</span>
                </div>
              </Tile>
              {study.image && (
                <div className="rounded-large bg-bg-alt h-40 mt-8 flex items-center justify-center text-text-tertiary text-center text-caption">
                  {study.image}
                </div>
              )}
            </Link>
          ))}
        </div>
        <div className="text-center">
          <TextLink href="/es/work">Todo el trabajo</TextLink>
        </div>
      </Section>

      {/* From the Blog */}
      <Section variant="gray">
        <SectionHeading headline={content.home.blog.headline} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/es/blog/${post.slug}`} className="group block">
              <Tile interactive elevation="e1" className="h-full">
                <div className="mb-4">
                  <CategoryBadge category={post.category as 'Case study' | 'Notes' | 'Beyond code'} />
                </div>
                <h3 className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 mb-4 group-hover:opacity-75 transition-opacity line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-body text-text-secondary mb-8 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-caption text-text-tertiary">{post.readingTime} min lectura</span>
                  <div className="flex items-center gap-4 text-link group-hover:opacity-75 transition-opacity">
                    Leer
                    <span className="text-xs">›</span>
                  </div>
                </div>
              </Tile>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <TextLink href="/es/blog">Todos los posts</TextLink>
        </div>
      </Section>

      {/* Closing CTA */}
      {/* Closing chapter: always dark */}
      <div className="chapter-dark">
        <CtaSection variant="actions" lang={lang} />
        <SiteFooter lang={lang} />
      </div>
      </div>
    </ClickSpark>
  );
}
