"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import ParticleField from "./ParticleField";
import Magnetic from "./Magnetic";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden grid-faint"
    >
      <div className="absolute inset-0">
        <ParticleField />
      </div>
      {/* radial focus + top/bottom fades */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(196,74,52,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_78%,rgba(74,130,196,0.13),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.4em]"
        >
          {profile.status}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[12vw] font-bold leading-[0.98] tracking-tight text-bone sm:text-7xl sm:leading-[0.92] md:text-8xl lg:text-[7.25rem]"
        >
          Hi, I&apos;m <span className="text-gold-gradient">Jana Akkad.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
        >
          A software engineering student who leads, competes, and builds.
          President of Tuwaiq Student Club, chess competitor, and Brazilian
          Jiu-Jitsu blue belt.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic strength={0.5}>
            <a
              href="#leadership"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore my journey
              <ArrowDown size={16} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
