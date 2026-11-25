'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import type { getContent } from '@/lib/getContent';

type CopyLabels = Pick<ReturnType<typeof getContent>['contactDetails'], 'copyEmail' | 'copied' | 'copyError'>;

export function CopyEmailButton({ labels }: { labels: CopyLabels }) {
  const [label, setLabel] = useState<keyof CopyLabels>('copyEmail');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setLabel('copied');
    } catch {
      setLabel('copyError');
    }
  }

  return (
    <button type="button" onClick={copyEmail} className="portfolio-button">
      <span aria-live="polite">{labels[label]}</span>
    </button>
  );
}
