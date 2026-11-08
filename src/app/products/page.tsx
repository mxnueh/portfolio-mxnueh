import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Tile } from '@/components/Tile';
import { Button } from '@/components/Button';
import { getProducts } from '@/lib/getContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Enmanuel Nunez Matias',
  description: 'Digital products and tools.',
};

export default async function ProductsPage() {
  if (!siteConfig.features.products) {
    notFound();
  }

  const lang = 'en';
  const products = getProducts(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalNav lang={lang} />

      <Section variant="white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold mb-8">Products</h1>
          <p className="text-xl text-text-secondary mb-12 max-w-3xl">
            Digital products and tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Tile key={product.id}>
                <p className="text-sm uppercase tracking-wider text-accent-fill mb-4">{product.category}</p>
                <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                <p className="text-text-secondary mb-4">{product.tagline}</p>
                <p className="text-xl font-semibold mb-4">
                  {product.status === 'Coming soon' ? 'Coming soon' : product.status === 'Waitlist' ? 'Join waitlist' : product.price}
                </p>
                <div className="flex gap-4">
                  {product.status === 'Available' && product.checkoutUrl ? (
                    <Button href={product.checkoutUrl} variant="primary" external>
                      Buy
                    </Button>
                  ) : (
                    <Button href={`/products/${product.slug}`} variant="secondary">
                      Learn more
                    </Button>
                  )}
                </div>
              </Tile>
            ))}
          </div>
        </div>
      </Section>

      <Footer lang={lang} />
    </div>
  );
}
