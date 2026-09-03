"use client";

import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { DoodleAsset } from "@/components/doodle-asset";
import { CharacterAsset } from "@/components/character-asset";

export function Skills() {
  const { t } = useLocale();
  const { skills } = t;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-24"
    >
      <DoodleAsset
        name="checklist"
        size={120}
        className="hidden xl:block xl:-left-44 xl:top-2 2xl:-left-60"
      />
      <DoodleAsset
        name="matrix"
        size={130}
        className="hidden xl:block xl:-right-44 xl:top-[48%] 2xl:-right-60"
      />
      <CharacterAsset
        name="prioritization"
        size={180}
        className="hidden xl:block xl:-left-48 xl:top-[34%] 2xl:-left-72"
      />
      <SectionHeading
        id="skills-heading"
        index={skills.index}
        label={skills.label}
        title={skills.title}
      />

      <RevealGroup className="space-y-8">
        {skills.groups.map((group) => (
          <Reveal key={group.label} standalone={false}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent-pink">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-hairline px-3 py-1 text-sm text-fg transition-colors hover:border-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
