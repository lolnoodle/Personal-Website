export type Journal = {
  number: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  readTime: string;
  date: string;
};

export const journals: Journal[] = [
  {
    number: 1,
    title:
      "Finding the balance — AI, vibe coding, and becoming a real developer",
    slug: "dev-journey",
    description:
      "My journey as a fresh graduate, looking for a job while keeping my skills sharp, and finding my way of how to correctly use AI",
    tags: ["AI", "Career", "Junior Dev", "Clean Code"],
    readTime: "6 min read",
    date: "Apr 16th 2026",
  },
  {
    number: 2,
    title: "Building my portfolio from scratch",
    slug: "personal-website",
    description:
      "My thoughts and process while building my personal website and what I learnt during the process",
    tags: ["Next.js", "Portfolio", "Planning", "Design", "Junior Dev"],
    readTime: "6 min read",
    date: "Apr 17th 2026",
  },
];
