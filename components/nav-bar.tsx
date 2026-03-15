"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 bg-[var(--background)] border-b border-[var(--border)]"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
        className="text-2xl tracking-widest text-[var(--accent)] font-[var(--font-display)]"
      >
        IF
      </motion.span>

      <div className="flex items-center gap-1">
        {navLinks.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={`px-4 py-1.5 text-xs tracking-widest font-[var(--font-tags)] transition-colors duration-200 ${
              pathname === nav.href
                ? "bg-[var(--accent)] text-black"
                : "text-[var(--text)] hover:text-[var(--accent)]"
            }`}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
