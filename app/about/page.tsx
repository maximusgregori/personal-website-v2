import { JourneyGlobe } from "@/components/journey-globe";
import { JOURNEY_STOPS } from "@/lib/journey";

export const metadata = {
  title: "About · Max Gregori",
  description: "About Max Gregori.",
};

export default function AboutPage() {
  return (
    <main className="isolate flex flex-1 flex-col">
      <div className="pointer-events-none h-20 shrink-0 lg:h-24" aria-hidden />
      <section className="py-24 md:py-32">
        <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
          <h1 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            About
          </h1>
          <div className="flex flex-col gap-4">
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              A friend and I were in high school when we noticed that most web
              design agencies wouldn't take on charities or small nonprofits.
              The budgets were too small, the projects too simple. So these
              organizations just went without, or scraped by with whatever they
              could manage on their own. We didn't have much overhead. We were
              teenagers. So we started building affordable websites for them
              around New York City. It wasn't a grand plan, but it was the first
              time I looked at a problem everyone else seemed to accept and
              thought, "We could actually fix this."
            </p>
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              That instinct kept showing up. Growth roles at startups, two
              summers in investment banking, a deep dive into healthcare IT
              where I managed large-scale projects and built service lines from
              scratch. The problems that pulled me in were never technical to
              begin with. They were operational gaps with technical solutions.
              What a business needed versus what it actually had the
              infrastructure to do.
            </p>
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              When I'm not building, I'm watching Formula One. I picked that up
              around four years old, watching races in my grandparents' basement
              in Germany. Some things stay with you, no matter how often you
              move.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
          <div className="flex flex-col gap-4">
            <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              The Journey
            </h2>
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              Three continents, eight cities, and the adaptability that comes
              from starting over more times than most.
            </p>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="min-w-0 lg:col-span-3">
              <JourneyGlobe />
            </div>
            <ol
              role="list"
              className="min-w-0 list-none lg:col-span-2"
              aria-label="Places lived"
            >
              {JOURNEY_STOPS.map((stop) => (
                <li
                  key={`${stop.city}-${stop.label}`}
                  className="flex flex-col gap-1 border-t border-white/12 py-5 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {stop.city}, {stop.country}
                  </h3>
                  <p className="text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                    {stop.label}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
