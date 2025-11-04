import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";

// Генерим статику как раньше — без изменений
export const dynamicParams = false;
export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

// ✅ В Next 16 params — Promise. Делаем функцию async и ждём params.
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      <MDXContent code={post.body.code} />
    </article>
  );
}
