"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Objective", href: "#objective" },
  { label: "Project", href: "#project" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "References", href: "#references" },
];

const stagger = ["delay-[100ms]", "delay-[150ms]", "delay-[200ms]", "delay-[250ms]", "delay-[300ms]", "delay-[350ms]", "delay-[400ms]"];

export function IslandNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating glass pill */}
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5 md:pt-6">
        <nav className="flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-white/[0.04] p-1.5 pl-5 ring-1 ring-white/10 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_40px_-20px_rgba(0,0,0,0.6)] md:w-max md:max-w-none">
          <a href="#top" className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-foreground/90">
            N<span className="text-ice">.</span>Ndlwana
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13px] text-muted transition-colors duration-500 ease-spring hover:bg-white/[0.06] hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-transform duration-500 ease-spring hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
          >
            Let&apos;s connect
          </a>

          {/* Hamburger → X morph */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10 transition-transform duration-500 ease-spring active:scale-[0.94] md:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-foreground transition-transform duration-700 ease-spring ${open ? "translate-y-0 rotate-45" : "-translate-y-[4px]"}`}
            />
            <span
              className={`absolute h-px w-4 bg-foreground transition-transform duration-700 ease-spring ${open ? "translate-y-0 -rotate-45" : "translate-y-[4px]"}`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen glass overlay */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-center bg-black/80 px-8 backdrop-blur-3xl transition-opacity duration-700 ease-spring md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <ul className="space-y-3">
          {[...links, { label: "Contact", href: "#contact" }].map((link, i) => (
            <li key={link.href} className="overflow-hidden">
              <a
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`block text-5xl font-medium tracking-[-0.04em] text-foreground transition-all duration-700 ease-spring ${stagger[i]} ${open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
