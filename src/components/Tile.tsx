import { ReactNode, CSSProperties } from 'react';

interface TileProps {
  children: ReactNode;
  elevation?: 'base' | 'e1' | 'e2' | 'e3';
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Tile: Base component for all card-like surfaces.
 * 
 * Uses elevation tokens from CSS variables (--shadow-e1, e2, e3) instead of ad-hoc shadows.
 * Elevation scale:
 * - base: No shadow, flat surface (used for grouped content areas)
 * - e1: Subtle elevation for default cards
 * - e2: Mid elevation for hover states and featured cards
 * - e3: High elevation for modals, floating elements
 * 
 * Props:
 * - elevation: Shadow depth (default: 'base')
 * - interactive: Enables hover lift animation (transitions e1 → e2)
 * - className: Additional Tailwind classes (spacing, grid positions, etc.)
 * - style: Inline styles (e.g., animationDelay)
 */
export function Tile({
  children,
  elevation = 'base',
  interactive = false,
  className = '',
  style,
}: TileProps) {
  const elevationMap = {
    base: '',
    e1: 'shadow-e1',
    e2: 'shadow-e2',
    e3: 'shadow-e3',
  };

  const interactiveClass = interactive
    ? 'hover:shadow-e2 transition-shadow duration-ui cursor-pointer'
    : '';

  return (
    <div
      style={style}
      className={`
        bg-white rounded-large p-8 shadow-e1
        ${elevationMap[elevation]}
        ${interactiveClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
