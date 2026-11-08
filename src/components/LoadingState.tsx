/**
 * LoadingState: Displays a loading indicator.
 * 
 * Used for async data fetching, route transitions, and form submissions.
 * Minimal, accessible spinner with ARIA labels.
 */

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingState({ message = 'Loading...', size = 'md' }: LoadingStateProps) {
  const sizeMap = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center py-24" role="status" aria-live="polite">
      <div
        className={`${sizeMap[size]} border-separator dark:border-separator border-t-accent-fill rounded-full animate-spin`}
        aria-hidden="true"
      />
      <p className="mt-4 text-text-secondary dark:text-dark-text-secondary">{message}</p>
      <span className="sr-only">{message}</span>
    </div>
  );
}
