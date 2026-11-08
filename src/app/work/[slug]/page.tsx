import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { TextLink } from '@/components/Button';
import { Markdown } from '@/components/Markdown';
import { getCaseStudy, getCaseStudies } from '@/lib/getContent';
import { ClickSpark } from '@/components/reactbits';
import { BorderBeam, ShimmerButton } from '@/components/magicui';
import { ArrowLeft, ArrowRight, ExternalLink, Layers, UserCheck } from 'lucide-react';
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
      <div className="flex flex-col min-h-screen">
        <GlobalNav lang="en" />
        <Section variant="white">
          <div className="max-w-reading mx-auto text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-text-secondary mb-8">The requested case study could not be located.</p>
            <Link href="/work" className="text-accent-fill font-semibold hover:underline">
              ← Return to all case studies
            </Link>
          </div>
        </Section>
        <Footer lang="en" />
      </div>
    );
  }

  const currentIndex = allStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null;

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
        <GlobalNav lang="en" />

        <Section variant="white" className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back link */}
            <div className="mb-8">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary dark:text-gray-400 hover:text-accent-fill transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all case studies</span>
              </Link>
            </div>

            {/* Header Header */}
            <div className="mb-10">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-accent-fill bg-accent-fill/10 px-3 py-1 rounded-full mb-4">
                {study.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {study.title}
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-300 leading-relaxed">
                {study.description}
              </p>
            </div>

            {/* Metadata Card */}
            <div className="relative p-6 md:p-8 rounded-3xl bg-bg-alt dark:bg-[#161617] border border-black/5 dark:border-white/10 mb-12 shadow-sm">
              <BorderBeam size={160} duration={12} colorFrom="#0071e3" colorTo="#38bdf8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <span className="text-xs font-mono uppercase text-text-tertiary block mb-1">
                    My Role
                  </span>
                  <p className="text-base font-semibold">{study.role}</p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-text-tertiary block mb-1">
                    Primary Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {study.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-white/10 text-text-primary dark:text-white font-medium border border-black/5 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {study.links && study.links.length > 0 && (
                <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-4 relative z-10">
                  {study.links.map((link) => (
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
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent-fill prose-pre:bg-[#161617]">
              <Markdown content={study.content} />
            </div>

            {/* Navigation to Prev/Next */}
            {(prevStudy || nextStudy) && (
              <nav className="mt-20 pt-10 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between gap-6">
                {prevStudy ? (
                  <Link
                    href={`/work/${prevStudy.slug}`}
                    className="flex-1 p-6 rounded-2xl border border-black/5 dark:border-white/10 hover:border-accent-fill transition-colors bg-bg-alt dark:bg-[#161617]"
                  >
                    <span className="text-xs text-text-tertiary block mb-1">← Previous Case Study</span>
                    <strong className="text-base text-text-primary dark:text-white font-semibold">
                      {prevStudy.title}
                    </strong>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {nextStudy ? (
                  <Link
                    href={`/work/${nextStudy.slug}`}
                    className="flex-1 p-6 rounded-2xl border border-black/5 dark:border-white/10 hover:border-accent-fill transition-colors bg-bg-alt dark:bg-[#161617] text-right"
                  >
                    <span className="text-xs text-text-tertiary block mb-1">Next Case Study →</span>
                    <strong className="text-base text-text-primary dark:text-white font-semibold">
                      {nextStudy.title}
                    </strong>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </nav>
            )}
          </div>
        </Section>

        <Footer lang="en" />
      </div>
    </ClickSpark>
  );
}
