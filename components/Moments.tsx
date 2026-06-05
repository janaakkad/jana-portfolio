"use client";

import { motion, useReducedMotion } from "motion/react";
import { LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react";
import { moments, profile } from "@/data/portfolio";
import { Heading, Section } from "./primitives";
import { asset } from "@/lib/asset";

function spot(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
}

export default function Moments() {
  const reduce = useReducedMotion();

  return (
    <Section id="moments">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Heading
          title="Moments worth sharing"
          emphasis="Moments"
          lead="Snapshots from the field: events I ran, rooms I was in, and things I am proud of. Straight from my feed."
        />
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-stroke bg-coal px-4 py-2 text-sm text-bone transition-colors hover:border-gold/50"
        >
          <LinkedinLogo size={18} weight="fill" className="text-gold" />
          Follow on LinkedIn
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moments.map((m, i) => (
          <motion.a
            key={m.id}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            onPointerMove={spot}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`spotlight group relative flex flex-col overflow-hidden rounded-2xl border border-stroke bg-coal transition-all hover:-translate-y-1 hover:border-gold/40 ${
              m.full ? "sm:col-span-2 lg:col-span-3" : m.wide ? "sm:col-span-2" : ""
            }`}
          >
            {/* visual: real image if present, else a styled gradient placeholder */}
            <div
              className={`relative overflow-hidden ${
                m.full ? "h-56 md:h-72" : m.wide ? "h-52 md:h-64" : m.tall ? "h-72 md:h-80" : "h-44"
              }`}
            >
              {/* placeholder base — shows if no photo, or if the photo is missing */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite via-coal to-ink">
                <div className="absolute inset-0 grid-faint opacity-60" />
                <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-gilt/40 bg-gradient-to-br from-gilt/20 via-gilt/5 to-transparent text-3xl text-gilt shadow-[inset_0_1px_0_rgba(241,214,145,0.25)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {m.glyph}
                </span>
              </div>
              {/* real photo on top, if the file exists */}
              {m.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={asset(m.image)}
                  alt={m.title}
                  style={{ objectPosition: m.focus ?? "center" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <span className="absolute left-3 top-3 rounded-full border border-gilt/30 bg-ink/70 px-2.5 py-1 text-[11px] font-medium text-gilt backdrop-blur">
                {m.tag}
              </span>
              <span className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight size={18} className="text-gilt" />
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="font-display text-lg font-semibold leading-snug text-bone group-hover:text-gold">
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed text-mist">{m.blurb}</p>
            </div>
          </motion.a>
        ))}
      </div>

    </Section>
  );
}
