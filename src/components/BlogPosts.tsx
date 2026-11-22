import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CategoryBadge } from '@/components/CategoryBadge';
import { linkedCardClass, Section } from '@/components/Section';
import { getPosts } from '@/lib/getContent';
import type { Language, Post } from '@/lib/types';

function PostMeta({ post, lang, onImage = false }: { post: Post; lang: Language; onImage?: boolean }) {
  const date = new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    dateStyle: 'medium',
    timeZone: 'UTC',
  }).format(new Date(post.date));

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${onImage ? 'text-white/85' : 'text-text-tertiary dark:text-gray-400'}`}>
      <time dateTime={post.date}>{date}</time>
      <span>{post.readingTime} min {lang === 'es' ? 'de lectura' : 'read'}</span>
    </div>
  );
}

export function BlogPosts({ lang }: { lang: Language }) {
  const spanish = lang === 'es';
  const base = spanish ? '/es/blog' : '/blog';
  const posts = getPosts(lang);
  const featured = posts.find(post => post.featured) ?? posts[0];

  if (!featured) return null;

  const rest = posts.filter(post => post.id !== featured.id).sort((a, b) => b.date.localeCompare(a.date));
  const recent = rest.slice(0, 4);
  const more = rest.slice(4);

  return (
    <Section reveal variant="gray">
      <div className="mx-auto max-w-6xl">
        <section aria-labelledby="recent-posts">
          <header data-reveal className="mb-6 text-left">
            <h2 id="recent-posts" className="heading-ink text-4xl font-semibold tracking-tight sm:text-5xl">
              {spanish ? 'Artículos recientes' : 'Latest posts'}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary dark:text-gray-400 sm:text-base">
              {spanish
                ? 'Notas sobre los sistemas que construyo y lo que aprendo al ponerlos a prueba.'
                : 'Notes on the systems I build and what I learn from putting them to the test.'}
            </p>
          </header>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <Link data-reveal href={base + '/' + featured.slug} className="blog-feature">
              {featured.image && (
                <Image src={featured.image} alt="" fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover object-[68%_center]" loading="eager" />
              )}
              <div className="blog-feature-copy">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium">{spanish ? 'Artículo destacado' : 'Featured post'}</span>
                  <CategoryBadge category={featured.category} compact />
                </div>
                <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{featured.title}</h2>
                <p className="text-sm leading-snug text-white/90">{featured.excerpt}</p>
                <PostMeta post={featured} lang={lang} onImage />
              </div>
            </Link>

            {recent.length > 0 && (
              <ul className="grid content-start gap-3">
                {recent.map(post => (
                  <li data-reveal key={post.id}>
                    <Link href={base + '/' + post.slug} className="group flex items-center gap-3 rounded-xl bg-white p-3 dark:bg-[#161617]">
                      {post.image && (
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
                          <Image src={post.image} alt="" fill sizes="256px" className="object-cover" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1.5 font-semibold leading-snug group-hover:text-accent-fill">{post.title}</h3>
                        <PostMeta post={post} lang={lang} />
                      </div>
                      <ArrowRight className="size-4 shrink-0 text-accent-fill" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {more.length > 0 && (
          <section className="mt-12" aria-labelledby="more-posts">
            <h2 data-reveal id="more-posts" className="heading-ink mb-5 text-2xl font-semibold tracking-tight">
              {spanish ? 'Más artículos' : 'More posts'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map(post => (
                <Link data-reveal key={post.id} href={base + '/' + post.slug} className={linkedCardClass}>
                  {post.image && (
                    <div className="relative aspect-[2.5] w-full">
                      <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                  )}
                  <div className="flex-1 px-5 pt-4">
                    <CategoryBadge category={post.category} compact />
                    <h3 className="mb-2 mt-2 text-xl font-semibold leading-snug tracking-tight group-hover:text-accent-fill">{post.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary dark:text-gray-400">{post.excerpt}</p>
                  </div>
                  <div className="px-5 pb-5 pt-4">
                    <PostMeta post={post} lang={lang} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </Section>
  );
}

