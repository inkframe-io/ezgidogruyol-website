"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

/**
 * Light-only toast host. This site ships a single (white) theme, so there is
 * no next-themes wiring here — the toast styling is pinned to light.
 */
function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-canvas)",
          "--normal-text": "var(--color-fg)",
          "--normal-border": "var(--color-hairline)",
          "--border-radius": "12px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster };
