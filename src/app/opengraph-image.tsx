import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#16223b",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9da9c4",
            marginBottom: 28,
            display: "flex",
          }}
        >
          Panipat, India · Direct from the loom
        </div>
        <div style={{ fontSize: 76, color: "#ece7dc", lineHeight: 1.05, display: "flex" }}>
          House of S&amp;G
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#d6dae3",
            marginTop: 28,
            maxWidth: 900,
            display: "flex",
          }}
        >
          Cotton bedding, sold by the people who source it.
        </div>
      </div>
    ),
    { ...size }
  );
}
