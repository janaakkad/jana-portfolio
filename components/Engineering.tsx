"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GithubLogo, Star, GitFork, ArrowUpRight } from "@phosphor-icons/react";
import { profile, techStack } from "@/data/portfolio";
import { Heading, Section } from "./primitives";

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  fork: boolean;
  updated_at: string;
};

// Fallback used if the GitHub API is rate-limited or offline.
const FALLBACK: Repo[] = [
  { name: "SparkSpace", description: "Creative workshop hub built with agile practices.", language: "JavaScript", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/janaakkad/SparkSpace", fork: false, updated_at: "" },
  { name: "MindGlow-IoT", description: "ESP32 color memory game with sensors and Blynk cloud.", language: "C++", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/janaakkad/MindGlow-IoT", fork: true, updated_at: "" },
  { name: "Coffee-Shop-Management-System", description: "Java console app with queues, linked lists and hash maps.", language: "Java", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/janaakkad/Coffee-Shop-Management-System", fork: true, updated_at: "" },
  { name: "Eventure-Jeddah", description: "Event management system from the University of Jeddah.", language: "JavaScript", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/janaakkad/Eventure-Jeddah", fork: true, updated_at: "" },
  { name: "Student_Management_System-Testing", description: "Coverage-based JUnit 5 test suite.", language: "Java", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/janaakkad/Student_Management_System-Testing", fork: true, updated_at: "" },
  { name: "Fresh-Bite-HCI-Project", description: "Healthy-eating mobile app concept, HCI design project.", language: "Figma", stargazers_count: 0, forks_count: 0, html_url: "https://github.com/janaakkad/Fresh-Bite-HCI-Project", fork: true, updated_at: "" },
];

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#e0a56e",
  Java: "#c05238",
  "C++": "#a8694a",
  TypeScript: "#4a82c4",
  HTML: "#d4663a",
  CSS: "#4a82c4",
  Python: "#5ba05a",
  Figma: "#a89890",
};

export default function Engineering() {
  const [repos, setRepos] = useState<Repo[]>(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: Repo[]) => {
        if (cancelled || !Array.isArray(data) || data.length === 0) return;
        setRepos(data);
        setLive(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const top = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count || (b.updated_at > a.updated_at ? 1 : -1))
    .slice(0, 6);

  return (
    <Section id="engineering">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Heading
          title="Building systems"
          emphasis="systems"
          lead="Real repositories, pulled live from my GitHub. From IoT games to full-stack platforms and coverage-driven test suites."
        />
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-stroke bg-coal px-4 py-2 text-sm text-bone transition-colors hover:border-azure/50"
        >
          <GithubLogo size={18} weight="fill" className="text-gilt" />
          @{profile.githubUser}
          <span className={`ml-1 h-2 w-2 rounded-full ${live ? "bg-fern" : "bg-mist/50"}`} />
        </a>
      </div>

      {/* Repo grid */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {top.map((r, i) => (
          <motion.a
            key={r.name}
            href={r.html_url}
            target="_blank"
            rel="noreferrer"
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
              e.currentTarget.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
            }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="spotlight group flex flex-col gap-3 rounded-2xl border border-stroke bg-coal p-5 transition-all hover:-translate-y-1 hover:border-azure/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-semibold text-bone group-hover:text-azure">
                {r.name}
              </span>
              <ArrowUpRight size={16} className="text-mist transition-colors group-hover:text-azure" />
            </div>
            <p className="line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-mist">
              {r.description || "No description provided."}
            </p>
            <div className="mt-auto flex items-center gap-4 pt-1 text-xs text-mist">
              {r.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: LANG_COLORS[r.language] || "#6b6b73" }}
                  />
                  {r.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star size={13} weight="fill" /> {r.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={13} /> {r.forks_count}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mt-10 flex flex-wrap gap-2.5">
        {techStack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-stroke bg-graphite px-3.5 py-1.5 text-sm text-bone/90"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}
