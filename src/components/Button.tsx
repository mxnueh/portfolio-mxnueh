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
  const classes = `portfolio-button${variant === 'primary' ? ' portfolio-button-primary' : ''} ${className}`;

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
