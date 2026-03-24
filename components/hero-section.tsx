"use client";
import { useEffect, useState } from "react";

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
    <div className="m-1">
      <div className="p-2 font-[var(--font-bebas)] text-[52px]">
        ISSAM FISSOUNE
      </div>
      <div className="flex">
        <div className="">I am a &nbsp;</div>
        <div>
          <p>{cycleLabels[currentIndex]}</p>
        </div>
      </div>
    </div>
  );
}
