import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    number: "01",
    title: "Bella",
    description:
      "My girlfriend and my mom both love cooking, but their recipes were scattered across paper, social media, notes apps, and cookbooks. I built Bella, an AI-powered recipe manager that went from concept to the App Store.",
  },
  {
    number: "02",
    title: "Trading bot",
    description:
      "Prediction market bots were supposedly easy money. That didn't add up to me. I wanted to find out what it actually takes, starting from how weather data is measured, where it's hosted, and how to price temperature markets with real statistical models.",
  },
  {
    number: "03",
    title: "Creative pipeline",
    description:
      "AI-generated content was everywhere, and I wanted to know what it actually takes to go from a one-line idea to a publish-ready video. So I built the full pipeline: script, voiceover, generated scenes, synced captions, published.",
  },
] as const;

type Props = {
  className?: string;
};

const Projects13 = ({ className }: Props) => {
  return (
    <section
      id="projects"
      className={cn("scroll-mt-24 py-24 md:py-32", className)}
    >
      <div className="flex w-full flex-col px-6 lg:px-12">
        <div className="flex justify-between gap-10 border-b border-white/12 pb-2">
          <h2 className="w-1/4 font-sans text-sm tracking-tight text-muted-foreground">
            Projects
          </h2>
          <p className="hidden w-3/4 font-sans text-sm tracking-tight text-muted-foreground lg:block">
            Description
          </p>
        </div>
        <ul role="list" className="w-full">
          {PROJECTS.map((project) => (
            <li
              key={project.number}
              className="flex w-full flex-col justify-between gap-6 border-b border-white/12 py-10 lg:flex-row lg:gap-10 lg:py-12"
            >
              <div className="flex min-w-0 gap-4 font-sans text-xl font-medium tracking-tight text-foreground lg:w-1/4">
                <p className="shrink-0 tabular-nums text-muted-foreground">
                  {project.number}
                </p>
                <h3 className="min-w-0 text-balance">{project.title}</h3>
              </div>
              <p className="min-w-0 text-lg/8 text-pretty text-muted-foreground sm:text-base/7 lg:w-3/4">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects13 };
