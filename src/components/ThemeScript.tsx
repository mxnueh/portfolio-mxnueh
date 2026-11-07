'use client';

export function ThemeScript() {
  if (typeof document === 'undefined') return null;

  const script = `
    (function() {
      const theme = localStorage.getItem('theme') || 'system';
      const isDark = 
        theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
