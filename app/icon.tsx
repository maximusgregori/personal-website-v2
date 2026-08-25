import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            borderRadius: 32,
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "-0.06em",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          }}
        >
          MG
        </div>
      </div>
    ),
    { ...size }
  );
}
