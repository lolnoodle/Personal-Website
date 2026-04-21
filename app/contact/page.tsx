"use client";
import { motion } from "motion/react";
import ContactForm from "@/components/contact-form";
import CvDownload from "@/components/cv-download";

const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/issam-fissoune",
    href: "https://www.linkedin.com/in/issam-fissoune-227828215/",
    description: "Let's connect professionally",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "issamf2804@gmail.com",
    href: "mailto:issamf2804@gmail.com",
    description: "Shoot me a message anytime",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+31 6 14 59 43 87",
    href: "tel:+31614594387",
    description: "Call or text me directly",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-[var(--background)] flex flex-col">

      {/* Header */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="px-4 md:px-8 pt-10 pb-8 border-b border-[var(--border)]"
      >
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-3">
          // let&apos;s talk
        </p>
        <h1 className="font-bebas text-7xl tracking-widest text-[var(--text)] leading-none mb-3">
          Contact
        </h1>
        <p className="font-space text-sm text-[var(--text)] opacity-40 tracking-widest">
          got something to say? let&apos;s talk.
        </p>
      </motion.div>

      {/* Social tiles */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 md:px-8 py-10 border-b border-[var(--border)]"
      >
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-6">
          // find me here
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              custom={i}
              variants={tileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col gap-4 p-6 border border-[var(--border)] bg-[var(--background2)] hover:border-[var(--accent)] transition-colors duration-200 group"
            >
              <span className="text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
                {contact.icon}
              </span>
              <div>
                <p className="font-bebas text-xl tracking-widest text-[var(--text)] leading-none mb-1 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {contact.label}
                </p>
                <p className="font-space text-xs text-[var(--text)] opacity-40 tracking-widest">
                  {contact.description}
                </p>
              </div>
              <p className="font-space text-sm text-[var(--accent)] tracking-widest mt-auto">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 md:px-8 py-10 border-b border-[var(--border)] flex flex-col items-center"
      >
        <div className="w-full max-w-2xl">
          <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-6">
            // drop a message
          </p>
          <ContactForm />
        </div>
      </motion.div>

      {/* CV */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CvDownload />
      </motion.div>

    </div>
  );
}
