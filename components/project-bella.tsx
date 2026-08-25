import { Camera, ImageIcon, Link2 } from "lucide-react";

import { cn } from "@/lib/utils";

const IMPORTS = [
  { icon: Camera, label: "Photo", detail: "Any handwritten recipe" },
  { icon: Link2, label: "Link", detail: "Any recipe website" },
  { icon: ImageIcon, label: "Screenshot", detail: "Any saved recipe image" },
] as const;

type Props = {
  className?: string;
};

const ProjectBella = ({ className }: Props) => {
  return (
    <section className={cn("scroll-mt-24 py-24 md:py-32", className)}>
      <div className="flex w-full flex-col gap-10 px-6 lg:gap-12 lg:px-12">
        <p className="w-fit rounded-full border border-white/12 px-3.5 py-1.5 font-sans text-sm text-muted-foreground">
          01
        </p>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="flex min-w-0 flex-col gap-4">
            <h2 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Bella
            </h2>
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              The two people in my life who cook the most had recipes saved in
              a dozen different places. Handwritten notes, Instagram saves,
              screenshots, bookmarked websites, physical cookbooks. They could
              never find what they needed when they needed it.
            </p>
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              I built Bella, an AI-powered recipe manager for iOS, in Swift and
              SwiftUI. You can import a recipe from anywhere: take a photo of a
              handwritten card, paste a web link, or upload a screenshot. The
              app uses the OpenAI API to read handwriting and to extract
              structured recipe data from web pages, stripping out ads and
              filler. I had never done iOS development. I took it from concept
              to the App Store.
            </p>
            <p className="max-w-[48ch] text-lg/8 text-pretty text-muted-foreground sm:text-base/7">
              It is live on the App Store and used by my girlfriend, my mom,
              their family, and friends.
            </p>
            <dl className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-3">
              {IMPORTS.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 flex-col gap-2 rounded-xl bg-glass p-3 inset-ring inset-ring-white/12"
                >
                  <dt className="flex items-center gap-2 font-sans text-base font-medium text-foreground sm:text-sm">
                    <item.icon className="size-4 shrink-0 stroke-primary" />
                    {item.label}
                  </dt>
                  <dd className="text-base/7 text-pretty text-muted-foreground sm:text-sm/6">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-h-0 overflow-hidden rounded-xl max-lg:aspect-[6/5] lg:h-full">
            <img
              src="/projects/bella-app-store.webp"
              alt=""
              className="absolute inset-0 size-full rounded-xl object-cover object-top outline-1 -outline-offset-1 outline-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectBella };
