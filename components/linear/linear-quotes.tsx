import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const QUOTES = [
  {
    quote:
      "He built solid relationships with our US clients through clear communication, patience and calm. This led to good customer satisfaction even though we encountered technical issues that were painful for some customers.",
    name: "Frederic Darguesse",
    role: "GM, MediReport",
  },
  {
    quote:
      "Max is quick to identify problems, proactive about communicating about them and eager to play a role in solving them.",
    name: "Jack Saltzman",
    role: "Growth and Operations, Saturn",
  },
  {
    quote: "Max doesn't just identify opportunities. He creates them.",
    name: "Dale Calvin",
    role: "CEO, Integrity Healthcare IT Solutions",
  },
  {
    quote:
      "His positive impact to our company's product roadmap and client engagement procedures are still being felt today.",
    name: "Terry Guo",
    role: "President and Chief Product Officer, LotusFlare",
  },
] as const;

type Props = {
  className?: string;
};

export function LinearQuotes({ className }: Props) {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="flex w-full flex-col gap-8 px-6 lg:gap-12 lg:px-12">
        <div>
          <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
            04
          </p>
          <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
            What people I worked with wrote.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {QUOTES.map((item) => (
            <Card
              key={item.name}
              className="flex flex-col justify-between gap-6 rounded-3xl border-white/10 bg-white/3 py-0 text-base shadow-none"
            >
              <CardContent className="px-6 pt-6">
                <blockquote className="text-base font-medium tracking-tight text-pretty text-foreground">
                  {"\u201C"}
                  {item.quote}
                  {"\u201D"}
                </blockquote>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t-0 bg-transparent px-6 pb-6">
                <cite className="not-italic">
                  <span className="block font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="block text-base text-muted-foreground">
                    {item.role}
                  </span>
                </cite>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
