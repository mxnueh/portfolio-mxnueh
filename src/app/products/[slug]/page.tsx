import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Section, Card } from '@/components/Section';
import { Button, TextLink } from '@/components/Button';
import { getProduct, getProducts } from '@/lib/getContent';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (!siteConfig.features.products) {
    // Return dummy param to satisfy Next.js build requirement
    // The actual page will call notFound() anyway
    return [{ slug: '_' }];
  }
  return getProducts('en').map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  if (!siteConfig.features.products) {
    notFound();
  }

  const { slug } = await params;
  const product = getProduct(slug, 'en');

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <GlobalNav lang="en" />
        <Section variant="white">
          <h1 className="text-section font-600 mb-4">Product not found</h1>
        </Section>
        <SiteFooter lang="en" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang="en" />
      <Section variant="white">
        <div className="max-w-reading mx-auto">
          <h1 className="text-section font-600 mb-8">{product.name}</h1>
          <p className="text-lead text-text-secondary mb-8">{product.tagline}</p>
          <p className="text-price mb-8">From {product.price}</p>
          <div className="mb-12">
            <Button variant="primary">
              {product.status === 'Available' ? 'Buy now' : 'Coming soon'}
            </Button>
          </div>
          <div className="rounded-large bg-gradient-to-br from-accent-fill to-purple-600 h-96 flex items-center justify-center text-white p-8">
            {product.hero}
          </div>
        </div>
      </Section>
      <SiteFooter lang="en" />
    </div>
  );
}
