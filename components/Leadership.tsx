"use client";

import { motion, useReducedMotion } from "motion/react";
import { Users, Lightning, TrendUp, GoogleLogo, ArrowUpRight } from "@phosphor-icons/react";
import { leadership } from "@/data/portfolio";
import { Section } from "./primitives";
import IconBadge from "./IconBadge";

const ICONS = [Users, Lightning, TrendUp];

export default function Leadership() {
  const reduce = useReducedMotion();
  return (
    <Section id="leadership" className="grid-faint">
      <div className="relative overflow-hidden rounded-3xl border border-stroke bg-gradient-to-br from-graphite via-coal to-ink p-8 md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Leadership</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-bone md:text-6xl">
            {leadership.role}
          </h2>
          <p className="mt-6 font-display text-2xl font-medium italic leading-snug text-gold-gradient md:text-3xl">
            &ldquo;{leadership.philosophy}&rdquo;
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-stroke bg-stroke sm:grid-cols-3">
          {leadership.pillars.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={p.label}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-coal/80 p-7"
              >
                <IconBadge icon={Icon} />
                <h3 className="mt-5 font-display text-xl font-semibold text-bone">{p.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">{p.note}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative mt-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-mist">
            Also building
          </p>
          <div className="grid grid-cols-1">
            {leadership.also.map((a) => (
              <div
                key={a.org}
                className="group flex items-start gap-4 rounded-2xl border border-stroke bg-coal/70 p-5 transition-colors hover:border-azure/40 md:max-w-xl"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-azure/40 bg-gradient-to-br from-azure/20 to-transparent text-azure shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105">
                  <GoogleLogo size={24} weight="duotone" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-display text-base font-semibold text-bone">{a.org}</h4>
                    <ArrowUpRight
                      size={15}
                      className="text-mist opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-azure">
                    {a.role} · {a.where}
                  </p>
                  {"note" in a && a.note && (
                    <p className="mt-2 text-sm leading-relaxed text-mist">{a.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
