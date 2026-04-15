"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { skills } from "@/data/skills";

const interests = [
  {
    label: "Hip-Hop",
    image: "/logo.png",
    description:
      "Music is a big part of who I am. Hip-hop in particular — the culture, the lyricism, the production. It influences the way I think creatively and approach problems. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    label: "Gaming",
    image: "/logo.png",
    description:
      "Gaming has been with me since I was a kid. Competitive games keep me sharp and team-oriented. There is a reason my cursor is a crosshair. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    label: "Fashion & Streetwear",
    image: "/logo.png",
    description:
      "Style is another form of design. I care about what I wear the same way I care about what I build — details matter. Streetwear, sneakers, the whole culture. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    label: "Engaged",
    image: "/logo.png",
    description:
      "Outside of the screen, the most important thing. Building a life with someone who keeps me grounded. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function AboutPage() {
  const [currentInterest, setCurrentInterest] = useState(0);

  return (
    <div className="min-h-dvh bg-[var(--background)] flex flex-col">
      <div className="px-8 pt-10 pb-8 border-b border-[var(--border)] overflow-hidden">
        <p className="font-space text-s text-[var(--accent)] tracking-widest mb-3">
          // who i am
        </p>
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
          className="inline-block bg-[var(--text)]"
        >
          <span className="font-bebas text-5xl tracking-widest text-[var(--background)] px-2 leading-tight block">
            ISSAM FISSOUNE
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-8 py-10 border-b border-[var(--border)] w-full"
      >
        <p className="font-inter text-lg leading-relaxed text-[var(--text)] opacity-80 max-w-3xl mx-auto text-center">
          25 year old developer from Rotterdam. Fresh off a CMGT degree at
          Hogeschool Rotterdam. I build things that work and look good doing it
          — whether that is a mobile app, a web platform, or something in
          between. Passionate about code, design, and everything in between.
        </p>
      </motion.div>

      <div className="px-8 py-10 border-b border-[var(--border)]">
        <p className="font-space text-s text-[var(--accent)] tracking-widest mb-8">
          // tech stack
        </p>
        <div className="flex flex-col gap-6 max-w-xl">
          {skills.map((skill, i) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <span className="font-bebas text-lg tracking-widest text-[var(--text)]">
                {skill.name}
              </span>
              <div className="w-full h-1 bg-[var(--border)] rounded-full">
                <motion.div
                  className="h-full bg-[var(--accent)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 py-10">
        <p className="font-space text-s text-[var(--accent)] tracking-widest mb-8">
          // beyond the code
        </p>

        <div className="flex gap-10 items-start">
          {/* Image */}
          <div className="relative w-64 h-64 border border-[var(--border)] flex-shrink-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentInterest}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={interests[currentInterest].image}
                  alt={interests[currentInterest].label}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Labels + description */}
          <div className="flex flex-col gap-4 pt-1 flex-1">
            <div className="flex gap-6 flex-wrap">
              {interests.map((interest, i) => (
                <button
                  key={interest.label}
                  onClick={() => setCurrentInterest(i)}
                  className={`font-bebas text-2xl tracking-widest text-left transition-all duration-200 ${
                    i === currentInterest
                      ? "text-[var(--accent)]"
                      : "text-[var(--text)] opacity-30 hover:opacity-60"
                  }`}
                >
                  {interest.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={currentInterest}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-inter text-sm leading-relaxed text-[var(--text)] opacity-60 max-w-sm"
              >
                {interests[currentInterest].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
