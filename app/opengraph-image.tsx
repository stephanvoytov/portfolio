import { ImageResponse } from "next/og";
import { theme, iconImgDataUri } from "@/lib/theme";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "VOYTOV STUDIO — разработка сайтов на Next.js";

export default function OpengraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- внутри ImageResponse обычный img обязателен */}
          <img src={iconImgDataUri()} width={72} height={72} alt="" />
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            VOYTOV STUDIO
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>Разработка сайтов на Next.js</div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.6)", marginTop: 18 }}>
            Интернет-магазины, каталоги и лендинги под ключ
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: theme.accent }}>{domain}</div>
      </div>
    ),
    { ...size }
  );
}
