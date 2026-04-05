"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function HeroSection() {
  const cycleLabels = [
    "Developer",
    "Creative Developer",
    "Problem solver",
    "Gamer",
    "HipHop enthousiast",
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
    <div className="flex flex-col w-full m-2 px-4 border-[var(--border)] border-solid border-2 bg-[var(--background2)] ">
      <div className="my-2 space-y-0.5">
        {/* ISSAM box */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0 }}
          className="bg-white w-full rounded-md"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-black text-[120px] font-bebas "
          >
            {"ISSAM".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* FISSOUNE box — starts 0.5s after ISSAM */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
          className="bg-white rounded-md w-3/4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-black font-bebas text-[120px]"
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
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex m-1"
      >
        <div className="text-2xl font-bebas">I am a &nbsp;</div>
        <div className="border border-[var(--accent)] px-2">
          <p className="text-[var(--accent)] text-2xl font-bebas">
            {cycleLabels[currentIndex]}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
