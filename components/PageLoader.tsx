"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShow(false), 500);
    }, 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setShow(true);
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShow(false), 500);
    }, 600);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#141416] transition-opacity duration-500 ease-out"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-[14px] border-2 border-[#f4f4f5] bg-[#f6d860] text-xl font-extrabold leading-none text-[#0a0a0a]">
          С
        </span>
        <span className="text-2xl font-extrabold tracking-tight text-[#f4f4f5]">
          Стефан<span className="text-[#f6d860]">.</span>
        </span>
      </div>
    </div>
  );
}
