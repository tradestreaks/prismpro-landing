"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({
  size = "md",
  cta = "Join Early Access",
  source = "landing",
}: {
  size?: "md" | "lg";
  cta?: string;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("success");
      setMessage(data?.message || "You're on the list.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const pad = size === "lg" ? "py-4" : "py-3";

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong flex items-center gap-3 rounded-full px-5 py-3.5 text-left"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage/20 ring-1 ring-sage/40">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l5 5L20 6"
                  stroke="#B8C7B1"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-[14px] font-medium text-ink">{message}</p>
              <p className="text-[12px] text-ink-muted">
                We&apos;ll email your invite when the beta opens.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-2.5 sm:flex-row"
          >
            <div className="glass flex-1 rounded-full px-1.5">
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                aria-label="Email address"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                className={`w-full bg-transparent px-4 ${pad} text-[15px] text-ink placeholder:text-ink-muted focus:outline-none`}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className={`btn-primary shrink-0 ${
                size === "lg" ? "px-8 py-4 text-base" : ""
              } disabled:opacity-70`}
            >
              {status === "loading" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-canvas/40 border-t-canvas" />
                  Joining…
                </>
              ) : (
                <>
                  {cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className="mt-2 pl-4 text-[12px] text-coral">{message}</p>
      )}
    </div>
  );
}
