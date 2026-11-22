'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { type KeyboardEvent, type ReactNode, type UIEvent, useId, useRef, useState } from 'react';
import type { Language } from '@/lib/types';

interface WorkGalleryCarouselProps {
  lang: Language;
  children: ReactNode[];
}

export function WorkGalleryCarousel({ lang, children }: WorkGalleryCarouselProps) {
  const galleryId = useId();
  const galleryRef = useRef<HTMLUListElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const projectCount = children.length;
  const isSpanish = lang === 'es';

  function showProject(index: number) {
    const gallery = galleryRef.current;
    const card = gallery?.children.item(index);
    if (gallery && card instanceof HTMLElement) {
      gallery.scrollTo({ left: card.offsetLeft });
    }
  }

  function handleScroll({ currentTarget: gallery }: UIEvent<HTMLUListElement>) {
    const secondCard = gallery.children.item(1);
    if (!(secondCard instanceof HTMLElement) || !secondCard.offsetLeft) return;

    const index = Math.round(gallery.scrollLeft / secondCard.offsetLeft);
    setActiveProject(Math.max(0, Math.min(projectCount - 1, index)));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();
    showProject(activeProject + (event.key === 'ArrowRight' ? 1 : -1));
  }

  return (
    <div className="work-gallery">
      {projectCount > 1 && (
        <div className="work-gallery-controls">
          <button
            type="button"
            aria-label={isSpanish ? 'Proyecto anterior' : 'Previous project'}
            aria-controls={galleryId}
            aria-disabled={activeProject === 0}
            onClick={() => showProject(activeProject - 1)}
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <span className="work-gallery-position" role="status">
            <span className="sr-only">{isSpanish ? 'Proyecto ' : 'Project '}</span>
            {activeProject + 1}
            <span aria-hidden="true"> / </span>
            <span className="sr-only">{isSpanish ? ' de ' : ' of '}</span>
            {projectCount}
          </span>
          <button
            type="button"
            aria-label={isSpanish ? 'Proyecto siguiente' : 'Next project'}
            aria-controls={galleryId}
            aria-disabled={activeProject === projectCount - 1}
            onClick={() => showProject(activeProject + 1)}
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      )}

      <ul
        id={galleryId}
        ref={galleryRef}
        className="work-gallery-track"
        role="list"
        aria-label={isSpanish ? 'Galería de proyectos' : 'Project gallery'}
        tabIndex={projectCount > 1 ? 0 : undefined}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
      >
        {children}
      </ul>
    </div>
  );
}
