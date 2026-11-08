import { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  color?: 'secondary' | 'tertiary' | 'accent';
}

/**
 * Eyebrow: Semantic label component for secondary text/metadata.
 * 
 * Used for email labels, social media labels, and other metadata tags.
 * Replaces ad-hoc text-sm uppercase tracking-wider patterns.
 * 
 * Props:
 * - color: 'secondary' (gray), 'tertiary' (lighter gray), 'accent' (blue)
 * - className: Additional Tailwind classes
 */
export function Eyebrow({
  children,
  className = '',
  color = 'secondary',
}: EyebrowProps) {
  const colorMap = {
    secondary: 'text-text-secondary dark:text-dark-text-secondary',
    tertiary: 'text-text-tertiary dark:text-text-tertiary',
    accent: 'text-accent-fill dark:text-accent-fill',
  };

  return (
    <p
      className={`text-sm uppercase tracking-wider ${colorMap[color]} ${className}`}
    >
      {children}
    </p>
  );
}
