import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function LinearHero({ className }: Props) {
  return (
    <section
      className={cn(
        "relative flex w-full items-end px-6 pt-32 pb-16 sm:px-12 md:min-h-[80dvh] md:pb-24",
        className
      )}
    >
      <div className="flex w-full flex-col items-start gap-6">
        <p className="text-2xl font-medium tracking-tight text-foreground md:text-4xl">
          Dear Linear,
        </p>
        <h1 className="max-w-[22ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-6xl">
          I would like to be your next Implementation Manager.
        </h1>
        <p className="max-w-[48ch] text-lg text-pretty text-muted-foreground sm:text-base">
          I&apos;ve applied to Linear before, and I&apos;m not giving up. This
          role especially excites me because it precisely matches the work
          I&apos;ve been doing: getting enterprises live on new software, then
          making the next go-live easier than the last.
        </p>
        <Button
          size="lg"
          className="h-10 rounded-full bg-white px-4 py-2 text-[#08090a] hover:bg-white/90"
          render={<a href="mailto:max.c.gregori@gmail.com" />}
          nativeButton={false}
        >
          Email Max
        </Button>
      </div>
    </section>
  );
}
