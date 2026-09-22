"use client";

import { useEffect, useState } from "react";

function parseRgba(bg: string): { r: number; g: number; b: number; a: number } | null {
  if (!bg || bg === "transparent") return null;
  const m = bg.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i);
  if (!m) return null;
  return {
    r: Number(m[1]),
    g: Number(m[2]),
    b: Number(m[3]),
    a: m[4] === undefined ? 1 : Number(m[4]),
  };
}

function luminance(r: number, g: number, b: number) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/** ¿Hay fondo oscuro opaco bajo (x,y)? */
function isDarkAt(x: number, y: number): boolean {
  if (typeof document === "undefined") return false;

  // Menú fullscreen
  if (document.documentElement.classList.contains("nav-menu-open")) return true;

  const stack = document.elementsFromPoint(x, y);
  for (const el of stack) {
    if (!(el instanceof HTMLElement)) continue;
    if (el.dataset.customCursor === "dot") continue;

    const style = getComputedStyle(el);
    const rgba = parseRgba(style.backgroundColor);
    if (!rgba || rgba.a < 0.45) continue;

    return luminance(rgba.r, rgba.g, rgba.b) < 0.52;
  }

  // Fondo de página (crema)
  const page = parseRgba(getComputedStyle(document.body).backgroundColor);
  if (page) return luminance(page.r, page.g, page.b) < 0.52;
  return false;
}

/** Cursor punto: negro en claro, blanco en oscuro, transición fluida. */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setEnabled(mq.matches && !reduce.matches);
    sync();
    mq.addEventListener("change", sync);
    reduce.addEventListener("change", sync);

    return () => {
      mq.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    let lastDark = false;

    const onMove = (e: MouseEvent) => {
      const next = { x: e.clientX, y: e.clientY };
      setPos(next);
      setVisible(true);
      const dark = isDarkAt(next.x, next.y);
      if (dark !== lastDark) {
        lastDark = dark;
        setOnDark(dark);
      }
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      data-custom-cursor="dot"
      className="pointer-events-none fixed top-0 left-0 z-[200] h-3 w-3 rounded-full"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        opacity: visible ? 1 : 0,
        backgroundColor: onDark ? "#f2f0ea" : "#111111",
        transition: "opacity 120ms ease, background-color 70ms linear",
        willChange: "transform, background-color",
      }}
    />
  );
}
