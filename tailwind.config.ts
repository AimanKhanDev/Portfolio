import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          dim: "var(--accent-dim)",
        },
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
        "text-faint": "var(--text-faint)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px var(--line), 0 20px 60px -20px rgba(139, 92, 246, 0.35)",
        card: "0 0 0 1px var(--line), 0 24px 60px -24px rgba(0, 0, 0, 0.7)",
        "glow-lg":
          "0 0 0 1px rgba(139,92,246,0.35), 0 0 40px -8px rgba(139, 92, 246, 0.45)",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(120deg, var(--text-main) 0%, var(--text-main) 40%, var(--accent) 100%)",
        "accent-gradient":
          "linear-gradient(120deg, #a78bfa 0%, #8b5cf6 45%, #6366f1 100%)",
        "grid-fade":
          "linear-gradient(to bottom, transparent 0%, var(--ink) 100%)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
