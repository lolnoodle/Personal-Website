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
    title: "Ballieue",
    slug: "ballieue",
    description:
      "A short punchy description of what the project does and the problem it solves.",
    year: "2025",
    tags: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/lolnoodle",
    image: "/Ballieue-image2.png",
    featured: true,
  },
  {
    title: "AI Study Buddy — Primio",
    slug: "primio-ai-study-buddy",
    description:
      "Designed and built a voice-driven, hyperpersonalized AI tutor for healthcare workers on Primio's learning platform — from research and concept ideation all the way to a working prototype.",
    year: "2025",
    tags: [
      "AI Integration",
      "UX Research",
      "React Native",
      "OpenAI",
      "Internship",
    ],
    github: "https://github.com/lolnoodle",
    image: "/primio.webp",
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
