"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const PAD = 20; // px gap between QR edges and corner brackets

function QRCode({ scanY }: { scanY: number }) {
  const revealPct = Math.min((scanY / 240) * 100, 100);

  return (
    <div className="relative w-[240px] h-[240px] overflow-hidden rounded-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none" className="text-foreground">
        <path className="fill-current" d="M86.1014 0H95.6683V19.1337H86.1014V28.7005H95.6683V47.8341H86.1014V66.9678H76.5346V9.56683H86.1014V0ZM124.369 0H133.936V28.7005H124.369V0ZM143.502 0H162.636V28.7005H153.069V19.1337H143.502V0ZM0 0V66.9678H66.9678V0H0ZM57.401 57.401H9.56683V9.56683H57.401V57.401ZM105.235 9.56683H114.802V19.1337H105.235V9.56683ZM172.203 0V66.9678H239.171V0H172.203ZM229.604 57.401H181.77V9.56683H229.604V57.401Z" />
        <path className="fill-current" d="M19.1328 19.1333H47.8333V47.8338H19.1328V19.1333ZM191.336 19.1333H220.036V47.8338H191.336V19.1333ZM143.502 28.7001H153.068V38.267H143.502V28.7001ZM105.234 38.267H114.801V47.8338H105.234V38.267ZM124.368 38.267H143.502V66.9674H153.068V86.1011H143.502V76.5343H133.931V47.8338H124.368V38.267ZM153.068 38.267H162.639V66.9674H153.068V38.267ZM95.6674 47.8338H105.234V76.5343H95.6674V86.1011H86.1006V95.6679H76.5338V86.1011H47.8333V76.5343H86.1006V66.9674H95.6674V47.8338ZM114.801 47.8338H124.368V66.9674H114.801V47.8338Z" />
        <path className="fill-current" d="M114.801 76.5342H133.931V86.101H124.368V95.6678H95.6677V86.101H114.801V76.5342ZM162.635 76.5342H172.202V86.101H162.635V76.5342ZM181.769 76.5342H229.603V86.101H239.17V105.235H229.603V95.6678H220.036V86.101H210.47V105.235H229.603V114.801H210.47V124.368H200.903V86.101H181.769V76.5342ZM133.931 86.101H143.502V95.6678H133.931V86.101ZM57.4004 95.6678H76.534V105.235H86.1009V114.801H76.534V124.368H57.4004V114.801H66.9672V105.235H57.4004V95.6678Z" />
        <path className="fill-current" d="M86.1013 95.668H95.6681V105.235H86.1013V95.668ZM181.77 95.668H191.336V105.235H181.77V95.668ZM47.834 105.235H57.4008V114.805H47.834V105.235ZM105.235 105.235H114.802V124.368H105.235V105.235ZM133.932 105.235H143.502V114.805H133.932V105.235ZM172.203 105.235H181.77L181.773 114.805H172.203V105.235Z" />
        <path className="fill-current" d="M86.1014 114.801H95.6683V124.368H105.235V133.931H114.802V124.368H124.369V114.801H133.932V133.931H124.369V143.502H114.802V153.069H105.235V143.502H95.6683V133.931H86.1014V114.801ZM229.604 114.801H239.171V143.502H229.604V114.801ZM0 133.931H19.1337V143.502H0V133.931ZM133.932 133.931H143.502V143.502H133.932V133.931ZM0 153.069H28.7005V162.639H0V153.069ZM133.932 153.069H143.502V162.639H133.932V153.069ZM229.604 153.069H239.171V181.773H229.604V153.069Z" />
        <path className="fill-current" d="M200.903 181.769V172.202H210.47V162.636H200.903V143.502H220.037V124.368H210.47V133.935H200.903V124.368H191.337V153.069H172.203V143.502H181.77V133.931H162.636V105.231H153.069V114.801H143.502V124.368H153.069V143.502H143.502V153.069H153.069V162.636H143.502V181.769H153.069V191.336H143.502V181.769H133.932V162.636H114.802V172.202H86.1014V162.636H95.6683V143.502H86.1014V153.069H47.8341V143.502H76.5346V133.931H47.8341V124.365H38.2673V105.231H47.8341V95.6678H28.7005V76.5342H19.1337V86.101H9.56683V105.235H19.1337V114.801H0V124.368H28.7005V143.502H38.2673V162.636H76.5346V191.336H114.802V181.769H124.369V191.336H133.936V200.903H124.369V210.47H114.802V220.037H105.235V210.47H95.6683V200.903H86.1014V210.47H76.5346V220.037H95.6683V229.603H86.1014V239.17H124.369V220.037H133.936V239.17H143.502V220.037H162.636V210.47H153.069V200.903H191.337V210.47H200.903V200.903H210.47V191.336H220.037V200.903H229.604V181.769H200.903ZM191.337 191.336H162.636V162.636H191.337V191.336Z" />
        <path className="fill-current" d="M172.203 172.203H181.773V181.773H172.203V172.203ZM0 172.203V239.17H66.9678V172.203H0ZM57.401 229.604H9.56683V181.769H57.401V229.604Z" />
        <path className="fill-current" d="M19.1328 191.336H47.8333V220.036H19.1328V191.336ZM114.801 191.336H124.368V200.903H114.801V191.336ZM105.234 200.903H114.801V210.473H105.234V200.903ZM172.202 210.47H181.769V220.036H200.903V210.47H239.17V220.036H220.036V229.603H210.469V239.17H191.336V229.603H172.202V239.17H162.635V220.036H172.202V210.47ZM229.603 229.603H239.17V239.17H229.603V229.603Z" />
      </svg>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, hsl(var(--muted) / 0.5) 0%, hsl(var(--muted) / 0.5) ${Math.max(0, revealPct - 1)}%, transparent ${revealPct + 6}%, transparent 100%)`,
        }}
      />
    </div>
  );
}

function CornerBracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const size = 24;
  const paths: Record<string, string> = {
    tl: `M${size} 0 L0 0 L0 ${size}`,
    tr: `M0 0 L${size} 0 L${size} ${size}`,
    bl: `M0 0 L0 ${size} L${size} ${size}`,
    br: `M0 ${size} L${size} ${size} L${size} 0`,
  };
  const corners: Record<string, string> = {
    tl: "top-0 left-0",
    tr: "top-0 right-0",
    bl: "bottom-0 left-0",
    br: "bottom-0 right-0",
  };

  return (
    <motion.div
      className={`absolute ${corners[position]}`}
      animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path
          d={paths[position]}
          className="stroke-chart-1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export function Bento3Tile3() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scanY, setScanY] = useState(0);
  const duration = 2600;

  useAnimationFrame((t) => {
    const cycle = t % (duration * 2);
    const progress = cycle < duration ? cycle / duration : 2 - cycle / duration;
    setScanY(progress * 240);
  });

  return (
    <div
      ref={cardRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      {/* Wrapper adds PAD around QR — brackets sit at its corners, scan line spans its full width */}
      <div
        className="relative select-none pointer-events-none"
        style={{ padding: PAD }}
      >
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        <QRCode scanY={scanY} />

        {/* Scan line — lives outside overflow-hidden, spans bracket-to-bracket */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: PAD + scanY }}
        >
          <div className="h-px w-full bg-linear-to-r from-transparent via-chart-1 to-transparent" />
          <div className="h-8 w-full bg-linear-to-b from-chart-1/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
