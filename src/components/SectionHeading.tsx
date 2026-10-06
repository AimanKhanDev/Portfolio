import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={
        centered ? "mx-auto flex max-w-2xl flex-col items-center text-center" : "max-w-2xl"
      }
    >
      <span className="eyebrow">
        <span className="h-px w-8 bg-accent/70" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-main sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function SectionWrapper({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className ?? ""}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
