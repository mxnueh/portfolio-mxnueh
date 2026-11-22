import { GeneratedLead } from '@/components/GeneratedLead';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';
import { Code, Cpu, Layers, Terminal, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre mí | Enmanuel Núñez Matías',
  description: 'Desarrollador Full Stack & Diseñador de Sistemas. Filosofía de ingeniería, trayectoria y capacidades técnicas.',
};

export default function EsAboutPage() {
  const lang = 'es';

  const milestones = [
    {
      period: '2024–2025',
      title: 'NASA Space Apps Challenge: 2x Finalista Global',
      description:
        'Lideré la telemetría y la arquitectura full stack para Misión Atabey (hábitat análogo a Marte) y sistemas NOVAX, compitiendo frente a miles de equipos de ingeniería a nivel mundial.',
      tag: 'Finalista NASA',
    },
    {
      period: '2024–2025',
      title: 'NASA HERC: Líder de Telemetría con AstroBosco',
      description:
        'Desarrollé la transmisión de datos por microcontrolador en C++, gestión de energía de baterías y panel de operador para el rover análogo a Marte en Huntsville, Alabama.',
      tag: 'Sistemas Aeroespaciales',
    },
    {
      period: '2026',
      title: 'Google Summer of Code: Contribuidor en omegaUp',
      description:
        'Seleccionado como contribuidor para la plataforma de programación competitiva de código abierto omegaUp, optimizando pipelines de evaluación y herramientas de desarrollo.',
      tag: 'Código Abierto',
    },
    {
      period: '2025',
      title: 'Hackatón CreaRD: 4to Lugar (Floppy)',
      description:
        'Ideé e implementé un sistema IoT para monitoreo comunitario de inundaciones con sensores ultrasónicos, umbrales de alerta en tiempo real y mapas interactivos.',
      tag: 'Telemetría IoT',
    },
    {
      period: 'Educación',
      title: 'Desarrollo de Software en ITLA',
      description:
        'Instituto Tecnológico de Las Américas (ITLA). Formación intensiva en estructuras de datos, diseño de sistemas, bases de datos relacionales y arquitectura de software.',
      tag: 'Académico',
    },
  ];

  const toolbox = [
    {
      category: 'Frontend e Interfaces',
      skills: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Turbopack', 'HTML5 Canvas', 'UI Accesible'],
      icon: Code,
    },
    {
      category: 'Backend y Sistemas',
      skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'SQLite', 'Docker', 'WebSockets', 'APIs REST'],
      icon: Terminal,
    },
    {
      category: 'Telemetría y Embebidos',
      skills: ['ESP32', 'Arduino', 'C++', 'MQTT', 'Protocolo LoRa', 'Raspberry Pi', 'Protocolos Serie'],
      icon: Cpu,
    },
    {
      category: 'Arquitectura y Prácticas',
      skills: ['Sincronización Offline-First', 'Acceso por Roles (RBAC)', 'Paneles de Telemetría', 'Pipelines CI/CD', 'Código Limpio'],
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
            Diseñando sistemas que funcionan <span className="text-accent-fill">bajo presión real</span>.
          </h1>
          <GeneratedLead className="max-w-2xl mb-10 mx-auto text-text-secondary dark:text-gray-300">
            Soy Enmanuel Núñez Matías, Desarrollador Full Stack y Diseñador de Sistemas.
            Construyo arquitecturas resilientes, aplicaciones web de alto rendimiento e interfaces intuitivas con código limpio y mantenible.
          </GeneratedLead>
          <div data-reveal-children className="about-actions flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/es/work"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold bg-accent-fill text-white hover:bg-accent-hover transition-colors shadow-sm"
              style={{ minHeight: '44px' }}
            >
              Ver casos de estudio
            </Link>
            <a
              href="mailto:enmanuelnunezmatias@gmail.com"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-text-primary dark:text-white border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-colors"
              style={{ minHeight: '44px' }}
            >
              Escríbeme
            </a>
          </div>
        </div>
      </Section>

      {/* Metodología: Clean Apple Cards, sin artefactos IA */}
      <Section reveal variant="gray">
        <div className="max-w-6xl mx-auto px-4">
          <div data-reveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary dark:text-gray-400 block mb-2">
              Metodología
            </span>
            <h2 className="heading-ink text-3xl md:text-4xl font-semibold tracking-tight">Cómo construyo software</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div data-reveal className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-8 transition-colors hover:border-black/[0.18] dark:hover:border-white/[0.22]">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-text-primary dark:text-white flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 text-accent-fill" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">1. Pensamiento en Sistemas</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed font-normal">
                Antes de programar componentes UI, defino modelos de datos, permisos basados en roles, contratos de API y puntos críticos de falla. Una arquitectura sólida evita reescrituras costosas.
              </p>
            </div>

            <div data-reveal className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-8 transition-colors hover:border-black/[0.18] dark:hover:border-white/[0.22]">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-text-primary dark:text-white flex items-center justify-center mb-6">
                <Cpu className="w-5 h-5 text-accent-fill" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">2. Resiliencia Offline</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed font-normal">
                Inspirado en sistemas de telemetría de campo, mis aplicaciones toleran caídas de red mediante colas locales, persistencia en el dispositivo y sincronización fluida al reconectar.
              </p>
            </div>

            <div data-reveal className="rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] p-8 transition-colors hover:border-black/[0.18] dark:hover:border-white/[0.22]">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-text-primary dark:text-white flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5 text-accent-fill" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">3. Criterio y Accesibilidad</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed font-normal">
                Las interfaces en operaciones críticas deben ser comprensibles al instante. Combino contratos estrictos en TypeScript con navegación por teclado, alto contraste y micro-interacciones.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Trayectoria: Línea temporal minimalista Apple */}
      <Section reveal variant="white">
        <div className="max-w-4xl mx-auto px-4">
          <div data-reveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary dark:text-gray-400 block mb-2">
              Trayectoria
            </span>
            <h2 className="heading-ink text-3xl md:text-4xl font-semibold tracking-tight">Hitos y Reconocimientos</h2>
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

      {/* Capacidades Técnicas: Grid minimalista Apple */}
      <Section reveal variant="gray">
        <div className="max-w-5xl mx-auto px-4">
          <div data-reveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary dark:text-gray-400 block mb-2">
              Capacidades
            </span>
            <h2 className="heading-ink text-3xl md:text-4xl font-semibold tracking-tight">Caja de Herramientas</h2>
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
