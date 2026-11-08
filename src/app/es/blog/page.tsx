import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaSection } from '@/components/CtaSection';
import { Section } from '@/components/Section';
import { CategoryBadge } from '@/components/CategoryBadge';
import { getPosts, getContent } from '@/lib/getContent';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  AnimatedGradientText,
  DotPattern,
} from '@/components/magicui';
import { ClickSpark, SpotlightCard } from '@/components/reactbits';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog y Notas de Ingeniería | Enmanuel Núñez Matías',
  description: 'Artículos sobre diseño de sistemas, telemetría, flujos con agentes de IA y aprendizajes de hackatones.',
};

export default async function EsBlogPage() {
  const lang = 'es';
  const posts = getPosts(lang);

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
        <GlobalNav lang={lang} />

        <Section variant="white" className="relative overflow-hidden pt-20 pb-12">
          <DotPattern className="opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <AnimatedGradientText>
                ✍️ Artículos y Notas Técnicas
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Escritos Técnicos & <span className="text-accent-fill">Notas de Campo</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Reflexiones sobre diseño de sistemas, telemetría para misiones análogas, herramientas de IA y resiliencia en software.
            </p>
          </div>
        </Section>

        <Section variant="gray">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/es/blog/${post.slug}`} className="group block">
                  <SpotlightCard className="h-full flex flex-col justify-between p-7">
                    <div>
                      <div className="mb-4">
                        <CategoryBadge category={post.category as 'Case study' | 'Notes' | 'Beyond code'} />
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-accent-fill transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-text-tertiary">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </time>
                      <div className="flex items-center gap-1.5 text-accent-fill font-semibold">
                        <span>{post.readingTime} min lectura</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* Closing chapter: always dark — variant A (statement) on blog page per D-C */}
        <div className="chapter-dark">
          <CtaSection variant="statement" lang={lang} />
          <SiteFooter lang={lang} />
        </div>
      </div>
    </ClickSpark>
  );
}
