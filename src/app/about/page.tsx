import { GeneratedLead } from '@/components/GeneratedLead';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';
import { Code, Cpu, Layers, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';
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

  const toolbox = [
    {
      category: 'Frontend & Interfaces',
      skills: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Turbopack', 'HTML5 Canvas', 'Accessible UI'],
      icon: Code,
    },
    {
      category: 'Backend & Systems',
      skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'SQLite', 'Docker', 'WebSockets', 'REST APIs'],
      icon: Terminal,
    },
    {
      category: 'Telemetry & Embedded',
      skills: ['ESP32', 'Arduino', 'C++', 'MQTT', 'LoRa Protocol', 'Raspberry Pi', 'Serial Protocols'],
      icon: Cpu,
    },
    {
      category: 'Architecture & Practices',
      skills: ['Offline-First Sync', 'Role-Based Access (RBAC)', 'Telemetry Dashboards', 'CI/CD Pipelines', 'Clean Code'],
      icon: Layers,
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

      {/* Methodology: Clean Apple Cards, No AI pastel/cursor slop */}
      <Section reveal variant="gray">
        <div className="max-w-6xl mx-auto px-4">
          <div data-reveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary dark:text-gray-400 block mb-2">
              Methodology
            </span>
            <h2 className="heading-ink text-3xl md:text-4xl font-semibold tracking-tight">How I build software</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div data-reveal className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-8 transition-colors hover:border-black/[0.18] dark:hover:border-white/[0.22]">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-text-primary dark:text-white flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 text-accent-fill" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">1. Systems-First Thinking</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed font-normal">
                Before writing UI components, I structure the data models, role-based access, API contracts, and edge failure modes. Clear architecture eliminates technical debt.
              </p>
            </div>

            <div data-reveal className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-8 transition-colors hover:border-black/[0.18] dark:hover:border-white/[0.22]">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-text-primary dark:text-white flex items-center justify-center mb-6">
                <Cpu className="w-5 h-5 text-accent-fill" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">2. Offline Resilience</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed font-normal">
                Inspired by operational telemetry systems, my applications handle latency gracefully with optimistic updates, local caching, and reliable state recovery.
              </p>
            </div>

            <div data-reveal className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-8 transition-colors hover:border-black/[0.18] dark:hover:border-white/[0.22]">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-text-primary dark:text-white flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5 text-accent-fill" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">3. Craft &amp; Accessibility</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed font-normal">
                Critical interfaces must be immediately comprehensible. I combine strict TypeScript contracts with keyboard navigation, visible focus states, and responsive polish.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Trajectory: Refined Minimal Apple Timeline */}
      <Section reveal variant="white">
        <div className="max-w-4xl mx-auto px-4">
          <div data-reveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary dark:text-gray-400 block mb-2">
              Trajectory
            </span>
            <h2 className="heading-ink text-3xl md:text-4xl font-semibold tracking-tight">Key Milestones &amp; Honors</h2>
          </div>

          <div className="divide-y divide-black/[0.06] dark:divide-white/[0.08] border-y border-black/[0.06] dark:border-white/[0.08]">
            {milestones.map((m, idx) => (
              <div data-reveal key={idx} className="py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-xs font-mono font-semibold text-accent-fill">
                    {m.period}
                  </span>
                  <span className="block text-xs text-text-tertiary dark:text-gray-500 mt-0.5">
                    {m.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-2 tracking-tight">
                    {m.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed font-normal">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Capabilities: Minimal Apple Grid */}
      <Section reveal variant="gray">
        <div className="max-w-5xl mx-auto px-4">
          <div data-reveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary dark:text-gray-400 block mb-2">
              Capabilities
            </span>
            <h2 className="heading-ink text-3xl md:text-4xl font-semibold tracking-tight">Technical Toolbox</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolbox.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.category}
                  data-reveal
                  className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-7 transition-colors hover:border-black/[0.18] dark:hover:border-white/[0.22]"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-black/[0.04] dark:bg-white/[0.08] text-accent-fill flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight">{tool.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tool.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-black/[0.03] dark:bg-white/[0.06] text-text-secondary dark:text-gray-300 border border-black/[0.04] dark:border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
