'use client';

import { useEffect, useRef, useState } from 'react';
import { Language, StackedPanelData } from '@/lib/types';
import { getContent } from '@/lib/getContent';

interface StackedPanelsProps {
  lang: Language;
}

export function StackedPanels({ lang }: StackedPanelsProps) {
  const content = getContent(lang);
  const stackedPanelsData = content.home.stackedPanels;
  const panels: StackedPanelData[] = (stackedPanelsData?.panels || []) as StackedPanelData[];

  const containerRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  const [curIndex, setCurIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // IntersectionObserver to show side dots only when #at-a-glance is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSectionVisible(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    observer.observe(container);

    // Scroll & Resize handler with requestAnimationFrame throttling
    let tick = false;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function update() {
      const activePanels = panelRefs.current.filter(Boolean) as HTMLElement[];
      if (activePanels.length === 0) {
        tick = false;
        return;
      }

      const vh = window.innerHeight;
      let active = 0;

      activePanels.forEach((p, i) => {
        const nextPanel = activePanels[i + 1];
        let progress = 0;
        if (nextPanel) {
          progress = Math.min(1, Math.max(0, 1 - nextPanel.getBoundingClientRect().top / vh));
        }
        if (progress >= 0.5) {
          active = i + 1;
        }

        if (!isReducedMotion) {
          const inner = p.querySelector('.in') as HTMLElement | null;
          if (inner) {
            inner.style.transform = `scale(${1 - 0.08 * progress})`;
            inner.style.opacity = '1';
          }
        }
      });

      setCurIndex(active);
      tick = false;
    }

    function onScroll() {
      if (!tick) {
        tick = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section id="at-a-glance" ref={containerRef} className="stacked-panels-container">
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
            <div className="in">
              <p className="eb" style={{ color: `var(--sp-s${panelNum})` }}>
                {panel.label}
              </p>

              {isCover ? (
                <>
                  <h2 className="heading-ink" style={{ color: `var(--sp-t${panelNum})` }}>{panel.headline}</h2>
                  <p className="hint" style={{ color: `var(--sp-s${panelNum})` }}>
                    {panel.hint} <span aria-hidden="true">↓</span>
                  </p>
                </>
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
