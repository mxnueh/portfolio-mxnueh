'use client';

import { useEffect } from 'react';

export function ThemeScript() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  return null;
}
