import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section, SectionHeading } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { CategoryBadge } from '@/components/CategoryBadge';
import { TextLink } from '@/components/Button';
import { getPosts, getContent } from '@/lib/getContent';
import Link from 'next/link';

export default async function EsBlogPage() {
  const lang = 'es';
  const content = getContent(lang);
  const posts = getPosts(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <SectionHeading headline={content.home.blog.headline} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link key={post.id} href={`/es/blog/${post.slug}`} className="group block">
              <Tile interactive elevation="e1" className="h-full">
                <div className="mb-4">
                  <CategoryBadge category={post.category as 'Case study' | 'Notes' | 'Beyond code'} />
                </div>
                <h3 className="text-card-title font-600 mb-4 group-hover:text-accent-fill transition-colors">
                  {post.title}
                </h3>
                <p className="text-body text-text-secondary mb-8">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-caption text-text-tertiary">
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </span>
                  <span className="text-caption text-text-tertiary">{post.readingTime} min</span>
                </div>
              </Tile>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <TextLink href={content.home.blog.cta.href}>
            {content.home.blog.cta.label}
          </TextLink>
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
