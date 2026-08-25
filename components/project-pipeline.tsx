import { cn } from "@/lib/utils";

const STAGES = [
  { title: "Idea", detail: "A one-line premise", tool: "n8n" },
  { title: "Script", detail: "Scene by scene", tool: "Claude" },
  { title: "Voice", detail: "Narration per scene", tool: "ElevenLabs" },
  { title: "Video", detail: "Generated clips", tool: "Veo 3.1 · Kling 3.0" },
  { title: "Publish", detail: "Captions, then out", tool: "Creatomate · Blotato" },
] as const;

type Props = {
  className?: string;
};

const ProjectPipeline = ({ className }: Props) => {
  return (
    <section
      id="creative-pipeline"
      className={cn("scroll-mt-24 py-24 md:py-32", className)}
    >
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
            03
          </p>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div className="flex min-w-0 flex-col gap-4">
              <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                Creative Pipeline
              </h2>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                AI-generated content was taking off, and most of the
                conversation around it felt like hype. I wanted to understand
                it from the ground up: not just the end product, but how you
                actually get there. I took the process apart, figured out how
                it was made, and rebuilt it myself.
              </p>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                You give it a one-line premise. The system writes a
                scene-by-scene script, produces voiceover per scene, generates
                AI-animated clips, and assembles a finished video with
                word-synced captions, ready to publish.
              </p>
            </div>
            <ol className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-6">
              {STAGES.map((stage, index) => (
                <li
                  key={stage.title}
                  className={cn(
                    "flex min-w-0 flex-col gap-2 rounded-xl bg-glass p-4 inset-ring inset-ring-white/12",
                    index < 2 ? "sm:col-span-3" : "sm:col-span-2"
                  )}
                >
                  <p className="font-sans text-sm tabular-nums text-muted-foreground">
                    0{index + 1}
                  </p>
                  <p className="font-sans text-base font-medium tracking-tight text-foreground sm:text-sm">
                    {stage.title}
                  </p>
                  <p className="text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                    {stage.detail}
                  </p>
                  <p className="mt-auto font-sans text-sm text-primary">
                    {stage.tool}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectPipeline };
