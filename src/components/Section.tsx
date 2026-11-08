import { ReactNode } from 'react';

interface SectionProps {
  variant?: 'white' | 'gray' | 'black';
  className?: string;
  children: ReactNode;
}

export function Section({ variant = 'white', className = '', children }: SectionProps) {
  const variantClasses = {
    white: 'bg-white',
    gray: 'bg-bg-alt',
    black: 'bg-white',
  };

  const textColor = 'text-text-primary';

  return (
    <section className={`${variantClasses[variant]} ${textColor} py-16 md:py-24 ${className}`}>
      <div className="max-w-container mx-auto px-8">
        {children}
      </div>
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
