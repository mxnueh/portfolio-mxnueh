import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { getPosts } from '@/lib/getContent';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Enmanuel Nunez Matias',
  description: 'Writing about systems design, development practices, and lessons from real projects.',
};

export default async function BlogPage() {
  const lang = 'en';
  const posts = getPosts(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Blog</h1>
          <p className="text-xl text-text-secondary mb-12 max-w-3xl">
            Notes on building systems, working with AI tools, and lessons from hackathons and open source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-bg-alt dark:bg-dark-bg-card rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                  <p className="text-sm uppercase tracking-wider text-accent-fill mb-3">{post.category}</p>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-accent-fill transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-text-tertiary">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
                    <span>{post.readingTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
