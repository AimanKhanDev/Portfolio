import { featuredProjects, otherProjects, site } from "@/data/projects";
import SectionHeading, { SectionWrapper } from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { GitHubIcon, ArrowRightIcon } from "./icons";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A selection of the projects I'm most proud of — real, shipped work from my GitHub."
        />
        <Reveal delay={0.1} className="shrink-0">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            <GitHubIcon className="h-4 w-4" />
            All on GitHub
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} priority={i === 0} />
        ))}
      </div>

      {otherProjects.length > 0 ? (
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="shrink-0 font-display text-xl font-semibold text-text-main">
                More projects
              </h3>
              <span className="h-px flex-1 bg-line" aria-hidden />
            </div>
            <p className="mt-3 max-w-2xl text-sm text-text-muted">
              Brand pages, storefronts and AI agents — more of what I build.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>
      ) : null}
    </SectionWrapper>
  );
}