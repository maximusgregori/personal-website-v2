import { LinearClose } from "@/components/linear/linear-close";
import { LinearCompare } from "@/components/linear/linear-compare";
import { LinearHero } from "@/components/linear/linear-hero";
import { LinearQuotes } from "@/components/linear/linear-quotes";
import { LinearStory } from "@/components/linear/linear-story";
import { LinearWho } from "@/components/linear/linear-who";
import { LinearWhy } from "@/components/linear/linear-why";

export default function LinearPage() {
  return (
    <main className="isolate flex flex-1 flex-col bg-[#08090a]">
      <LinearHero />
      <LinearWho />
      <LinearStory />
      <LinearCompare />
      <LinearQuotes />
      <LinearWhy />
      <LinearClose />
    </main>
  );
}
