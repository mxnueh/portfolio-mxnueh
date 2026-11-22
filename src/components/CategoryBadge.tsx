import { ReactNode } from 'react';

type CategoryType = 'Case study' | 'Notes' | 'Beyond code' | 'Status';

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
  compact?: boolean;
}

/**
 * CategoryBadge: Displays category label with tinted background and text color.
 * 
 * Uses category-specific color tokens for accessible contrast:
 * - Case study: Blue tint
 * - Notes: Purple tint
 * - Beyond code: Orange tint
 * - Status: Green tint
 * 
 * Light theme: Full opacity backgrounds with saturated text
 * Dark theme: Semi-transparent backgrounds with lighter text
 */
export function CategoryBadge({ category, className = '', compact = false }: CategoryBadgeProps) {
  const categoryMap: Record<CategoryType, { bg: string; text: string }> = {
    'Case study': {
      bg: 'bg-category-case-bg',
      text: 'text-category-case-text',
    },
    'Notes': {
      bg: 'bg-category-notes-bg',
      text: 'text-category-notes-text',
    },
    'Beyond code': {
      bg: 'bg-category-beyond-bg',
      text: 'text-category-beyond-text',
    },
    'Status': {
      bg: 'bg-category-status-bg',
      text: 'text-category-status-text',
    },
  };

  const { bg, text } = categoryMap[category];

  return (
    <span
      className={`inline-flex items-center ${compact ? 'px-2 py-0.5 rounded-full text-[11px] leading-4' : 'px-4 py-4 rounded-large text-sm'} font-600 uppercase tracking-wider ${bg} ${text} ${className}`}
    >
      {category}
    </span>
  );
}
