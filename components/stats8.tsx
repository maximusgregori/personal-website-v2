import { cn } from "@/lib/utils";

const STATS = [
  { value: "250+", label: "Projects directed" },
  { value: "200+", label: "Surgery centers covered" },
  { value: "60+", label: "Clinical go-lives" },
  { value: "40%", label: "Faster approvals" },
] as const;

type Props = {
  className?: string;
};

const Stats8 = ({ className }: Props) => {
  return (
    <section className={cn("scroll-mt-24 py-24 md:py-32", className)}>
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
            Chapter 03
          </p>
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-16">
            <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              SCA Health
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                After the University of Texas at Austin I started as a
                technical project manager at SCA Health, a national operator of
                outpatient surgery centers. The work was healthcare IT:
                implementations, networks, and support inside a large operator.
              </p>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                That is how I got deeper systems experience, running the
                infrastructure and clinical software those facilities depend on
                every day.
              </p>
            </div>
          </div>
        </div>
        <div className="@container">
          <dl className="grid auto-rows-fr grid-cols-1 gap-4 @min-[36rem]:grid-cols-2 @min-[72rem]:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex h-full min-w-0 flex-col justify-between gap-5 rounded-xl bg-glass p-5 inset-ring inset-ring-white/12"
              >
                <dt className="font-display text-5xl font-medium tracking-tight tabular-nums text-foreground md:text-6xl">
                  {stat.value}
                </dt>
                <dd className="font-sans text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export { Stats8 };
