import { cn } from "@/lib/utils";

const RECOMMENDATIONS = [
  {
    name: "Terry Guo",
    role: "President and Chief Product Officer, LotusFlare",
    quotes: [
      "Max demonstrated exceptional leadership, project management, technical product understanding, and client engagement skills.",
      "He is an excellent communicator and a natural leader, who is able to effectively manage and motivate his colleagues to achieve their goals.",
    ],
  },
  {
    name: "Euan Rellie",
    role: "Managing Partner, BDA Partners",
    quotes: [
      "I was consistently impressed with both his analytical and communication skills, as well as his grit, proactivity, and can-do attitude.",
      "He is honest, dependable, and incredibly hardworking.",
    ],
  },
  {
    name: "Jack Saltzman",
    role: "Growth and Operations, Saturn Technologies",
    quotes: [
      "He is a deeply critical thinker, a very effective communicator, and is unwavering in his commitment to putting his team first.",
      "He also happens to be smart, respectful, funny, and unbelievably curious.",
    ],
  },
  {
    name: "Dale Calvin",
    role: "CEO, Integrity Healthcare IT Solutions",
    quotes: [
      "Since joining Integrity, he's consistently delivered results by combining sharp business instincts with an uncanny ability to spot and implement emerging technologies.",
      "What sets Max apart is his passion for leveraging technology to solve business problems. Whether it's developing AI automation tools or streamlining operations to cut costs, he's always thinking three steps ahead.",
    ],
  },
  {
    name: "Frederic Darguesse",
    role: "GM, MediReport",
    quotes: [
      "His problem-solving skills improved our project outcomes and customer satisfaction.",
      "He showed leadership and a pragmatic, problem solving mindset when hitting difficulties.",
    ],
  },
] as const;

type Props = {
  className?: string;
};

export function RecommendationsGrid({ className }: Props) {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <h1 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
          Recommendations
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {RECOMMENDATIONS.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-6 rounded-xl bg-glass p-6 backdrop-blur-xl inset-ring inset-ring-white/12 sm:p-8"
            >
              <blockquote className="flex flex-col gap-4 text-lg/8 text-pretty text-foreground sm:text-base/7">
                {item.quotes.map((quote) => (
                  <p key={quote}>
                    {"\u201C"}
                    {quote}
                    {"\u201D"}
                  </p>
                ))}
              </blockquote>
              <cite className="mt-auto not-italic">
                <span className="block font-medium text-foreground">
                  {item.name}
                </span>
                <span className="block text-base text-muted-foreground sm:text-sm">
                  {item.role}
                </span>
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
