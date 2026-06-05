"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
  DownloadSimple,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { profile, education } from "@/data/portfolio";
import { Section } from "./primitives";
import IconBadge from "./IconBadge";

export default function Contact() {
  const reduce = useReducedMotion();

  const links = [
    { icon: EnvelopeSimple, label: profile.email, href: `mailto:${profile.email}` },
    { icon: GithubLogo, label: "github.com/" + profile.githubUser, href: profile.github },
    { icon: LinkedinLogo, label: "LinkedIn", href: profile.linkedin },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ];

  return (
    <Section id="contact">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-graphite via-coal to-ink p-8 text-center md:p-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,74,52,0.16),transparent_55%)]" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Open to opportunities</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-bone md:text-6xl">
            Let&apos;s build something <span className="text-gold-gradient italic">worth winning</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
            Internships, projects, collaborations, or a good chess game. My inbox is open.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <EnvelopeSimple size={17} weight="fill" /> Get in touch
            </a>
            <a
              href="/Jana-Akkad-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stroke bg-coal/60 px-6 py-3 text-sm font-semibold text-bone transition-colors hover:border-gold/50"
            >
              <DownloadSimple size={17} /> Download CV
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-stroke bg-coal/50 p-4 transition-colors hover:border-gilt/40"
              >
                <IconBadge icon={l.icon} small />
                <span className="truncate text-xs text-mist group-hover:text-bone">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education + footer */}
      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-stroke pt-10 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-mist">Education</p>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.school}>
                <p className="font-display text-base font-semibold text-bone">{e.school}</p>
                <p className="text-sm text-mist">{e.degree}</p>
                <p className="font-mono text-xs text-gold">{e.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <p className="font-display text-2xl font-bold text-gold-gradient">{profile.brand}</p>
          <p className="mt-2 text-sm text-mist">
            {profile.name} · {profile.location}
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-mist transition-colors hover:text-gold md:justify-end"
          >
            Connect on LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-xs text-mist/60">
        Built with Next.js, Tailwind, and Motion. Try the Konami code.
      </p>
    </Section>
  );
}
