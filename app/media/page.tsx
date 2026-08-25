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
          <a
            href="https://ascnews.com/2025/04/closing-the-asc-tech-gap-ehrs-ai-and-beyond/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-glass p-6 backdrop-blur-xl inset-ring inset-ring-white/12 hover:bg-white/6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <h2 className="max-w-[40ch] text-2xl font-medium tracking-tight text-balance text-foreground md:text-3xl">
                  AI, Cybersecurity, EHRs and More: ASC Technology Trends
                </h2>
                <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                  I was invited to speak at the Ambulatory Surgery Center News
                  Conference in Naples, Florida. I represented Integrity
                  Healthcare IT Solutions as Director of Business Development.
                </p>
                <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
                  We discussed trends in the outpatient healthcare technology
                  landscape: EHRs, cybersecurity, AI, and the gap between what
                  surgery centers need and what they actually have in place.
                </p>
              </div>
              <img
                src="/media/asc-panel.webp"
                alt=""
                className="aspect-[3/2] w-full rounded-xl object-cover object-center outline-1 -outline-offset-1 outline-white/10 lg:w-[26rem] lg:shrink-0"
              />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
