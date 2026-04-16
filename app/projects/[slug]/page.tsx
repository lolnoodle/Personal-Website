import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { mdxComponents } from "@/components/mdx-components";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const filePath = path.join(process.cwd(), "content/projects", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);

  return (
    <div className="min-h-dvh bg-[var(--background)]">
      <div className="px-8 pt-8">
        <Link
          href="/projects"
          className="font-space text-sm text-[var(--accent)] tracking-widest hover:opacity-60 transition-opacity"
        >
          ← Back to projects
        </Link>
      </div>

      <div className="px-8 pt-6 pb-8 border-b border-[var(--border)]">
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-2">
          // {project.year}
        </p>
        <h1 className="font-bebas text-7xl tracking-widest text-[var(--text)] leading-none mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--accent)] text-[var(--accent)] font-bebas text-sm px-2 py-0.5 tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bebas text-lg tracking-widest px-4 py-1.5 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-colors duration-200"
          >
            GitHub ↗
          </a>
        )}
      </div>

      <div className="px-8 py-12 max-w-5xl">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </div>
  );
}
