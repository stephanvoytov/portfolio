import { buildIconSvg } from "@/lib/theme";

export function GET() {
  return new Response(buildIconSvg(), {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
