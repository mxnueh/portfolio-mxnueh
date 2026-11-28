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
              className="portfolio-button portfolio-button-primary"
            >
              Ver casos de estudio
            </Link>
            <Link
              href="/es/contact"
              className="portfolio-button"
            >
              Escríbeme
            </Link>
          </div>
        </div>
      </Section>

      <AboutMethodology lang={lang} />

      <AboutMilestones label="Trayectoria" title="Hitos y Reconocimientos" milestones={milestones} />

      <TechnicalToolbox lang={lang} />

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
