"use client";

import { useEffect } from "react";

export function SiteWash() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onScroll = () => {
      if (reduce.matches) {
        document.documentElement.style.setProperty("--wash-shift", "0");
        return;
      }

      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const span = Math.max(max, window.innerHeight * 6);
      const t = Math.min(1, window.scrollY / span);
      document.documentElement.style.setProperty("--wash-shift", t.toFixed(4));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    reduce.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      reduce.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="site-wash-mesh absolute inset-[-28%] blur-[120px]" />
      <div
        className="absolute inset-0 h-full w-full scale-[1.2] opacity-10"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "200px",
        }}
      />
    </div>
  );
}
