"use client";
import useMousePosition from "@/app/hooks/useMousePosition";
import { motion } from "motion/react";

export default function CustomCursor() {
  const { x, y, isHovering } = useMousePosition();

  const color = isHovering ? "#ef4444" : "var(--accent)";

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))` }}
    >
      {/* outer circle */}
      <div
        className="relative w-10 h-10 rounded-full border"
        style={{ borderColor: color }}
      >
        {/* horizontal line */}
        <div
          className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2"
          style={{ backgroundColor: color }}
        />
        {/* vertical line */}
        <div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
          style={{ backgroundColor: color }}
        />
        {/* center dot */}
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
