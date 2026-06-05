"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkle } from "@phosphor-icons/react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function EasterEggs() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let konamiIdx = 0;
    let typed = "";
    let timer: ReturnType<typeof setTimeout>;

    const show = (msg: string) => {
      setToast(msg);
      clearTimeout(timer);
      timer = setTimeout(() => setToast(null), 3200);
    };

    const scrollTo = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const onKey = (e: KeyboardEvent) => {
      // Konami sequence
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[konamiIdx].toLowerCase() || e.key === KONAMI[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === KONAMI.length) {
          show("Discipline beats talent.");
          konamiIdx = 0;
        }
      } else {
        konamiIdx = e.key === KONAMI[0] ? 1 : 0;
      }

      // Typed words
      if (e.key.length === 1) {
        typed = (typed + e.key.toLowerCase()).slice(-12);
        if (typed.endsWith("checkmate")) {
          show("Checkmate. Opening the vault.");
          scrollTo("achievements");
        } else if (typed.endsWith("oss")) {
          show("Oss. On to the mats.");
          scrollTo("bjj");
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="fixed bottom-6 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-gilt/40 bg-graphite px-5 py-3 shadow-2xl shadow-black/50"
        >
          <Sparkle size={18} weight="fill" className="text-gilt" />
          <span className="font-display text-sm font-medium text-bone">{toast}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
