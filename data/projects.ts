export type Project = {
  title: string;
  slug: string;
  description: string;
  year: string;
  tags: string[];
  github?: string;
  image: string;
  featured: boolean;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Ballieue",
    slug: "ballieue",
    description:
      "From classroom concept to real product — how a five person team built a gamified street football app to get Rotterdam kids off their screens and onto the pitch.",
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
    title: "Coming Soon",
    slug: "coming-soon",
    description: "Something is in the works",
    year: "",
    tags: [],
    image: "",
    featured: false,
    comingSoon: true,
  },
];
