"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { site } from "@/data/projects";
import { GitHubIcon, MenuIcon, CloseIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: reduceMotion ? 0 : -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-line bg-ink/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <motion.div
            className="h-0.5 origin-left bg-accent-gradient"
            style={{ scaleX: reduceMotion ? 0 : progress }}
            aria-hidden
          />
          <nav
            className="container-x flex h-16 items-center justify-between"
            aria-label="Primary"
          >
            <a
              href="#top"
              className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient text-sm font-bold text-white shadow-[0_4px_16px_-4px_rgba(139,92,246,0.7)] transition-transform duration-300 group-hover:-rotate-6">
                A
              </span>
              <span className="gradient-text">
                {site.name.split(" ")[0]}
                <span className="text-text-faint">.dev</span>
              </span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="soft-bg-hover rounded-full px-4 py-2 text-sm text-text-muted transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-text-muted transition-all duration-300 hover:border-accent hover:text-accent sm:flex"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="btn-primary hidden !px-5 !py-2 md:inline-flex"
              >
                Let&apos;s talk
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-muted transition-colors hover:text-accent md:hidden"
              >
                {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-2 pt-16">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                  className="border-b border-line py-4 font-display text-3xl font-semibold text-text-main transition-colors hover:text-accent"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary"
                >
                  Contact Me
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
