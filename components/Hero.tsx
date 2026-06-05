"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import ParticleField from "./ParticleField";
import Magnetic from "./Magnetic";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const rotating = profile.headlines;

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % rotating.length), 3200);
    return () => clearInterval(t);
  }, [reduce, rotating.length]);

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
          className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-gold"
        >
          {profile.status}
        </motion.p>

        <h1 className="font-display text-[15vw] font-bold leading-[0.92] tracking-tight text-bone sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <span className="block overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={i}
                initial={reduce ? false : { y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-gold-gradient"
              >
                {rotating[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-mist"
        >
          Software Engineer. President. Chess competitor. Jiu-Jitsu athlete.
          Builder.
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
          <Magnetic strength={0.5}>
            <a
              href="#missions"
              className="group inline-flex items-center gap-2 rounded-full border border-stroke bg-coal/60 px-6 py-3 text-sm font-semibold text-bone transition-colors hover:border-gold/50"
            >
              View projects
              <ArrowUpRight size={16} weight="bold" className="text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
