import Link from 'next/link';
import { CategoryBadge } from '@/components/CategoryBadge';
import { ProjectCoverCard } from '@/components/ProjectCoverCard';
import { Section } from '@/components/Section';
import { getFeaturedPosts } from '@/lib/getContent';
import type { Language } from '@/lib/types';

export function FeaturedBlog({ lang }: { lang: Language }) {
  const spanish = lang === 'es';
  const base = spanish ? '/es/blog' : '/blog';
  const posts = getFeaturedPosts(lang, 3);

  return (
    <Section variant="gray">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="heading-ink mb-12 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          {spanish ? 'Del blog' : 'From the blog'}
        </h2>
        <ul className="grid gap-6 md:grid-cols-3" role="list">
          {posts.map(post => (
            <ProjectCoverCard
              key={post.id}
              title={post.title}
              href={`${base}/${post.slug}`}
              eyebrow={<CategoryBadge category={post.category} compact />}
              actionLabel={spanish ? 'Leer artículo' : 'Read article'}
              secondaryActions={<span className="text-xs">{post.readingTime} min {spanish ? 'de lectura' : 'read'}</span>}
              compact
            >
              <p className="text-sm leading-relaxed">{post.excerpt}</p>
            </ProjectCoverCard>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link href={base} className="inline-flex min-h-11 items-center text-sm font-semibold text-link underline underline-offset-4">
            {spanish ? 'Todas las notas técnicas →' : 'All engineering notes →'}
          </Link>
        </div>
      </div>
    </Section>
  );
}
