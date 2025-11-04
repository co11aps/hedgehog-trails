import { allPosts } from "contentlayer/generated";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET() {
  const posts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const items = posts
    .map((p) => {
      const url = `https://co11aps.casa/blog/${p.slug}`;
      return `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        <description><![CDATA[${p.description ?? ""}]]></description>
      </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Hedgehog Trails</title>
      <link>https://co11aps.casa</link>
      <description>Blog RSS</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
