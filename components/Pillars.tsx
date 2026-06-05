"use client";

import { motion, useReducedMotion } from "motion/react";
import { Strategy, PersonSimpleTaiChi, Code, Crown } from "@phosphor-icons/react";
import { pillars } from "@/data/portfolio";
import { Section } from "./primitives";

const ICONS: Record<string, React.ComponentType<{ size?: number; weight?: "duotone" }>> = {
  chess: Strategy,
  bjj: PersonSimpleTaiChi,
  engineering: Code,
  leadership: Crown,
};

export default function Pillars() {
  const reduce = useReducedMotion();
  return (
    <Section className="!py-20 md:!py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl font-display text-xl font-medium leading-snug text-bone md:text-2xl">
          Four disciplines, one operating system for how I think and work.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-mist">
          Lead / Compete / Build
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-stroke bg-stroke sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.key}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
              e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
            }}
            className="spotlight group relative flex flex-col gap-4 bg-coal p-7 transition-colors hover:bg-graphite"
          >
            {(() => {
              const Icon = ICONS[p.key];
              return (
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-6"
                  style={{
                    borderColor: `${p.accent}66`,
                    color: p.accent,
                    background: `linear-gradient(135deg, ${p.accent}2e, transparent)`,
                  }}
                >
                  <Icon size={26} weight="duotone" />
                </span>
              );
            })()}
            <div>
              <h3 className="font-display text-xl font-semibold text-bone">{p.title}</h3>
              <p
                className="mt-0.5 font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: p.accent }}
              >
                {p.maps}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-mist">{p.blurb}</p>
            <span
              className="absolute inset-x-0 bottom-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
