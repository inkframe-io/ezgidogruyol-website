"use client";

import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { DoodleAsset } from "@/components/doodle-asset";
import { CharacterAsset } from "@/components/character-asset";

export function About() {
  const { t } = useLocale();
  const { about } = t;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24"
    >
      <DoodleAsset
        name="search"
        size={120}
        className="hidden xl:block xl:-left-44 xl:top-4 2xl:-left-60"
      />
      <DoodleAsset
        name="wireframe-phone"
        size={110}
        className="hidden xl:block xl:-right-40 xl:bottom-0 2xl:-right-56"
      />
      <CharacterAsset
        name="neutral-laptop"
        size={180}
        className="hidden xl:block xl:-right-56 xl:top-2 2xl:-right-72"
      />
      <SectionHeading
        id="about-heading"
        index={about.index}
        label={about.label}
        title={about.title}
      />

      <div className="space-y-5 text-base leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>

      {about.pullQuote ? (
        <Reveal>
          <blockquote className="mt-10 border-l-2 border-accent-pink pl-5 text-lg font-medium text-fg">
            {about.pullQuote}
          </blockquote>
        </Reveal>
      ) : null}
    </section>
  );
}
