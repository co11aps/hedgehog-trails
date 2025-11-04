import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Hedgehog Trails</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        MVP: Home, Blog, Trails, RSS, basic SEO, English Club.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { href: "/blog", title: "Blog" },
          { href: "/trails", title: "Trails" },
          { href: "/english-club", title: "English Club" },
          { href: "/rss.xml", title: "RSS (soon)" },
        ].map((x) => (
          <Card key={x.href}>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{x.title}</h2>
              <Link
                className={buttonVariants({ variant: "default" })}
                href={x.href}
              >
                Open
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
