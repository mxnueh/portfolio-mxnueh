import { Section } from '@/components/Section';
import type { Language } from '@/lib/types';
import './ProjectCoverCard.css';
import styles from './TechnicalToolbox.module.css';

const headings = {
  en: { label: 'Capabilities', title: 'Technical Toolbox' },
  es: { label: 'Capacidades', title: 'Caja de Herramientas' },
};

const grainTexture = '/img/noise.png';

// Average colors sampled down the supplied gradient, at 10% intervals.
const gradientColors = [
  '#041b64', '#08258f', '#0d32bc', '#174bf0', '#2868fc', '#3a84fc',
  '#4c97fd', '#5eaafe', '#74bcff', '#98cffe', '#bae0fd',
];

const areas = [
  {
    id: 'frontend',
    art: (
      <path
        d="M61 44h41q26 0 44 22l59 73q18 22 44 22h20 M30 130h42q26 0 44 22l59 73q18 22 44 22h50 M60 248h12q26 0 44 22l60 74"
        fill="none"
        strokeWidth="44"
        strokeLinecap="round"
      />
    ),
    en: {
      tag: 'Web development',
      title: 'Frontend & Interfaces',
      description: 'I build fast, accessible web interfaces that work across devices.',
    },
    es: {
      tag: 'Desarrollo web',
      title: 'Frontend e Interfaces',
      description: 'Construyo interfaces web rápidas y accesibles que se adaptan a distintos dispositivos.',
    },
  },
  {
    id: 'backend',
    art: (
      <>
        <path d="M100 0h116v116A116 116 0 0 1 100 0Z" />
        <circle cx="68" cy="155" r="52" />
        <path d="M216 137v150a75 75 0 0 1 0-150Z" />
        <path d="M3 328a65 65 0 0 1 130 0Z" />
      </>
    ),
    en: {
      tag: 'Data & APIs',
      title: 'Backend & Systems',
      description: 'I build APIs and data services that support web apps and real-time updates.',
    },
    es: {
      tag: 'Datos y APIs',
      title: 'Backend y Sistemas',
      description: 'Desarrollo APIs y servicios de datos para aplicaciones web con actualizaciones en tiempo real.',
    },
  },
  {
    id: 'telemetry',
    art: (
      <>
        <circle cx="168" cy="164" r="134" fill="none" strokeWidth="31" />
        <circle cx="168" cy="164" r="79" fill="none" strokeWidth="28" />
        <circle cx="168" cy="164" r="34" />
      </>
    ),
    en: {
      tag: 'Hardware',
      title: 'Telemetry & Embedded',
      description: 'I connect sensors and microcontrollers to systems that collect and transmit live readings.',
    },
    es: {
      tag: 'Hardware',
      title: 'Telemetría y Embebidos',
      description: 'Conecto sensores y microcontroladores a sistemas que recogen y transmiten datos en tiempo real.',
    },
  },
  {
    id: 'architecture',
    art: (
      <>
        <path d="M104 24h124v66h-70a18 18 0 0 0-18 18v21a18 18 0 0 1-18 18H44a18 18 0 0 1-18-18V91a18 18 0 0 1 18-18h24a18 18 0 0 0 18-18V42a18 18 0 0 1 18-18Z" />
        <path d="M26 174h78a18 18 0 0 1 18 18v19a18 18 0 0 0 18 18h88v75h-82a18 18 0 0 1-18-18v-9a18 18 0 0 0-18-18H26a18 18 0 0 1-18-18v-49a18 18 0 0 1 18-18Z" />
      </>
    ),
    en: {
      tag: 'System design',
      title: 'Architecture & Practices',
      description: 'I design for offline use, define access by role, and automate builds and deployments.',
    },
    es: {
      tag: 'Diseño de sistemas',
      title: 'Arquitectura y Prácticas',
      description: 'Diseño para el uso sin conexión, defino permisos por rol y automatizo la compilación y el despliegue.',
    },
  },
];

export function TechnicalToolbox({ lang }: { lang: Language }) {
  const heading = headings[lang];

  return (
    <Section reveal variant="gray">
      <div className="mx-auto max-w-6xl">
        <header data-reveal className="mb-10 text-center md:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">{heading.label}</p>
          <h2 id="technical-toolbox-title" className="heading-ink text-3xl font-semibold tracking-tight sm:text-4xl xl:text-5xl">
            {heading.title}
          </h2>
        </header>

        <ul className={styles.grid} role="list" aria-labelledby="technical-toolbox-title">
          {areas.map(({ id, art, [lang]: { tag, title, description } }) => {
            const illustrationId = `toolbox-${lang}-${id}`;
            const gradientId = `${illustrationId}-gradient`;
            const textureId = `${illustrationId}-texture`;
            const maskId = `${illustrationId}-mask`;

            return (
              <li key={id} data-reveal className={styles.card}>
                <span className={styles.tag}>{tag}</span>
                <div className={styles.copy}>
                  <h3 className="project-cover-card-title">{title}</h3>
                  <p>{description}</p>
                </div>
                <svg className={styles.art} viewBox="0 0 216 328" preserveAspectRatio="xMaxYMid meet" aria-hidden="true" focusable="false">
                  <defs>
                    <g id={illustrationId}>{art}</g>
                    <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="328">
                      {gradientColors.map((color, index) => (
                        <stop key={color} offset={`${index * 10}%`} stopColor={color} />
                      ))}
                    </linearGradient>
                    <pattern id={textureId} patternUnits="userSpaceOnUse" width="128" height="128">
                      <image href={grainTexture} width="128" height="128" />
                    </pattern>
                    <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="216" height="328">
                      <use href={`#${illustrationId}`} fill="white" stroke="white" strokeWidth="0" />
                    </mask>
                  </defs>
                  <use href={`#${illustrationId}`} fill={`url(#${gradientId})`} stroke={`url(#${gradientId})`} strokeWidth="0" />
                  <rect
                    className={styles.texture}
                    width="216"
                    height="328"
                    fill={`url(#${textureId})`}
                    mask={`url(#${maskId})`}
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
