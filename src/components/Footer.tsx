import { site } from "@/data/projects";
import { GitHubIcon, MailIcon, ArrowUpRightIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient text-sm font-bold text-white">
            A
          </span>
          <span className="gradient-text">{site.name}</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted" aria-label="Footer">
          <a href="#about" className="transition-colors hover:text-accent">About</a>
          <a href="#projects" className="transition-colors hover:text-accent">Projects</a>
          <a href="#skills" className="transition-colors hover:text-accent">Skills</a>
          <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-muted transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-muted transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub in new tab"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-muted transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-line/60 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-text-faint sm:flex-row">
          <p>Â© {year} {site.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js Â· Tailwind Â· Motion</p>
        </div>
      </div>
    </footer>
  );
}
