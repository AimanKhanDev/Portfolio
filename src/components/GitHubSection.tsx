import { site } from "@/data/projects";
import { SectionWrapper } from "./SectionHeading";
import Reveal from "./Reveal";
import { GitHubIcon, ArrowRightIcon, CodeIcon, SparklesIcon, RocketIcon } from "./icons";

const stats = [
  { value: "25", label: "Public repositories" },
  { value: "Python", label: "AI agents & services" },
  { value: "9+", label: "Projects live on Vercel" },
];

const tags = [
  { icon: SparklesIcon, text: "Gemini-powered chat agents" },
  { icon: RocketIcon, text: "RAG with vector search" },
  { icon: CodeIcon, text: "Premium landing pages" },
];

export default function GitHubSection() {
  return (
    <SectionWrapper id="github">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 via-surface to-surface-2 p-8 sm:p-14">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft/20 blur-[100px]"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px]"
            aria-hidden
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent/70" aria-hidden />
                GitHub
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Explore my open-source work
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted">
                My GitHub holds the full journey — CLI foundations, hackathon
                builds, premium brand pages, e-commerce apps and AI agent
                projects. Everything is public and open to explore.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Visit GitHub
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t.text} className="chip cursor-default">
                    <t.icon className="h-3.5 w-3.5 text-accent" />
                    {t.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="surface-card rounded-2xl p-4 text-center sm:p-6">
                    <p className="accent-text font-display text-2xl font-bold sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-snug text-text-faint sm:text-xs">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
