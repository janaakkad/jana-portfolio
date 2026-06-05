"use client";

const ITEMS = [
  "Software Engineering",
  "President · Tuwaiq Club",
  "Chess Competitor",
  "Hackathon 1st Place",
  "BJJ Blue Belt",
  "Event Leadership",
  "Strategy in Mind",
];

export default function Marquee() {
  return (
    <div className="marquee-pause relative w-full overflow-hidden border-y border-stroke bg-coal py-3.5 select-none">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {ITEMS.map((it) => (
              <span key={it} className="flex items-center">
                <span className="px-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  {it}
                </span>
                <span className="text-gilt/70">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
