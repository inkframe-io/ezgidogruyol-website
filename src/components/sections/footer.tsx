"use client";

import * as React from "react";
import { ArrowDownToLine, Copy } from "lucide-react";
import { toast } from "sonner";

import { DoodleAsset } from "@/components/doodle-asset";
import { CharacterAsset } from "@/components/character-asset";

/** lucide-react v1 dropped brand marks, so the LinkedIn glyph is an inline SVG. */
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function SiteFooter() {
  const { t } = useLocale();
  const { footer, meta } = t;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(meta.email);
      toast.success(footer.copiedToast);
    } catch {
      // Clipboard blocked — fall back to opening the mail client.
      window.location.href = `mailto:${meta.email}`;
    }
  }

  const builtWith = footer.builtWith.replace(
    "{year}",
    String(new Date().getFullYear())
  );

  return (
    <footer className="mt-24 border-t border-hairline md:mt-32">
      <div className="relative mx-auto max-w-4xl px-6 py-16">
        <DoodleAsset
          name="notes"
          size={128}
          className="hidden xl:block xl:-right-44 xl:top-12 2xl:-right-60"
        />
        <DoodleAsset
          name="calendar"
          size={120}
          className="hidden xl:block xl:-left-44 xl:top-16 2xl:-left-60"
        />
        <CharacterAsset
          name="friendly-wave"
          size={180}
          className="hidden xl:block xl:-right-48 xl:bottom-0 2xl:-right-72"
        />
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
            {footer.heading}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted">
            {footer.subheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={meta.cvPath} download>
              <ArrowDownToLine className="size-4" />
              {footer.downloadCv}
            </Button>

            <button
              type="button"
              onClick={copyEmail}
              aria-label={footer.copyEmailLabel}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-hairline px-5 text-sm text-fg transition-colors hover:border-fg"
            >
              <Copy className="size-4 text-accent-pink" aria-hidden="true" />
              {meta.email}
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.linkedinLabel}
              className="text-muted transition-colors hover:text-fg"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>

          <p className="mt-12 font-mono text-xs text-muted">{builtWith}</p>
        </Reveal>
      </div>
    </footer>
  );
}
