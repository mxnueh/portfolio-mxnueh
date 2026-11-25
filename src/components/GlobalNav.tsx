import { GlobalNavClient } from '@/components/GlobalNavClient';
import { siteConfig } from '@/config/site';
import { getContent } from '@/lib/getContent';
import type { Language } from '@/lib/types';

export function GlobalNav({ lang, home }: { lang: Language; home?: boolean }) {
  const { meta, nav } = getContent(lang);
  const navLinks = nav.links.filter(({ href }) => {
    if (href === '/products') return siteConfig.features.products;
    if (href === '/blog') return siteConfig.features.blog;
    if (href === '/about') return siteConfig.about.enabled;
    return true;
  });

  return <GlobalNavClient lang={lang} home={home} fullName={meta.author} navLinks={navLinks} />;
}
