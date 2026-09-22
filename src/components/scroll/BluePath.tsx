"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Size = {
  w: number;
  h: number;
  vh: number;
  contactTop: number;
  contactBottom: number;
  firstTurnY: number;
  solTop: number;
  solBottom: number;
};
type Pt = { x: number; y: number };

const STROKE = 20;
const START_R = 52;
const END_R = 48;
const CORNER = 36;
const CREAM = "#f2f0ea";

function sectionBox(id: string): { top: number; bottom: number } | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const top = r.top + window.scrollY;
  return { top, bottom: top + r.height };
}

/** Path solo H/V con esquinas 90°. */
function orthoRoundedPath(points: Pt[], r = CORNER): string {
  if (points.length < 2) return "";

  const parts: string[] = [`M ${points[0].x} ${points[0].y}`];

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    if (!next) {
      parts.push(`L ${curr.x} ${curr.y}`);
      break;
    }

    const dx1 = Math.sign(curr.x - prev.x);
    const dy1 = Math.sign(curr.y - prev.y);
    const dx2 = Math.sign(next.x - curr.x);
    const dy2 = Math.sign(next.y - curr.y);

    const before: Pt = { x: curr.x - dx1 * r, y: curr.y - dy1 * r };
    const after: Pt = { x: curr.x + dx2 * r, y: curr.y + dy2 * r };

    parts.push(`L ${before.x} ${before.y}`);
    parts.push(`Q ${curr.x} ${curr.y} ${after.x} ${after.y}`);
  }

  return parts.join(" ");
}

function segLen(a: Pt, b: Pt) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function BluePath() {
  const blueRef = useRef<SVGPathElement>(null);
  const creamRef = useRef<SVGPathElement>(null);
  const [size, setSize] = useState<Size>({
    w: 0,
    h: 0,
    vh: 800,
    contactTop: 0,
    contactBottom: 0,
    firstTurnY: 420,
    solTop: 2000,
    solBottom: 3200,
  });
  const progress = useRef(0);
  const target = useRef(0);
  const blueLen = useRef(0);
  const creamLen = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      const vh = window.innerHeight;
      const h = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        vh,
      );

      const contact = sectionBox("hablar");
      const contactTop = contact?.top ?? h * 0.82;
      const contactBottom = contact?.bottom ?? h;

      const about = sectionBox("nosotros");
      const firstTurnY = about
        ? about.top + Math.min((about.bottom - about.top) * 0.45, 220)
        : 420;

      const sol = sectionBox("soluciones");
      const erp = sectionBox("erp-solution");
      const solTop = sol?.top ?? Math.round(h * 0.4);
      const solBottom = erp?.top ?? sol?.bottom ?? Math.round(h * 0.58);

      setSize({
        w,
        h,
        vh,
        contactTop,
        contactBottom,
        firstTurnY,
        solTop,
        solBottom,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    const timers = [400, 900, 1600, 2800].map((ms) => window.setTimeout(measure, ms));

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const geometry = useMemo(() => {
    const { w, h, vh, contactTop, contactBottom, firstTurnY, solTop, solBottom } = size;
    if (w < 100 || h < 100) return null;

    // Carril derecho (inicio + trazo tras 05 + círculo final)
    const right = Math.min(w - 72, Math.round(w * 0.82));
    const left = Math.max(64, Math.round(w * 0.16));

    const startY = 200;
    const turn1 = Math.max(startY + START_R + 80, firstTurnY);

    // Bajo 05: espacio amplio para recolocar (oculto) y salir a media altura de viewport
    // tip en yExit ≈ centro Y de pantalla cuando sales de soluciones
    const yUnder = Math.max(turn1 + 200, solTop + Math.round(vh * 0.1));
    const yExit = Math.max(
      yUnder + Math.round(vh * 0.9),
      solBottom + Math.round(vh * 0.06),
    );

    const endY = Math.min(
      contactBottom - 100,
      contactTop + Math.max(280, (contactBottom - contactTop) * 0.72),
    );
    const splitY = contactTop;

    // 1) giro izq. · 2) cruce+bajada dcha. bajo 05 · 3) sigue a la derecha hasta el final
    const bluePts: Pt[] = [
      { x: right, y: startY + START_R },
      { x: right, y: turn1 },
      { x: left, y: turn1 },
      { x: left, y: yUnder },
      { x: right, y: yUnder },
      { x: right, y: yExit },
      { x: right, y: splitY },
    ];

    const creamPts: Pt[] = [
      { x: right, y: splitY },
      { x: right, y: endY - END_R },
    ];

    const firstTurnEndLen =
      segLen(bluePts[0], bluePts[1]) + segLen(bluePts[1], bluePts[2]);
    // Zona oculta: baja izq. + cruce + bajada dcha. hasta yExit
    const hiddenStartLen = firstTurnEndLen;
    const hiddenEndLen =
      firstTurnEndLen +
      segLen(bluePts[2], bluePts[3]) +
      segLen(bluePts[3], bluePts[4]) +
      segLen(bluePts[4], bluePts[5]);

    return {
      startX: right,
      startY,
      endX: right,
      endY,
      yExit,
      blueD: orthoRoundedPath(bluePts),
      creamD: orthoRoundedPath(creamPts),
      firstTurnEndLen,
      hiddenStartLen,
      hiddenEndLen,
    };
  }, [size]);

  useEffect(() => {
    const blue = blueRef.current;
    const cream = creamRef.current;
    if (!blue || !geometry) return;

    blueLen.current = blue.getTotalLength();
    creamLen.current = cream?.getTotalLength() ?? 0;
    blue.style.strokeDasharray = String(blueLen.current);
    blue.style.strokeDashoffset = String(blueLen.current);
    if (cream) {
      cream.style.strokeDasharray = String(creamLen.current);
      cream.style.strokeDashoffset = String(creamLen.current);
    }

    const totalLen = blueLen.current + creamLen.current;
    const pathStartY = geometry.startY;
    const pathEndY = geometry.endY;
    const yExit = geometry.yExit;
    const { firstTurnEndLen, hiddenStartLen, hiddenEndLen } = geometry;
    const hiddenFrac = hiddenEndLen / Math.max(1, totalLen);

    const read = () => {
      const vh = window.innerHeight;
      const scrollStart = pathStartY - vh * 0.5;
      const scrollEnd = pathEndY - vh * 0.42;
      const span = Math.max(1, scrollEnd - scrollStart);
      let raw = (window.scrollY - scrollStart) / span;
      raw = Math.min(1, Math.max(0, raw));

      // Al salir de 05, el tip debe estar en yExit ≈ centro Y del viewport
      const exitScroll = yExit - vh * 0.5;
      const exitT = Math.min(1, Math.max(0, (exitScroll - scrollStart) / span));
      if (raw <= exitT && exitT > 0.02) {
        // Hasta el exit: mapear scroll → progreso hasta fin de zona oculta
        target.current = (raw / exitT) * hiddenFrac;
      } else {
        // Después: del tip en yExit al final
        const rest = 1 - hiddenFrac;
        target.current = hiddenFrac + ((raw - exitT) / Math.max(0.001, 1 - exitT)) * rest;
      }
      target.current = Math.min(1, Math.max(0, target.current));
    };

    const frame = () => {
      const diff = target.current - progress.current;
      const abs = Math.abs(diff);
      const drawnNow = totalLen * progress.current;

      let lerp = 0.08;
      let cap = 0.012;
      if (drawnNow < firstTurnEndLen) {
        lerp = 0.11;
        cap = 0.02;
      } else if (drawnNow >= hiddenStartLen && drawnNow < hiddenEndLen) {
        // Bajo 05: rápido (no se ve) para recolocar a tiempo
        lerp = 0.32;
        cap = 0.065;
      }

      const step = Math.sign(diff) * Math.min(abs * lerp, cap);
      progress.current += step;

      const p = Math.max(progress.current, 0.025);
      const drawn = totalLen * p;

      if (drawn <= blueLen.current) {
        blue.style.strokeDashoffset = String(blueLen.current - drawn);
        if (cream) cream.style.strokeDashoffset = String(creamLen.current);
      } else {
        blue.style.strokeDashoffset = "0";
        if (cream) {
          cream.style.strokeDashoffset = String(
            Math.max(0, creamLen.current - (drawn - blueLen.current)),
          );
        }
      }

      raf.current = requestAnimationFrame(frame);
    };

    read();
    raf.current = requestAnimationFrame(frame);
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [geometry]);

  if (size.w < 900 || !geometry) return null;

  const { startX, startY, endX, endY, blueD, creamD } = geometry;
  const { w, h } = size;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-[1] hidden md:block"
      style={{ width: w, height: h }}
    >
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
        <circle
          cx={startX}
          cy={startY}
          r={START_R}
          stroke="var(--brand)"
          strokeWidth={STROKE}
          fill="none"
        />
        <path
          ref={blueRef}
          d={blueD}
          stroke="var(--brand)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          ref={creamRef}
          d={creamD}
          stroke={CREAM}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx={endX}
          cy={endY}
          r={END_R}
          stroke={CREAM}
          strokeWidth={STROKE}
          fill="none"
        />
      </svg>
    </div>
  );
}
