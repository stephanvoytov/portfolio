import { ImageResponse } from "next/og";
import { cases } from "@/lib/cases";
import { theme } from "@/lib/theme";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = cases.find((c) => c.id === id);
  const title = item?.title ?? "Кейс";
  const tagline = item?.tagline ?? "Разработка на Next.js";
  const typeLabel = item?.typeLabel ?? "Кейс";
  const domain = site.siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          backgroundColor: theme.ink,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: theme.accent,
              color: theme.ink,
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            С
          </div>
          <span style={{ fontSize: 24, fontWeight: 700, color: theme.accent, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {typeLabel}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.6)", marginTop: 18 }}>{tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: theme.accent }}>{domain}</div>
      </div>
    ),
    { ...size }
  );
}
