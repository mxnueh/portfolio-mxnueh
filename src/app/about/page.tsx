import { GeneratedLead } from '@/components/GeneratedLead';
import { AboutMethodology } from '@/components/AboutMethodology';
import { AboutMilestones } from '@/components/AboutMilestones';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { TechnicalToolbox } from '@/components/TechnicalToolbox';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Enmanuel Nunez Matias',
  description: 'Full Stack Developer & Systems Designer. Engineering philosophy, trajectory, and technical capabilities.',
};

export default function AboutPage() {
  const lang = 'en';

  const milestones = [
    {
      period: '2024–2025',
      title: 'NASA Space Apps Challenge: 2x Global Finalist',
      description:
        'Architected telemetry engines and real-time dashboards for Mars-analog habitats and planetary systems, competing against thousands of global engineering teams.',
      tag: 'NASA Finalist',
    },
    {
      period: '2024–2025',
      title: 'NASA HERC: Telemetry Lead with AstroBosco',
      description:
        'Engineered C++ microcontroller telemetry streaming, power management, and operator interfaces for competition Mars rover in Huntsville, Alabama.',
      tag: 'Aerospace Systems',
    },
    {
      period: '2026',
      title: 'Google Summer of Code: omegaUp Contributor',
      description:
        'Selected contributor to the open-source competitive programming platform omegaUp, improving core code evaluation pipelines and developer workflows.',
      tag: 'Open Source',
    },
    {
      period: '2025',
      title: 'CreaRD Hackathon: 4th Place Award (Floppy)',
      description:
        'Designed and deployed an ultrasonic community flood-monitoring IoT system with real-time alert thresholds and responsive mapping interfaces.',
      tag: 'IoT Telemetry',
    },
    {
      period: 'Education',
      title: 'Software Development at ITLA',
      description:
        'Instituto Tecnológico de Las Américas. Rigorous focus on data structures, distributed architectures, database engines, and software engineering.',
      tag: 'Academic',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section reveal variant="white" className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 data-reveal className="heading-ink intro-heading font-semibold leading-tight tracking-tight mb-8">
            Designing systems that work <span className="text-accent-fill">reliably under pressure</span>.
          </h1>
          <GeneratedLead className="max-w-2xl mb-10 mx-auto text-text-secondary dark:text-gray-300">
            I am Enmanuel Núñez Matías, a Full Stack Developer &amp; Systems Designer.
            I build resilient architectures, high-performance web applications, and intuitive interfaces with clean, maintainable code.
          </GeneratedLead>
          <div data-reveal-children className="about-actions flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work"
              className="portfolio-button portfolio-button-primary"
            >
              View case studies
            </Link>
            <Link
              href="/contact"
              className="portfolio-button"
            >
              Email me
            </Link>
          </div>
        </div>
      </Section>

      <AboutMethodology lang={lang} />

      <AboutMilestones label="Trajectory" title="Key Milestones & Honors" milestones={milestones} />

      <TechnicalToolbox lang={lang} />

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
