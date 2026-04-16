import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-bebas text-6xl tracking-widest text-[var(--text)] leading-none mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-bebas text-3xl tracking-widest text-[var(--accent)] leading-none mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-bebas text-2xl tracking-widest text-[var(--text)] mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="font-inter text-base leading-relaxed text-[var(--text)] opacity-80 mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-none flex flex-col gap-2 mb-6 ml-0">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="font-space text-sm text-[var(--text)] opacity-70 tracking-wide before:content-['—'] before:text-[var(--accent)] before:mr-3">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="text-[var(--accent)] font-semibold">{children}</strong>
  ),
  hr: () => <hr className="border-[var(--border)] my-10" />,
  code: ({ children }) => (
    <code className="font-space text-sm text-[var(--accent)] bg-[var(--background3)] px-1.5 py-0.5 rounded-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[var(--background3)] border border-[var(--border)] p-4 rounded-sm overflow-x-auto mb-6 font-space text-sm">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <div className="relative w-full my-6 border border-[var(--border)] overflow-hidden bg-[var(--background3)]">
      <img
        src={src ?? ""}
        alt={alt ?? ""}
        className="w-full h-auto object-contain"
      />
    </div>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse border border-[var(--border)] font-space text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[var(--background2)]">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-[var(--border)]">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-[var(--accent)] tracking-widest font-space text-sm border-r border-[var(--border)] last:border-r-0">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-[var(--text)] opacity-80 border-r border-[var(--border)] last:border-r-0">
      {children}
    </td>
  ),
};
