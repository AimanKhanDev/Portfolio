import SectionHeading, { SectionWrapper } from "./SectionHeading";
import Reveal from "./Reveal";
import { CodeIcon, LayersIcon, SparklesIcon, TerminalIcon } from "./icons";

const timeline = [
  {
    year: "2024",
    icon: TerminalIcon,
    title: "Foundations & CLI tooling",
    text: "Started coding and shipping from day one — TypeScript basics, CLI apps like a calculator, ATM simulation and number-guessing game, plus my first resume-hackathon builds.",
  },
  {
    year: "2025",
    icon: CodeIcon,
    title: "Web development deep-dive",
    text: "Moved into the browser — built a full e-commerce application with Next.js, TypeScript and Tailwind CSS, experimented with a Gemini CLI and kept levelling up through hackathons.",
  },
  {
    year: "2026",
    icon: LayersIcon,
    title: "Premium UI & full-stack apps",
    text: "Shipped a series of hand-crafted brand storefronts (furniture, skincare, fragrance, food, e-commerce) deployed on Vercel, some backed by Node.js APIs.",
  },
  {
    year: "Now",
    icon: SparklesIcon,
    title: "AI agents & RAG",
    text: "Deepening into applied AI — multi-agent chat applications on Chainlit + Gemini, and a full RAG system with Qwen embeddings, Qdrant vector search and OpenRouter LLMs.",
  },
];

export default function Journey() {
  return (
    <SectionWrapper id="journey">
      <SectionHeading
        eyebrow="Journey"
        title="A learning path measured in shipped projects"
        description="No fabricated job history here — just the progression you can see across my public repositories."
      />

      <div className="relative mt-16">
        <span
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:left-1/2"
          aria-hidden
        />
        <div className="space-y-10">
          {timeline.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 0.06}>
              <div
                className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-14 sm:text-right"
                    : "sm:ml-auto sm:pl-14"
                }`}
              >
                <span
                  className={`absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-accent/40 bg-ink text-accent shadow-glow ${
                    i % 2 === 0
                      ? "sm:left-auto sm:right-0 sm:translate-x-1/2"
                      : "sm:left-0 sm:translate-x-[-50%]"
                  }`}
                >
                  <entry.icon className="h-4 w-4" />
                </span>
                <div>
                  <span className="accent-text font-mono text-sm font-semibold">
                    {entry.year}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text-main">
                    {entry.title}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed text-text-muted ${
                    i % 2 === 0 ? "sm:ml-auto" : ""
                  }`}
                >
                  {entry.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
