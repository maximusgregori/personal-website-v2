import { cn } from "@/lib/utils";

const SITES = [
  {
    href: "https://myhealthangel.com/",
    host: "myhealthangel.com",
    src: "/chapters/my-health-angel.png",
  },
  {
    href: "https://clintonyoungfoundation.com/",
    host: "clintonyoungfoundation.com",
    src: "/chapters/clinton-young.png?v=2",
  },
  {
    href: "https://suerockoriginals.com/",
    host: "suerockoriginals.com",
    src: "/chapters/sue-rock.png",
  },
  {
    href: "https://itsfromthesole.org/",
    host: "itsfromthesole.org",
    src: "/chapters/its-from-the-sole.png",
  },
  {
    href: "https://kalterra.com/",
    host: "kalterra.com",
    src: "/chapters/kalterra-home.png",
  },
  {
    href: "https://slxdevelopment.com/",
    host: "slxdevelopment.com",
    src: "/chapters/slx-development.png",
  },
  {
    href: "https://slxcap.com/",
    host: "slxcap.com",
    src: "/chapters/slx-cap.png",
  },
  {
    href: "https://annapond.com/",
    host: "annapond.com",
    src: "/chapters/anna-pond.png",
  },
] as const;

type Props = {
  className?: string;
};

const Gallery48 = ({ className }: Props) => {
  return (
    <section className={cn("scroll-mt-24 py-24 md:py-32", className)}>
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
            Chapter 02
          </p>
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-16">
            <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Icarus Labs
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                After a year at LotusFlare I was eager to start a venture of my
                own, so I co-founded Icarus Labs, a digital marketing and web
                development agency for New York City nonprofits that couldn't
                afford the existing shops.
              </p>
              <p className="text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                I acquired and managed more than 30 clients across nonprofit,
                e-commerce, and real estate. A selection of the sites we built,
                grew, and maintained are below.
              </p>
            </div>
          </div>
        </div>
        <div className="@container">
          <div className="grid grid-cols-1 gap-4 @min-[36rem]:grid-cols-2 @min-[72rem]:grid-cols-4">
            {SITES.map((site) => (
              <a
                key={site.host}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 overflow-hidden rounded-xl bg-glass backdrop-blur-xl inset-ring inset-ring-white/12"
              >
                <div className="flex h-9 items-center gap-2 border-b border-white/12 px-3 font-sans text-sm text-muted-foreground">
                  <span aria-hidden className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#FF5F57]" />
                    <span className="size-2 rounded-full bg-[#FEBC2E]" />
                    <span className="size-2 rounded-full bg-[#28C840]" />
                  </span>
                  <span className="min-w-0 truncate">{site.host}</span>
                </div>
                <img
                  src={site.src}
                  alt=""
                  className="aspect-video w-full object-cover object-top outline-1 -outline-offset-1 outline-white/10"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery48 };
