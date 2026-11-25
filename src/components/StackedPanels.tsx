'use client';

import { useEffect, useRef, useState } from 'react';
import type { Language, StackedPanelData } from '@/lib/types';
import { Meteors } from '@/components/magicui/Meteors';
import { Ripple } from '@/components/magicui/Ripple';

interface StackedPanelsProps {
  lang: Language;
  panels: StackedPanelData[];
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
        const panelNum = idx + 1;

        return (
          <section
            key={panel.id}
            id={panel.id}
            ref={(el) => {
              panelRefs.current[idx] = el;
            }}
            className={`stacked-panel ${isCover ? 'cover' : ''}`}
            style={{
              backgroundColor: `var(--sp-bg${panelNum})`,
              color: `var(--sp-t${panelNum})`,
              zIndex: panelNum,
            }}
            aria-label={panel.navLabel}
          >
            {panel.id === 'panel-3' && (
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 mask-[linear-gradient(120deg,transparent,black_58%)] motion-reduce:hidden">
                <Meteors number={24} />
              </div>
            )}
            {panel.id === 'panel-4' && (
              <Ripple
                className="text-white [--ripple-x:15%] max-md:[--ripple-x:22%]"
                mainCircleSize={260}
                mainCircleOpacity={0.33}
                numCircles={10}
              />
            )}
            <div className="in">
              <p className="eb" style={{ color: `var(--sp-s${panelNum})` }}>
                {panel.label}
              </p>

              {isCover ? (
                <h2 className="heading-ink" style={{ color: `var(--sp-t${panelNum})` }}>{panel.headline}</h2>
              ) : (
                <div className="row">
                  <h3
                    className={`big ${panel.value && (panel.value.length > 3 || isNaN(Number(panel.value))) ? 'w' : ''}`}
                    style={idx === 1 ? { color: 'var(--sp-val2)' } : undefined}
                  >
                    {panel.value}
                  </h3>
                  <p className="d">{panel.description}</p>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </section>
  );
}
