"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import { GitHubIcon, ArrowUpRightIcon } from "./icons";

export default function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group surface-card relative flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow"
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectVisual project={project} priority={priority} />
        </div>
        <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5">
          {project.meta}
        </span>
        {project.live ? (
          <span className="absolute right-5 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-text-main transition-colors duration-300 group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-text-faint">
          {project.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="chip cursor-default !px-2.5 !py-1 !text-[11px] transition-transform duration-300 hover:scale-105"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="soft-bg inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-text-main transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            Source
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent-gradient hover:text-white"
            >
              Live demo
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}