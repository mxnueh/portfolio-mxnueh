import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaSection } from '@/components/CtaSection';
import { Section } from '@/components/Section';
import { CategoryBadge } from '@/components/CategoryBadge';
import { getPosts } from '@/lib/getContent';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Engineering Notes | Enmanuel Nunez Matias',
  description: 'Technical notes on distributed systems, telemetry architectures, and software engineering.',
};

export default async function BlogPage() {
  const lang = 'en';
  const posts = getPosts(lang);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section variant="white" className="pt-20 pb-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400 bg-black/[0.04] dark:bg-white/[0.08] px-4 py-1.5 rounded-full mb-6">
            Technical Writing &amp; Field Notes
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
            Engineering Notes &amp; <span className="text-accent-fill">Field Reflections</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Deep dives on systems design, reliable offline architectures, and practical lessons from hackathons and open-source contributions.
          </p>
        </div>
      </Section>

      {/* Posts Grid — Clean Apple Design Cards */}
      <Section variant="gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-7 transition-colors hover:border-black/[0.2] dark:hover:border-white/[0.25] h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <CategoryBadge category={post.category as 'Case study' | 'Notes' | 'Beyond code'} />
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-accent-fill transition-colors line-clamp-2 leading-snug tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-sm text-text-secondary dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs text-text-tertiary dark:text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                    <div className="flex items-center gap-1.5 text-accent-fill font-medium">
                      <span>{post.readingTime} min read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing chapter: always dark — variant A */}
      <div className="chapter-dark">
        <CtaSection variant="statement" lang={lang} />
        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
