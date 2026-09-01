import Image from "next/image";

import { cn } from "@/lib/utils";

/** Hand-drawn PNG doodles sliced from the asset sheet (public/doodles/*.webp). */
export type DoodleName =
  | "point"
  | "talk"
  | "timeline"
  | "kanban"
  | "analytics"
  | "wireframe-phone"
  | "wireframe-web"
  | "chat"
  | "matrix"
  | "target"
  | "calendar"
  | "search"
  | "idea"
  | "notes"
  | "checklist"
  | "flag";

type DoodleAssetProps = {
  name: DoodleName;
  /** Positioning / sizing utilities. Size via width/height classes (e.g. w-28). */
  className?: string;
  /** Rendered pixel box (square source tiles ~314px). Keep small — decorative. */
  size?: number;
};

/**
 * Decorative only: absolutely positioned in section margins, hidden on narrow
 * screens by the caller (`hidden xl:block`), never announced to assistive tech.
 */
export function DoodleAsset({ name, className, size = 130 }: DoodleAssetProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none opacity-90",
        className
      )}
    >
      <Image
        src={`/doodles/${name}.webp`}
        alt=""
        width={size}
        height={size}
        className="h-auto w-full"
      />
    </span>
  );
}
