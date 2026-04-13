"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="m-2 border border-[var(--border)] bg-[var(--background2)]"
    >
      {/* Section header */}
      <div className="border-b border-[var(--border)] px-6 py-3">
        <p className="text-3xl text-[var(--accent)] font-bebas tracking-widest">
          About Me
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-8 flex flex-col gap-6 max-w-3xl">
        <p className="font-inter text-lg leading-relaxed text-[var(--text)]">
          I&apos;m{" "}
          <span className="text-[var(--accent)] font-semibold">Issam</span> — a{" "}
          <span className="text-[var(--accent)] font-semibold">
            25 year old developer
          </span>{" "}
          from{" "}
          <span className="text-[var(--accent)] font-semibold">Rotterdam</span>,
          fresh off a{" "}
          <span className="text-[var(--accent)] font-semibold">
            CMGT degree
          </span>{" "}
          at Hogeschool Rotterdam. I build things that{" "}
          <span className="text-[var(--accent)] font-semibold">
            work and look good doing it
          </span>
          . Passionate about{" "}
          <span className="text-[var(--accent)] font-semibold">
            code, design
          </span>
          , and everything in between.
        </p>

        <Link
          href="/about"
          className="self-start font-bebas text-xl tracking-widest px-4 py-1.5 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-colors duration-200"
        >
          MORE ABOUT ME
        </Link>
      </div>
    </motion.section>
  );
}
