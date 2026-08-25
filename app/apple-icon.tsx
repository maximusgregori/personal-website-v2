import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            borderRadius: 90,
            color: "#ffffff",
            fontSize: 72,
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
