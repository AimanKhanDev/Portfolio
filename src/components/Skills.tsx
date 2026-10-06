"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeading, { SectionWrapper } from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        description="Skills drawn from the projects I've actually shipped — hand-written design systems, component-based frontends, and AI/LLM applications."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div className="group surface-card relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-accent/40">
              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                aria-hidden
              />
              <p className="eyebrow">
                <span className="h-px w-6 bg-accent/70" aria-hidden />
                0{gi + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-text-main">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{group.blurb}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + si * 0.06,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="chip cursor-default"
                    title={skill.note}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
