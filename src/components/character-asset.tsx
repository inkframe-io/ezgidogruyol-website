import Image from "next/image";

import { cn } from "@/lib/utils";

/** Sketch illustrations of Ezgi (public/characters/*.webp). */
export type CharacterName =
  | "roadmap-presentation"
  | "neutral-laptop"
  | "kanban-planning"
  | "brainstorming"
  | "prioritization"
  | "user-interview"
  | "friendly-wave"
  | "thoughtful";

type CharacterAssetProps = {
  name: CharacterName;
  /** Positioning / sizing utilities. */
  className?: string;
  /** Rendered pixel box (square-ish source ~420–460px). */
  size?: number;
  /** In-flow (hero) vs absolutely positioned margin decoration (default). */
  flow?: boolean;
  /** Eager-load (use only for the above-the-fold hero character). */
  priority?: boolean;
};

/**
 * Recurring character illustration. Decorative — the name is already in the H1,
 * so it is hidden from assistive tech.
 */
export function CharacterAsset({
  name,
  className,
  size = 170,
  flow = false,
  priority = false,
}: CharacterAssetProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none select-none",
        flow ? "block" : "absolute",
        className
      )}
    >
      <Image
        src={`/characters/${name}.webp`}
        alt=""
        width={size}
        height={size}
        priority={priority}
        className="h-auto w-full"
      />
    </span>
  );
}
