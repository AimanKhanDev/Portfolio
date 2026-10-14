import { site } from "@/data/projects";
import SectionHeading, { SectionWrapper } from "./SectionHeading";
import Reveal from "./Reveal";
import { MailIcon, GitHubIcon, ArrowRightIcon, MapPinIcon } from "./icons";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something great together."
            description="Have a project in mind — a premium landing page, an e-commerce build, or an AI agent experiment? I'd love to hear about it."
          />
          <Reveal delay={0.15} className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="btn-primary group"
              >
                <MailIcon className="h-4 w-4" />
                {site.email}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="surface-card flex h-full flex-col justify-between rounded-2xl p-8">
            <div>
              <p className="font-mono text-sm text-text-faint">{"// contact.json"}</p>
              <dl className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-text-faint">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-text-main transition-colors hover:text-accent"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GitHubIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-text-faint">
                      GitHub
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-main transition-colors hover:text-accent"
                      >
                        github.com/AimanKhanDev
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPinIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-text-faint">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-text-main">{site.location}</dd>
                  </div>
                </div>
              </dl>
            </div>
            <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-text-faint">
              I usually reply within a day or two. Happy to discuss freelance
              work, collaboration, or just chat about AI and the web.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
