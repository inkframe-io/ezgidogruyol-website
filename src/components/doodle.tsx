import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Two hand-drawn marks from the decorative-line asset pack, used sparingly:
 *  - <Squiggle> (triple-underline) under the hero name
 *  - <Arrow> (curved-arrow) next to the primary CTA
 * Both are decorative (aria-hidden). Size/position via `className`.
 */

export function Squiggle({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none block select-none", className)}>
      <Image
        src="/lines/magenta-brush-swoosh.webp"
        alt=""
        width={220}
        height={113}
        className="h-auto w-full"
      />
    </span>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none block select-none", className)}>
      <Image
        src="/lines/curved-arrow.webp"
        alt=""
        width={120}
        height={65}
        className="h-auto w-full"
      />
    </span>
  );
}
