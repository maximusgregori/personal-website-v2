import { GitHubLink } from "@/components/github-link";
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
    <section
      id="trading-bot"
      className={cn("scroll-mt-24 py-24 md:py-32", className)}
    >
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
            02
          </p>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div className="flex min-w-0 flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                  Trading Bot
                </h2>
                <GitHubLink
                  href="https://github.com/maximusgregori/weather-bot"
                  label="Trading Bot on GitHub"
                />
              </div>
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
              <ol className="grid grid-cols-2 gap-3">
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
