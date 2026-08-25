import { ProjectBella } from "@/components/project-bella";
import { ProjectPipeline } from "@/components/project-pipeline";
import { ProjectTrading } from "@/components/project-trading";

export const metadata = {
  title: "Projects · Max Gregori",
  description: "Selected projects.",
};

export default function ProjectsPage() {
  return (
    <main className="isolate flex flex-1 flex-col">
      <div className="pointer-events-none h-20 shrink-0 lg:h-24" aria-hidden />
      <section className="pt-24 pb-8 md:pt-32 md:pb-10">
        <div className="flex w-full flex-col px-6 lg:px-12">
          <h1 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            Projects
          </h1>
        </div>
      </section>
      <ProjectBella className="pt-8 md:pt-10" />
      <ProjectTrading />
      <ProjectPipeline />
    </main>
  );
}
