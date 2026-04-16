"use client";
import { motion } from "motion/react";

export default function VinylCardLocked() {
  return (
    <div className="flex flex-row items-stretch border border-dashed border-[var(--border)] overflow-hidden select-none">
      {/* Locked sleeve */}
      <div className="relative w-56 h-56 flex-shrink-0 bg-[var(--background2)] flex items-center justify-center overflow-hidden">
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.06)_2px,rgba(0,0,0,0.06)_3px)] z-10" />

        {/* Silhouette background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--background3)] to-[var(--background2)]" />

        {/* Lock icon — pulses */}
        <div className="z-20 flex flex-col items-center gap-3">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow behind lock */}
            <div className="absolute inset-0 blur-xl bg-[var(--accent)] opacity-20 rounded-full scale-150" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--accent)] relative z-10"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </motion.div>

          <motion.span
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="font-bebas text-3xl tracking-[0.4em] text-[var(--accent)]"
          >
            ???
          </motion.span>
        </div>
      </div>

      {/* Locked description */}
      <div className="flex-1 p-5 flex flex-col justify-between bg-[var(--background2)] min-w-0 opacity-50">
        <div className="flex flex-col gap-3">
          <p className="font-space text-xs text-[var(--accent)] tracking-widest">
            // not yet unlocked
          </p>
          <h2 className="font-bebas text-2xl tracking-widest text-[var(--text)] leading-none">
            LOCKED
          </h2>
          {/* Redacted lines */}
          <div className="flex flex-col gap-2 mt-1">
            <div className="h-2 w-full bg-[var(--border)] rounded-sm" />
            <div className="h-2 w-4/5 bg-[var(--border)] rounded-sm" />
            <div className="h-2 w-3/5 bg-[var(--border)] rounded-sm" />
          </div>
        </div>
        <p className="font-space text-xs text-[var(--text)] opacity-40 tracking-widest">
          something is in the works
        </p>
      </div>
    </div>
  );
}
