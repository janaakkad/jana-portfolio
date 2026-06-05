"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentType } from "react";

type IconProps = { size?: number; weight?: "duotone" | "fill" | "bold" | "regular" };

/*
 * A gilded, interactive icon badge.
 * Two-tone (duotone) gold glyph inside a glowing gold tile that springs
 * and tilts on hover, with an aura that blooms when its card is hovered.
 */
export default function IconBadge({
  icon: Icon,
  small = false,
  className = "",
}: {
  icon: ComponentType<IconProps>;
  small?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const box = small ? "h-11 w-11" : "h-14 w-14";
  const size = small ? 20 : 26;

  return (
    <motion.span
      whileHover={reduce ? undefined : { scale: 1.12, rotate: -6 }}
      whileTap={reduce ? undefined : { scale: 0.94 }}
      transition={{ type: "spring", stiffness: 320, damping: 14 }}
      className={`relative grid ${box} shrink-0 place-items-center rounded-2xl border border-fern/45 bg-gradient-to-br from-fern/25 via-gilt/10 to-transparent text-gilt shadow-[inset_0_1px_0_rgba(239,224,140,0.22)] ${className}`}
    >
      {/* bloom aura on card hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-fern/30 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
      {/* ring sweep */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gilt-soft/0 transition-all duration-500 group-hover:ring-gilt-soft/40" />
      <Icon size={size} weight="duotone" />
    </motion.span>
  );
}
