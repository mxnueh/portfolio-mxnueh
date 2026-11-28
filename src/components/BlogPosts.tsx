import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CalendarDays, Clock, FolderClosed } from 'lucide-react';
import { CategoryBadge } from '@/components/CategoryBadge';
import { ProjectCoverCard } from '@/components/ProjectCoverCard';
import { Section } from '@/components/Section';
import { getPosts } from '@/lib/getContent';
import type { Language, Post } from '@/lib/types';
import styles from './BlogPosts.module.css';

function PostDate({ date, lang }: { date: string; lang: Language }) {
  const formatted = new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    dateStyle: 'medium',
    timeZone: 'UTC',
  }).format(new Date(date));

  return <time dateTime={date}>{formatted}</time>;
}

function PostMeta({ post, lang }: { post: Post; lang: Language }) {
  return (
    <div className={styles.meta}>
      <span>
        <CalendarDays aria-hidden="true" />
        <PostDate date={post.date} lang={lang} />
      </span>
      <span>
        <Clock aria-hidden="true" />
        {post.readingTime} min {lang === 'es' ? 'de lectura' : 'read'}
      </span>
    </div>
  );
}

function BlogPostCard({ post, lang }: { post: Post; lang: Language }) {
  const spanish = lang === 'es';
  const base = spanish ? '/es/blog' : '/blog';

  return (
    <ProjectCoverCard
      title={post.title}
      href={`${base}/${post.slug}`}
      eyebrow={<CategoryBadge category={post.category} compact />}
      actionLabel={spanish ? 'Leer artículo' : 'Read article'}
      cover={post.image && (
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 76rem) 23rem, (min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw"
          className="object-cover"
        />
      )}
      secondaryActions={(
        <span className="text-xs">{post.readingTime} min {spanish ? 'de lectura' : 'read'}</span>
      )}
      compact
    >
      <p className="text-sm leading-relaxed">{post.excerpt}</p>
      <div className="text-xs"><PostDate date={post.date} lang={lang} /></div>
    </ProjectCoverCard>
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
    <Section reveal variant="gray" className={styles.section}>
      <div className="mx-auto max-w-6xl">
        <section aria-labelledby="recent-posts">
          <header data-reveal className="mb-6 text-left">
            <h2 id="recent-posts" className="heading-ink text-4xl font-semibold tracking-tight sm:text-5xl">
              {spanish ? 'Artículos recientes' : 'Latest posts'}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary dark:text-gray-300 sm:text-base">
              {spanish
                ? 'Notas sobre los sistemas que construyo y lo que aprendo al ponerlos a prueba.'
                : 'Notes on the systems I build and what I learn from putting them to the test.'}
            </p>
          </header>
          <div className={styles.latest}>
            <article data-reveal className={styles.feature}>
              <div className={styles.cover}>
                {featured.image && (
                  <Image src={featured.image} alt="" fill sizes="(min-width: 76rem) 43rem, (min-width: 64rem) 58vw, 100vw" className="object-cover object-[68%_center]" loading="eager" />
                )}
                <span className={styles.badge}>
                  <FolderClosed size={18} aria-hidden="true" />
                  {spanish ? 'Destacado' : 'Featured'}
                </span>
              </div>
              <div className={styles.featureCopy}>
                <PostMeta post={featured} lang={lang} />
                <h3 id="featured-post-title">{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <div>
                  <Link
                    href={`${base}/${featured.slug}`}
                    className={`portfolio-button portfolio-button-primary ${styles.featureAction}`}
                    aria-describedby="featured-post-title"
                  >
                    {spanish ? 'Leer artículo' : 'Read article'}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>

            {recent.length > 0 && (
              <ul className={styles.sidePosts} role="list">
                {recent.map(post => (
                  <li data-reveal key={post.id}>
                    <Link href={`${base}/${post.slug}`} className={styles.sidePost}>
                      {post.image && (
                        <div className={styles.sideImage}>
                          <Image src={post.image} alt="" fill sizes="(min-width: 76rem) 14rem, (min-width: 64rem) 19vw, 13rem" className="object-cover" />
                        </div>
                      )}
                      <div className={styles.sideCopy}>
                        <div>
                          <h3>{post.title}</h3>
                          <PostMeta post={post} lang={lang} />
                        </div>
                        <span className={styles.sideArrow} aria-hidden="true">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
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
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
              {more.map(post => <BlogPostCard key={post.id} post={post} lang={lang} />)}
            </ul>
          </section>
        )}
      </div>
    </Section>
  );
}
