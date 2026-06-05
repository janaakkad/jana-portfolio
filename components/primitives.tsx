"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

/* A section shell with consistent rhythm and an anchor id. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

/* Scroll reveal — fades content up as it enters. Collapses under reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Section heading — large display title with optional lead line. No eyebrow by default. */
export function Heading({
  title,
  lead,
  align = "left",
  emphasis,
}: {
  title: string;
  lead?: string;
  align?: "left" | "center";
  emphasis?: string;
}) {
  const titleParts = emphasis ? title.split(emphasis) : [title];
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bone md:text-6xl">
        {emphasis ? (
          <>
            {titleParts[0]}
            <span className="text-gold-gradient italic">{emphasis}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {lead && (
        <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-mist md:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}

/* A small gold-bordered chip used for tags and roles. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stroke bg-coal px-3 py-1 text-xs font-medium text-mist">
      {children}
    </span>
  );
}
