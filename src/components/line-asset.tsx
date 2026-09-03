import Image from "next/image";

import { cn } from "@/lib/utils";

/** Hand-drawn line marks (public/lines/*.webp). */
export type LineName =
  | "triple-underline"
  | "curved-arrow"
  | "s-curve"
  | "double-wave"
  | "halftone-divider"
  | "open-spiral"
  | "magenta-brush-swoosh"
  | "node-connector";

type LineAssetProps = {
  name: LineName;
  className?: string;
  /** Source tiles are landscape-ish; width drives the box, height auto. */
  width?: number;
  height?: number;
  /** In normal flow (section dividers) instead of absolutely positioned. */
  flow?: boolean;
};

/** Decorative line / squiggle. Never announced to assistive tech. */
export function LineAsset({
  name,
  className,
  width = 200,
  height = 120,
  flow = false,
}: LineAssetProps) {
  return (
    <span
      aria-hidden="true"
      style={flow ? undefined : { width }}
      className={cn(
        "pointer-events-none select-none opacity-70",
        flow ? "block" : "absolute",
        className
      )}
    >
      <Image
        src={`/lines/${name}.webp`}
        alt=""
        width={width}
        height={height}
        className="h-auto w-full"
      />
    </span>
  );
}
