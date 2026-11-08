import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaSection } from '@/components/CtaSection';
import { Section } from '@/components/Section';
import { TextLink } from '@/components/Button';
import { Markdown } from '@/components/Markdown';
import { getPost, getPosts, getContent } from '@/lib/getContent';

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
  const content = getContent(lang);
  const post = getPost(slug, lang);
  const allPosts = getPosts(lang);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <GlobalNav lang={lang} />
        <Section variant="white">
          <div className="max-w-text mx-auto text-center">
            <h1 className="text-section font-600 mb-4">Post not found</h1>
            <TextLink href="/blog">Back to blog</TextLink>
          </div>
        </Section>
        <div className="chapter-dark">
          <SiteFooter lang={lang} />
        </div>
      </div>
    );
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <div className="max-w-reading mx-auto">
          <div className="mb-8">
            <TextLink href="/blog">← Back to blog</TextLink>
          </div>
          <p className="text-eyebrow text-text-tertiary mb-4">{post.category}</p>
          <h1 className="text-section md:text-section-tablet lg:text-section-mobile font-600 mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-8 text-caption text-text-tertiary mb-12">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-96 flex items-center justify-center text-white text-center p-8 mb-12">
            {post.image && <span className="text-body text-white/80">{post.image}</span>}
          </div>

          <Markdown content={post.content} />

          {(prevPost || nextPost) && (
            <nav className="mt-16 pt-8 border-t border-stroke flex justify-between gap-8">
              {prevPost ? (
                <div className="flex-1">
                  <p className="text-caption text-text-tertiary mb-4">Previous</p>
                  <TextLink href={`/blog/${prevPost.slug}`}>{prevPost.title}</TextLink>
                </div>
              ) : (
                <div className="flex-1" />
              )}
              {nextPost ? (
                <div className="flex-1 text-right">
                  <p className="text-caption text-text-tertiary mb-4">Next</p>
                  <TextLink href={`/blog/${nextPost.slug}`}>{nextPost.title}</TextLink>
                </div>
              ) : (
                <div className="flex-1" />
              )}
            </nav>
          )}
        </div>
      </Section>

      {/* Closing chapter: always dark — variant A (statement) */}
      <div className="chapter-dark">
        <CtaSection variant="statement" lang={lang} />
        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
