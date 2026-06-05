"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Trophy, X, GithubLogo } from "@phosphor-icons/react";
import { missions, type Mission, profile } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

export default function Missions() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<Mission | null>(null);

  return (
    <Section id="missions">
      <Heading
        title="Projects as missions"
        emphasis="missions"
        lead="Each project starts with a problem worth solving and ends with something that runs. Open a mission to read the full brief."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {missions.map((m, i) => (
          <motion.button
            key={m.id}
            layoutId={reduce ? undefined : `mission-${m.id}`}
            onClick={() => setOpen(m)}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
              e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
            }}
            className="spotlight group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-stroke bg-coal p-6 text-left transition-all hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-gold">{m.codename}</span>
              {m.status.includes("Place") ? (
                <span className="flex items-center gap-1 rounded-full border border-gilt/30 bg-gilt/15 px-2.5 py-1 text-xs font-semibold text-gilt">
                  <Trophy size={13} weight="fill" /> {m.status}
                </span>
              ) : (
                <span className="rounded-full border border-stroke px-2.5 py-1 text-xs text-mist">
                  {m.status}
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-semibold text-bone group-hover:text-gold">
              {m.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-mist">{m.problem}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {m.tech.slice(0, 4).map((t) => (
                <span key={t} className="rounded-md border border-stroke px-2 py-0.5 text-[11px] text-mist">
                  {t}
                </span>
              ))}
            </div>
            <span className="absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight size={18} className="text-gold" />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-ink/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
            />
            <div className="fixed inset-0 z-[71] grid place-items-center p-4" onClick={() => setOpen(null)}>
              <motion.div
                layoutId={reduce ? undefined : `mission-${open.id}`}
                onClick={(e) => e.stopPropagation()}
                initial={reduce ? { opacity: 0 } : false}
                animate={reduce ? { opacity: 1 } : undefined}
                className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-stroke bg-graphite p-7 md:p-9"
              >
                <button
                  onClick={() => setOpen(null)}
                  className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-stroke text-mist transition-colors hover:text-bone"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                <span className="font-mono text-xs tracking-[0.2em] text-gold">{open.codename}</span>
                <h3 className="mt-2 font-display text-3xl font-bold text-bone">{open.title}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{open.status}</p>

                <div className="mt-7 space-y-6">
                  <Field label="Problem" value={open.problem} />
                  <Field label="Solution" value={open.solution} />
                  <Field label="Impact" value={open.impact} />
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-mist">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {open.tech.map((t) => (
                        <span key={t} className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-gold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {open.repo && (
                  <a
                    href={`${profile.github}/${open.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    <GithubLogo size={16} weight="fill" /> View repository
                  </a>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-xs uppercase tracking-[0.2em] text-gold">{label}</p>
      <p className="text-base leading-relaxed text-bone/90">{value}</p>
    </div>
  );
}
