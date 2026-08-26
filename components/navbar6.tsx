"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Talks", href: "/talks" },
  { label: "About", href: "/about" },
];

interface Navbar6Props {
  className?: string;
}

const Navbar6 = ({ className }: Navbar6Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "absolute top-5 left-1/2 z-50 w-[min(94%,48rem)] -translate-x-1/2 rounded-full border border-white/12 bg-background/90 backdrop-blur-xl lg:top-8 lg:bg-glass lg:backdrop-blur-md",
        className
      )}
    >
      <div className="flex items-center justify-between px-5 py-2.5 sm:px-6">
        <Link
          href="/"
          aria-label="Homepage"
          className="font-sans text-sm font-medium tracking-tight text-foreground"
        >
          Max Gregori
        </Link>

        <nav className="flex items-center gap-1 max-lg:hidden">
          {ITEMS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium",
                  isActive
                    ? "bg-white/8 text-foreground"
                    : "text-muted-foreground hover:bg-white/8 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="relative size-8 text-muted-foreground lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <span className="pointer-fine:hidden absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 w-full rounded-full bg-current ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 w-full rounded-full bg-current ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 w-full rounded-full bg-current ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 top-[calc(100%+0.75rem)] flex flex-col rounded-2xl border border-white/12 bg-background p-5 lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-col">
          {ITEMS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "py-3 text-base font-medium first:pt-0 last:pb-0",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export { Navbar6 };
