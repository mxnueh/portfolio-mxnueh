import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  if (!siteConfig.features.products) {
    return [{ slug: '_' }];
  }
  return [];
}

export default function EsProductDetailPage() {
  notFound();
}
