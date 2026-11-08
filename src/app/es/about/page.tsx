import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import type { Metadata } from 'next';
import {
  AnimatedGradientText,
  BorderBeam,
  ShimmerButton,
  InteractiveHoverButton,
  DotPattern,
} from '@/components/magicui';
import { ClickSpark, SpotlightCard } from '@/components/reactbits';
import { Code, Cpu, Layers, Terminal, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Acerca de mí | Enmanuel Núñez Matías',
  description: 'Desarrollador Full Stack & Diseñador de Sistemas de Santo Domingo, RD. Filosofía de ingeniería, trayectoria y herramientas.',
};

export default function EsAboutPage() {
  const lang = 'es';

  const milestones = [
    {
      year: '2024–2025',
      title: 'NASA Space Apps Challenge — 2x Finalista Global',
      description:
        'Lideré la telemetría y la arquitectura full stack para Misión Atabey (hábitat análogo a Marte) y sistemas NOVAX, compitiendo frente a miles de equipos de ingeniería a nivel mundial.',
      tag: 'Reconocimiento NASA',
    },
    {
      year: '2024–2025',
      title: 'NASA HERC — Líder de Telemetría con AstroBosco',
      description:
        'Desarrollé la transmisión de datos por microcontrolador en C++, gestión de energía de baterías y panel de operador para el rover análogo a Marte en Huntsville, Alabama.',
      tag: 'Aeroespacial y Embebidos',
    },
    {
      year: '2026',
      title: 'Google Summer of Code — Contribuidor en omegaUp',
      description:
        'Seleccionado como contribuidor para la plataforma de programación competitiva de código abierto omegaUp, optimizando pipelines de evaluación y herramientas de desarrollo.',
      tag: 'Código Abierto',
    },
    {
      year: '2025',
      title: 'Hackatón CreaRD — 4to Lugar (Floppy)',
      description:
        'Ideé e implementé un sistema IoT para monitoreo comunitario de inundaciones con sensores ultrasónicos, umbrales de alerta en tiempo real y mapas interactivos.',
      tag: 'IoT y Clima',
    },
    {
      year: 'Educación',
      title: 'Desarrollo de Software en ITLA',
      description:
        'Instituto Tecnológico de Las Américas (ITLA). Formación intensiva en estructuras de datos, diseño de sistemas, bases de datos relacionales y arquitectura de software.',
      tag: 'Académico',
    },
  ];

  const toolbox = [
    {
      category: 'Frontend e Interfaces',
      skills: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Turbopack', 'HTML5 Canvas', 'Framer Motion'],
      icon: Code,
    },
    {
      category: 'Backend y Sistemas',
      skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'SQLite', 'Docker', 'APIs REST y WebSockets', 'Supabase'],
      icon: Terminal,
    },
    {
      category: 'Telemetría y Hardware',
      skills: ['ESP32', 'Arduino', 'C++', 'Protocolo LoRa', 'MQTT', 'Raspberry Pi', 'Comunicación Serial'],
      icon: Cpu,
    },
    {
      category: 'Arquitectura y Prácticas',
      skills: ['Colas Offline-First', 'Permisos por Roles (RBAC)', 'Paneles de Telemetría', 'CI/CD', 'Flujos Git'],
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
                👨‍💻 Perfil de Ingeniería & Filosofía
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Diseño sistemas que funcionan <span className="text-accent-fill">de forma confiable bajo presión</span>.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Soy Enmanuel Núñez Matías, Desarrollador Full Stack y Diseñador de Sistemas radicado en Santo Domingo, República Dominicana.
              Conecto la telemetría de sensores físicos con interfaces web limpias y de alto rendimiento.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton href="/es/contact" background="#0071e3">
                Iniciar una Conversación
              </ShimmerButton>
              <InteractiveHoverButton href="/es/work" text="Ver Casos de Estudio" />
            </div>
          </div>
        </Section>

        {/* Principios Fundamentales */}
        <Section variant="gray">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-fill font-bold">
                Metodología
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Cómo construyo software</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SpotlightCard className="h-full">
                <div className="w-12 h-12 rounded-2xl bg-accent-fill/10 text-accent-fill flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Pensamiento de Sistemas Primero</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  Antes de dibujar interfaces, defino el modelo de datos, la seguridad por roles, los contratos de API y los puntos críticos de fallo. Una arquitectura sólida evita refactorizaciones costosas.
                </p>
              </SpotlightCard>

              <SpotlightCard className="h-full">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Resiliencia Fuera de Línea (Offline-First)</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  Inspirado en simulaciones espaciales y sensores en campo, mis sistemas priorizan colas locales, persistencia en el borde y sincronización automática cuando vuelve la conectividad.
                </p>
              </SpotlightCard>

              <SpotlightCard className="h-full">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Atención al Detalle y Enfoque Humano</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  Las aplicaciones en entornos críticos deben entenderse en segundos. Combino tipado estricto con micro-interacciones legibles, estados de alto contraste y accesibilidad total.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </Section>

        {/* Hitos y Trayectoria */}
        <Section variant="white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-fill font-bold">
                Trayectoria
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Hitos y Reconocimientos</h2>
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

        {/* Herramientas Técnicas */}
        <Section variant="gray">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-fill font-bold">
                Habilidades
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Caja de Herramientas</h2>
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

        {/* CTA */}
        <Section variant="white">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-accent-fill text-white p-12 text-center shadow-xl">
            <BorderBeam size={220} duration={12} colorFrom="#ffffff" colorTo="#93c5fd" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Construyamos tu próximo sistema
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto mb-8 relative z-10">
              Disponible para puestos Full Stack / Frontend (React) y proyectos de software a la medida.
            </p>
            <div className="flex justify-center relative z-10">
              <ShimmerButton href="/es/contact" background="rgba(255, 255, 255, 0.2)">
                Contáctame →
              </ShimmerButton>
            </div>
          </div>
        </Section>

        <Footer lang={lang} />
      </div>
    </ClickSpark>
  );
}
