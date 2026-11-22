'use client';

import { type KeyboardEvent, type UIEvent, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language, SelectedWorkData } from '@/lib/types';
import { getContent } from '@/lib/getContent';

interface SelectedWorkProps {
  lang: Language;
}

export function SelectedWork({ lang }: SelectedWorkProps) {
  const content = getContent(lang);
  const selectedWork: SelectedWorkData | undefined = content.home.selectedWork;
  const projects = selectedWork?.projects ?? [];
  const galleryRef = useRef<HTMLUListElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const isSpanish = lang === 'es';

  if (!selectedWork) return null;

  function showProject(index: number) {
    const gallery = galleryRef.current;
    const card = gallery?.children.item(index);
    if (gallery && card instanceof HTMLElement) {
      gallery.scrollTo({ left: card.offsetLeft });
    }
  }

  function handleGalleryScroll({ currentTarget: gallery }: UIEvent<HTMLUListElement>) {
    const secondCard = gallery.children.item(1);
    if (!(secondCard instanceof HTMLElement) || !secondCard.offsetLeft) return;

    const index = Math.round(gallery.scrollLeft / secondCard.offsetLeft);
    setActiveProject(Math.max(0, Math.min(projects.length - 1, index)));
  }

  function handleGalleryKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();
    showProject(activeProject + (event.key === 'ArrowRight' ? 1 : -1));
  }

  return (
    <section id="selected-work" className="selected-work" aria-labelledby="selected-work-title">
      <div className="in">
        <div className="hd">
          <h2 id="selected-work-title">{selectedWork.headline}</h2>
          {projects.length > 1 && (
            <div className="gallery-controls">
              <button
                type="button"
                aria-label={isSpanish ? 'Proyecto anterior' : 'Previous project'}
                aria-controls="selected-work-gallery"
                aria-disabled={activeProject === 0}
                onClick={() => showProject(activeProject - 1)}
              >
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <span className="gallery-position" role="status">
                <span className="sr-only">{isSpanish ? 'Proyecto ' : 'Project '}</span>
                {activeProject + 1}
                <span aria-hidden="true"> / </span>
                <span className="sr-only">{isSpanish ? ' de ' : ' of '}</span>
                {projects.length}
              </span>
              <button
                type="button"
                aria-label={isSpanish ? 'Proyecto siguiente' : 'Next project'}
                aria-controls="selected-work-gallery"
                aria-disabled={activeProject === projects.length - 1}
                onClick={() => showProject(activeProject + 1)}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <ul
          id="selected-work-gallery"
          ref={galleryRef}
          className="project-gallery"
          role="list"
          aria-labelledby="selected-work-title"
          tabIndex={projects.length > 1 ? 0 : undefined}
          onScroll={handleGalleryScroll}
          onKeyDown={handleGalleryKeyDown}
        >
          {projects.map(project => (
            <li key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-details">
                {project.architecture && <p className="project-architecture">{project.architecture}</p>}
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <Link href={project.projectUrl} className="btn">
                    {selectedWork.btnProject}
                  </Link>
                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      className="lnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedWork.btnDocs}
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {selectedWork.viewAll && (
          <Link href={selectedWork.viewAll.href} className="more">
            {selectedWork.viewAll.label}
          </Link>
        )}
      </div>
    </section>
  );
}
