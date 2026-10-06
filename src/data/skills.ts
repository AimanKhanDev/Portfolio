export type SkillGroup = {
  title: string;
  blurb: string;
  skills: { name: string; note: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Pixel-focused interfaces built from hand-written CSS to component libraries.",
    skills: [
      { name: "HTML / CSS", note: "Custom design systems" },
      { name: "JavaScript", note: "Interactions & logic" },
      { name: "TypeScript", note: "Typed apps" },
      { name: "React", note: "Component architecture" },
      { name: "Next.js", note: "App Router" },
      { name: "Tailwind CSS", note: "Utility-first styling" },
      { name: "Responsive Design", note: "Mobile-first" },
    ],
  },
  {
    title: "Autonomous AI Agents & Agentic Workflows",
    blurb: "Production-ready autonomous AI pipelines with real-time event detection, automated task execution, and secure human approval workflows.",
    skills: [
      { name: "Autonomous AI Agents", note: "Self-directed task execution" },
      { name: "Agentic Workflows", note: "Multi-step autonomous pipelines" },
      { name: "FastMCP", note: "Model Context Protocol servers" },
      { name: "HITL Architecture", note: "Human-in-the-Loop approval flows" },
      { name: "Event-Driven Watchers", note: "Gmail, WhatsApp, FileSystem triggers" },
      { name: "Multi-Agent Orchestration", note: "Coordinated agent cooperation" },
    ],
  },
  {
    title: "AI & Agents",
    blurb: "Conversational agents and retrieval systems built on real LLM tooling.",
    skills: [
      { name: "Gemini API", note: "LLM integration" },
      { name: "Chainlit", note: "Chat interfaces" },
      { name: "Prompt Engineering", note: "Multi-agent flows" },
      { name: "RAG", note: "Retrieval-augmented gen" },
      { name: "Qdrant", note: "Vector search" },
      { name: "Qwen Embeddings", note: "Semantic vectors" },
      { name: "OpenRouter", note: "Multi-model access" },
    ],
  },
  {
    title: "Backend & Data",
    blurb: "APIs, data pipelines and services that power the frontends.",
    skills: [
      { name: "Python", note: "Agents & tooling" },
      { name: "Node.js", note: "Server logic" },
      { name: "FastAPI", note: "REST services" },
      { name: "REST APIs", note: "Contract design" },
    ],
  },
  {
    title: "Tools & Platforms",
    blurb: "The workflow and infrastructure I ship with.",
    skills: [
      { name: "Git / GitHub", note: "Version control" },
      { name: "Vercel", note: "Deployment" },
      { name: "Docker", note: "Containerisation" },
      { name: "Docusaurus", note: "Docs sites" },
      { name: "Jupyter", note: "Data exploration" },
    ],
  },
];
