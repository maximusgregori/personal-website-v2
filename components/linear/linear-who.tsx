import { cn } from "@/lib/utils";

const TILES = [
  {
    title: "SCA Health",
    body: "The second-largest operator of outpatient surgery centers in the US, owned by UnitedHealth Group. I directed 100+ clinical system implementations across their network of 700+ facilities.",
  },
  {
    title: "Integrity Healthcare IT Solutions",
    body: "A provider of IT solutions for outpatient healthcare. As Director of IT Services I led software implementations for health systems with 10k+ clinicians.",
  },
  {
    title: "Protea",
    body: "Over time I began automating my implementation work. I packaged that infrastructure as Protea and sold it to the same customers that for years had paid me to do it by hand.",
  },
] as const;

type Props = {
  className?: string;
};

export function LinearWho({ className }: Props) {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="flex w-full flex-col gap-8 px-6 lg:gap-12 lg:px-12">
        <div>
          <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
            01
          </p>
          <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
            Enterprise implementations are my bread and butter.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {TILES.map((tile) => (
            <div
              key={tile.title}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8"
            >
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {tile.title}
              </h3>
              <p className="text-base text-pretty text-muted-foreground sm:text-sm">
                {tile.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
