import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { Markdown } from '@/components/Markdown';
import { getCaseStudy, getCaseStudies } from '@/lib/getContent';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import Link from 'next/link';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudies('en').map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug, 'en');
  const allStudies = getCaseStudies('en');

  if (!study) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white">
        <GlobalNav lang="en" />
        <Section variant="white" className="py-24 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Case Study Not Found</h1>
            <p className="text-text-secondary dark:text-gray-400 mb-8">The requested case study could not be located.</p>
            <Link href="/work" className="text-sm font-semibold text-accent-fill hover:underline">
              ← Return to all case studies
            </Link>
          </div>
        </Section>
        <SiteFooter lang="en" />
      </div>
    );
  }

  const currentIndex = allStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang="en" />

      <Section reveal variant="white" className="pt-12 pb-20">
        <article className="max-w-3xl mx-auto px-4">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-accent-fill transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent-fill bg-accent-fill/[0.08] dark:bg-accent-fill/[0.15] px-3 py-1 rounded-full mb-4">
              {study.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5 leading-tight">
              {study.title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary dark:text-gray-300 leading-relaxed">
              {study.description}
            </p>
          </header>

          {/* Metadata Card */}
          <div data-reveal className="p-6 sm:p-8 rounded-2xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/[0.08] dark:border-white/[0.1] mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-xs uppercase font-medium tracking-wider text-text-tertiary dark:text-gray-400 block mb-1">
                  My Role
                </span>
                <p className="text-sm sm:text-base font-semibold text-text-primary dark:text-white">{study.role}</p>
              </div>
              <div>
                <span className="text-xs uppercase font-medium tracking-wider text-text-tertiary dark:text-gray-400 block mb-2">
                  Primary Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {study.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-white/[0.08] text-text-primary dark:text-white font-medium border border-black/[0.06] dark:border-white/[0.1]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {((study.links && study.links.length > 0) || study.github) && (
              <div className="mt-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap gap-5">
                {study.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-fill hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </a>
                ))}
                {study.github && (
                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-fill hover:underline"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Repository</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Markdown Content */}
          <div data-reveal-children className="max-w-none">
            <Markdown content={study.content} />
          </div>

          {/* Prev / Next Navigation */}
          {(prevStudy || nextStudy) && (
            <nav data-reveal-children className="mt-16 pt-8 border-t border-black/[0.08] dark:border-white/[0.1] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevStudy ? (
                <Link
                  href={`/work/${prevStudy.slug}`}
                  className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-[#F5F5F7] dark:bg-[#161617] hover:border-black/[0.2] dark:hover:border-white/[0.25] transition-colors"
                >
                  <span className="text-xs text-text-tertiary dark:text-gray-400 block mb-1">← Previous Project</span>
                  <span className="text-sm font-semibold text-text-primary dark:text-white line-clamp-1">
                    {prevStudy.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextStudy ? (
                <Link
                  href={`/work/${nextStudy.slug}`}
                  className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-[#F5F5F7] dark:bg-[#161617] hover:border-black/[0.2] dark:hover:border-white/[0.25] transition-colors text-right"
                >
                  <span className="text-xs text-text-tertiary dark:text-gray-400 block mb-1">Next Project →</span>
                  <span className="text-sm font-semibold text-text-primary dark:text-white line-clamp-1">
                    {nextStudy.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          )}
        </article>
      </Section>

      <SiteFooter cta="statement" lang="en" />
    </div>
  );
}
