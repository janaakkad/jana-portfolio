"use client";

import { motion, useReducedMotion } from "motion/react";
import { futureVision } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

export default function Future() {
  const reduce = useReducedMotion();
  return (
    <Section className="grid-faint">
      <Heading
        title="The next chapter"
        emphasis="next"
        lead="A direction, not a destination. The position is still being built."
        align="center"
      />

      <div className="relative mt-16">
        {/* connecting line */}
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-stroke md:block" />
        <motion.div
          className="absolute left-0 top-5 hidden h-px origin-left bg-gradient-to-r from-gold to-gold-deep md:block"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 0.18 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%" }}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {futureVision.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <span
                className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 font-mono text-xs ${
                  step.active
                    ? "border-gold bg-gold text-ink"
                    : "border-stroke bg-ink text-mist"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className={`mt-4 font-mono text-xs uppercase tracking-[0.25em] ${
                  step.active ? "text-gold" : "text-mist"
                }`}
              >
                {step.stage}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-bone">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
