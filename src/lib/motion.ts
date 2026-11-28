import { siteConfig } from '@/config/site';

/**
 * motion utilities
 * 
 * Per U20: Only feedback motion (hover, press, focus) is always active.
 * Decorative motion (page-load animations) is gated behind features.richMotion.
 */

/**
 * Conditionally apply decorative animation class based on richMotion feature flag.
 * Always respects prefers-reduced-motion at the OS level.
 * 
 * @param animationClass - Tailwind animation class (e.g., 'animate-fade-in')
 * @returns Animation class if richMotion is enabled, empty string otherwise
 * 
 * @example
 * <div className={decorativeMotion('animate-fade-in')}>Content</div>
 */
export function decorativeMotion(animationClass: string): string {
  return siteConfig.features.richMotion ? animationClass : '';
}

/**
 * Conditionally apply inline animation delay based on richMotion feature flag.
 * 
 * @param delaySeconds - Delay in seconds (e.g., 0.08)
 * @returns Style object with animationDelay if richMotion is enabled, undefined otherwise
 * 
 * @example
 * <div style={decorativeDelay(0.08)}>Content</div>
 */
export function decorativeDelay(delaySeconds: number): React.CSSProperties | undefined {
  return siteConfig.features.richMotion ? { animationDelay: `${delaySeconds}s` } : undefined;
}
