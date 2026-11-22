import { GeneratedLead } from '@/components/GeneratedLead';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section } from '@/components/Section';
import { WorkGallery } from '@/components/WorkGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos y Arquitectura de Sistemas | Enmanuel Núñez Matías',
  description: 'Casos de estudio detallados en plataformas de telemetría, arquitecturas offline-first y aplicaciones web full stack.',
};

export default async function EsWorkPage() {
  const lang = 'es';

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
      <GlobalNav lang={lang} />

      {/* Hero */}
      <Section variant="white" className="pt-20 pb-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 data-reveal className="heading-ink intro-heading font-semibold leading-tight tracking-tight mb-6">
            Proyectos &amp; <span className="text-accent-fill">Arquitectura</span>
          </h1>
          <GeneratedLead className="max-w-2xl mx-auto text-text-secondary dark:text-gray-300">
            Sistemas en producción diseñados para entornos reales: desde plataformas de telemetría y apps offline-first hasta motores paramétricos y APIs distribuidas.
          </GeneratedLead>
        </div>
      </Section>

      <Section variant="gray">
        <WorkGallery lang={lang} />
      </Section>

      <SiteFooter cta="statement" lang={lang} />
    </div>
  );
}
