"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroSection() {
  const cycleLabels = [
    "a Frontend Developer",
    "a Backend Developer",
    "a UI Perfectionist",
    "a Clean Code Advocate",
    "Your Next Hire",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cycleLabels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="px-4 md:px-8 pt-10 pb-10 border-b border-[var(--border)]">
      <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-6">
        // hello world
      </p>

      <div className="flex flex-col gap-3 mb-8">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0 }}
          className="bg-[var(--background2)] border border-[var(--border)] px-4 w-full"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[var(--text)] text-[clamp(64px,12vw,160px)] font-bebas leading-none"
          >
            {"ISSAM".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
          className="bg-[var(--background2)] border border-[var(--border)] px-4 w-full"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[var(--text)] text-[clamp(64px,12vw,160px)] font-bebas leading-none"
          >
            {"FISSOUNE".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex items-center gap-3"
      >
        <span className="font-bebas text-4xl text-[var(--text)] tracking-widest leading-none">
          I am
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="font-bebas text-4xl text-[var(--accent)] tracking-widest leading-none border border-[var(--accent)] px-3 py-1"
          >
            {cycleLabels[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
