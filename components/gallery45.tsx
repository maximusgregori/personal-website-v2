import { cn } from "@/lib/utils";

const SHOTS = [
  {
    href: "https://proteahq.com/",
    src: "/chapters/protea-product.png",
    title: "Autonomous healthcare technology delivery in Protea",
    host: "app",
    chrome: false,
  },
  {
    href: "https://proteahq.com/",
    src: "/chapters/protea-analytics.png",
    title: "Predictive insights on procurement and deals",
    host: "app",
    chrome: false,
  },
  {
    href: "https://proteahq.com/",
    src: "/chapters/protea-home.jpg",
    title: "Website",
    host: "proteahq.com",
    chrome: true,
  },
  {
    href: "https://proteahq.com/protea-ai",
    src: "/chapters/protea-ai.jpg",
    title: "Protea AI",
    host: "proteahq.com/protea-ai",
    chrome: true,
  },
] as const;

type Props = {
  className?: string;
};

const Gallery45 = ({ className }: Props) => {
  return (
    <section className={cn("scroll-mt-24 py-24 md:py-32", className)}>
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
            Chapter 05
          </p>
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-16">
            <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Protea
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                After experiencing first hand how manual the process of
                healthcare technology procurement, delivery, and management is,
                I was determined to find a more efficient way.
              </p>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                Advances in LLMs finally made it possible to build one, so I
                started Protea.
              </p>
            </div>
          </div>
        </div>
        <div className="@container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SHOTS.map((shot) => (
              <figure key={shot.title} className="flex min-w-0 flex-col gap-3">
                <a
                  href={shot.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-xl bg-glass backdrop-blur-xl inset-ring inset-ring-white/12"
                >
                  {shot.chrome ? (
                    <div className="flex h-9 items-center gap-2 border-b border-white/12 px-3 font-sans text-sm text-muted-foreground">
                      <span aria-hidden className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#FF5F57]" />
                        <span className="size-2 rounded-full bg-[#FEBC2E]" />
                        <span className="size-2 rounded-full bg-[#28C840]" />
                      </span>
                      <span className="min-w-0 truncate">{shot.host}</span>
                    </div>
                  ) : null}
                  <img
                    src={shot.src}
                    alt=""
                    className="aspect-video w-full object-cover object-top outline-1 -outline-offset-1 outline-white/10"
                  />
                </a>
                <figcaption className="px-1 font-sans text-base/7 text-muted-foreground sm:text-sm/6">
                  {shot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery45 };
