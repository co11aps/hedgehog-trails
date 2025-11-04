import Link from "next/link";
import { allPosts } from "contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="list-disc pl-5 space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
