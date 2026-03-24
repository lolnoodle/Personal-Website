"use client";

import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as Element;
      const isClickable = !!target.closest("a, button, [role='button'], input, select, textarea, label");
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return { ...mousePosition, isHovering };
}
