import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { TextLink } from '@/components/Button';
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
        <Footer lang={lang} />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <div className="max-w-reading mx-auto">
          <p className="text-eyebrow text-text-tertiary mb-4">{post.category}</p>
          <h1 className="text-section md:text-section-tablet lg:text-section-mobile font-600 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-caption text-text-tertiary mb-12">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-96 flex items-center justify-center text-white text-center p-8 mb-12">
            <span className="text-body text-white/80">{post.image}</span>
          </div>

          <div className="prose dark:prose-invert text-body text-text-secondary leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
