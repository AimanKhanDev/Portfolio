import { site } from "@/data/projects";
import SectionHeading, { SectionWrapper } from "./SectionHeading";
import Reveal from "./Reveal";
import {
  CodeIcon,
  SparklesIcon,
  RocketIcon,
  LayersIcon,
} from "./icons";

const highlights = [
  {
    icon: CodeIcon,
    title: "Web development",
    text: "Hand-crafted HTML/CSS, React and Next.js apps with a focus on premium, responsive design.",
  },
  {
    icon: SparklesIcon,
    title: "AI agents",
    text: "Conversational agents on Chainlit + Gemini with multi-agent flows and prompt engineering.",
  },
  {
    icon: RocketIcon,
    title: "RAG systems",
    text: "Retrieval-augmented question-answering with vector search (Qdrant, Qwen, OpenRouter).",
  },
  {
    icon: LayersIcon,
    title: "Full-stack",
    text: "Node.js and FastAPI services paired with modern frontends, shipped to production on Vercel.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Building things for the web — and teaching AI to do the same."
            description="I'm a web developer and AI application builder based in Karachi. I started coding in 2024 and have been shipping steadily since — from CLI tools and TypeScript foundations to full e-commerce apps, premium brand landing pages, and Gemini-powered AI agents."
          />
          <Reveal delay={0.15} className="mt-8">
            <div className="surface-card rounded-2xl p-6">
              <p className="font-mono text-sm leading-relaxed text-text-muted">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-main">
                {site.name} — turning ideas into polished, working products. My
                recent focus has been blending design-craft with AI: building
                RAG systems, multi-agent chat applications, and the interfaces
                that make them usable.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="group surface-card h-full rounded-2xl p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent-gradient group-hover:text-white">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-text-main">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
