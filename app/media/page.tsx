export const metadata = {
  title: "Media · Max Gregori",
  description: "Talks and coverage.",
};

export default function MediaPage() {
  return (
    <main className="isolate flex flex-1 flex-col">
      <div className="pointer-events-none h-20 shrink-0 lg:h-24" aria-hidden />
      <section className="py-24 md:py-32">
        <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
          <h1 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            Media
          </h1>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex min-w-0 flex-col gap-4">
              <h2 className="max-w-[40ch] text-2xl font-medium tracking-tight text-balance text-foreground md:text-3xl">
                AI, Cybersecurity, EHRs and More: ASC Technology Trends
              </h2>
              <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                I spoke on this panel as director of business development at
                Integrity Healthcare IT Solutions. We talked about the trends
                I was seeing in the outpatient healthcare technology landscape:
                EHRs, cybersecurity, AI, and the gap between what surgery
                centers need and what they actually have in place.
              </p>
            </div>
            <a
              href="https://ascnews.com/2025/04/closing-the-asc-tech-gap-ehrs-ai-and-beyond/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-w-0 overflow-hidden rounded-xl"
            >
              <img
                src="/media/asc-panel.webp"
                alt="Max Gregori speaking on an Ambulatory Surgery Center News panel"
                className="aspect-[3/2] w-full rounded-xl object-cover object-center outline-1 -outline-offset-1 outline-white/10"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
