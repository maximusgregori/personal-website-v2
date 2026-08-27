import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function LinearWhy({ className }: Props) {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="flex w-full flex-col gap-6 px-6 lg:px-12">
        <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
          05
        </p>
        <h2 className="max-w-[24ch] text-3xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
          Why this role, at Linear.
        </h2>
        <p className="max-w-[48ch] text-lg text-pretty text-muted-foreground sm:text-base">
          In healthcare I implemented for people who were set in their ways,
          often antiquated ones. Plenty of clinicians still charted on pen and
          paper, so introducing software at all was a big experience for them.
          That work brought me joy, but I want to be at the forefront of
          technology.
        </p>
        <p className="max-w-[48ch] text-lg text-pretty text-muted-foreground sm:text-base">
          I&apos;ve used Linear on my own projects. I want to get more
          enterprises live on the product development system where people and
          agents plan, write, and ship together, so they can build software at
          that same frontier.
        </p>
      </div>
    </section>
  );
}
