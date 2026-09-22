"use client";

import { useEffect, useState } from "react";

/** Línea azul fija a la derecha que crece con el scroll (estilo Indisea). */
export function ScrollRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-rail" aria-hidden>
      <div className="scroll-rail__track" />
      <div className="scroll-rail__fill" style={{ height: `calc((100vh - 24vh) * ${progress})` }} />
    </div>
  );
}
