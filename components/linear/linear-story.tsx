import { cn } from "@/lib/utils";

const PROBLEMS = [
  {
    title: "11 sites at once",
    body: "The first customer was a group of 11 surgery centers across the Midwest. MediReport only had one person in the US who could lead those implementations: me.",
  },
  {
    title: "International coordination",
    body: "Every customer sat across time zones. I coordinated clinical groups, customer IT, third-party vendors, and MediReport's engineering teams across Europe.",
  },
  {
    title: "A new system",
    body: "In Europe, MediReport installed on the customer's servers. In the US they were entirely cloud-based, under a different set of regulations, with a different version of the software.",
  },
  {
    title: "No established process",
    body: "In the US there was no existing implementation, customer success, or customer support process I could reference.",
  },
] as const;

const STEPS = [
  {
    id: "01",
    title: "Set-up and plan",
    body: "After the customer signed, I locked scope, owners, and timeline, then ran kickoff. Nobody configured software until those were named.",
  },
  {
    id: "02",
    title: "Preparation",
    body: "I gathered the environment: users, rooms, procedures, and the systems that had to connect. Interface requests went in before anyone built.",
  },
  {
    id: "03",
    title: "Implementation",
    body: "I coordinated workspace architecture and integration workstreams. Interfacing ran concurrently, with input from the customer's IT and third-party vendors.",
  },
  {
    id: "04",
    title: "Go-live and support",
    body: "I flew on-site for every go-live. I stood up hypercare for the first 30 days, then a long-term support system after that.",
  },
] as const;

type Props = {
  className?: string;
};

export function LinearStory({ className }: Props) {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <div>
          <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
            02
          </p>
          <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
            Allow me to demonstrate.
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-pretty text-muted-foreground sm:text-base">
            MediReport is a French SaaS company that sells software for heart
            and vascular clinics. They approached me to help them establish a
            foothold in the US. I landed them their first enterprise customer
            in the US, owned the implementations, and built the US
            implementation system from nothing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROBLEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/3 p-6"
            >
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-base text-pretty text-muted-foreground sm:text-sm">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-6 text-xl font-medium tracking-tight text-foreground md:text-2xl">
            How I ran it.
          </h3>
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-white/10 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "flex flex-col gap-3 p-6",
                  index !== 0 && "border-t border-white/10 md:border-t-0 md:border-l"
                )}
              >
                <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
                  {step.id}
                </p>
                <h4 className="text-lg font-medium tracking-tight text-foreground">
                  {step.title}
                </h4>
                <p className="text-base text-pretty text-muted-foreground sm:text-sm">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
