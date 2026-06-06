"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { chess } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

// Place the lesson-bearing pieces on specific squares (0..63, a8 = 0).
const placement: Record<number, number> = {
  // square index : index into chess.lessons
  19: 0, // Queen
  21: 1, // Knight
  34: 2, // Bishop
  37: 3, // Rook
  44: 4, // Pawn
  42: 5, // King
};

export default function Chess() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const lesson = chess.lessons[active];

  return (
    <Section id="chess">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
        {/* Board */}
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-2xl border border-stroke p-2 shadow-2xl shadow-black/40">
            <div className="grid h-full w-full grid-cols-8 grid-rows-8 overflow-hidden rounded-xl">
              {Array.from({ length: 64 }).map((_, idx) => {
                const row = Math.floor(idx / 8);
                const col = idx % 8;
                const dark = (row + col) % 2 === 1;
                const lessonIdx = placement[idx];
                const hasPiece = lessonIdx !== undefined;
                const isActive = hasPiece && lessonIdx === active;
                return (
                  <div
                    key={idx}
                    className={`relative grid place-items-center ${
                      dark ? "bg-[#101013]" : "bg-[#1b1b1f]"
                    }`}
                  >
                    {hasPiece && (
                      <button
                        onMouseEnter={() => setActive(lessonIdx)}
                        onFocus={() => setActive(lessonIdx)}
                        onClick={() => setActive(lessonIdx)}
                        aria-label={chess.lessons[lessonIdx].lesson}
                        className="group grid h-full w-full place-items-center outline-none"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="chess-glow"
                            className="absolute inset-1 rounded-md bg-gold/15 ring-1 ring-gold/50"
                            transition={{ type: "spring", stiffness: 300, damping: 28 }}
                          />
                        )}
                        <span
                          className={`chess-glyph relative z-10 text-2xl transition-all duration-300 md:text-3xl ${
                            isActive
                              ? "scale-110 text-gold-soft"
                              : "text-bone/80 group-hover:text-gold"
                          } ${reduce ? "" : "group-hover:-translate-y-0.5"}`}
                        >
                          {chess.lessons[lessonIdx].piece}
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-mist">
            Hover a piece
          </p>
        </div>

        {/* Copy + lesson */}
        <div className="order-1 lg:order-2">
          <Heading
            title="Thinking several moves ahead"
            emphasis="moves"
            lead="Chess taught me to weigh consequences before acting. Every piece on the board carries a lesson I bring into engineering and leadership."
          />

          <div className="mt-8 min-h-[7rem] rounded-2xl border border-stroke bg-coal p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <span className="chess-glyph text-3xl text-gold">{lesson.piece}</span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                      {lesson.name}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-gold-gradient">
                      {lesson.lesson}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <p className="font-display text-3xl font-bold text-bone">{chess.achievement}</p>
              <p className="text-sm text-mist">{chess.highlight}</p>
            </div>
            <div className="h-10 w-px bg-stroke" />
            <div className="flex flex-wrap gap-2">
              {chess.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
