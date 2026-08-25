"use client";

import dynamic from "next/dynamic";

import { JOURNEY_STOPS } from "@/lib/journey";

const World = dynamic(
  () => import("@/components/ui/globe").then((module) => module.World),
  { ssr: false }
);

const ARC_COLOR = "#E45A66";

const ARCS = JOURNEY_STOPS.slice(0, -1).map((stop, index) => {
  const next = JOURNEY_STOPS[index + 1];
  return {
    order: index + 1,
    startLat: stop.lat,
    startLng: stop.lng,
    endLat: next.lat,
    endLng: next.lng,
    arcAlt: index % 2 === 0 ? 0.25 : 0.4,
    color: ARC_COLOR,
  };
});

const globeConfig = {
  pointSize: 4,
  globeColor: "#1a2744",
  showAtmosphere: true,
  atmosphereColor: "#c5cad3",
  atmosphereAltitude: 0.15,
  emissive: "#1a2744",
  emissiveIntensity: 0.2,
  shininess: 0.8,
  polygonColor: "rgba(247,248,248,0.85)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#A32938",
  arcTime: 1600,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 30, lng: -30 },
  autoRotate: true,
  autoRotateSpeed: 0.6,
};

export function JourneyGlobe() {
  return (
    <div className="relative h-[28rem] w-full overflow-hidden rounded-xl bg-glass inset-ring inset-ring-white/12 lg:h-[36rem]">
      <World data={ARCS} globeConfig={globeConfig} />
    </div>
  );
}
