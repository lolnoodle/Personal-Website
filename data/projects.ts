export type Project = {
  title: string;
  slug: string;
  description: string;
  year: string;
  tags: string[];
  github?: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Banlieue",
    slug: "banlieue",
    description:
      "A short punchy description of what the project does and the problem it solves.",
    year: "2025",
    tags: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/lolnoodle",
    image: "/Ballieue-image2.png",
    featured: true,
  },
  {
    title: "Project Two",
    slug: "project-two",
    description:
      "Another project description. What was the challenge, what did you build.",
    year: "2025",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/lolnoodle",
    image: "/logo.png",
    featured: true,
  },
  {
    title: "Project Three",
    slug: "project-three",
    description: "Third project description. The outcome and what you learned.",
    year: "2024",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/lolnoodle",
    image: "/logo.png",
    featured: false,
  },
  {
    title: "Project Four",
    slug: "project-four",
    description: "Fourth project. Keep adding your real projects as you go.",
    year: "2024",
    tags: ["Vue.js", "Express", "MongoDB"],
    github: "https://github.com/lolnoodle",
    image: "/logo.png",
    featured: false,
  },
];
