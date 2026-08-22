import { ImageResponse } from "next/og";
import { iconImgDataUri } from "@/lib/theme";

/** Собирает ICO-контейнер из PNG-изображений (PNG-in-ICO поддерживают все современные браузеры). */
function buildIco(pngs: { size: number; data: ArrayBuffer }[]): Buffer {
  const count = pngs.length;
  const headerSize = 6 + count * 16;
  const total =
    headerSize + pngs.reduce((acc, p) => acc + p.data.byteLength, 0);
  const buf = Buffer.alloc(total);

  // ICONDIR
  buf.writeUInt16LE(0, 0); // reserved
  buf.writeUInt16LE(1, 2); // type: icon
  buf.writeUInt16LE(count, 4);

  let offset = headerSize;
  pngs.forEach((p, i) => {
    const e = 6 + i * 16;
    buf.writeUInt8(p.size >= 256 ? 0 : p.size, e); // width
    buf.writeUInt8(p.size >= 256 ? 0 : p.size, e + 1); // height
    buf.writeUInt8(0, e + 2); // palette
    buf.writeUInt8(0, e + 3); // reserved
    buf.writeUInt16LE(1, e + 4); // planes
    buf.writeUInt16LE(32, e + 6); // bit depth
    buf.writeUInt32LE(p.data.byteLength, e + 8);
    buf.writeUInt32LE(offset, e + 12);
    Buffer.from(p.data).copy(buf, offset);
    offset += p.data.byteLength;
  });

  return buf;
}

async function pngAt(size: number): Promise<ArrayBuffer> {
  const res = new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- внутри ImageResponse обычный img обязателен */}
      <img src={iconImgDataUri()} width={size} height={size} alt="" />
    </div>,
    { width: size, height: size }
  );
  return res.arrayBuffer();
}

export async function GET() {
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(
    sizes.map(async (s) => ({ size: s, data: await pngAt(s) }))
  );

  return new Response(new Uint8Array(buildIco(pngs)), {
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
