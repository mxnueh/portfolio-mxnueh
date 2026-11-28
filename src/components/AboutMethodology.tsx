import { Layers, ShieldCheck, Workflow } from 'lucide-react';
import { Section } from '@/components/Section';
import type { Language } from '@/lib/types';
import './AboutMethodology.css';

const content = {
  en: { label: 'Methodology', heading: 'How I build software' },
  es: { label: 'Metodología', heading: 'Cómo construyo software' },
};

const principles = [
  {
    art: 'systems',
    icon: Layers,
    en: {
      title: 'Application Architecture',
      description: 'I define data models, API contracts, and role-based permissions so the frontend and backend follow the same business rules.',
    },
    es: {
      title: 'Arquitectura de aplicaciones',
      description: 'Defino modelos de datos, contratos de API y permisos por rol para que el frontend y el backend sigan las mismas reglas de negocio.',
    },
  },
  {
    art: 'workflows',
    icon: Workflow,
    en: {
      title: 'End-to-End Workflows',
      description: 'In the GFB real estate CRM, I connected a sales pipeline to backend rules that email clients when matching properties are listed.',
    },
    es: {
      title: 'Flujos de trabajo de principio a fin',
      description: 'En el CRM de GFB Inmobiliaria, conecté un tablero de ventas con avisos automáticos por correo cuando se publicaban propiedades de interés.',
    },
  },
  {
    art: 'accessibility',
    icon: ShieldCheck,
    en: {
      title: 'Accessible Interfaces',
      description: 'I build interfaces that work across screen sizes, with keyboard navigation, visible focus states, and readable contrast.',
    },
    es: {
      title: 'Interfaces accesibles',
      description: 'Construyo interfaces que se adaptan a distintos tamaños de pantalla, con navegación por teclado, indicadores de foco visibles y contraste legible.',
    },
  },
];

export function AboutMethodology({ lang }: { lang: Language }) {
  const { label, heading } = content[lang];

  return (
    <Section reveal className="about-methodology">
      <div className="mx-auto max-w-6xl">
        <header data-reveal className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">{label}</p>
          <h2 id="about-methodology-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
            {heading}
          </h2>
        </header>

        <ul className="grid gap-4 md:grid-cols-3 lg:gap-6" role="list" aria-labelledby="about-methodology-title">
          {principles.map((principle) => {
            const { art, icon: Icon, [lang]: { title, description } } = principle;

            return (
              <li key={art} data-reveal className="methodology-card">
                <div className={`methodology-art methodology-art--${art}`} aria-hidden="true">
                  <span className="methodology-art-back" />
                  <span className="methodology-art-middle" />
                  <span className="methodology-art-face"><Icon size={48} strokeWidth={1.8} /></span>
                </div>
                <div className="methodology-card-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
