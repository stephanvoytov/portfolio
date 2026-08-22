import { ImageResponse } from "next/og";
import { iconImgDataUri } from "@/lib/theme";

/** PNG-иконка сайта в любом размере: /icon/192, /icon/512 и т.д. */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size: raw } = await params;
  const size = Math.min(512, Math.max(16, parseInt(raw, 10) || 192));

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- внутри ImageResponse обычный img обязателен */}
      <img src={iconImgDataUri()} width={size} height={size} alt="" />
    </div>,
    {
      width: size,
      height: size,
      headers: { "Cache-Control": "public, max-age=86400" },
    }
  );
}
