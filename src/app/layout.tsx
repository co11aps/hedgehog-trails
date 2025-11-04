import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hedgehog Trails",
  description: "Home, Blog, Trails, English Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 antialiased">
        <div className="mx-auto max-w-3xl p-6">{children}</div>
      </body>
    </html>
  );
}
