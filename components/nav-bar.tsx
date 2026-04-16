"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)]"
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
        >
          <Image src="/logo.png" alt="IF" width={60} height={60} className="hidden dark:block" />
          <Image src="/logo-light.png" alt="IF" width={60} height={60} className="block dark:hidden" />
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center gap-1">
            {navLinks.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className={`px-4 py-1.5 text-sm tracking-widest font-space transition-colors duration-200 ${
                  pathname === nav.href
                    ? "bg-[var(--accent)] text-black"
                    : "text-[var(--text)] hover:text-[var(--accent)]"
                }`}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile right side — theme toggle + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2 text-sm tracking-widest font-space transition-colors duration-200 ${
                    pathname === nav.href
                      ? "bg-[var(--accent)] text-black"
                      : "text-[var(--text)] hover:text-[var(--accent)]"
                  }`}
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
