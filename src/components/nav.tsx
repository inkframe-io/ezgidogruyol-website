"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SECTION_IDS = ["about", "work", "projects", "skills", "references"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export function Nav() {
  const { t, locale, toggleLocale } = useLocale();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<SectionId | null>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null);

  const links: { id: SectionId; label: string }[] = [
    { id: "about", label: t.meta.nav.about },
    { id: "work", label: t.meta.nav.work },
    { id: "projects", label: t.meta.nav.projects },
    { id: "skills", label: t.meta.nav.skills },
    { id: "references", label: t.meta.nav.references },
  ];

  // Track the section currently in the reading zone.
  React.useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape; focus the first link when it opens.
  React.useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Let the browser handle the actual scroll natively via the anchor's href
  // (smooth + sticky-nav offset come from `scroll-behavior` / `scroll-padding-top`
  // in globals.css). This just closes the mobile menu and gives instant active
  // feedback; the IntersectionObserver keeps it in sync afterwards.
  const handleNav = React.useCallback((id: string) => {
    setOpen(false);
    if (id !== "top") setActive(id as SectionId);
  }, []);

  const otherLocale = locale === "en" ? "TR" : "EN";

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6"
      >
        <a
          href="#top"
          onClick={() => handleNav("top")}
          className="font-serif text-lg italic tracking-tight text-fg"
        >
          {t.meta.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleNav(link.id)}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-fg",
                  active === link.id ? "text-fg" : "text-muted"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t.meta.languageSwitchLabel}
            className="rounded-full px-2 py-1 font-mono text-xs text-muted transition-colors hover:text-fg"
          >
            {otherLocale}
          </button>

          <Button
            href={t.meta.cvPath}
            download
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t.meta.downloadCv}
          </Button>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-canvas px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link, i) => (
              <li key={link.id}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={`#${link.id}`}
                  onClick={() => handleNav(link.id)}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "block rounded-lg py-2 text-sm transition-colors hover:text-fg",
                    active === link.id ? "text-fg" : "text-muted"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href={t.meta.cvPath}
                download
                size="sm"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {t.meta.downloadCv}
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
