"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { skillClusters } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

const CENTERS = [
  { x: 200, y: 165 },
  { x: 505, y: 120 },
  { x: 805, y: 185 },
  { x: 235, y: 440 },
  { x: 560, y: 475 },
  { x: 825, y: 430 },
];

const CLUSTER_COLORS = ["#5ba05a", "#4a82c4", "#d6c14f", "#5ba05a", "#4a82c4", "#c05238"];

function starPos(cx: number, cy: number, j: number, n: number) {
  const angle = (j / n) * Math.PI * 2 + (cx + cy);
  const radius = 70 + ((j * 37) % 35);
  return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
}

export default function Skills() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Section>
      <Heading
        title="A constellation of skills"
        emphasis="constellation"
        lead="Not bars to fill. A map of how the technical and the human connect. Hover a cluster to light it up."
      />

      {/* Constellation: desktop / tablet only (needs hover + width) */}
      <div className="mt-10 hidden overflow-hidden rounded-3xl border border-stroke bg-coal sm:block">
        <svg
          viewBox="0 0 1000 600"
          className="h-auto w-full"
          role="img"
          aria-label="Skills constellation"
        >
          {skillClusters.map((cluster, ci) => {
            const c = CENTERS[ci];
            const col = CLUSTER_COLORS[ci % CLUSTER_COLORS.length];
            const dim = hover !== null && hover !== ci;
            const stars = cluster.skills.map((_, j) =>
              starPos(c.x, c.y, j, cluster.skills.length)
            );
            return (
              <g
                key={cluster.name}
                onMouseEnter={() => setHover(ci)}
                onMouseLeave={() => setHover(null)}
                style={{ opacity: dim ? 0.22 : 1, transition: "opacity 0.4s" }}
              >
                {/* links */}
                {stars.map((s, j) => (
                  <line
                    key={`l-${j}`}
                    x1={c.x}
                    y1={c.y}
                    x2={s.x}
                    y2={s.y}
                    stroke={col}
                    strokeWidth={hover === ci ? 1.1 : 0.5}
                    strokeOpacity={hover === ci ? 0.6 : 0.25}
                  />
                ))}
                {/* stars */}
                {stars.map((s, j) => (
                  <g key={`s-${j}`}>
                    <motion.circle
                      cx={s.x}
                      cy={s.y}
                      r={hover === ci ? 4 : 3}
                      fill={col}
                      initial={reduce ? false : { scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ci * 0.05 + j * 0.03 }}
                    />
                    <text
                      x={s.x}
                      y={s.y - 9}
                      textAnchor="middle"
                      className="fill-bone"
                      style={{
                        fontSize: 11,
                        opacity: hover === ci ? 1 : 0,
                        transition: "opacity 0.3s",
                      }}
                    >
                      {cluster.skills[j]}
                    </text>
                  </g>
                ))}
                {/* cluster core */}
                <circle cx={c.x} cy={c.y} r={hover === ci ? 8 : 6} fill={col} />
                <text
                  x={c.x}
                  y={c.y + 26}
                  textAnchor="middle"
                  className="fill-bone font-display"
                  style={{ fontSize: 16, fontWeight: 600 }}
                >
                  {cluster.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mobile: clean skill chips grouped by cluster (constellation needs hover) */}
      <div className="mt-10 grid grid-cols-1 gap-7 sm:hidden">
        {skillClusters.map((cluster, ci) => {
          const col = CLUSTER_COLORS[ci % CLUSTER_COLORS.length];
          return (
            <div key={cluster.name}>
              <p
                className="mb-3 font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: col }}
              >
                {cluster.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border px-3 py-1.5 text-sm text-bone"
                    style={{ borderColor: `${col}40`, background: `${col}12` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual legend removed; kept screen-reader-only for accessibility. */}
      <ul className="sr-only">
        {skillClusters.map((cluster) => (
          <li key={cluster.name}>
            {cluster.name}: {cluster.skills.join(", ")}
          </li>
        ))}
      </ul>
    </Section>
  );
}
