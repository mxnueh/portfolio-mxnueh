import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { CategoryBadge } from '@/components/CategoryBadge';
import { GlobalNav } from '@/components/GlobalNav';
import { Markdown } from '@/components/Markdown';
import { Section } from '@/components/Section';
import { SiteFooter } from '@/components/SiteFooter';
import { getPosts } from '@/lib/getContent';
import type { Language, Post } from '@/lib/types';
import styles from './BlogArticle.module.css';

const articleCopy = {
  en: {
    back: 'Back to all posts',
    navigation: 'Article navigation',
    previous: 'Previous article',
    next: 'Next article',
    readingTime: 'min read',
    missing: 'Post not found',
    missingDescription: 'The requested article could not be located.',
  },
  es: {
    back: 'Volver a todos los artículos',
    navigation: 'Navegación entre artículos',
    previous: 'Artículo anterior',
    next: 'Siguiente artículo',
    readingTime: 'min de lectura',
    missing: 'Artículo no encontrado',
    missingDescription: 'No se pudo localizar el artículo solicitado.',
  },
};

function ArticleNavigationCard({ post, base, label, direction }: {
  post: Post;
  base: string;
  label: string;
  direction: 'previous' | 'next';
}) {
  const Arrow = direction === 'previous' ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={`${base}/${post.slug}`}
      rel={direction === 'previous' ? 'prev' : 'next'}
      className={`${styles.navigationCard} ${direction === 'next' ? 'sm:col-start-2' : ''}`}
    >
      <span className={styles.navigationLabel}>
        <span className={styles.navigationIcon} aria-hidden="true">
          <Arrow size={14} />
        </span>
        <span>{label}</span>
      </span>
      <span className={styles.navigationTitle}>{post.title}</span>
    </Link>
  );
}

export function BlogArticle({ slug, lang }: { slug: string; lang: Language }) {
  const copy = articleCopy[lang];
  const base = lang === 'es' ? '/es/blog' : '/blog';
  const posts = getPosts(lang);
  const index = posts.findIndex((post) => post.slug === slug);
  const post = posts[index];

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-white text-text-primary dark:bg-[#0c0c0e] dark:text-white">
        <GlobalNav lang={lang} />
        <Section variant="white" className="py-24 text-center">
          <div className="mx-auto max-w-md">
            <h1 className="mb-4 text-3xl font-semibold">{copy.missing}</h1>
            <p className="mb-8 text-text-secondary dark:text-gray-400">{copy.missingDescription}</p>
            <Link href={base} className="inline-flex items-center gap-2 text-sm font-semibold text-accent-fill hover:underline">
              <ArrowLeft size={16} aria-hidden="true" />
              {copy.back}
            </Link>
          </div>
        </Section>
        <SiteFooter lang={lang} />
      </div>
    );
  }

  const previous = posts[index - 1];
  const next = posts[index + 1];
  const hero = post.heroImage ?? post.image;
  const published = new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(post.date));

  return (
    <div className="flex min-h-screen flex-col bg-white text-text-primary dark:bg-[#0c0c0e] dark:text-white">
      <GlobalNav lang={lang} />
      <main className="grow">
        <article className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:px-8 sm:pt-16 sm:pb-24">
          <Link href={base} className={`${styles.direction} mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:underline sm:mb-7`}>
            <ArrowLeft size={16} aria-hidden="true" />
            {copy.back}
          </Link>

          <header>
            <h1 className={styles.title}>{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary dark:text-gray-300">
              <CategoryBadge category={post.category} className={styles.category} compact />
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={16} className={styles.direction} aria-hidden="true" />
                <time dateTime={post.date}>{published}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} className={styles.direction} aria-hidden="true" />
                {post.readingTime} {copy.readingTime}
              </span>
            </div>
          </header>

          {hero && (
            <div data-article-cover className="relative mt-6 aspect-video overflow-hidden rounded-medium bg-category-case-bg shadow-e1 sm:mt-8 sm:rounded-large">
              <Image src={hero} alt="" fill sizes="(min-width: 64rem) 60rem, (min-width: 40rem) calc(100vw - 4rem), calc(100vw - 2.5rem)" className="object-cover" loading="eager" fetchPriority="high" />
            </div>
          )}

          <div className="mt-7 max-w-[72ch] sm:mt-9">
            <p className="mb-5 text-lg leading-relaxed text-text-primary sm:text-xl dark:text-gray-200">{post.excerpt}</p>
            <Markdown content={post.content} />
          </div>

          {(previous || next) && (
            <nav aria-label={copy.navigation} className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
              {previous && <ArticleNavigationCard post={previous} base={base} label={copy.previous} direction="previous" />}
              {next && <ArticleNavigationCard post={next} base={base} label={copy.next} direction="next" />}
            </nav>
          )}
        </article>
      </main>
      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
