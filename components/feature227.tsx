import { CircleCheckBig } from "lucide-react";

import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  {
    title: "Rebuilt LotusFlare's website",
    detail:
      "I led the redesign of LotusFlare's website by coordinating across growth and engineering, then building the solution in WordPress.",
  },
  {
    title: "Interviewed key clients in Asia",
    detail:
      "I shadowed and interviewed key telecom clients in Indonesia, Singapore, and Malaysia, then presented a case study to the executive team.",
  },
  {
    title: "Raised satisfaction ~25%",
    detail:
      "I developed and implemented an automated bug-reporting process that raised customer satisfaction by ~25%.",
  },
  {
    title: "Staffed a call center in Serbia",
    detail:
      "I helped deploy LotusFlare's new call center in Belgrade by coordinating new engineering hires.",
  },
] as const;

type Props = {
  className?: string;
};

const Feature227 = ({ className }: Props) => {
  return (
    <section
      id="work"
      className={cn("scroll-mt-24 py-24 md:py-32", className)}
    >
      <div className="grid w-full items-start gap-12 px-6 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-12">
        <div className="flex min-w-0 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
              Chapter 01
            </p>
            <h2 className="max-w-[24ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              LotusFlare
            </h2>
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              I started in tech as a growth intern at LotusFlare in San Jose.
              It's an AI-powered digital commerce and monetization platform
              for global telecommunications and media service providers.
            </p>
          </div>
          <dl className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex h-full min-w-0 flex-col gap-2 rounded-xl bg-glass p-4 inset-ring inset-ring-white/12"
              >
                <dt className="flex items-start gap-2 font-medium text-base/7 text-foreground sm:text-sm/6">
                  <CircleCheckBig className="size-6 shrink-0 stroke-primary" />
                  {item.title}
                </dt>
                <dd className="pl-8 text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="min-w-0">
          <a
            href="https://lotusflare.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-glass backdrop-blur-xl inset-ring inset-ring-white/12"
          >
            <div className="flex h-9 shrink-0 items-center gap-2 border-b border-white/12 px-4">
              <span aria-hidden className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="size-2.5 rounded-full bg-[#28C840]" />
              </span>
              <span className="min-w-0 truncate font-sans text-sm text-muted-foreground">
                lotusflare.com
              </span>
            </div>
            <div className="relative min-h-0 w-full flex-1 overflow-hidden max-lg:aspect-video">
              <img
                src="/chapters/lotusflare-home.png"
                alt=""
                className="absolute inset-0 size-full object-cover object-top outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Feature227 };
