"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, MapPin } from "@phosphor-icons/react";
import { education, profile } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <Section id="education">
      <Heading
        title="The academic foundation"
        emphasis="foundation"
        lead="Where the engineering discipline took shape, alongside everything built outside the classroom."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {education.map((e, i) => {
          const current = i === 0;
          const accent = current ? "#4a82c4" : "#d6c14f";
          return (
            <motion.div
              key={e.school}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onPointerMove={(ev) => {
                const r = ev.currentTarget.getBoundingClientRect();
                ev.currentTarget.style.setProperty("--mx", `${((ev.clientX - r.left) / r.width) * 100}%`);
                ev.currentTarget.style.setProperty("--my", `${((ev.clientY - r.top) / r.height) * 100}%`);
              }}
              style={{ ["--spot-color" as string]: `${accent}2b` } as React.CSSProperties}
              className={`spotlight group relative flex flex-col gap-5 overflow-hidden rounded-2xl border bg-coal p-7 transition-colors ${
                current ? "border-azure/40" : "border-stroke hover:border-gilt/30"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105"
                  style={{ borderColor: `${accent}5e`, color: accent, background: `linear-gradient(135deg, ${accent}2e, transparent)` }}
                >
                  <GraduationCap size={24} weight="duotone" />
                </span>
                <span
                  className="rounded-full border px-3 py-1 font-mono text-xs"
                  style={{ borderColor: `${accent}40`, color: accent }}
                >
                  {e.date}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-bone md:text-2xl">
                  {e.school}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">{e.degree}</p>
              </div>

              <div className="mt-auto flex items-center gap-2 text-xs text-mist">
                {current ? (
                  <span className="flex items-center gap-1.5 font-medium text-azure">
                    <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                    Currently enrolled
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {profile.location}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
