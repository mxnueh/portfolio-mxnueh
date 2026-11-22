'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Language, SelectedWorkData } from '@/lib/types';
import { getContent } from '@/lib/getContent';

interface SelectedWorkProps {
  lang: Language;
}

export function SelectedWork({ lang }: SelectedWorkProps) {
  const content = getContent(lang);
  const selectedWork: SelectedWorkData | undefined = content.home.selectedWork;
  const projects = selectedWork?.projects || [];

  const stripBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeStrip, setActiveStrip] = useState(0);

  if (!selectedWork) return null;

  function handleStripKeyDown(e: React.KeyboardEvent, idx: number) {
    const key = e.key;
    let step = 0;
    if (key === 'ArrowRight' || key === 'ArrowDown') step = 1;
    if (key === 'ArrowLeft' || key === 'ArrowUp') step = -1;

    if (step !== 0) {
      e.preventDefault();
      const nextIdx = (idx + step + projects.length) % projects.length;
      setActiveStrip(nextIdx);
      const nextBtn = stripBtnRefs.current[nextIdx];
      if (nextBtn) {
        nextBtn.focus();
      }
    }
  }

  return (
    <section id="selected-work" className="selected-work" aria-labelledby="selected-work-title">
      <div className="in">
        <div className="hd">
          <h2 id="selected-work-title">{selectedWork.headline}</h2>
        </div>

        {/* Strips Gallery */}
        <div className="gal">
          <div className="strips">
            {projects.map((project, idx) => {
              const isOpen = activeStrip === idx;

              return (
                <div
                  key={project.id}
                  className={`st ${isOpen ? 'on' : ''}`}
                >
                  <h3 className="st-h3">
                    <button
                      type="button"
                      ref={(el) => {
                        stripBtnRefs.current[idx] = el;
                      }}
                      className="sb"
                      aria-expanded={isOpen}
                      aria-controls={`strip-content-${idx}`}
                      onClick={() => setActiveStrip(idx)}
                      onKeyDown={(e) => handleStripKeyDown(e, idx)}
                    >
                      <span className="ct">{project.title}</span>
                    </button>
                  </h3>

                  <div id={`strip-content-${idx}`} className="sx">
                    {project.architecture && <p className="ar">{project.architecture}</p>}
                    <p className="desc">{project.description}</p>
                    <div className="acts">
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
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Work Link */}
        {selectedWork.viewAll && (
          <Link href={selectedWork.viewAll.href} className="more">
            {selectedWork.viewAll.label}
          </Link>
        )}
      </div>
    </section>
  );
}
