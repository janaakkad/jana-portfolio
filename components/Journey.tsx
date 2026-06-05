"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { journey } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

export default function Journey() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const grow = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <Section id="journey">
      <Heading
        title="A life built in phases"
        emphasis="phases"
        lead="Not a paragraph. A sequence. Each phase compounded into the next, the way a strong position is built one move at a time."
      />

      <div ref={ref} className="relative mt-16 pl-2">
        {/* rail */}
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-stroke md:left-[9px]" />
        <motion.div
          className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-azure via-gold to-gold-deep md:left-[9px]"
          style={{ scaleY: reduce ? 1 : grow, bottom: 0, height: "100%" }}
        />

        <ol className="space-y-10">
          {journey.map((j, i) => (
            <motion.li
              key={j.phase}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 md:pl-14"
            >
              <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold bg-ink md:h-5 md:w-5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-5">
                <span className="font-mono text-xs text-gold">{j.phase}</span>
                <h3 className="font-display text-xl font-semibold text-bone md:text-2xl">
                  {j.title}
                </h3>
              </div>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-mist md:pl-12">
                {j.note}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
