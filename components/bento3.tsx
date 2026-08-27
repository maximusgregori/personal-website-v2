"use client";

import { Bento3Tile1 } from "@/components/shadcnblocks/bento-tile/bento3-tile1";
import { Bento3Tile2 } from "@/components/shadcnblocks/bento-tile/bento3-tile2";
import { Bento3Tile3 } from "@/components/shadcnblocks/bento-tile/bento3-tile3";
import { Bento3Tile4 } from "@/components/shadcnblocks/bento-tile/bento3-tile4";
import { cn } from "@/lib/utils";

interface Bento3Props {
  className?: string;
}

const Bento3 = ({ className }: Bento3Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="grid content-start gap-8">
            <div className="overflow-hidden rounded-3xl border border-border/50 bg-card p-8 lg:h-115">
              <div className="grid h-full grid-rows-[auto_1fr] gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    <span className="text-foreground">Innovation First.</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      We put innovation at the heart of everything we do. By
                      embracing creative solutions.
                    </span>
                  </h3>
                </div>

                <div className="flex h-full items-center justify-center overflow-hidden">
                  <Bento3Tile1 />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/50 bg-card p-8 lg:h-130">
              <div className="grid h-full grid-rows-[auto_1fr] gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    <span className="text-foreground">
                      Client-Centric Approach.
                    </span>{" "}
                    <span className="font-normal text-muted-foreground">
                      Our clients are at the core of everything we do. We listen
                      understand.
                    </span>
                  </h3>
                </div>

                <div className="flex h-full items-center justify-center overflow-hidden">
                  <Bento3Tile2 />
                </div>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-8">
            <div className="overflow-hidden rounded-3xl border border-border/50 bg-card p-8 lg:h-140">
              <div className="grid h-full grid-rows-[auto_1fr] gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    <span className="text-foreground">
                      Future-Ready Technology.
                    </span>{" "}
                    <span className="font-normal text-muted-foreground">
                      Equip your business with technology designed for tomorrow.
                    </span>
                  </h3>
                </div>

                <div className="flex h-full items-center justify-center overflow-hidden">
                  <Bento3Tile3 />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/50 bg-card p-8 lg:h-105">
              <div className="grid h-full grid-rows-[auto_1fr] gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    <span className="text-foreground">Trusted Worldwide.</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      Recognized by clients across the globe, our reputation is
                      built on reliability.
                    </span>
                  </h3>
                </div>

                <div className="flex h-full items-center justify-center overflow-hidden">
                  <Bento3Tile4 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Bento3 };
