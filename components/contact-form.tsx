"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { sendEmail } from "@/lib/send-email";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");

    try {
      await sendEmail({ name, email, message });
      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setFormState("error");
    }
  }

  const inputClass =
    "w-full bg-[var(--background2)] border border-[var(--border)] text-[var(--text)] font-space text-xs tracking-widest px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-[var(--text)] placeholder:opacity-30";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={formState === "loading"}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={formState === "loading"}
          className={inputClass}
        />
      </div>

      <textarea
        placeholder="your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={6}
        disabled={formState === "loading"}
        className={`${inputClass} resize-none`}
      />

      <div className="flex items-center gap-6">
        <motion.button
          type="submit"
          disabled={formState === "loading" || formState === "success"}
          whileHover={formState === "idle" ? { scale: 1.02 } : {}}
          whileTap={formState === "idle" ? { scale: 0.98 } : {}}
          className="font-bebas tracking-widest text-sm px-6 py-3 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {formState === "loading" ? "sending..." : "send message"}
        </motion.button>

        {formState === "success" && (
          <motion.p
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-space text-xs text-[var(--accent)] tracking-widest"
          >
            // message sent. i&apos;ll be in touch.
          </motion.p>
        )}

        {formState === "error" && (
          <motion.p
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-space text-xs text-red-400 tracking-widest"
          >
            // something went wrong. try again.
          </motion.p>
        )}
      </div>
    </form>
  );
}
