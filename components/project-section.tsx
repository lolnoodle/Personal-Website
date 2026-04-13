"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

// Later: this moves to data/projects.ts and gets passed as props
const projects = [
  {
    title: "Project Name One",
    description:
      "A short punchy description of what the project does and the problem it solves. Keep it 2-3 sentences max.",
    image: "/logo.png",
    tags: ["React Native", "Firebase", "Expo"],
    href: "/projects/project-one",
  },
  {
    title: "Project Name Two",
    description:
      "Another project description. What was the challenge, what did you build, what was the outcome.",
    image: "/logo.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "/projects/project-two",
  },
];

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance — same pattern as your hero labels
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  const project = projects[currentIndex];

  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="m-2 border border-[var(--border)] bg-[var(--background2)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Section header */}
      <div className="border-b border-[var(--border)] px-6 py-3 flex items-center justify-between">
        <p className="text-3xl text-[var(--accent)] font-bebas tracking-widest">
          Featured Projects
        </p>
        {/* Carousel dots */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-[var(--accent)] w-6"
                  : "bg-[var(--border)] w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid grid-cols-[280px_1fr] gap-6 p-6"
        >
          {/* Image */}
          <div className="relative aspect-video border border-[var(--border)] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bebas text-3xl text-[var(--text)] tracking-wide mb-2">
                {project.title}
              </h2>
              <p className="font-space text-sm leading-relaxed text-[var(--text)] opacity-70">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--accent)] text-[var(--accent)] font-bebas text-sm px-2 py-0.5 tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={project.href}
                className="font-bebas text-xl tracking-widest px-4 py-1.5 bg-[var(--accent)] text-black hover:opacity-80 transition-opacity"
              >
                SEE MORE
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
