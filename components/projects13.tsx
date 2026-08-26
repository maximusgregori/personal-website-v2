import Link from "next/link";

import { GitHubLink } from "@/components/github-link";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    number: "01",
    title: "Bella",
    href: "/projects#bella",
    repo: "https://github.com/maximusgregori/Bella",
    description:
      "My girlfriend and my mom both love cooking, but their recipes were scattered across paper, social media, notes apps, and cookbooks. I built Bella, an AI-powered recipe manager that went from concept to the App Store.",
  },
  {
    number: "02",
    title: "Trading Bot",
    href: "/projects#trading-bot",
    repo: "https://github.com/maximusgregori/weather-bot",
    description:
      "Prediction market bots were supposedly easy money. That didn't add up to me. I wanted to find out what it actually takes, starting from how weather data is measured, where it's hosted, and how to price temperature markets with real statistical models.",
  },
  {
    number: "03",
    title: "Creative Pipeline",
    href: "/projects#creative-pipeline",
    repo: undefined,
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
              className="flex w-full flex-col justify-between gap-6 border-b border-white/12 py-10 last:border-b-0 lg:flex-row lg:gap-10 lg:py-12"
            >
              <div className="flex min-w-0 gap-4 font-sans text-xl font-medium tracking-tight text-foreground lg:w-1/4">
                <p className="shrink-0 tabular-nums text-muted-foreground">
                  {project.number}
                </p>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <Link href={project.href} className="min-w-0 text-balance">
                      <h3>{project.title}</h3>
                    </Link>
                    {project.repo ? (
                      <GitHubLink
                        href={project.repo}
                        label={`${project.title} on GitHub`}
                        size="sm"
                      />
                    ) : null}
                  </div>
                  <Link
                    href={project.href}
                    className="mt-1 inline-block font-sans text-base font-normal text-muted-foreground sm:text-sm hover:text-foreground"
                  >
                    View project
                  </Link>
                </div>
              </div>
              <Link
                href={project.href}
                className="min-w-0 text-lg/8 text-pretty text-muted-foreground sm:text-base/7 lg:w-3/4"
              >
                {project.description}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects13 };
