"use client";

import { ArrowDownToLine } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Squiggle, Arrow } from "@/components/doodle";
import { DoodleAsset } from "@/components/doodle-asset";
import { CharacterAsset } from "@/components/character-asset";

export function Hero() {
  const { t } = useLocale();
  const { hero, meta } = t;

  return (
    <section
      id="top"
      className="relative scroll-mt-24 pt-16 pb-4 text-center sm:pt-20"
    >
      {/* Decorative doodles — desktop only, never overlap the copy. */}
      <DoodleAsset
        name="timeline"
        size={140}
        className="hidden xl:block xl:-right-44 xl:top-6 2xl:-right-60"
      />
      <DoodleAsset
        name="target"
        size={116}
        className="hidden xl:block xl:-left-44 xl:top-10 2xl:-left-60"
      />
      <DoodleAsset
        name="chat"
        size={124}
        className="hidden xl:block xl:-right-40 xl:bottom-2 2xl:-right-56"
      />

      <RevealGroup>
        {/* Ezgi — in the flow, visible on every breakpoint. */}
        <Reveal standalone={false}>
          <CharacterAsset
            name="roadmap-presentation"
            flow
            priority
            size={240}
            className="mx-auto w-36 sm:w-44 lg:w-52"
          />
        </Reveal>

        <Reveal standalone={false}>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            {hero.headline}
          </h1>
          <Squiggle className="mx-auto -mt-2 w-32 sm:w-40" />
        </Reveal>

        <Reveal
          standalone={false}
          className="mx-auto mt-6 max-w-2xl text-lg font-medium text-fg sm:text-xl"
        >
          {hero.positioning}
        </Reveal>

        <Reveal
          standalone={false}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted"
        >
          {hero.subline}
        </Reveal>

        {/* Facts row */}
        <Reveal standalone={false} className="mt-10">
          <dl className="mx-auto grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 font-mono sm:max-w-2xl sm:grid-cols-4">
            {hero.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center gap-1">
                <dt className="text-[10px] uppercase tracking-[0.15em] text-muted">
                  {fact.label}
                </dt>
                <dd className="text-[13px] text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* CTAs */}
        <Reveal
          standalone={false}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="relative">
            <Arrow className="absolute -left-14 -top-9 hidden w-12 -scale-x-100 sm:block" />
            <Button href={meta.cvPath} download>
              <ArrowDownToLine className="size-4" />
              {hero.ctaPrimary}
            </Button>
          </div>
          <Button
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            {hero.ctaSecondary}
          </Button>
        </Reveal>
      </RevealGroup>
    </section>
  );
}
