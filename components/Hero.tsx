"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import ParticleField from "./ParticleField";
import Magnetic from "./Magnetic";
import { profile } from "@/data/portfolio";
import { asset } from "@/lib/asset";

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

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-24 md:px-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-0">
        {/* text */}
        <div className="order-2 lg:order-1">
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
            className="font-display text-[12vw] font-bold leading-[0.98] tracking-tight text-bone sm:text-6xl sm:leading-[0.92] md:text-7xl lg:text-[6.25rem]"
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

        {/* portrait — frameless, blended into the background */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 mx-auto w-full max-w-[320px] lg:order-2 lg:mx-0 lg:max-w-[480px]"
        >
          <div className="relative aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/jana-avatar.png")}
              alt={profile.shortName}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              style={{
                objectPosition: "56% 42%",
                WebkitMaskImage:
                  "radial-gradient(ellipse 82% 92% at 56% 42%, #000 44%, transparent 82%)",
                maskImage:
                  "radial-gradient(ellipse 82% 92% at 56% 42%, #000 44%, transparent 82%)",
                filter: "saturate(0.88) contrast(1.05)",
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* melt the edges into the page */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/55 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ink/70 to-transparent lg:from-ink/55" />
            {/* warm tone to match the site palette */}
            <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[radial-gradient(circle_at_56%_42%,rgba(196,74,52,0.28),transparent_72%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
