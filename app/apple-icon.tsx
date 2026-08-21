import { ImageResponse } from "next/og";
import { buildIconSvg } from "@/lib/theme";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const svg = buildIconSvg();
  const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- внутри ImageResponse обычный img обязателен */}
      <img src={dataUri} width={180} height={180} alt="" />
    </div>,
    size
  );
}
