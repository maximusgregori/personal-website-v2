import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function LinearClose({ className }: Props) {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="flex w-full flex-col gap-6 px-6 lg:px-12">
        <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
          06
        </p>
        <h2 className="max-w-[24ch] text-3xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
          Based in Austin, Texas, Central Time.
        </h2>
        <p className="max-w-[48ch] text-lg text-pretty text-muted-foreground sm:text-base">
          Feel free to email me at{" "}
          <a
            href="mailto:max.c.gregori@gmail.com"
            className="text-foreground underline-offset-4 hover:underline"
          >
            max.c.gregori@gmail.com
          </a>
          . The rest of my site contains more details on my background.
        </p>
        <p className="text-base sm:text-sm">
          <Link
            href="/"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Home
          </Link>
          <span className="text-muted-foreground"> · </span>
          <Link
            href="/projects"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Projects
          </Link>
          <span className="text-muted-foreground"> · </span>
          <Link
            href="/talks"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Talks
          </Link>
          <span className="text-muted-foreground"> · </span>
          <Link
            href="/about"
            className="text-foreground underline-offset-4 hover:underline"
          >
            About
          </Link>
        </p>
      </div>
    </section>
  );
}
