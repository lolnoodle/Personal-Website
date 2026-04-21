"use client";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import VinylCard from "@/components/vinyl-card";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-[var(--background)] px-6 py-10 flex flex-col gap-8">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-b border-[var(--border)] pb-6"
      >
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-2">
          // what i&apos;ve built
        </p>
        <h1 className="font-bebas text-7xl tracking-widest text-[var(--text)]">
          Projects
        </h1>
        <p className="font-space text-sm text-[var(--text)] opacity-50 mt-2 tracking-widest">
          {projects.length} records in the collection
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VinylCard project={project} />
          </motion.div>
        ))}
      </div>

    </div>
  );
}
