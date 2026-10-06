"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "@/data/projects";
import {
  GitHubIcon,
  ArrowRightIcon,
  SparklesIcon,
  TerminalIcon,
  MapPinIcon,
  MailIcon,
} from "./icons";

const codeLines = [
  { indent: 0, text: "const developer = {", color: "text-accent" },
  { indent: 1, text: 'name: "Aiman Khan",', color: "text-text-main" },
  { indent: 1, text: "stack: [HTML, CSS, TS, Python,", color: "text-text-main" },
  { indent: 2, text: "Next.js, Tailwind, Gemini],", color: "text-text-muted" },
  { indent: 1, text: "builds: premium_web + ai_agents,", color: "text-text-main" },
  { indent: 1, text: "focus: polished_ui, agent_flows,", color: "text-text-main" },
  { indent: 0, text: "};", color: "text-accent" },
];

function Typewriter({ delay = 0 }: { delay?: number }) {
  const [visible, setVisible] = useState(0);
  const [chars, setChars] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setVisible(codeLines.length);
      setChars(999);
      return;
    }
    const lineTotal = codeLines.reduce((n, l) => n + l.text.length, 0);
    let t = delay;
    const timers: ReturnType<typeof setTimeout>[] = [];

    codeLines.forEach((line, i) => {
      const start = t;
      const end = start + line.text.length;
      timers.push(
        setTimeout(() => {
          setVisible(i + 1);
        }, (end - 1) * 16 + 300)
      );
      t = end;
    });

    const interval = setInterval(() => {
      setChars((c) => {
        if (c >= lineTotal) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 16);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [delay, reduceMotion]);

  let remaining = chars;

  return (
    <div className="font-mono text-[12.5px] leading-[1.9] sm:text-[13px]">
      {codeLines.slice(0, visible).map((line, i) => {
        const take = Math.max(0, Math.min(line.text.length, remaining));
        remaining -= line.text.length;
        const shown = reduceMotion ? line.text : line.text.slice(0, take);
        const isLast = visible === codeLines.length && remaining === 0;
        return (
          <div key={i} className="whitespace-pre">
            <span className="select-none pr-3 text-text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={line.color}>
              {"  ".repeat(line.indent)}
              {shown}
              {isLast ? <span className="animate-pulse text-accent">â–</span> : null}
            </span>
          </div>
        );
      })}
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 180]);
  const fade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <motion.div
        aria-hidden
        style={reduceMotion ? undefined : { y: bgY, opacity: fade }}
        className="absolute inset-0"
      >
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-soft/20 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-[-10%] h-[420px] w-[520px] rounded-full bg-indigo-600/15 blur-[130px] animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute bottom-[-20%] left-[-5%] h-[380px] w-[460px] rounded-full bg-violet-700/15 blur-[120px] animate-pulse-slow [animation-delay:4s]" />
      </motion.div>

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl xl:text-7xl"
          >
            <span className="gradient-text">Aiman Khan</span>
            <br />
            <span className="text-text-muted">crafting</span>{" "}
            <span className="accent-text">premium web</span>
            <br />
            <span className="accent-text">& AI experiences.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            I design and build polished, responsive frontends and AI-powered
            applications â€” from luxury brand landing pages to Gemini-powered
            chat agents and retrieval systems.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary group">
              View Projects
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-glow"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-faint"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4 text-accent" />
              {site.location}
            </span>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <MailIcon className="h-4 w-4 text-accent" />
              {site.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Visual: code editor card */}
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            className="absolute -inset-8 rounded-[2rem] bg-accent-gradient opacity-20 blur-3xl animate-pulse-slow"
            aria-hidden
          />
          <div className="glass relative overflow-hidden rounded-2xl shadow-card">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 flex items-center gap-1.5 text-xs text-text-faint">
                <TerminalIcon className="h-3.5 w-3.5" />
                developer.ts
              </span>
            </div>
            <div className="max-h-[340px] overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
              <Typewriter />
            </div>
            <div className="flex items-center justify-between border-t border-line px-5 py-3">
              <span className="flex items-center gap-2 text-xs text-text-muted">
                <SparklesIcon className="h-4 w-4 text-accent" />
                shipping polished interfaces
              </span>
              <span className="text-xs text-emerald-400">â— ready</span>
            </div>
          </div>

          <div className="glass absolute -right-3 -top-5 hidden animate-float rounded-xl px-4 py-3 shadow-glow sm:block">
            <p className="text-xs text-text-faint">AI Agent</p>
            <p className="font-mono text-sm text-white">Gemini + Chainlit</p>
          </div>
          <div
            className="glass absolute -bottom-5 -left-3 hidden animate-float-slow rounded-xl px-4 py-3 shadow-glow sm:block"
          >
            <p className="text-xs text-text-faint">Frontend</p>
            <p className="font-mono text-sm text-white">Next.js + Tailwind</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-faint transition-colors hover:text-accent md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-8 w-px overflow-hidden bg-line">
          <motion.span
            className="block h-3 w-px bg-accent"
            animate={reduceMotion ? undefined : { y: [-12, 36] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
