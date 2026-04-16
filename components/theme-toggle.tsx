"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  if (theme === null) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="font-space text-sm tracking-widest text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
    >
      {theme === "dark" ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
