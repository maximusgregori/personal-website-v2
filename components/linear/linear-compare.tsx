import { cn } from "@/lib/utils";

const ROWS = [
  {
    ask: "A track record of multi-workstream, multi-stakeholder enterprise rollouts, including 1,000+ user deployments.",
    proof:
      "At SCA Health I directed more than 250 IT implementations across more than 200 facilities. At Integrity I led EHR implementations for major hospital systems with more than a thousand clinicians.",
  },
  {
    ask: "Own end-to-end implementation plans: timeline, milestones, dependencies, risk, and stakeholder accountability.",
    proof:
      "I'm PMP-certified, so I run implementations with plans, named owners, dependencies, and risk tracking as the default. On MediReport every task sat in a phased plan with an owner before kickoff.",
  },
  {
    ask: "Coordinate technical and non-technical teams without owning the technical execution yourself.",
    proof:
      "On SCA implementations I coordinated local IT, network engineers, and interface engineers from the customer and from vendors. I translated that work for nurses, physicians, and other on-site staff.",
  },
  {
    ask: "Strong executive communication: a steering committee, a VP-level status update, and a customer IT admin in the same day.",
    proof:
      "I'm used to giving C-suite updates, speaking at a high level, and anticipating what data they'll need for oversight and better decisions. That's part of why I built Protea: executives weren't getting a clear view of delivery.",
  },
  {
    ask: "Build the implementation playbook so each rollout becomes a documented, repeatable framework.",
    proof:
      "MediReport had no US implementation playbook, so I wrote one. SCA already had processes, and some of them were slow. I rebuilt how implementation change requests moved through ServiceNow, and approvals got 40% faster.",
  },
  {
    ask: "Own go-live execution and the first 30 days after launch.",
    proof:
      "I've built automated feedback loops to track customer satisfaction after go-live and folded that feedback back into the implementation playbook.",
  },
  {
    ask: "Define and enforce services scope before kickoff: deliverables, hours, and boundaries.",
    proof:
      "At Integrity I scoped services, set timeline commitments, and negotiated vendor contracts so hours and deliverables were locked before kickoff.",
  },
] as const;

type Props = {
  className?: string;
};

export function LinearCompare({ className }: Props) {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="flex w-full flex-col gap-8 px-6 lg:gap-12 lg:px-12">
        <div>
          <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
            03
          </p>
          <h2 className="mt-4 max-w-[24ch] text-3xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
            Your requirements versus what I&apos;ve done.
          </h2>
        </div>
        <div className="hidden md:block">
          <div className="-mx-6 -my-2 overflow-x-auto lg:-mx-12">
            <div className="inline-block min-w-full px-6 py-2 align-middle lg:px-12">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="whitespace-nowrap py-4 pr-8 font-medium text-muted-foreground">
                      Your requirements
                    </th>
                    <th className="whitespace-nowrap py-4 font-medium text-muted-foreground">
                      What I&apos;ve done
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.ask} className="border-b border-white/10">
                      <td className="w-2/5 py-5 pr-8 align-top">
                        <p className="max-w-[40ch] text-sm font-medium text-pretty text-foreground">
                          {row.ask}
                        </p>
                      </td>
                      <td className="w-3/5 py-5 align-top">
                        <p className="max-w-[52ch] text-sm text-pretty text-muted-foreground">
                          {row.proof}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col divide-y divide-white/10 md:hidden">
          {ROWS.map((row) => (
            <div key={row.ask} className="flex flex-col gap-2 py-5">
              <p className="text-base font-medium text-pretty text-foreground">
                {row.ask}
              </p>
              <p className="text-base text-pretty text-muted-foreground">
                {row.proof}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
