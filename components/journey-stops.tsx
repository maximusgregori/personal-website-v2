"use client";

import { useCallback, useState, type UIEvent } from "react";

import { JOURNEY_STOPS } from "@/lib/journey";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const MASK_REST =
  "linear-gradient(to bottom, #fff 0%, #fff calc(100% - 4rem), transparent)";
const MASK_MID =
  "linear-gradient(to bottom, transparent, #fff 1.75rem, #fff calc(100% - 4rem), transparent)";
const MASK_END =
  "linear-gradient(to bottom, transparent, #fff 1.75rem, #fff 100%)";

const JourneyStops = ({ className }: Props) => {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const onScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    setAtTop(scrollTop <= 1);
    setAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
  }, []);

  const maskImage = atTop ? MASK_REST : atBottom ? MASK_END : MASK_MID;

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
      <div
        onScroll={onScroll}
        className="hidden h-[36rem] overflow-y-auto overscroll-contain lg:block [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.28)_transparent]"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {list}
      </div>
    </div>
  );
};

export { JourneyStops };
