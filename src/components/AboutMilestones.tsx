import type { CSSProperties } from 'react';
import './ProjectCoverCard.css';
import './AboutMilestones.css';

interface Milestone {
  period: string;
  title: string;
  description: string;
  tag: string;
}

export function AboutMilestones({ label, title, milestones }: {
  label: string;
  title: string;
  milestones: Milestone[];
}) {
  return (
    <section className="about-milestones" aria-labelledby="about-milestones-title">
      <header className="about-milestones-heading">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">{label}</p>
        <h2 id="about-milestones-title" className="heading-ink text-3xl font-semibold tracking-tight sm:text-4xl xl:text-5xl">
          {title}
        </h2>
      </header>

      <ol className="about-milestones-list" role="list">
        {milestones.map((milestone, index) => (
          <li
            key={milestone.title}
            className="about-milestone project-cover-card project-cover"
            style={{ '--milestone-offset': `${index * 12}px` } as CSSProperties}
          >
            <header className="project-cover-card-header">
              <p className="mb-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs font-semibold uppercase tracking-wider">
                <span>{milestone.period}</span>
                <span>{milestone.tag}</span>
              </p>
              <h3 className="project-cover-card-title">{milestone.title}</h3>
            </header>
            <p className="project-cover-card-details max-w-[60ch] text-base leading-relaxed">
              {milestone.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
