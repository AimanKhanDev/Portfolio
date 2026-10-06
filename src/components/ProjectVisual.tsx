import Image from "next/image";
import type { Project } from "@/data/projects";

function BrowserChrome({ label, accent }: { label: string; accent: string }) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2.5 ${accent}`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 flex-1 truncate rounded-md border border-line bg-black/40 px-3 py-1 font-mono text-[11px] text-text-faint backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

function StoreVisual() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      <div className="col-span-2 h-24 rounded-lg bg-white/10" />
      <div className="h-24 rounded-lg bg-white/5" />
      <div className="h-14 rounded-lg bg-white/5" />
      <div className="h-14 rounded-lg bg-white/10" />
      <div className="h-14 rounded-lg bg-white/10" />
    </div>
  );
}

function BookVisual() {
  return (
    <div className="flex gap-3 p-5">
      <div className="flex h-36 w-24 flex-col justify-center rounded-l-lg border border-line bg-gradient-to-b from-white/15 to-white/5 px-3">
        <div className="h-1.5 w-3/4 rounded bg-white/40" />
        <div className="mt-2 h-1.5 w-1/2 rounded bg-white/25" />
        <div className="mt-4 h-1.5 w-full rounded bg-accent/60" />
        <div className="mt-1.5 h-1.5 w-full rounded bg-accent/40" />
        <div className="mt-1.5 h-1.5 w-4/5 rounded bg-accent/40" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {[70, 45, 60, 30].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-white/20" style={{ width: `${w}%` }} />
        ))}
        <div className="mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] text-accent">
          ● retrieving…
        </div>
      </div>
    </div>
  );
}

function AgentVisual() {
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="self-end rounded-xl rounded-br-sm bg-accent/20 px-3 py-2 text-[11px] text-white">
        look around…
      </div>
      <div className="self-start flex items-center gap-2 rounded-xl rounded-bl-sm border border-line bg-white/5 px-3 py-2 text-[11px] text-text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        You find a treasure chest! 🎲
      </div>
      <div className="self-end rounded-xl rounded-br-sm bg-accent/20 px-3 py-2 text-[11px] text-white">
        open it
      </div>
      <div className="self-start rounded-xl rounded-bl-sm border border-line bg-white/5 px-3 py-2 text-[11px] text-text-muted">
        You picked up a Magic Potion.
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      <div className="col-span-3 flex items-center justify-between">
        <div className="h-2 w-16 rounded bg-white/25" />
        <div className="flex gap-1.5">
          <span className="h-4 w-4 rounded-full bg-white/10" />
          <span className="h-4 w-4 rounded-full bg-white/10" />
        </div>
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-lg border border-line bg-gradient-to-b from-white/10 to-transparent p-2"
        >
          <div className="h-14 rounded bg-white/15" />
          <div className="mt-2 h-1.5 w-3/4 rounded bg-white/30" />
          <div className="mt-1 h-1.5 w-1/2 rounded bg-accent/50" />
        </div>
      ))}
    </div>
  );
}

function LuxuryVisual() {
  return (
    <div className="relative flex h-full min-h-[150px] items-center justify-center p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="relative flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 font-display text-lg italic text-white">
          N
        </div>
        <div className="mt-3 h-px w-16 bg-white/30" />
        <div className="mt-2 font-display text-[11px] uppercase tracking-[0.3em] text-white/70">
          Noir · Sage
        </div>
      </div>
    </div>
  );
}

function TechVisual() {
  return (
    <div className="flex flex-col gap-2 p-5 font-mono text-[11px]">
      <div className="flex gap-2">
        <span className="text-accent">GET</span>
        <span className="text-text-main">/api/products</span>
        <span className="text-text-faint">→ 200 OK</span>
      </div>
      <div className="flex gap-2">
        <span className="text-emerald-400">POST</span>
        <span className="text-text-main">/api/checkout</span>
        <span className="text-text-faint">→ 201</span>
      </div>
      <div className="mt-2 rounded-lg border border-line bg-white/5 p-3">
        <div className="h-1.5 w-2/3 rounded bg-white/25" />
        <div className="mt-2 h-1.5 w-1/2 rounded bg-white/15" />
        <div className="mt-3 flex gap-2">
          <span className="h-4 w-12 rounded bg-accent/30" />
          <span className="h-4 w-12 rounded bg-accent/20" />
        </div>
      </div>
    </div>
  );
}

const visuals = {
  store: StoreVisual,
  book: BookVisual,
  agent: AgentVisual,
  commerce: CommerceVisual,
  luxury: LuxuryVisual,
  tech: TechVisual,
};

export default function ProjectVisual({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/20"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0">
          <BrowserChrome
            label={
              project.live
                ? project.live.replace(/^https?:\/\//, "")
                : "github.com/Aimzaa"
            }
            accent="bg-black/45 border-b border-white/10"
          />
        </div>
      </div>
    );
  }

  const Visual = visuals[project.visual];
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${project.accent}`}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
        aria-hidden
      />
      <BrowserChrome label="github.com/Aimzaa" accent="border-b border-line/70 bg-black/30" />
      <div className="relative min-h-[150px]">
        <Visual />
      </div>
    </div>
  );
}