import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

import { Footer59 } from "@/components/footer59";
import { Navbar6 } from "@/components/navbar6";
import { SiteWash } from "@/components/site-wash";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Max Gregori",
  description: "Founder · Operator · Builder",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} dark scheme-only-dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>
          <SiteWash />
          <Navbar6 />
          {children}
          <Footer59 />
        </TooltipProvider>
      </body>
    </html>
  );
}
