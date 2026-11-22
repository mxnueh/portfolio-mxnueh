import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { CategoryBadge } from '@/components/CategoryBadge';
import { Markdown } from '@/components/Markdown';
import { getPost, getPosts, getContent } from '@/lib/getContent';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPosts('en');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const lang = 'en';
  const post = getPost(slug, lang);
  const allPosts = getPosts(lang);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white">
        <GlobalNav lang={lang} />
        <Section variant="white" className="py-24 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Post not found</h1>
            <p className="text-text-secondary dark:text-gray-400 mb-8">The requested article could not be located.</p>
            <Link href="/blog" className="text-sm font-semibold text-accent-fill hover:underline">
              ← Back to all posts
            </Link>
          </div>
        </Section>
        <SiteFooter lang={lang} />
      </div>
    );
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      <Section reveal variant="white" className="pt-12 pb-20">
        <article className="max-w-3xl mx-auto px-4">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-accent-fill transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all posts</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="mb-4">
              <CategoryBadge category={post.category as 'Case study' | 'Notes' | 'Beyond code'} />
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-text-tertiary dark:text-gray-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div data-reveal-children className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent-fill prose-pre:bg-[#161617] prose-pre:border prose-pre:border-white/10 leading-relaxed font-normal">
            <Markdown content={post.content} />
          </div>

          {/* Prev / Next Navigation */}
          {(prevPost || nextPost) && (
            <nav data-reveal-children className="mt-16 pt-8 border-t border-black/[0.06] dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-5 rounded-xl border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.18] dark:hover:border-white/[0.22] transition-colors"
                >
                  <span className="text-xs text-text-tertiary dark:text-gray-400 block mb-1">← Previous article</span>
                  <span className="text-sm font-semibold text-text-primary dark:text-white line-clamp-1">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-5 rounded-xl border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.18] dark:hover:border-white/[0.22] transition-colors text-right"
                >
                  <span className="text-xs text-text-tertiary dark:text-gray-400 block mb-1">Next article →</span>
                  <span className="text-sm font-semibold text-text-primary dark:text-white line-clamp-1">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          )}
        </article>
      </Section>

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
