import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function EsProductsPage() {
  if (!siteConfig.features.products) {
    notFound();
  }

  return null;
}
