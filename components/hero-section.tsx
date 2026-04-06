"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

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
    <div className="flex flex-col m-2 p-2 border-[var(--border)] border-solid border-2 bg-[var(--background3)]">
      <div className="my-2 space-y-3">
        {/* ISSAM — full width */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0 }}
          className="bg-[var(--background2)] w-full rounded-md px-3"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[var(--text)] text-[clamp(80px,12vw,9999px)] font-bebas"
          >
            {"ISSAM".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* FISSOUNE + LOGO — side by side */}
        <div className="flex items-center gap-4">
          {/* FISSOUNE box */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
            className="bg-[var(--background2)] rounded-md px-3 flex-1"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[var(--text)] text-[clamp(80px,12vw,9999px)] font-bebas"
            >
              {"FISSOUNE".split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* CMGT logo — sits just outside the FISSOUNE clippath */}
          <motion.img
            src="/cmgt-logo.webp"
            alt="CMGT"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 360 }}
            transition={{
              opacity: { duration: 0.4, delay: 1.1 },
              scale: { duration: 0.4, delay: 1.1 },
              rotateY: {
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 1.1,
              },
            }}
            width={380}
            height={380}
            style={{ transformStyle: "preserve-3d", flexShrink: 0 }}
          />
        </div>
      </div>

      {/* I AM A + cycling label — underneath FISSOUNE */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex items-center m-1 gap-2"
      >
        <div className="text-[clamp(80px,4vw,9999px)] font-bebas">I am </div>
        <div className="border border-[var(--accent)] px-2">
          <p className="text-[var(--accent)] text-[clamp(80px,4vw,9999px)] font-bebas">
            {cycleLabels[currentIndex]}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
