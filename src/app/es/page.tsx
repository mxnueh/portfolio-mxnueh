import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Button, TextLink } from '@/components/Button';
import { Section, SectionHeading, Card } from '@/components/Section';
import { getContent, getFeaturedPosts, getFeaturedProducts, getCaseStudies } from '@/lib/getContent';
import Link from 'next/link';

export default async function EsHomePage() {
  const lang = 'es';
  const content = getContent(lang);
  const featuredPosts = getFeaturedPosts(lang, 3);
  const featuredProducts = getFeaturedProducts(lang, 2);
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section variant="white">
        <div className="max-w-text mx-auto text-center">
          <p className="text-eyebrow text-text-tertiary dark:text-dark-text-secondary mb-6 animate-fade-in">
            {content.home.hero.eyebrow}
          </p>
          <h1 className="text-hero md:text-hero-tablet lg:text-hero-mobile font-600 mb-8 animate-fade-in" style={{ animationDelay: '0.08s' }}>
            {content.home.hero.headline}
          </h1>
          <p className="text-lead md:text-lead-tablet lg:text-lead-mobile text-text-secondary dark:text-dark-text-secondary mb-12 animate-fade-in" style={{ animationDelay: '0.16s' }}>
            {content.home.hero.lead}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.24s' }}>
            <Button href="/es/contact" variant="primary">
              {content.home.hero.primaryCTA.label}
            </Button>
            <TextLink href="/es/work">
              {content.home.hero.secondaryCTA.label}
            </TextLink>
          </div>
          <TextLink href="/es/products" className="justify-center mb-16">
            {content.home.hero.tertiaryCTA.label}
          </TextLink>
          {/* Hero image */}
          <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center text-white text-center p-8 animate-fade-in" style={{ animationDelay: '0.32s' }}>
            <span className="text-body text-white/80">{content.home.hero.image}</span>
          </div>
        </div>
      </Section>

      {/* At a Glance */}
      <Section variant="gray">
        <SectionHeading headline={content.home.atGlance.headline} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {content.home.atGlance.cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-large bg-bg-card dark:bg-dark-bg-card p-8 flex flex-col justify-between animate-fade-in ${
                card.span === 2 ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              {card.isHighlight ? (
                <>
                  <p className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 mb-6">
                    {card.title}
                  </p>
                  <TextLink href={card.cta?.href || '/'}>
                    {card.cta?.label}
                  </TextLink>
                </>
              ) : card.stat ? (
                <>
                  <p className="text-hero md:text-hero-tablet lg:text-hero-mobile font-600">{card.stat}</p>
                  <p className="text-body text-text-secondary dark:text-dark-text-secondary">{card.label}</p>
                </>
              ) : (
                <>
                  <p className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 mb-2">
                    {card.title}
                  </p>
                  <p className="text-body text-text-secondary dark:text-dark-text-secondary mb-4">{card.label}</p>
                  {card.chips && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {card.chips.map((chip) => (
                        <span
                          key={chip}
                          className="inline-flex px-3 py-1 rounded-full bg-bg-alt dark:bg-dark-bg-alt text-caption text-text-secondary dark:text-dark-text-secondary"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Products */}
      {featuredProducts.length > 0 && (
        <Section variant="black">
          <SectionHeading
            headline={content.home.products.headline}
            lead={content.home.products.lead}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id}>
                <p className="text-eyebrow text-text-tertiary dark:text-white mb-4">{product.category}</p>
                <h3 className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 text-text-primary dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-body text-text-secondary dark:text-gray-400 mb-6">{product.tagline}</p>
                <p className="text-price text-text-primary dark:text-white mb-6">Desde {product.price}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href={`/es/products/${product.slug}`} variant="primary">Comprar</Button>
                  <TextLink href={`/es/products/${product.slug}`}>Aprende más</TextLink>
                </div>
                {product.hero && (
                  <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-40 mt-8 flex items-center justify-center text-white text-center text-caption">
                    {product.hero}
                  </div>
                )}
              </Card>
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
              <Card>
                <p className="text-eyebrow text-text-tertiary mb-4 group-hover:text-text-secondary transition-colors">
                  {study.eyebrow}
                </p>
                <h3 className="text-subhead md:text-subhead-tablet lg:text-subhead-mobile font-600 mb-2 group-hover:opacity-75 transition-opacity">
                  {study.title}
                </h3>
                <p className="text-body text-text-secondary mb-6 group-hover:text-text-primary transition-colors">
                  {study.description}
                </p>
                <div className="flex items-center gap-1 text-link group-hover:opacity-75 transition-opacity">
                  Leer el caso de estudio
                  <span className="text-xs">›</span>
                </div>
              </Card>
              {study.image && (
                <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-40 mt-8 flex items-center justify-center text-white text-center text-caption">
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
              <Card>
                <p className="text-eyebrow text-text-tertiary mb-4 group-hover:text-text-secondary transition-colors">
                  {post.category}
                </p>
                <h3 className="text-card-title md:text-card-title-tablet lg:text-card-title-mobile font-600 mb-4 group-hover:opacity-75 transition-opacity line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-body text-text-secondary mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-caption text-text-tertiary">{post.readingTime} min lectura</span>
                  <div className="flex items-center gap-1 text-link group-hover:opacity-75 transition-opacity">
                    Leer
                    <span className="text-xs">›</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <TextLink href="/es/blog">Todos los posts</TextLink>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section variant="white">
        <div className="max-w-text mx-auto text-center">
          <h2 className="text-subhead md:text-subhead-tablet lg:text-subhead-mobile font-600 mb-12">
            {content.home.closing.headline}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/es/contact" variant="primary">
              {content.home.closing.primaryCTA.label}
            </Button>
            <TextLink href="#">
              {content.home.closing.secondaryCTA.label}
            </TextLink>
          </div>
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
