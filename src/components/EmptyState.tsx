import { ReactNode } from 'react';

/**
 * EmptyState: Displays when no content is available.
 * 
 * Used for empty lists, no search results, or missing data.
 * Provides clear messaging and optional action button.
 */

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
  icon?: ReactNode;
}

export function EmptyState({ title, description, action, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center max-w-md mx-auto">
      {icon && (
        <div className="mb-8 text-text-tertiary dark:text-text-tertiary" aria-hidden="true">
          {icon}
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4 text-text-primary dark:text-dark-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary dark:text-dark-text-secondary mb-8">
          {description}
        </p>
      )}
      {action && (
        <a
          href={action.href}
          className="portfolio-button portfolio-button-primary"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
