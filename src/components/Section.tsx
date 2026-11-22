import { ReactNode } from 'react';
import { RevealGroup } from './RevealGroup';

interface SectionProps {
  reveal?: boolean;
  variant?: 'white' | 'gray' | 'black';
  className?: string;
  children: ReactNode;
}

export function Section({ variant = 'white', className = '', reveal = false, children }: SectionProps) {
  const variantClasses = {
    white: 'bg-white',
    gray: 'bg-bg-alt',
    black: 'bg-white',
  };

  const Container = reveal ? RevealGroup : 'div';
  const textColor = 'text-text-primary';

  return (
    <section className={`${variantClasses[variant]} ${textColor} py-16 md:py-24 ${className}`}>
      <Container className="max-w-container mx-auto px-8">
        {children}
      </Container>
    </section>
  );
}

interface SectionHeadingProps {
  headline: string;
  lead?: string;
  children?: ReactNode;
}

export function SectionHeading({ headline, lead, children }: SectionHeadingProps) {
  return (
    <div className="max-w-text mx-auto text-center mb-10 md:mb-12">
      <h2 className="text-section md:text-section-tablet lg:text-section-mobile font-600 mb-8">
        {headline}
      </h2>
      {lead && (
        <p className="text-lead md:text-lead-tablet lg:text-lead-mobile text-text-secondary dark:text-dark-text-secondary">
          {lead}
        </p>
      )}
      {children}
    </div>
  );
}

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`rounded-large bg-bg-card dark:bg-dark-bg-card p-8 ${className}`}>
      {children}
    </div>
  );
}

export const linkedCardClass = 'group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161617] transition-colors hover:border-black/[0.2] dark:hover:border-white/[0.25]';
