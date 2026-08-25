"use client";

import { useEffect, useRef, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { JOURNEY_STOPS } from "@/lib/journey";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const JourneyStops = ({ className }: Props) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const viewport = frameRef.current?.querySelector(
      "[data-slot=scroll-area-viewport]"
    );
    if (!(viewport instanceof HTMLElement)) {
      return;
    }

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      setAtTop(scrollTop <= 1);
      setAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
    };

    update();
    viewport.addEventListener("scroll", update, { passive: true });
    return () => viewport.removeEventListener("scroll", update);
  }, []);

  const maskImage = atTop
    ? "linear-gradient(to bottom, black 0%, black 88%, transparent)"
    : atBottom
      ? "linear-gradient(to bottom, transparent, black 12%, black 100%)"
      : "linear-gradient(to bottom, transparent, black 10%, black 88%, transparent)";

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
      <div ref={frameRef} className="relative hidden h-[36rem] lg:block">
        <ScrollArea className="h-full" style={{ maskImage, WebkitMaskImage: maskImage }}>
          {list}
        </ScrollArea>
      </div>
    </div>
  );
};

export { JourneyStops };
