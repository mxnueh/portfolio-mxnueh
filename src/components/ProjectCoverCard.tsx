import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import './ProjectCoverCard.css';

interface ProjectCoverCardProps {
  title: string;
  href: string;
  eyebrow: ReactNode;
  actionLabel: string;
  children: ReactNode;
  secondaryActions?: ReactNode;
  compact?: boolean;
}

export function ProjectCoverCard({
  title, href, eyebrow, actionLabel, children, secondaryActions, compact = false,
}: ProjectCoverCardProps) {
  return (
    <li className={`project-cover-card ${compact ? 'project-cover-card--compact' : 'project-cover'}`}>
      <header className="project-cover-card-header">
        <div className="mb-3">{eyebrow}</div>
        <h3 className="project-cover-card-title">
          {compact ? title : <Link href={href}>{title}</Link>}
        </h3>
      </header>

      <div className="project-cover-card-details">
        {children}
        <div className="project-cover-card-actions">
          <Link
            href={href}
            className="portfolio-button portfolio-button-primary project-cover-card-primary-action"
            aria-label={compact ? `${actionLabel}: ${title}` : undefined}
          >
            {actionLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {secondaryActions}
        </div>
      </div>
    </li>
  );
}
