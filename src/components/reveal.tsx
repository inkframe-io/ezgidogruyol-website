import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Subtle entrance animation (fade + 8px rise), played once on mount via CSS.
 * Automatically disabled under `prefers-reduced-motion` (see globals.css).
 *
 * - Standalone: animates on its own.
 * - Inside <RevealGroup>: pass `standalone={false}`; the group staggers children.
 */
export function Reveal({
  children,
  className,
}: RevealProps & { standalone?: boolean }) {
  // `standalone` is accepted for call-site clarity (grouped vs. on its own) but
  // both cases render the same; the parent <RevealGroup> handles staggering.
  return <div className={cn("reveal", className)}>{children}</div>;
}

/** Wrapper that staggers the entrance of its direct children. */
export function RevealGroup({ children, className }: RevealProps) {
  return (
    <div className={cn("reveal-group", className)}>{children}</div>
  );
}
