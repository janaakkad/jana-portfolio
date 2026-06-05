"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { experiences } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

export default function Experience() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="experience">
      <Heading
        title="The campaign map"
        emphasis="campaign"
        lead="Every role was a different terrain: VIP cruises, Hajj logistics, fitness expos, anniversary galas. Each one sharpened operations under pressure."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-stroke">
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          return (
            <div key={exp.org} className={i > 0 ? "border-t border-stroke" : ""}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-4 bg-coal px-5 py-5 text-left transition-colors hover:bg-graphite md:px-7"
              >
                <span className="hidden font-mono text-xs text-gold sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-bone md:text-xl">
                    {exp.org}
                  </h3>
                  <p className="text-sm text-mist">
                    {exp.role} · {exp.where}
                  </p>
                </div>
                <span className="hidden font-mono text-xs text-mist md:block">{exp.date}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-stroke text-gold"
                >
                  <Plus size={15} weight="bold" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden bg-graphite"
                  >
                    <ul className="space-y-2.5 px-5 py-5 md:px-7 md:pl-16">
                      <p className="mb-3 font-mono text-xs text-gold md:hidden">{exp.date}</p>
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-mist">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
