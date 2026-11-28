import { Fragment, type CSSProperties } from 'react';

export function GeneratedLead({ children, className }: { children: string; className: string }) {
  const words = children.trim().split(/\s+/);

  return (
    <p className={`intro-lead ${className}`}>
      {words.map((word, index) => (
        <Fragment key={index}>
          {index > 0 && ' '}
          <span style={{ '--word-progress': index / Math.max(1, words.length - 1) } as CSSProperties}>{word}</span>
        </Fragment>
      ))}
    </p>
  );
}
