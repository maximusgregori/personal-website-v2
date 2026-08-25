import Link from "next/link";

import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    number: "01",
    title: "Bella",
    href: "/projects#bella",
    description:
      "My girlfriend and my mom both love cooking, but their recipes were scattered across paper, social media, notes apps, and cookbooks. I built Bella, an AI-powered recipe manager that went from concept to the App Store.",
  },
  {
    number: "02",
    title: "Trading Bot",
    href: "/projects#trading-bot",
    description:
      "Prediction market bots were supposedly easy money. That didn't add up to me. I wanted to find out what it actually takes, starting from how weather data is measured, where it's hosted, and how to price temperature markets with real statistical models.",
  },
  {
    number: "03",
    title: "Creative Pipeline",
    href: "/projects#creative-pipeline",
    description:
      "AI-generated content was everywhere, and I wanted to know what it actually takes to go from a one-line idea to a publish-ready video. So I built the full pipeline: script, voiceover, generated scenes, synced captions, published.",
  },
] as const;

type Props = {
  className?: string;
  headingAs?: "h1" | "h2";
};

const Projects13 = ({ className, headingAs: HeadingTag = "h2" }: Props) => {
  return (
    <section
      id="projects"
      className={cn("scroll-mt-24 py-24 md:py-32", className)}
    >
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <HeadingTag className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
          Projects
        </HeadingTag>
        <ul role="list" className="w-full">
          {PROJECTS.map((project) => (
            <li
              key={project.number}
              className="border-b border-white/12 first:pt-0 lg:first:pt-0"
            >
              <Link
                href={project.href}
                className="group flex w-full flex-col justify-between gap-6 py-10 lg:flex-row lg:gap-10 lg:py-12"
              >
                <div className="flex min-w-0 gap-4 font-sans text-xl font-medium tracking-tight text-foreground lg:w-1/4">
                  <p className="shrink-0 tabular-nums text-muted-foreground">
                    {project.number}
                  </p>
                  <div className="min-w-0">
                    <h3 className="text-balance">{project.title}</h3>
                    <p className="mt-1 font-sans text-base font-normal text-muted-foreground sm:text-sm group-hover:text-foreground">
                      View project
                    </p>
                  </div>
                </div>
                <p className="min-w-0 text-lg/8 text-pretty text-muted-foreground sm:text-base/7 lg:w-3/4">
                  {project.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects13 };
