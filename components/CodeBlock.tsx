import Reveal from "@/components/Reveal";

interface CodeBlockProps {
  code: string;
  caption?: string;
}

/** Простой блок кода с моноширинным шрифтом. */
export default function CodeBlock({ code, caption }: CodeBlockProps) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-line-strong bg-[#0d1017] shadow-sm">
        {caption && (
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 font-mono text-xs text-zinc-500">{caption}</span>
          </div>
        )}
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </Reveal>
  );
}
