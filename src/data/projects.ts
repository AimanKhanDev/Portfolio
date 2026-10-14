export const site = {
  name: "Aiman Khan",
  handle: "AimanKhanDev",
  role: "Web Developer & AI Agent Builder",
  email: "ak0560439@gmail.com",
  github: "https://github.com/AimanKhanDev",
  location: "Karachi, Pakistan",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
  image?: string;
  featured?: boolean;
  accent: string;
  meta: string;
  visual: "store" | "book" | "agent" | "commerce" | "luxury" | "tech";
};

export const projects: Project[] = [
  {
    name: "Decor-Furnish",
    tagline: "HAVEN — Home & Living",
    description:
      "A premium furniture brand storefront with a mega-navigation, animated split-hero, magazine-style product grid, editorial showcase and a fully interactive auth flow with OTP and admin panel.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    repo: "https://github.com/AimanKhanDev/Decor-Furnish",
    live: "https://decor-furnish.vercel.app",
    image: "/projects/decor-furnish.jpg",
    featured: true,
    accent: "from-[#b5622a] to-[#556b55]",
    meta: "2026 · Brand Storefront",
    visual: "store",
  },
  {
    name: "Physical AI & Humanoid Robotics RAG",
    tagline: "Q&A over an AI robotics book",
    description:
      "A Retrieval-Augmented Generation system that answers questions over the Physical AI & Humanoid Robotics book using Qwen embeddings, Qdrant vector search, OpenRouter LLMs and a FastAPI backend with a Docusaurus frontend.",
    tech: ["Python", "FastAPI", "Qdrant", "Qwen", "OpenRouter", "Docusaurus"],
    repo: "https://github.com/AimanKhanDev/physical-ai-humanoid-robotics-book",
    live: "https://physical-ai-humanoid-robotics-book-pi-six.vercel.app",
    image: "/projects/physical-ai-book.jpg",
    featured: true,
    accent: "from-[#6366f1] to-[#0ea5e9]",
    meta: "2026 · RAG System",
    visual: "book",
  },
  {
    name: "Game-Agent",
    tagline: "Multi-agent fantasy RPG on Gemini",
    description:
      "A Chainlit chat application that runs a fantasy adventure game through cooperating AI agents — narrator, monster and item agents — with stateful turn-based logic powered by the Gemini API.",
    tech: ["Python", "Chainlit", "Gemini API"],
    repo: "https://github.com/AimanKhanDev/Game-Agent",
    featured: true,
    accent: "from-[#8b5cf6] to-[#ec4899]",
    meta: "2026 · AI Agent",
    visual: "agent",
  },
  {
    name: "Noire-Sage-Fragrance",
    tagline: "Luxury fragrance brand page",
    description:
      "A sophisticated dark-mode landing experience for a fragrance brand — expressive typography, immersive hero and refined product storytelling.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/AimanKhanDev/Noire-Sage-Fragrance",
    live: "https://noire-sage-fragrance.vercel.app",
    featured: true,
    accent: "from-[#111] to-[#444]",
    meta: "2026 · Brand Page",
    visual: "luxury",
  },
  {
    name: "Nexus-Store",
    tagline: "E-commerce with Node backend",
    description:
      "An e-commerce experience backed by a Node.js server and serverless Vercel config, pairing a hand-crafted storefront with real API behaviour.",
    tech: ["HTML", "CSS", "Node.js", "Vercel"],
    repo: "https://github.com/AimanKhanDev/Nexus-Store",
    live: "https://nexus-store-lime-seven.vercel.app",
    image: "/projects/nexus.jpg",
    featured: true,
    accent: "from-[#10b981] to-[#6366f1]",
    meta: "2026 · E-commerce",
    visual: "tech",
  },
  {
    name: "Bloom-SkinCare",
    tagline: "Skincare brand landing page",
    description:
      "A calm, editorial skincare storefront with elegant product presentation and smooth interactive sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/AimanKhanDev/Bloom-SkinCare",
    live: "https://bloom-skin-care.vercel.app",
    image: "/projects/bloom.jpg",
    featured: true,
    accent: "from-[#ec4899] to-[#8b5cf6]",
    meta: "2026 · Brand Page",
    visual: "luxury",
  },
  {
    name: "Shopping-Store",
    tagline: "E-commerce landing page",
    description:
      "A conversion-focused shopping storefront with category flows and a lively product grid.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/AimanKhanDev/Shopping-Store",
    live: "https://shopping-store-rho.vercel.app",
    image: "/projects/shopping.jpg",
    accent: "from-[#06b6d4] to-[#8b5cf6]",
    meta: "2026 · E-commerce",
    visual: "commerce",
  },
  {
    name: "Lumiere-food",
    tagline: "Restaurant landing page",
    description:
      "A warm, appetising restaurant site with rich media sections and polished responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/AimanKhanDev/Lumiere-food",
    live: "https://lumiere-food-umber.vercel.app",
    image: "/projects/lumiere.jpg",
    accent: "from-[#f97316] to-[#eab308]",
    meta: "2026 · Brand Page",
    visual: "store",
  },
  {
    name: "Hackathon2 — Evolution of Todo",
    tagline: "Full-stack AI todo platform",
    description:
      "A multi-phase project taking a todo app from a CLI tool to a full web platform — FastAPI backend, Next.js frontend, AI chatbot, MCP server and Dockerised deployment.",
    tech: ["Python", "FastAPI", "Next.js", "Docker", "MCP"],
    repo: "https://github.com/AimanKhanDev/Hackathon2-Evolution-of-Todo",
    accent: "from-[#0ea5e9] to-[#6366f1]",
    meta: "2026 · Full-stack",
    visual: "tech",
  },
  {
    name: "Career-Agent",
    tagline: "AI career advisor chatbot",
    description:
      "A Chainlit chatbot built on the Gemini API that guides users through career decisions with conversational prompting.",
    tech: ["Python", "Chainlit", "Gemini API"],
    repo: "https://github.com/AimanKhanDev/Career-Agent",
    accent: "from-[#f59e0b] to-[#ef4444]",
    meta: "2026 · AI Agent",
    visual: "agent",
  },
  {
    name: "Travel-Agent",
    tagline: "AI travel planning chatbot",
    description:
      "A Chainlit travel-planning assistant powered by the Gemini API that helps users plan trips conversationally.",
    tech: ["Python", "Chainlit", "Gemini API"],
    repo: "https://github.com/AimanKhanDev/Travel-Agent",
    accent: "from-[#10b981] to-[#06b6d4]",
    meta: "2026 · AI Agent",
    visual: "agent",
  },
  {
    name: "Digital FTE (Personal AI Employee System)",
    tagline: "Autonomous AI workforce framework",
    description:
      "Autonomous AI employee platform featuring multi-channel watchers (Gmail, WhatsApp), FastMCP tool servers, and Human-in-the-Loop (HITL) approval workflows.",
    tech: ["Autonomous AI", "Agentic Workflows", "FastMCP", "HITL Architecture", "Python", "Event-Driven Watchers"],
    repo: "https://github.com/AimanKhanDev/Hackathon-0-Digital-FTE",
    live: "https://huggingface.co/spaces/AimanDigital/Digital-FTE",
    featured: true,
    accent: "from-[#8b5cf6] to-[#06b6d4]",
    meta: "2026 · Autonomous AI",
    visual: "agent",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);