import { RecommendationsGrid } from "@/components/recommendations-grid";

export const metadata = {
  title: "Recommendations · Max Gregori",
  description: "Letters of recommendation.",
};

export default function RecommendationsPage() {
  return (
    <main className="isolate flex flex-1 flex-col">
      <div className="pointer-events-none h-20 shrink-0 lg:h-24" aria-hidden />
      <RecommendationsGrid />
    </main>
  );
}
