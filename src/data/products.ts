import { Product } from '@/lib/types';

export const productsEN: Product[] = [
  {
    id: '1',
    slug: 'coming-soon-1',
    name: '[ADD Product Name]',
    tagline: '[ADD one-line tagline]',
    category: '[ADD category]',
    status: 'Coming soon',
    price: '[ADD price]',
    priceNote: '[ADD price note if applicable]',
    hero: '[ADD hero image]',
    gallery: ['[ADD screenshot 1]', '[ADD screenshot 2]', '[ADD screenshot 3]'],
    features: [
      { title: '[ADD feature title]', text: '[ADD feature description]', image: '[ADD image]' },
      { title: '[ADD feature title]', text: '[ADD feature description]', image: '[ADD image]' },
      { title: '[ADD feature title]', text: '[ADD feature description]', image: '[ADD image]' },
    ],
    included: [
      '[ADD item 1]',
      '[ADD item 2]',
      '[ADD item 3]',
      '[ADD item 4]',
    ],
    faq: [
      { question: '[ADD question]', answer: '[ADD answer]' },
      { question: '[ADD question]', answer: '[ADD answer]' },
      { question: '[ADD question]', answer: '[ADD answer]' },
    ],
    stack: ['[ADD tech]'],
    featured: true,
    lang: 'en',
  },
  {
    id: '2',
    slug: 'coming-soon-2',
    name: '[ADD Product Name]',
    tagline: '[ADD one-line tagline]',
    category: '[ADD category]',
    status: 'Waitlist',
    price: '[ADD price]',
    priceNote: '[ADD price note if applicable]',
    hero: '[ADD hero image]',
    gallery: ['[ADD screenshot 1]', '[ADD screenshot 2]'],
    features: [
      { title: '[ADD feature title]', text: '[ADD feature description]', image: '[ADD image]' },
      { title: '[ADD feature title]', text: '[ADD feature description]', image: '[ADD image]' },
    ],
    included: ['[ADD item 1]', '[ADD item 2]'],
    faq: [
      { question: '[ADD question]', answer: '[ADD answer]' },
      { question: '[ADD question]', answer: '[ADD answer]' },
    ],
    stack: ['[ADD tech]'],
    featured: false,
    lang: 'en',
  },
];

export const productsES: Product[] = productsEN.map(product => ({
  ...product,
  lang: 'es',
}));
