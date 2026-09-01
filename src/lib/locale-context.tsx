"use client";

import * as React from "react";

import { content, type Locale, type SiteContent } from "@/content";

const STORAGE_KEY = "locale";

/* ------------------------------------------------------------------ */
/*  localStorage-backed store, read via useSyncExternalStore so it is  */
/*  SSR-safe and free of setState-in-effect.                           */
/* ------------------------------------------------------------------ */

function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "tr";
}

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function getSnapshot(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    /* localStorage unavailable */
  }
  return "en";
}

function getServerSnapshot(): Locale {
  return "en";
}

function writeLocale(next: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore write failures (private mode, etc.) */
  }
  listeners.forEach((l) => l());
}

/* ------------------------------------------------------------------ */

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  /** The content tree for the active locale. */
  t: SiteContent;
};

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Mirror the active locale onto <html lang> for assistive tech.
  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => writeLocale(next), []);
  const toggleLocale = React.useCallback(
    () => writeLocale(getSnapshot() === "en" ? "tr" : "en"),
    []
  );

  const value = React.useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: content[locale] }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within <LocaleProvider>");
  }
  return ctx;
}
