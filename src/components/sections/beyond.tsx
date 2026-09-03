"use client";

import { Dices, Wrench, Users, GitBranch } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { Reveal, RevealGroup } from "@/components/reveal";
import { DoodleAsset } from "@/components/doodle-asset";
import { CharacterAsset } from "@/components/character-asset";

const ICONS = [Dices, Wrench, Users, GitBranch] as const;

export function Beyond() {
  const { t } = useLocale();
  const { beyond } = t;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24"
    >
      <DoodleAsset
        name="idea"
        size={124}
        className="hidden xl:block xl:-right-44 xl:top-0 2xl:-right-60"
      />
      <DoodleAsset
        name="flag"
        size={110}
        className="hidden xl:block xl:-left-40 xl:bottom-10 2xl:-left-56"
      />
      <CharacterAsset
        name="brainstorming"
        size={180}
        className="hidden xl:block xl:-left-48 xl:top-0 2xl:-left-72"
      />
      <SectionHeading
        id="projects-heading"
        index={beyond.index}
        label={beyond.label}
        title={beyond.title}
      />

      <Reveal>
        <p className="mb-6 text-base text-muted">{beyond.intro}</p>
      </Reveal>

      <RevealGroup className="grid gap-4 sm:grid-cols-2">
        {beyond.items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          const accent = i % 2 === 0 ? "blue" : "pink";
          return (
            <Reveal key={item.title} standalone={false}>
              <Card icon={<Icon />} accent={accent} title={item.title}>
                <p>{item.body}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:underline"
                  >
                    {item.linkLabel}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </Card>
            </Reveal>
          );
        })}
      </RevealGroup>
    </section>
  );
}
