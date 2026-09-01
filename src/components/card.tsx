import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  /** Small icon shown top-left (e.g. a lucide icon). Rendered in the accent color. */
  icon?: React.ReactNode;
  /** Which accent tints the icon. */
  accent?: "pink" | "blue";
  title?: React.ReactNode;
  /** Optional small text shown under the title (role · studio · dates). */
  eyebrow?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** Render as <article> by default; override for semantics if needed. */
  as?: React.ElementType;
};

export function Card({
  icon,
  accent = "pink",
  title,
  eyebrow,
  children,
  className,
  as: Tag = "article",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "group rounded-2xl border border-hairline bg-canvas p-6 transition-colors hover:border-fg",
        className
      )}
    >
      {icon ? (
        <div
          aria-hidden="true"
          className={cn(
            "mb-4 flex size-9 items-center justify-center rounded-lg border border-hairline [&_svg]:size-4",
            accent === "pink" ? "text-accent-pink" : "text-accent-blue"
          )}
        >
          {icon}
        </div>
      ) : null}

      {title ? (
        <h3 className="text-lg font-bold tracking-tight text-fg">{title}</h3>
      ) : null}

      {eyebrow ? (
        <p className="mt-1 font-mono text-xs text-muted">{eyebrow}</p>
      ) : null}

      {children ? (
        <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
      ) : null}
    </Tag>
  );
}
