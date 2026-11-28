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
  const appearance = compact
    ? 'rounded-full px-2.5 py-0.5 [font-family:var(--font-geist-sans),system-ui,sans-serif] text-xs font-bold tracking-[-0.02em]'
    : 'rounded-large px-4 py-4 text-sm font-600 uppercase tracking-wider';

  return (
    <span
      className={`inline-flex items-center ${appearance} ${bg} ${text} ${className}`}
    >
      {category}
    </span>
  );
}
