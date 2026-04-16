"use client";
import { motion } from "motion/react";

export default function CvDownload() {
  return (
    <div className="px-4 md:px-8 py-10 flex flex-col items-center">
      <div className="w-full max-w-2xl">
      <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-6">
        // need my resume?
      </p>
      <motion.a
        href="/issam-fissoune-cv.pdf"
        download
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--accent)] text-[var(--accent)] font-bebas tracking-widest text-sm hover:bg-[var(--accent)] hover:text-[var(--background)] transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        download cv
      </motion.a>
      <p className="font-space text-xs text-[var(--text)] opacity-30 tracking-widest mt-3">
        pdf · last updated apr 2026
      </p>
    </div>
    </div>
  );
}
