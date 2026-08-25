import { cn } from "@/lib/utils";

const STATS = [
  { value: "200+", label: "Markets per cycle" },
  { value: "20", label: "US cities" },
] as const;

const FLOW = [
  { title: "NOAA data", detail: "Real-time NWP ensembles" },
  { title: "Bias correction", detail: "Station-level adjustments" },
  { title: "Probability model", detail: "Empirical distributions" },
  { title: "Trade execution", detail: "Caps, ramps, breakers" },
] as const;

type Props = {
  className?: string;
};

const ProjectTrading = ({ className }: Props) => {
  return (
    <section className={cn("scroll-mt-24 py-24 md:py-32", className)}>
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
            02
          </p>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex min-w-0 flex-col gap-4">
              <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                Trading Bot
              </h2>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                Prediction markets were taking off and people were claiming you
                could set up a trading bot overnight. That did not add up to
                me. I wanted to find out what it actually takes, and whether
                there is a real edge behind the noise.
              </p>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                I started from first principles: how weather data is measured,
                where stations source it, and how it gets hosted. I put the
                system in an AWS data center co-located with NOAA&apos;s
                weather data to keep latency down. It is Python and NumPy. It
                ingests real-time NWP ensemble forecasts, builds probability
                distributions with station-level bias correction, and trades on
                prediction exchanges with risk controls: exposure ramps,
                drawdown circuit breakers, and per-market caps. It runs on EC2,
                processing over 200 markets per cycle across 20 US cities, and
                sends me performance reports.
              </p>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                The system is fully operational. More useful to me is what I
                learned building it. The gap between the hype and the reality
                is significant, and the only way I could have known that was by
                building the thing.
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-4">
              <dl className="grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-w-0 flex-col justify-between gap-5 rounded-xl bg-glass p-5 inset-ring inset-ring-white/12"
                  >
                    <dt className="font-display text-5xl font-medium tracking-tight tabular-nums text-foreground md:text-6xl">
                      {stat.value}
                    </dt>
                    <dd className="font-sans text-base/7 text-muted-foreground sm:text-sm/6">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="overflow-hidden rounded-xl bg-glass p-5 inset-ring inset-ring-white/12">
                <p className="font-sans text-sm text-muted-foreground">
                  NOAA ensemble fan
                </p>
                <svg
                  viewBox="0 0 320 140"
                  className="mt-4 h-36 w-full"
                  aria-hidden="true"
                >
                  {[
                    "M0 92 C80 88, 160 40, 320 18",
                    "M0 92 C80 90, 160 58, 320 44",
                    "M0 92 C80 92, 160 78, 320 70",
                    "M0 92 C80 94, 160 98, 320 96",
                    "M0 92 C80 96, 160 118, 320 122",
                  ].map((d) => (
                    <path
                      key={d}
                      d={d}
                      fill="none"
                      stroke="currentColor"
                      className="text-foreground/20"
                      strokeWidth="1.5"
                    />
                  ))}
                  <path
                    d="M0 92 C80 93, 160 86, 320 82"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                  />
                </svg>
                <p className="mt-2 text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                  Ensemble members in, one probability out, before a trade
                  fires.
                </p>
              </div>
              <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {FLOW.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex min-w-0 flex-col gap-1 rounded-xl bg-glass p-3 inset-ring inset-ring-white/12"
                  >
                    <p className="font-sans text-sm tabular-nums text-muted-foreground">
                      0{index + 1}
                    </p>
                    <p className="font-sans text-sm font-medium text-foreground">
                      {step.title}
                    </p>
                    <p className="text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                      {step.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectTrading };
