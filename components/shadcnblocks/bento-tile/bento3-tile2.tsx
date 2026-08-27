"use client";

import { motion, useReducedMotion } from "framer-motion";

const chartPoints = [
  { x: 58, y: 214 },
  { x: 112, y: 185 },
  { x: 166, y: 198 },
  { x: 220, y: 142 },
  { x: 274, y: 158 },
  { x: 328, y: 103 },
  { x: 382, y: 122 },
];

const responseBars = [
  { x: 58, height: 38 },
  { x: 88, height: 56 },
  { x: 118, height: 46 },
  { x: 148, height: 72 },
  { x: 178, height: 62 },
];

export function Bento3Tile2() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 560 340"
      role="img"
      aria-labelledby="bento3-client-title bento3-client-description"
      className="h-full min-h-70 w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="bento3-client-title">Client satisfaction dashboard</title>
      <desc id="bento3-client-description">
        An animated satisfaction trend, response chart, and client score.
      </desc>

      <defs>
        <clipPath id="bento3-client-chart-clip">
          <rect x="28" y="28" width="416" height="268" rx="20" />
        </clipPath>
        <filter
          id="bento3-client-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="150%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="12"
            floodColor="currentColor"
            floodOpacity="0.08"
          />
        </filter>
      </defs>

      <g className="text-foreground" filter="url(#bento3-client-shadow)">
        <rect
          x="28"
          y="28"
          width="416"
          height="268"
          rx="20"
          className="fill-muted/50 stroke-border/50"
        />
      </g>

      <g clipPath="url(#bento3-client-chart-clip)">
        <circle cx="55" cy="56" r="4" className="fill-chart-1" />
        <circle cx="69" cy="56" r="4" className="fill-muted/50" />
        <circle cx="83" cy="56" r="4" className="fill-muted/50" />

        <text
          x="55"
          y="91"
          className="fill-muted-foreground text-[10px] font-medium"
        >
          CLIENT SENTIMENT
        </text>
        <text
          x="55"
          y="119"
          className="fill-foreground text-[20px] font-semibold"
        >
          Positive trend
        </text>

        {[148, 188, 228, 268].map((y) => (
          <line
            key={y}
            x1="55"
            x2="416"
            y1={y}
            y2={y}
            className="stroke-border/50"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        ))}

        <path
          d="M58 214 L112 185 L166 198 L220 142 L274 158 L328 103 L382 122 L382 268 L58 268 Z"
          className="fill-chart-1/20"
        />
        <motion.path
          d="M58 214 L112 185 L166 198 L220 142 L274 158 L328 103 L382 122"
          fill="none"
          className="stroke-chart-1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {chartPoints.map((point, index) => (
          <motion.circle
            key={point.x}
            cx={point.x}
            cy={point.y}
            r="4"
            className="fill-background stroke-chart-1"
            strokeWidth="2"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.28,
              delay: shouldReduceMotion ? 0 : 0.14 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          />
        ))}
      </g>

      <motion.g
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{
          duration: 0.55,
          delay: shouldReduceMotion ? 0 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <g className="text-foreground" filter="url(#bento3-client-shadow)">
          <rect
            x="342"
            y="170"
            width="190"
            height="142"
            rx="18"
            className="fill-muted/50 stroke-border/50"
          />
        </g>

        <text
          x="365"
          y="201"
          className="fill-muted-foreground text-[10px] font-medium"
        >
          SATISFACTION
        </text>

        <circle
          cx="404"
          cy="254"
          r="34"
          fill="none"
          className="stroke-muted/50"
          strokeWidth="10"
        />
        <motion.circle
          cx="404"
          cy="254"
          r="34"
          pathLength="1"
          fill="none"
          className="stroke-chart-1"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="0.94 1"
          initial={shouldReduceMotion ? false : { strokeDashoffset: 0.94 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{
            duration: 0.8,
            delay: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          transform="rotate(-90 404 254)"
        />
        <text
          x="404"
          y="260"
          textAnchor="middle"
          className="fill-foreground text-[15px] font-semibold"
        >
          94%
        </text>

        <g transform="translate(450 224)">
          {responseBars.map((bar, index) => (
            <motion.rect
              key={bar.x}
              x={index * 13}
              y={64 - bar.height}
              width="8"
              height={bar.height}
              rx="4"
              className={index === 4 ? "fill-chart-1" : "fill-muted/50"}
              initial={shouldReduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : 0.62 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformBox: "fill-box",
                transformOrigin: "bottom",
              }}
            />
          ))}
        </g>

        <motion.circle
          cx="508"
          cy="192"
          r="4"
          className="fill-chart-2"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.45, 1, 0.45], scale: [1, 1.35, 1] }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        />
      </motion.g>
    </svg>
  );
}
