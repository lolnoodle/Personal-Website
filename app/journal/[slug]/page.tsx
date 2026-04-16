import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journals } from "@/data/journals";
import { mdxComponents } from "@/components/mdx-components";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;

  const journal = journals.find((j) => j.slug === slug);
  if (!journal) notFound();

  const filePath = path.join(process.cwd(), "content/journal", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);

  return (
    <div className="min-h-dvh bg-[var(--background)]">
      <div className="px-4 md:px-8 pt-8">
        <Link
          href="/journal"
          className="font-space text-sm text-[var(--accent)] tracking-widest hover:opacity-60 transition-opacity"
        >
          ← Back to journal
        </Link>
      </div>

      <div className="px-4 md:px-8 pt-6 pb-8 border-b border-[var(--border)]">
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-2">
          // {journal.date}
        </p>
        <h1 className="font-bebas text-7xl tracking-widest text-[var(--text)] leading-none mb-4">
          {journal.title}
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {journal.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[var(--accent)] text-[var(--accent)] font-bebas text-sm px-2 py-0.5 tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-space text-sm text-[var(--text)] opacity-40 tracking-widest">
            {journal.readTime}
          </span>
        </div>
      </div>

      <div className="px-4 md:px-8 py-12 max-w-5xl">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </div>
  );
}
