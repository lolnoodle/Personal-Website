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

  return (
    <div className="m-1 px-2">
      <motion.div
        transition={{}}
        animate={{ x: 0, opacity: 1 }}
        className="font-[var(--font-bebas)] text-[52px]"
      >
        ISSAM FISSOUNE
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex"
      >
        <div className="">I am a &nbsp;</div>
        <div className="border border-[var(--accent)] px-1">
          <p className="text-[var(--accent)]">{cycleLabels[currentIndex]}</p>
        </div>
      </motion.div>
    </div>
  );
}
