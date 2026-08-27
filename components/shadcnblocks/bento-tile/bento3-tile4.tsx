"use client";

import { motion } from "framer-motion";

const beamDuration = 2.35;
const beamRepeatDelay = 1.2;
const SEGMENTS = 20;
const SEGMENT_SPACING = 0.008;

type BeamLineProps = {
  id: string;
  d: string;
  delay: number;
};

function BeamLine({ id, d, delay }: BeamLineProps) {
  const motionId = `${id}-motion-0`;
  const begin = `${delay}s; ${motionId}.end+${beamRepeatDelay}s`;

  return (
    <>
      <path
        d={d}
        className="fill-none stroke-foreground/20 [stroke-dasharray:4_4]"
        strokeWidth="0.5"
      />

      {Array.from({ length: SEGMENTS }).map((_, i) => {
        const t = i / (SEGMENTS - 1);
        const opacity = Math.pow(t, 2.2);
        const segDelay = SEGMENT_SPACING * (SEGMENTS - 1 - i);
        const segMotionId = `${id}-motion-${i}`;
        const segBegin =
          i === 0
            ? begin
            : `${delay + segDelay}s; ${motionId}.end+${beamRepeatDelay + segDelay}s`;

        return (
          <g key={i} opacity="0">
            <rect x="-3" y="-1" width="6" height="2" rx="1" className="fill-chart-2" fillOpacity={opacity} />
            <animateMotion id={segMotionId} dur={`${beamDuration}s`} begin={segBegin} fill="remove" path={d} rotate="auto" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur={`${beamDuration}s`} begin={segBegin} fill="remove" />
          </g>
        );
      })}

      <g opacity="0">
        <rect x="-4" y="-1.5" width="8" height="3" rx="1.5" className="fill-background" />
        <animateMotion id={motionId} dur={`${beamDuration}s`} begin={begin} fill="remove" path={d} rotate="auto" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur={`${beamDuration}s`} begin={begin} fill="remove" />
      </g>
    </>
  );
}
export function Bento3Tile4() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 120 560 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="b3c4-cp1">
            <path d="m508.04 212.45h14.45v14.82h-14.45z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="b3c4-cp2">
            <path d="m427.66 160.71h14.45v14.44h-14.45z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="b3c4-cp3">
            <path d="m427.66 266.82h14.45v14.45h-14.45z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="b3c4-cp4">
            <path d="m35.84 212.63h14.45v14.45h-14.45z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="b3c4-cp5">
            <path d="m116.22 266.82h14.44v14.45h-14.44z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="b3c4-cp6">
            <path d="m259.47 206.9h41.51v28.63h-41.51z" />
          </clipPath>
          <filter id="b3c4-node-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="hsl(var(--primary))" floodOpacity="0.12" />
          </filter>
        </defs>

        <BeamLine id="b3c4line4" delay={0} d="m315 202.47h17.85c5.16 0 9.93-2.75 12.51-7.22l11.6-20.09c2.59-4.48 7.35-7.23 12.52-7.23h47.35" />
        <BeamLine id="b3c4line6" delay={0.6} d="m315 239.28h17.85c5.16 0 9.93 2.75 12.51 7.22l11.6 20.1c2.59 4.47 7.35 7.22 12.52 7.22h47.35" />
        <BeamLine id="b3c4line5" delay={1.2} d="m316.13 219.86h181.07" />
        <BeamLine id="b3c4line1" delay={1.8} d="m243.33 202.47h-17.85c-5.16 0-9.93-2.75-12.51-7.22l-11.6-20.09c-2.59-4.48-7.36-7.23-12.52-7.23h-47.35" />
        <BeamLine id="b3c4line3" delay={2.4} d="m243.33 239.28h-17.85c-5.16 0-9.93 2.75-12.51 7.22l-5.8 10.05-5.8 10.05c-2.59 4.47-7.36 7.22-12.52 7.22h-47.35" />
        <BeamLine id="b3c4line2" delay={3.0} d="m242.2 219.86h-181.08" />

        <g filter="url(#b3c4-node-shadow)">
          <path fillRule="evenodd" className="fill-muted/50" d="m515.27 201.8c9.97 0 18.06 8.08 18.06 18.06 0 9.97-8.09 18.06-18.06 18.06-9.98 0-18.07-8.09-18.07-18.06 0-9.98 8.09-18.06 18.07-18.06z" />
        </g>
        <g clipPath="url(#b3c4-cp1)">
          <path fillRule="evenodd" className="fill-foreground" d="m515.27 213.64c0.56-0.61 1.37-1 2.27-1 0.81 0 1.59 0.32 2.17 0.9l2.78 2.78v1.28c0 0.89-0.38 1.7-1 2.27 0.62 0.56 1 1.37 1 2.27v1.27l-2.78 2.78c-0.58 0.58-1.36 0.9-2.17 0.9-0.9 0-1.71-0.39-2.27-1-0.56 0.61-1.37 1-2.27 1-0.82 0-1.6-0.32-2.18-0.9l-2.78-2.78v-1.27c0-0.9 0.39-1.71 1-2.27-0.61-0.57-1-1.38-1-2.27v-1.28l2.78-2.78c0.58-0.58 1.36-0.9 2.18-0.9 0.9 0 1.71 0.39 2.27 1zm2.08 6.23q-0.05-0.05-0.1-0.1l-1.98-1.98-1.98 1.98q-0.05 0.05-0.1 0.1 0.05 0.04 0.1 0.09l1.98 1.98 1.98-1.98q0.05-0.05 0.1-0.09zm-1.28 3.54v0.61c0 0.81 0.66 1.47 1.47 1.47 0.39 0 0.76-0.16 1.04-0.43l2.31-2.32v-0.6c0-0.81-0.66-1.47-1.47-1.47-0.39 0-0.76 0.15-1.04 0.43zm-1.61 0l-2.31-2.31c-0.27-0.28-0.64-0.43-1.03-0.43-0.81 0-1.47 0.66-1.47 1.47v0.6l2.31 2.31c0.27 0.28 0.65 0.43 1.04 0.43 0.81 0 1.46-0.65 1.46-1.46zm-1.46-9.17c-0.39 0-0.77 0.16-1.04 0.43l-2.31 2.31v0.61c0 0.81 0.66 1.47 1.47 1.47 0.39 0 0.76-0.15 1.03-0.43l2.31-2.31v-0.61c0-0.81-0.65-1.47-1.46-1.47zm6.42 4.82c0.81 0 1.47-0.66 1.47-1.47v-0.61l-2.31-2.31c-0.28-0.27-0.65-0.43-1.04-0.43-0.81 0-1.47 0.66-1.47 1.47v0.61l2.31 2.31c0.28 0.28 0.65 0.43 1.04 0.43z" />
        </g>

        <g filter="url(#b3c4-node-shadow)">
          <path fillRule="evenodd" className="fill-muted/50" d="m434.89 149.87c9.97 0 18.06 8.08 18.06 18.06 0 9.98-8.09 18.06-18.06 18.06-9.98 0-18.06-8.08-18.06-18.06 0-9.98 8.08-18.06 18.06-18.06z" />
        </g>
        <g clipPath="url(#b3c4-cp2)">
          <path fillRule="evenodd" className="fill-chart-1" d="m436.9 164.93c-0.6-0.4-1.3-0.61-2.01-0.61v-3.61c1.43 0 2.82 0.42 4.01 1.21 1.19 0.8 2.12 1.92 2.66 3.24 0.55 1.33 0.69 2.78 0.42 4.18-0.28 1.4-0.97 2.69-1.98 3.7-1.01 1.01-2.3 1.7-3.7 1.98-1.4 0.27-2.86 0.13-4.18-0.42-1.32-0.54-2.44-1.47-3.24-2.66-0.79-1.18-1.22-2.58-1.22-4.01h3.62c0 0.72 0.21 1.41 0.61 2.01 0.39 0.59 0.96 1.05 1.62 1.33 0.66 0.27 1.38 0.34 2.08 0.2 0.71-0.14 1.35-0.48 1.85-0.99 0.51-0.5 0.85-1.14 0.99-1.85 0.14-0.7 0.07-1.42-0.2-2.08-0.28-0.66-0.74-1.23-1.33-1.62z" />
          <path fillRule="evenodd" className="fill-chart-1" d="m431.28 160.71q0 0.71-0.28 1.38-0.27 0.66-0.78 1.17-0.51 0.51-1.17 0.78-0.67 0.28-1.39 0.28v3.61q1.44 0 2.77-0.55 1.33-0.55 2.34-1.57 1.02-1.01 1.57-2.34 0.55-1.33 0.55-2.76z" />
        </g>

        <g filter="url(#b3c4-node-shadow)">
          <path fillRule="evenodd" className="fill-muted/50" d="m434.89 255.98c9.97 0 18.06 8.09 18.06 18.07 0 9.97-8.09 18.06-18.06 18.06-9.98 0-18.06-8.09-18.06-18.06 0-9.98 8.08-18.07 18.06-18.07z" />
        </g>
        <g clipPath="url(#b3c4-cp3)">
          <path className="fill-chart-2" d="m442.09 274.59h-2.58c-2.25 0-4.08 1.83-4.08 4.08v2.58c3.56-0.26 6.4-3.1 6.66-6.66z" />
          <path className="fill-chart-2" d="m434.35 281.25v-2.58c0-2.25-1.83-4.08-4.08-4.08h-2.59c0.27 3.56 3.11 6.4 6.67 6.66z" />
          <path className="fill-chart-2" d="m442.09 273.5c-0.26-3.55-3.1-6.39-6.66-6.66v2.58c0 2.26 1.83 4.08 4.08 4.08z" />
          <path className="fill-chart-2" d="m434.35 266.84c-3.56 0.27-6.4 3.11-6.67 6.66h2.59c2.25 0 4.08-1.82 4.08-4.08z" />
          <path className="fill-chart-2" d="m432.57 274.05c1-0.5 1.82-1.32 2.32-2.32 0.5 1 1.31 1.82 2.32 2.32-1.01 0.5-1.82 1.31-2.32 2.31-0.5-1-1.32-1.81-2.32-2.31z" />
        </g>

        <g filter="url(#b3c4-node-shadow)">
          <path fillRule="evenodd" className="fill-muted/50" d="m43.06 201.8c-9.97 0-18.06 8.08-18.06 18.06 0 9.97 8.09 18.06 18.06 18.06 9.98 0 18.06-8.09 18.06-18.06 0-9.98-8.08-18.06-18.06-18.06z" />
        </g>
        <g clipPath="url(#b3c4-cp4)">
          <path className="fill-foreground" d="m46.68 222.75v-5.78c0-0.4-0.33-0.72-0.73-0.72h-0.03q-0.3 0-0.51 0.21l-5.75 5.74q-0.21 0.22-0.21 0.51v4.38h-3.61v-4.38c0-1.15 0.45-2.25 1.27-3.06l5.74-5.75c0.81-0.81 1.92-1.27 3.07-1.27h0.03c2.4 0 4.34 1.95 4.34 4.34v5.78c0 2.39-1.94 4.34-4.34 4.34h-5.05v-3.62h5.05c0.4 0 0.73-0.32 0.73-0.72zm-10.84-10.12h6.14l-3.61 3.62h-2.53z" />
        </g>

        <g filter="url(#b3c4-node-shadow)">
          <path fillRule="evenodd" className="fill-muted/50" d="m123.44 149.87c-9.98 0-18.06 8.08-18.06 18.06 0 9.98 8.08 18.06 18.06 18.06 9.98 0 18.06-8.08 18.06-18.06 0-9.98-8.08-18.06-18.06-18.06z" />
        </g>
        <path fillRule="evenodd" className="fill-chart-3" d="m124.27 162.34l0.95-1.65 2.71 1.56-0.96 1.65c-0.16 0.29 0.09 0.65 0.42 0.58l1.83-0.35 0.59 3.07-1.83 0.35c-2.96 0.57-5.22-2.6-3.71-5.21z" />
        <path fillRule="evenodd" className="fill-chart-3" d="m122.61 173.52l-0.95 1.65-2.71-1.56 0.95-1.65c0.17-0.29-0.08-0.65-0.41-0.58l-1.83 0.35-0.59-3.07 1.83-0.35c2.96-0.57 5.22 2.6 3.71 5.21z" />
        <path fillRule="evenodd" className="fill-chart-3" d="m122.69 162.34l-0.95-1.65-2.71 1.56 0.96 1.65c0.16 0.29-0.09 0.65-0.42 0.58l-1.83-0.35-0.59 3.07 1.83 0.35c2.96 0.57 5.22-2.6 3.71-5.21z" />
        <path fillRule="evenodd" className="fill-chart-3" d="m124.19 173.52l0.95 1.65 2.71-1.56-0.96-1.65c-0.16-0.29 0.09-0.65 0.42-0.58l1.83 0.35 0.59-3.07-1.83-0.35c-2.96-0.57-5.22 2.6-3.71 5.21z" />

        <g filter="url(#b3c4-node-shadow)">
          <path fillRule="evenodd" className="fill-muted/50" d="m123.44 255.98c-9.98 0-18.06 8.09-18.06 18.07 0 9.97 8.08 18.06 18.06 18.06 9.98 0 18.06-8.09 18.06-18.06 0-9.98-8.08-18.07-18.06-18.07z" />
        </g>
        <g clipPath="url(#b3c4-cp5)">
          <path fillRule="evenodd" className="fill-foreground" d="m123.44 266.82c2.7 0 4.05 0 5.06 0.58 0.66 0.38 1.2 0.93 1.58 1.59 0.58 1.01 0.58 2.36 0.58 5.06 0 2.7 0 4.05-0.58 5.05-0.38 0.66-0.92 1.21-1.58 1.59-1.01 0.58-2.36 0.58-5.06 0.58-2.7 0-4.05 0-5.06-0.58-0.66-0.38-1.2-0.93-1.58-1.59-0.58-1-0.58-2.35-0.58-5.05 0-2.7 0-4.05 0.58-5.06 0.38-0.66 0.92-1.21 1.58-1.59 1.01-0.58 2.36-0.58 5.06-0.58zm0.72 1.45c-3.19 0-5.78 2.59-5.78 5.78 0 3.19 2.59 5.78 5.78 5.78 3.2 0 5.78-2.59 5.78-5.78 0-3.19-2.58-5.78-5.78-5.78z" />
          <path className="fill-foreground" d="m129.22 274.05c0 1.99-1.62 3.61-3.61 3.61-2 0-3.61-1.62-3.61-3.61 0-2 1.61-3.62 3.61-3.62 1.99 0 3.61 1.62 3.61 3.62z" />
        </g>

        <motion.circle
          cx="280.23"
          cy="221.21"
          r="41.54"
          fill="none"
          className="fill-none stroke-border/35"
          strokeWidth="1.5"
          animate={{ r: [41.54, 58, 41.54], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="280.23"
          cy="221.21"
          r="41.54"
          fill="none"
          className="fill-none stroke-border/35"
          strokeWidth="1"
          animate={{ r: [41.54, 70, 41.54], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        />

        <g filter="url(#b3c4-node-shadow)">
          <path fillRule="evenodd" className="fill-muted/50" d="m280.23 179.67c22.94 0 41.54 18.6 41.54 41.54 0 22.95-18.6 41.55-41.54 41.55-22.95 0-41.55-18.6-41.55-41.55 0-22.94 18.6-41.54 41.55-41.54z" />
        </g>
        <g clipPath="url(#b3c4-cp6)">
          <path fillRule="evenodd" className="fill-foreground" d="m277.12 206.9c3.5 0 6.33 2.78 6.33 6.19q0 0.29-0.02 0.57h5.34c5.19 0 7.22 6.58 2.91 9.4l-5.65 3.67c-1.21 0.8-0.88 2.62 0.54 2.96 0.47 0.11 0.95 0.02 1.35-0.25l3.27-2.36q0.19-0.14 0.43-0.14h9c0.35 0 0.49 0.45 0.2 0.65l-9.52 6.61c-1.78 1.21-4 1.62-6.11 1.12-6.45-1.51-7.97-9.81-2.45-13.41l3.77-2.45h-9.48c-1.06 0-2.06-0.25-2.95-0.7 0.94 0.63 3.27 1.34 5.23 1.47 0.18 0 0.46 0.15 0.12 0.5l-11.87 11.73q-0.22 0.2-0.52 0.2h-7.21c-0.32 0-0.48-0.38-0.25-0.61l13.86-13.66c-1.71-1.13-2.83-3.04-2.83-5.21 0-3.47 2.88-6.28 6.42-6.28zm0.13 4.83c-0.82 0-1.48 0.43-1.48 0.97 0 0.44 0.45 0.81 1.07 0.92q0.09 0.04 0.2 0.04h0.44q-0.01 0 0-0.01c0.71-0.07 1.25-0.47 1.25-0.95 0-0.54-0.66-0.97-1.48-0.97z" />
        </g>

      </svg>
    </div>
  );
}