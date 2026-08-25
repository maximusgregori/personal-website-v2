"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useCallback, useRef, useState, type UIEvent } from "react";

import { Button } from "@/components/ui/button";
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const onScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    setAtTop(scrollTop <= 1);
    setAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }
    scroller.scrollBy({
      top: direction * Math.round(scroller.clientHeight * 0.55),
      behavior: "smooth",
    });
  };

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
      <div className="relative hidden h-[36rem] lg:block">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="h-full overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <div className="pb-14">{list}</div>
        </div>
        {!atTop ? (
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            aria-label="Show previous cities"
            onClick={() => scrollByPage(-1)}
            className="absolute top-3 right-2 z-10 size-11 rounded-full bg-white/12 text-foreground backdrop-blur-xl inset-ring inset-ring-white/20 hover:bg-white/20"
          >
            <ChevronUp className="size-5" />
          </Button>
        ) : null}
        {!atBottom ? (
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            aria-label="Show more cities"
            onClick={() => scrollByPage(1)}
            className="absolute right-2 bottom-3 z-10 size-11 rounded-full bg-white/12 text-foreground backdrop-blur-xl inset-ring inset-ring-white/20 hover:bg-white/20"
          >
            <ChevronDown className="size-5" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export { JourneyStops };
