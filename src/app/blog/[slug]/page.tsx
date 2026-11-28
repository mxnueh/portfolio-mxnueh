import { BlogArticle } from '@/components/BlogArticle';
import { getPosts } from '@/lib/getContent';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPosts('en').map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogArticle slug={slug} lang="en" />;
}
