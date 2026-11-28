import { Language } from './types';
import contentEN from '@/data/content.en.json';
import contentES from '@/data/content.es.json';
import { postsEN, postsES } from '@/data/posts';
import { productsEN, productsES } from '@/data/products';
import { caseStudiesEN, caseStudiesES } from '@/data/caseStudies';

export function getContent(lang: Language = 'en') {
  return lang === 'es' ? contentES : contentEN;
}

export function getPosts(lang: Language = 'en') {
  return lang === 'es' ? postsES : postsEN;
}

export function getProducts(lang: Language = 'en') {
  return lang === 'es' ? productsES : productsEN;
}

export function getCaseStudies(lang: Language = 'en') {
  return lang === 'es' ? caseStudiesES : caseStudiesEN;
}

export function getPost(slug: string, lang: Language = 'en') {
  const posts = getPosts(lang);
  return posts.find(post => post.slug === slug);
}

export function getProduct(slug: string, lang: Language = 'en') {
  const products = getProducts(lang);
  return products.find(product => product.slug === slug);
}

export function getCaseStudy(slug: string, lang: Language = 'en') {
  const studies = getCaseStudies(lang);
  return studies.find(study => study.slug === slug);
}

export function getFeaturedPosts(lang: Language = 'en', limit: number = 3) {
  return getPosts(lang)
    .filter(post => post.featured)
    .slice(0, limit);
}

export function getFeaturedProducts(lang: Language = 'en', limit: number = 3) {
  return getProducts(lang)
    .filter(product => product.featured)
    .slice(0, limit);
}

export function getPostsByCategory(category: string, lang: Language = 'en') {
  return getPosts(lang).filter(post => post.category === category);
}
