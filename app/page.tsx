import { Feature227 } from "@/components/feature227";
import { Gallery45 } from "@/components/gallery45";
import { Gallery48 } from "@/components/gallery48";
import { Hero76 } from "@/components/hero76";
import { Process1 } from "@/components/process1";
import { Projects13 } from "@/components/projects13";
import { Stats8 } from "@/components/stats8";

export default function Home() {
  return (
    <main className="isolate flex flex-1 flex-col">
      <Hero76 />
      <Feature227 />
      <Gallery48 />
      <Stats8 />
      <Process1 />
      <Gallery45 />
      <Projects13 />
    </main>
  );
}
