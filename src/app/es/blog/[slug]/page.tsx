import { BlogArticle } from '@/components/BlogArticle';
import { getPosts } from '@/lib/getContent';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPosts('es').map(({ slug }) => ({ slug }));
}

export default async function EsBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogArticle slug={slug} lang="es" />;
}
