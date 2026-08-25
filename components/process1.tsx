import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    title: "IT staffing",
    detail:
      "Integrity HIT was placing project managers and nursing informaticists into healthcare IT roles.",
  },
  {
    step: "02",
    title: "On-site support",
    detail:
      "Integrations, de-integrations, expansions, and structured cabling: the physical work of opening, growing, or closing a site.",
  },
  {
    step: "03",
    title: "Managed IT",
    detail:
      "MSP services for outpatient practices: monitoring, help desk, security, and maintenance as ongoing IT support.",
  },
  {
    step: "04",
    title: "Consulting",
    detail:
      "Advising operators who know healthcare and need an IT guide at launch or later.",
  },
  {
    step: "05",
    title: "Branding",
    detail:
      "As part of the expansion I rebuilt Integrity's branding: the website, brochures, and flyers.",
  },
] as const;

type Props = {
  className?: string;
};

const Process1 = ({ className }: Props) => {
  return (
    <section className={cn("scroll-mt-24 py-24 md:py-32", className)}>
      <div className="grid w-full grid-cols-1 items-start gap-12 px-6 lg:grid-cols-5 lg:gap-16 lg:px-12">
        <div className="flex min-w-0 flex-col gap-8 lg:col-span-2">
          <div className="flex flex-col gap-4">
            <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
              Chapter 04
            </p>
            <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Integrity HIT
            </h2>
            <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              SCA Health showed me how outpatient facilities actually run. I
              then had the chance to step into a leadership role at Integrity
              HIT, still a staffing agency.
            </p>
            <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              I thought it could be a national provider of IT for outpatient
              care, and I built toward that: new service lines, and a brand to
              match, including the website.
            </p>
          </div>
          <a
            href="https://integrityhit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-xl bg-glass backdrop-blur-xl inset-ring inset-ring-white/12"
          >
            <div className="flex h-9 items-center gap-2 border-b border-white/12 px-3 font-sans text-sm text-muted-foreground">
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#FF5F57]" />
                <span className="size-2 rounded-full bg-[#FEBC2E]" />
                <span className="size-2 rounded-full bg-[#28C840]" />
              </span>
              <span className="min-w-0 truncate">integrityhit.com</span>
            </div>
            <img
              src="/chapters/integrity-home.png"
              alt=""
              className="aspect-video w-full object-cover object-top outline-1 -outline-offset-1 outline-white/10"
            />
          </a>
        </div>
        <ol className="min-w-0 list-none lg:col-span-3">
          {STEPS.map((item) => (
            <li
              key={item.step}
              className="flex flex-col gap-4 border-t border-white/12 py-8 first:border-t-0 first:pt-0 md:flex-row md:items-start md:gap-8 lg:py-10"
            >
              <p className="w-12 shrink-0 font-sans text-base/7 tabular-nums text-muted-foreground sm:text-sm/6">
                {item.step}
              </p>
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
                  {item.title}
                </h3>
                <p className="text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { Process1 };
