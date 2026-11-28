'use client';

import { useEffect, useRef, useState } from 'react';
import type { Language, StackedPanelData } from '@/lib/types';

interface StackedPanelsProps {
  lang: Language;
  panels: StackedPanelData[];
}

const panelVariants: Record<string, string> = {
  'panel-2': 'stacked-panel--hackathons',
  'panel-3': 'stacked-panel--open-source',
  'panel-4': 'stacked-panel--languages',
  'panel-5': 'stacked-panel--studies',
};

function highlight(text: string | undefined, phrase: string, className: string) {
  const index = text?.indexOf(phrase) ?? -1;
  if (!text || index < 0) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className={className}>{phrase}</span>
      {text.slice(index + phrase.length)}
    </>
  );
}

export function StackedPanels({ lang, panels }: StackedPanelsProps) {
  const containerRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  const [curIndex, setCurIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activePanels = panelRefs.current.flatMap(panel =>
      panel ? [{ panel, inner: panel.querySelector<HTMLElement>('.in') }] : [],
    );
    let frame = 0;
    let visible = false;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function update() {
      frame = 0;
      const viewportHeight = window.innerHeight;
      // Read positions before applying any transforms.
      const progress = activePanels.map((_, index) => {
        const nextPanel = activePanels[index + 1]?.panel;
        return nextPanel
          ? Math.min(1, Math.max(0, 1 - nextPanel.getBoundingClientRect().top / viewportHeight))
          : 0;
      });
      let active = 0;

      progress.forEach((amount, index) => {
        if (amount >= 0.5) active = index + 1;
        const { inner } = activePanels[index];
        if (!isReducedMotion && inner) {
          inner.style.transform = `scale(${1 - 0.08 * amount})`;
        }
      });

      setCurIndex(active);
    }

    function scheduleUpdate() {
      if (visible && !frame) frame = requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      setIsSectionVisible(visible);
      if (visible) {
        scheduleUpdate();
      } else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(container);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [panels]);

  return (
    <section id="at-a-glance" ref={containerRef} className="stacked-panels-container" data-visible={isSectionVisible}>
      {/* Side Navigation Dots (5 items) */}
      <nav
        className={`stacked-panels-nav ${isSectionVisible ? '' : 'hidden-nav'}`}
        aria-label={lang === 'es' ? 'Secciones' : 'Sections'}
      >
        {panels.map((panel, idx) => {
          const isActive = curIndex === idx;
          return (
            <a
              key={panel.id}
              href={`#${panel.id}`}
              aria-label={panel.navLabel}
              {...(isActive ? { 'aria-current': 'true' as const } : {})}
            />
          );
        })}
      </nav>

      {/* 5 Stacked Panels */}
      {panels.map((panel, idx) => {
        const isCover = idx === 0;
        const isHackathons = panel.id === 'panel-2';
        const isOpenSource = panel.id === 'panel-3';
        const isLanguages = panel.id === 'panel-4';
        const isStudies = panel.id === 'panel-5';
        const panelNum = idx + 1;

        return (
          <section
            key={panel.id}
            id={panel.id}
            ref={(el) => {
              panelRefs.current[idx] = el;
            }}
            className={`stacked-panel ${isCover ? 'cover' : panelVariants[panel.id] ?? ''}`}
            style={{
              backgroundColor: `var(--sp-bg${panelNum})`,
              color: `var(--sp-t${panelNum})`,
              zIndex: panelNum,
            }}
            aria-label={panel.navLabel}
          >
            <div className="in">
              <p className="eb" style={{ color: `var(--sp-s${panelNum})` }}>
                {panel.label}
              </p>

              {isCover ? (
                <h2 className="heading-ink" style={{ color: `var(--sp-t${panelNum})` }}>{panel.headline}</h2>
              ) : isLanguages || isStudies ? (
                <div className="row">
                  <p className={isLanguages ? 'big w panel-gradient-text' : 'big w'}>{panel.value}</p>
                  <div>
                    <h3 className="d">
                      {isLanguages
                        ? highlight(panel.headline, lang === 'es' ? 'Nivel' : 'level.', 'languages-accent')
                        : highlight(panel.description, lang === 'es' ? 'Desarrollo de Software' : 'Software Development', 'studies-accent')}
                    </h3>
                    {isLanguages && <p className="languages-subtitle">{panel.description}</p>}
                  </div>
                </div>
              ) : (
                <div className="row">
                  <h3
                    className={`big${panel.value && (panel.value.length > 3 || isNaN(Number(panel.value))) ? ' w' : ''}`}
                  >
                    {isOpenSource ? highlight(panel.value, '2026', 'panel-gradient-text open-source-year') : panel.value}
                  </h3>
                  <p className="d">
                    {isOpenSource
                      ? highlight(panel.description, 'Google Summer of Code', 'panel-gradient-text')
                      : isHackathons ? highlight(panel.description, 'NASA', 'hackathons-accent') : panel.description}
                  </p>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </section>
  );
}
