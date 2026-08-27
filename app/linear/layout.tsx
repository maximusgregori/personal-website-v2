import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linear · Max Gregori",
  description:
    "Application to Linear for Implementation Manager. Signed contract through go-live.",
  robots: { index: false, follow: false },
};

export default function LinearLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} linear-route flex flex-1 flex-col bg-[#08090a] text-foreground`}
    >
      {children}
    </div>
  );
}
