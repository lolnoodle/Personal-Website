"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { journals } from "@/data/journals";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function JournalPage() {
  return (
    <div className="min-h-dvh bg-[var(--background)] flex flex-col">

      {/* Page header */}
      <div className="px-8 pt-10 pb-8 border-b border-[var(--border)]">
        <p className="font-space text-xs text-[var(--accent)] tracking-widest mb-3">
          // my dev journey
        </p>
        <h1 className="font-bebas text-7xl tracking-widest text-[var(--text)] leading-none">
          Journal
        </h1>
        <p className="font-space text-xs text-[var(--text)] opacity-40 mt-2 tracking-widest">
          {journals.length} {journals.length === 1 ? "entry" : "entries"} in the setlist
        </p>
      </div>

      {/* Post list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {journals.map((journal) => (
          <motion.div key={journal.slug} variants={itemVariants}>
            <Link
              href={`/journal/${journal.slug}`}
              className="flex gap-6 px-8 py-6 border-b border-[var(--border)] hover:bg-[var(--background2)] transition-colors duration-200 group"
            >
              {/* Number */}
              <span className="font-bebas text-5xl text-[var(--accent)] opacity-35 leading-none w-12 flex-shrink-0 group-hover:opacity-100 transition-opacity duration-200">
                {String(journal.number).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <h2 className="font-bebas text-2xl tracking-widest text-[var(--text)] leading-none group-hover:text-[var(--accent)] transition-colors duration-200">
                  {journal.title}
                </h2>
                <p className="font-space text-xs leading-relaxed text-[var(--text)] opacity-50">
                  {journal.description}
                </p>

                {/* Tags + read time */}
                <div className="flex items-center justify-between mt-1">
                  <div className="flex gap-2 flex-wrap">
                    <span className="font-space text-[10px] text-[var(--text)] opacity-40 tracking-widest">
                      {journal.date}
                    </span>
                    {journal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-space text-[10px] text-[var(--accent)] border border-[var(--accent)] opacity-70 px-1.5 py-0.5 tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-space text-[10px] text-[var(--text)] opacity-40 tracking-widest flex-shrink-0">
                    {journal.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
