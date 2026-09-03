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
  /** Positioning utilities. */
  className?: string;
  /** Rendered width in px (square source tiles are ~314px — keep small). */
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
      style={{ width: size }}
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
