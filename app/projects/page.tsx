import { Projects13 } from "@/components/projects13";

export const metadata = {
  title: "Projects · Max Gregori",
  description: "Selected projects.",
};

export default function ProjectsPage() {
  return (
    <main className="isolate flex flex-1 flex-col">
      <div className="pointer-events-none h-20 shrink-0 lg:h-24" aria-hidden />
      <Projects13 />
    </main>
  );
}
