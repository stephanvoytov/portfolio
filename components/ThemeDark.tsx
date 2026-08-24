"use client";

import { useEffect } from "react";

/** Включает тёмную тему (класс на <html>) только на странице /example и снимает при уходе. */
export default function ThemeDark() {
  useEffect(() => {
    document.documentElement.classList.add("theme-dark");
    return () => {
      document.documentElement.classList.remove("theme-dark");
    };
  }, []);

  return null;
}
