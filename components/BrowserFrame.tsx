import Image from "next/image";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
}

/** Рамка браузера со скриншотом: точки окна, адресная строка, картинка. */
export default function BrowserFrame({ src, alt, url, priority = false }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-panel shadow-2xl shadow-black/10">
      <div className="flex items-center gap-2 border-b border-line bg-panel-soft px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-line-strong" />
        <span className="h-3 w-3 rounded-full bg-line-strong" />
        <span className="h-3 w-3 rounded-full bg-line-strong" />
        <span className="ml-4 rounded-lg bg-white px-4 py-1.5 font-mono text-xs text-faint ring-1 ring-line-strong">
          {url}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        priority={priority}
        className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
      />
    </div>
  );
}