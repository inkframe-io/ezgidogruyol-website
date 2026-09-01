"use client";

import { Gamepad2, Bug, Rocket } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { Reveal, RevealGroup } from "@/components/reveal";
import { DoodleAsset } from "@/components/doodle-asset";
import { CharacterAsset } from "@/components/character-asset";

const ICONS = [Gamepad2, Bug, Rocket] as const;

export function Work() {
  const { t } = useLocale();
  const { work } = t;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24"
    >
      <DoodleAsset
        name="kanban"
        size={150}
        className="hidden xl:block xl:-right-44 xl:top-0 2xl:-right-60"
      />
      <DoodleAsset
        name="analytics"
        size={140}
        className="hidden xl:block xl:-left-44 xl:top-[38%] 2xl:-left-60"
      />
      <DoodleAsset
        name="wireframe-web"
        size={140}
        className="hidden xl:block xl:-right-44 xl:bottom-24 2xl:-right-60"
      />
      <CharacterAsset
        name="kanban-planning"
        size={180}
        className="hidden xl:block xl:-left-56 xl:top-0 2xl:-left-72"
      />
      <SectionHeading
        id="work-heading"
        index={work.index}
        label={work.label}
        title={work.title}
      />

      {/* Featured projects */}
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
        {work.featuredTitle}
      </h3>

      <RevealGroup className="mt-4 space-y-5">
        {work.featured.map((project, i) => {
          const Icon = ICONS[i % ICONS.length];
          const accent = i % 2 === 0 ? "pink" : "blue";
          return (
            <Reveal key={project.name} standalone={false}>
              <Card
                icon={<Icon />}
                accent={accent}
                title={project.name}
                eyebrow={`${project.role} · ${project.studio} · ${project.dateRange}`}
              >
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {project.platforms.map((p) => (
                    <li
                      key={p}
                      className="rounded-md border border-hairline px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 space-y-2">
                  {project.impact.map((point, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className={
                          accent === "pink"
                            ? "mt-2 size-1.5 shrink-0 rounded-full bg-accent-pink"
                            : "mt-2 size-1.5 shrink-0 rounded-full bg-accent-blue"
                        }
                      />
                      <span className="text-fg">{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-muted italic">{project.owned}</p>
              </Card>
            </Reveal>
          );
        })}
      </RevealGroup>

      {/* Career timeline */}
      <h3 className="mt-14 font-mono text-xs uppercase tracking-widest text-muted">
        {work.timelineTitle}
      </h3>

      <Reveal className="mt-4">
        <ol className="border-l border-hairline">
          {work.timeline.map((role, i) => (
            <li key={`${role.company}-${i}`} className="relative ml-6 pb-6 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[30px] top-1 size-2.5 rounded-full border border-hairline bg-canvas"
              />
              <p className="font-mono text-xs text-muted">{role.dates}</p>
              <p className="mt-1 font-bold text-fg">
                {role.title}
                <span className="font-normal text-muted"> · {role.company}</span>
              </p>
              <p className="mt-1 text-sm text-muted">{role.summary}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
