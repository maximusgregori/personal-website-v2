import { Mail } from "lucide-react";
import Link from "next/link";
import { siGithub, siX } from "simple-icons";

import { cn } from "@/lib/utils";

const siLinkedin = {
  title: "LinkedIn",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

function BrandMark({ path, title }: { path: string; title: string }) {
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

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Talks", href: "/talks" },
] as const;

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

const Footer59 = ({ className }: Props) => {
  return (
    <section
      className={cn("border-t border-white/12 py-8 lg:py-10", className)}
    >
      <div className="px-6 lg:px-12">
        <footer className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="shrink-0 text-base font-normal text-muted-foreground sm:text-sm">
            © 2026 Max Gregori
          </p>
          <nav
            aria-label="Footer"
            className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-normal text-muted-foreground lg:flex-1 lg:justify-center"
          >
            {LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <ul
            role="list"
            className="flex w-full flex-wrap items-center justify-center gap-3 text-muted-foreground lg:w-auto lg:justify-end"
          >
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="relative hover:text-foreground"
                >
                  <span
                    className="pointer-fine:hidden absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2"
                    aria-hidden="true"
                  />
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
};

export { Footer59 };
