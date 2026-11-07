export type Language = 'en' | 'es';

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Case study' | 'Notes' | 'Beyond code';
  date: string;
  readingTime: number;
  image: string;
  featured: boolean;
  content: string;
  stack?: string[];
  lang: Language;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: 'Available' | 'Coming soon' | 'Waitlist';
  price: string;
  priceNote?: string;
  hero: string;
  gallery?: string[];
  features: Feature[];
  included: string[];
  faq: FAQ[];
  checkoutUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  stack: string[];
  featured: boolean;
  lang: Language;
}

export interface Feature {
  title: string;
  text: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  role: string;
  stack: string[];
  github?: string;
  links?: { label: string; url: string }[];
  content: string;
  lang: Language;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

export interface ToolboxCategory {
  title: string;
  items: string[];
}
