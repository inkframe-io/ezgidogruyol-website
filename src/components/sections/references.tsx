"use client";

import { ArrowUpRight } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CharacterAsset } from "@/components/character-asset";

export function References() {
  const { t } = useLocale();
  const { references } = t;

  return (
    <section
      id="references"
      aria-labelledby="references-heading"
      className="relative scroll-mt-24"
    >
      <CharacterAsset
        name="user-interview"
        size={185}
        className="hidden xl:block xl:-right-56 xl:-top-4 2xl:-right-72"
      />
      <SectionHeading
        id="references-heading"
        index={references.index}
        label={references.label}
        title={references.title}
      />

      <Reveal>
        <p className="mb-6 text-base text-muted">{references.intro}</p>
      </Reveal>

      <Reveal>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {references.items.map((ref, i) => (
            <li
              key={`${ref.name}-${i}`}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
            >
              <span className="font-medium text-fg">
                {ref.name}
                <span className="font-normal text-muted"> — {ref.roleCompany}</span>
              </span>
              <a
                href={ref.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:underline"
              >
                LinkedIn
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
