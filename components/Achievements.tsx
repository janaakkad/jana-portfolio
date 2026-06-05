"use client";

import { motion, useReducedMotion } from "motion/react";
import { Trophy, Medal, Crown, Barbell, SealCheck, UsersThree } from "@phosphor-icons/react";
import { achievements, certifications } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

const ICONS = [Trophy, Medal, Crown, Barbell, SealCheck, UsersThree];
const CERT_COLORS = ["#d6c14f", "#d6c14f", "#d6c14f", "#d6c14f"];

export default function Achievements() {
  const reduce = useReducedMotion();
  return (
    <Section id="achievements">
      <Heading
        title="The achievement vault"
        emphasis="vault"
        lead="Earned, not given. Each one unlocked through a different kind of pressure."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = ICONS[i % ICONS.length];
          const big = i === 0;
          return (
            <motion.div
              key={a.title}
              initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
                e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
              }}
              className={`spotlight group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-stroke bg-coal p-6 transition-colors hover:border-white/15 ${
                big ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-stroke bg-white/[0.04] text-gilt shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-105">
                  <Icon size={24} weight="duotone" />
                </span>
                <span className="rounded-full border border-stroke px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-mist">
                  {a.tag}
                </span>
              </div>
              <h3 className="relative font-display text-lg font-semibold leading-snug text-bone">
                {a.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-mist">{a.detail}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications & awards */}
      <div className="mt-12">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-mist">
          Certifications &amp; Awards
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => {
            const col = CERT_COLORS[i % CERT_COLORS.length];
            const CIcon = i === certifications.length - 1 ? Trophy : SealCheck;
            return (
              <motion.div
                key={c.name}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative overflow-hidden rounded-2xl border border-stroke bg-coal p-5 pt-6"
              >
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: col }} />
                <span
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ background: `${col}24`, color: col }}
                >
                  <CIcon size={18} weight="fill" />
                </span>
                <p className="mt-4 text-sm font-medium leading-snug text-bone">{c.name}</p>
                <p className="mt-1 text-xs text-mist">{c.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
