"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/*
 * Storm canvas for the hero.
 * - Drifting teal "rain" nodes connected by faint lines.
 * - Nodes flee the cursor (repel field).
 * - Occasional jagged lightning bolts with a screen flash.
 * Runs entirely on requestAnimationFrame; never touches React state.
 */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let frame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    type P = { x: number; y: number; vx: number; vy: number; r: number; col: string };
    let parts: P[] = [];

    // lightning state
    let bolt: { pts: { x: number; y: number }[]; life: number } | null = null;
    let flash = 0;
    let nextBolt = 90;

    function resize() {
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(95, Math.floor((w * h) / 15000));
      parts = Array.from({ length: count }, () => {
        const rnd = Math.random();
        const col =
          rnd < 0.16
            ? "rgba(221,125,98,0.9)" // terracotta
            : rnd < 0.34
            ? "rgba(120,162,212,0.9)" // azure
            : "rgba(168,152,144,0.5)"; // taupe
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.7 + 0.6,
          col,
        };
      });
    }

    function makeBolt() {
      const startX = w * (0.45 + Math.random() * 0.5);
      const pts = [{ x: startX, y: 0 }];
      let x = startX;
      let y = 0;
      const segs = 14 + Math.floor(Math.random() * 8);
      const targetY = h * (0.45 + Math.random() * 0.25);
      while (y < targetY) {
        y += targetY / segs;
        x += (Math.random() - 0.5) * 70;
        pts.push({ x, y });
      }
      bolt = { pts, life: 14 };
      flash = 1;
    }

    function draw() {
      frame++;
      ctx!.clearRect(0, 0, w, h);

      // lightning scheduling
      if (!reduce) {
        nextBolt--;
        if (nextBolt <= 0) {
          makeBolt();
          nextBolt = 130 + Math.floor(Math.random() * 200);
        }
      }

      // flash wash
      if (flash > 0) {
        ctx!.fillStyle = `rgba(224,121,95,${flash * 0.07})`;
        ctx!.fillRect(0, 0, w, h);
        flash *= 0.82;
        if (flash < 0.02) flash = 0;
      }

      // particles
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (!reduce) {
          // repel from cursor
          const dxm = p.x - mouse.x;
          const dym = p.y - mouse.y;
          const dm2 = dxm * dxm + dym * dym;
          if (dm2 < 130 * 130) {
            const f = (1 - Math.sqrt(dm2) / 130) * 0.6;
            p.vx += (dxm / (Math.sqrt(dm2) + 0.1)) * f;
            p.vy += (dym / (Math.sqrt(dm2) + 0.1)) * f;
          }
          p.vx *= 0.96;
          p.vy *= 0.96;
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          p.x = Math.max(0, Math.min(w, p.x));
          p.y = Math.max(0, Math.min(h, p.y));
        }

        for (let j = i + 1; j < parts.length; j++) {
          const q = parts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 128 * 128) {
            const a = (1 - d2 / (128 * 128)) * 0.16;
            ctx!.strokeStyle = (i + j) % 2 ? `rgba(120,162,212,${a})` : `rgba(196,74,52,${a})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.col;
        ctx!.fill();
      }

      // lightning bolt
      if (bolt && bolt.life > 0) {
        const alpha = bolt.life / 14;
        ctx!.strokeStyle = `rgba(244,206,186,${alpha})`;
        ctx!.lineWidth = 2;
        ctx!.shadowColor = "rgba(224,121,95,0.9)";
        ctx!.shadowBlur = 16;
        ctx!.beginPath();
        ctx!.moveTo(bolt.pts[0].x, bolt.pts[0].y);
        for (const pt of bolt.pts) ctx!.lineTo(pt.x, pt.y);
        ctx!.stroke();
        ctx!.shadowBlur = 0;
        bolt.life--;
        if (bolt.life <= 0) bolt = null;
      }

      raf = requestAnimationFrame(draw);
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}
