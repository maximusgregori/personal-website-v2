"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { JOURNEY_STOPS } from "@/lib/journey";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const JourneyStops = ({ className }: Props) => {
  const list = (
    <ol role="list" className="min-w-0 list-none pr-3" aria-label="Places lived">
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
  );

  return (
    <div className={cn(className)}>
      <div className="lg:hidden">{list}</div>
      <div className="relative hidden h-[36rem] lg:block">
        <ScrollArea className="h-full [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_88%,transparent)]">
          {list}
        </ScrollArea>
      </div>
    </div>
  );
};

export { JourneyStops };
