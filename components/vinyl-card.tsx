"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function VinylCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-row items-stretch border border-[var(--border)] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── SLEEVE (flips on hover) ── */}
      <div
        className="relative w-56 h-56 flex-shrink-0"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={{ rotateY: hovered ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT — album cover */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[var(--background3)] flex items-center justify-center">
                <span className="font-bebas text-3xl text-[var(--text)] opacity-20 tracking-widest">
                  {project.title}
                </span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2">
              <p className="font-bebas text-base tracking-widest text-white leading-none">
                {project.title}
              </p>
              <p className="font-space text-[9px] text-white/40 tracking-widest mt-0.5">
                {project.year}
              </p>
            </div>
          </div>

          {/* BACK — tracklist */}
          <div
            className="absolute inset-0 bg-[var(--background2)] p-4 flex flex-col justify-between border-r border-[var(--border)]"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <p className="font-space text-[9px] text-[var(--accent)] tracking-widest mb-3">
                // tracklist
              </p>
              <div className="flex flex-col gap-1.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`font-space text-[10px] tracking-widest ${
                      i === 0
                        ? "text-[var(--accent)]"
                        : "text-[var(--text)] opacity-50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}. {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-space text-[9px] text-[var(--text)] opacity-30 tracking-widest">
              {project.year}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── CD ZONE (animates in on hover, pushes description) ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-3 bg-[var(--background2)] border-r border-[var(--border)] overflow-hidden"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle, #555 4%, #1a1a1a 5%, #2a2a2a 20%, #111 21%, #2a2a2a 38%, #111 39%, #2a2a2a 56%, #111 57%, #1a1a1a 74%, #111 75%)",
                boxShadow: "0 0 0 1px #444, 0 6px 24px rgba(0,0,0,0.8)",
              }}
            >
              <div className="w-4 h-4 rounded-full bg-[var(--accent)]" />
              {/* Glare — rotates with disc, makes spin visible */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-white opacity-20" />
            </motion.div>

            <Link
              href={`/projects/${project.slug}`}
              className="font-bebas text-sm tracking-widest px-3 py-1 bg-[var(--accent)] text-black hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              PLAY ME ▶
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESCRIPTION (always visible, gets pushed by CD zone) ── */}
      <div className="flex-1 p-5 flex flex-col justify-between bg-[var(--background2)] min-w-0">
        <div>
          <h2 className="font-bebas text-2xl tracking-widest text-[var(--accent)] leading-none mb-2">
            {project.title}
          </h2>
          <p className="font-space text-[11px] leading-relaxed text-[var(--text)] opacity-60">
            {project.description}
          </p>
        </div>
        <span className="font-space text-[10px] text-[var(--accent)] opacity-30 tracking-widest">
          {project.year}
        </span>
      </div>
    </div>
  );
}
