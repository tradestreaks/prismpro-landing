"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wordmark from "../brand/Wordmark";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#verdict", label: "The verdict" },
  { href: "#pricing", label: "Pricing" },
  { href: "#roadmap", label: "Roadmap" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.5, 0.25, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3"
    >
      <div
        className={`w-full max-w-[1120px] rounded-[26px] transition-all duration-500 ${
          scrolled || open ? "glass-strong shadow-card" : "border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <a href="#top" aria-label="Prism Pro home" onClick={() => setOpen(false)}>
            <Wordmark />
          </a>

          {/* desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[14px] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#join"
              className="btn-primary !px-4 !py-2.5 text-[14px] xs:!px-5"
              onClick={() => setOpen(false)}
            >
              <span className="xs:hidden">Join</span>
              <span className="hidden xs:inline">Join Waitlist</span>
            </a>

            {/* hamburger — mobile only */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:bg-card md:hidden"
            >
              <span className="relative block h-[14px] w-[18px]">
                <span
                  className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* mobile dropdown panel */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.21, 0.5, 0.25, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 px-3 pb-3 pt-1">
                <div className="mx-2 mb-1 h-px bg-hairline" />
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] text-ink-soft transition-colors hover:bg-card hover:text-ink"
                  >
                    {l.label}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
