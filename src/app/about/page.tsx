import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaSection } from '@/components/CtaSection';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import {
  AnimatedGradientText,
  BorderBeam,
  NumberTicker,
  ShimmerButton,
  InteractiveHoverButton,
  DotPattern,
} from '@/components/magicui';
import { ClickSpark, SpotlightCard } from '@/components/reactbits';
import { Code, Cpu, Award, BookOpen, Layers, Terminal, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Enmanuel Nunez Matias',
  description: 'Full Stack Developer & Systems Designer from Santo Domingo, DR. Background, engineering philosophy, timeline, and technical toolbox.',
};

export default function AboutPage() {
  const lang = 'en';

  const milestones = [
    {
      year: '2024–2025',
      title: 'NASA Space Apps Challenge — 2x Global Finalist',
      description:
        'Led telemetry and full-stack architecture for Mission Atabey (Mars-analog habitat) and NOVAX systems, competing against thousands of global engineering teams.',
      tag: 'NASA Award',
    },
    {
      year: '2024–2025',
      title: 'NASA HERC — Telemetry Lead with AstroBosco',
      description:
        'Engineered C++ microcontroller sensor streaming, battery management, and operator dashboard for competition Mars-analog rover in Huntsville, Alabama.',
      tag: 'Aerospace & Embedded',
    },
    {
      year: '2026',
      title: 'Google Summer of Code — omegaUp Contributor',
      description:
        'Selected contributor to the open-source competitive programming platform omegaUp, improving core evaluation pipelines and developer tooling.',
      tag: 'Open Source',
    },
    {
      year: '2025',
      title: 'CreaRD Hackathon — 4th Place Award (Floppy)',
      description:
        'Conceived and deployed a community flood-monitoring IoT system with ultrasonic sensors, real-time alert thresholds, and responsive mapping.',
      tag: 'IoT & Climate',
    },
    {
      year: 'Education',
      title: 'Software Development at ITLA',
      description:
        'Instituto Tecnológico de Las Américas (ITLA). Intensive training in data structures, systems architecture, relational databases, and enterprise software engineering.',
      tag: 'Academic',
    },
  ];

  const toolbox = [
    {
      category: 'Frontend & UI',
      skills: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Turbopack', 'HTML5 Canvas', 'Framer Motion'],
      icon: Code,
    },
    {
      category: 'Backend & Systems',
      skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'SQLite', 'Docker', 'REST & WebSockets', 'Supabase'],
      icon: Terminal,
    },
    {
      category: 'Telemetry & Hardware',
      skills: ['ESP32', 'Arduino', 'C++', 'LoRa Protocol', 'MQTT', 'Raspberry Pi', 'Serial Communication'],
      icon: Cpu,
    },
    {
      category: 'Architecture & Practices',
      skills: ['Offline-First Queues', 'Role-Based Access (RBAC)', 'Telemetry Dashboards', 'CI/CD', 'Git Workflows'],
      icon: Layers,
    },
  ];

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
        <GlobalNav lang={lang} />

        {/* Hero */}
        <Section variant="white" className="relative overflow-hidden pt-20 pb-16">
          <DotPattern className="opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <AnimatedGradientText>
                👨‍💻 Engineering Profile & Philosophy
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Designing systems that work <span className="text-accent-fill">reliably under pressure</span>.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              I am Enmanuel Núñez Matías, a Full Stack Developer & Systems Designer based in Santo Domingo, Dominican Republic.
              I bridge physical sensor telemetry with clean, high-performance web interfaces.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton href="/contact" background="#0071e3">
                Start a Conversation
              </ShimmerButton>
              <InteractiveHoverButton href="/work" text="View Case Studies" />
            </div>
          </div>
        </Section>

        {/* Core Principles */}
        <Section variant="gray">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-fill font-bold">
                Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">How I build software</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SpotlightCard className="h-full">
                <div className="w-12 h-12 rounded-2xl bg-accent-fill/10 text-accent-fill flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Systems-First Thinking</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  Before touching pixels, I map out the data models, role-based permissions, API contracts, and critical failure modes. Strong architecture prevents painful rewrites.
                </p>
              </SpotlightCard>

              <SpotlightCard className="h-full">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Offline Resilience</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  Inspired by Mars-analog missions and field sensors, my systems prioritize local queues, edge persistence, and graceful synchronization when connectivity drops.
                </p>
              </SpotlightCard>

              <SpotlightCard className="h-full">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Craft & Human Focus</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  High-pressure interfaces must be instantly comprehensible. I combine strict type safety with micro-interactions, high-contrast states, and accessible interactions.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </Section>

        {/* Milestones & Timeline */}
        <Section variant="white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-fill font-bold">
                Trajectory
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Key Milestones & Honors</h2>
            </div>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-bg-alt dark:bg-[#161617] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-accent-fill bg-accent-fill/10 px-3 py-1 rounded-full">
                        {m.year}
                      </span>
                      <span className="text-xs font-medium text-text-tertiary">
                        {m.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Technical Toolbox */}
        <Section variant="gray">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-fill font-bold">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Toolbox</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {toolbox.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Tile key={tool.category} className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent-fill/10 text-accent-fill flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">{tool.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {tool.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full text-xs font-semibold bg-bg-alt dark:bg-white/10 text-text-secondary dark:text-gray-200 border border-black/5 dark:border-white/10 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Tile>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Closing chapter: always dark — variant A (statement) for detail page */}
        <div className="chapter-dark">
          <CtaSection variant="statement" lang={lang} />
          <SiteFooter lang={lang} />
        </div>
      </div>
    </ClickSpark>
  );
}
