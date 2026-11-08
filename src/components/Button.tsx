import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children: ReactNode;
  external?: boolean;
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  external = false,
}: ButtonProps) {
  const baseClasses = 'h-11 px-8 rounded-full font-500 text-button flex items-center justify-center transition-colors duration-ui focus-visible';

  const variantClasses = {
    primary: 'bg-accent-fill hover:bg-accent-hover text-white dark:bg-accent-fill dark:hover:bg-accent-hover',
    secondary: 'border border-accent-fill text-accent-fill hover:bg-accent-fill/10 dark:border-dark-link dark:text-dark-link dark:hover:bg-dark-link/10',
    tertiary: 'text-link dark:text-dark-link hover:opacity-75',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

interface TextLinkProps {
  href?: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export function TextLink({ href = '#', children, external = false, className = '' }: TextLinkProps) {
  const classes = `inline-flex items-center gap-4 text-link dark:text-dark-link hover:opacity-75 transition-opacity duration-ui ${className}`;

  // Skip rendering if href is a placeholder
  if (href.includes('[ADD]') || href === '#[ADD]') {
    return null;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <span className="text-xs">›</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <span className="text-xs">›</span>
    </Link>
  );
}
