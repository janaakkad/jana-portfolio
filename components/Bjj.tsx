"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Lock } from "@phosphor-icons/react";
import { bjj } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

export default function Bjj() {
  const reduce = useReducedMotion();
  const reachedCount = bjj.belts.filter((b) => b.reached).length;
  const currentIdx = reachedCount - 1;

  return (
    <Section id="bjj" className="grid-faint">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
        <Heading
          title="The long game"
          emphasis="long"
          lead="Brazilian Jiu-Jitsu is a study in patience. Progress is invisible day to day and undeniable year over year. The blue belt is a checkpoint, not a finish line."
        />
        <div className="md:text-right">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mist">Current rank</p>
          <p className="font-display text-4xl font-bold text-gold-gradient md:text-5xl">
            {bjj.current}
          </p>
        </div>
      </div>

      {/* Belt progression */}
      <div className="mt-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {bjj.belts.map((belt, i) => (
            <motion.div
              key={belt.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
                e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
              }}
              className={`spotlight group relative flex flex-col gap-3 rounded-2xl border bg-coal p-3.5 transition-colors ${
                i === currentIdx ? "border-gold/60" : "border-stroke"
              }`}
            >
              {/* belt swatch — solid true color */}
              <div
                className="relative h-12 w-full overflow-hidden rounded-lg"
                style={{ background: belt.color, border: "1px solid rgba(255,255,255,0.2)" }}
              >
                {/* soft top shine */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                {/* locked hatch for not-yet-earned belts */}
                {!belt.reached && (
                  <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.4)_0,rgba(0,0,0,0.4)_3px,transparent_3px,transparent_9px)]" />
                )}
                {/* rank bar (red on the black belt) */}
                <div className="absolute right-2.5 top-0 h-full w-3.5" style={{ background: belt.bar }}>
                  <span className="absolute left-0 top-0 h-full w-px bg-white/30" />
                  <span className="absolute right-0 top-0 h-full w-px bg-white/30" />
                </div>
              </div>
              {/* label row */}
              <div className="flex items-center justify-between px-0.5">
                <div className="flex flex-col">
                  <span className={`text-sm font-semibold ${belt.reached ? "text-bone" : "text-mist/70"}`}>
                    {belt.name}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.15em] ${
                      i === currentIdx ? "text-gold" : belt.reached ? "text-gilt" : "text-mist/45"
                    }`}
                  >
                    {i === currentIdx ? `${belt.year} · now` : belt.year}
                  </span>
                </div>
                {belt.reached ? (
                  <Check size={15} weight="bold" className="text-gilt" />
                ) : (
                  <Lock size={13} weight="bold" className="text-mist/50" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-mono text-xs text-mist">
            <span className="text-gold">{reachedCount}</span> / {bjj.belts.length} earned
          </p>
          <p className="font-mono text-xs text-mist">The rest is just consistency.</p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-12 flex flex-wrap gap-3">
        {bjj.values.map((v) => (
          <span
            key={v}
            className="rounded-full border border-stroke bg-coal px-4 py-2 text-sm text-bone"
          >
            {v}
          </span>
        ))}
      </div>
    </Section>
  );
}
