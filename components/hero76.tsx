"use client";

import { Mail } from "lucide-react";
import { siGithub, siX } from "simple-icons";

import { AskMaxChat } from "@/components/hero/ask-max-chat";
import { HERO_LABELS, HERO_NAME } from "@/components/hero/copy";
import { cn } from "@/lib/utils";

const siLinkedin = {
  title: "LinkedIn",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

function BrandMark({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="size-6 shrink-0 fill-current"
      aria-hidden="true"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

const SOCIALS = [
  {
    href: "mailto:max@proteahq.com",
    label: "Email",
    icon: <Mail className="size-6 shrink-0" />,
  },
  {
    href: "https://linkedin.com/in/maxgregori",
    label: "LinkedIn",
    icon: <BrandMark path={siLinkedin.path} title={siLinkedin.title} />,
  },
  {
    href: "https://github.com/maximusgregori",
    label: "GitHub",
    icon: <BrandMark path={siGithub.path} title={siGithub.title} />,
  },
  {
    href: "https://x.com/maximusgregori",
    label: "X",
    icon: <BrandMark path={siX.path} title={siX.title} />,
  },
] as const;

type Props = {
  className?: string;
};

const Hero76 = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-dvh flex-col overflow-hidden",
        className
      )}
    >
      <div
        className="pointer-events-none h-20 shrink-0 lg:h-24"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-0 flex-1 items-center px-6 py-8 lg:px-12 lg:py-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 flex min-w-0 flex-col justify-center gap-6 md:gap-8">
            <h1 className="max-w-[20ch] text-5xl font-medium tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
              {HERO_NAME}
            </h1>
            <p className="max-w-[24ch] font-sans text-3xl font-medium tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
              {HERO_LABELS}
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="relative text-muted-foreground hover:text-foreground"
                >
                  {item.icon}
                  <span
                    className="pointer-fine:hidden absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="relative z-10 w-full min-w-0">
            <AskMaxChat />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero76 };
