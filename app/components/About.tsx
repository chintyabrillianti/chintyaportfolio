"use client";

import { useEffect, useState } from "react";
import { personalData, techStackData } from "../data/portfolioData";
import Image from "next/image";
import {
  Award,
  Code,
  Database,
  Server,
  Wrench,
  Workflow,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./TechStack.module.css";

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const interestAreas = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Software Engineer",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#190E20] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-36 top-24 h-[34rem] w-[34rem] rounded-full bg-[#39213D]/25 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl space-y-12 px-6 sm:px-8 lg:space-y-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5E6DC] sm:text-4xl">
              {personalData.name}
            </h3>
            <p className="text-xs font-medium tracking-[0.2em] text-[#D7A9C5] uppercase">
              {personalData.title}
            </p>
            <p className="max-w-2xl text-base leading-[1.9] text-[#BDAABD]">
              {personalData.bio}
            </p>
            <div className="flex items-center gap-3 pt-2 text-sm text-[#BDAABD]">
              <span className="h-px w-9 bg-[#D7A9C5]/60" />
              {personalData.education.degree} · {personalData.education.institution}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[390px]"
          >
            <div className="absolute -inset-4 rounded-[45%_45%_8px_8px] border border-[#D7A9C5]/20" />
            <div className="relative h-[390px] overflow-hidden rounded-[45%_45%_8px_8px] bg-gradient-to-b from-[#39213D] to-[#1b1020] sm:h-[470px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_30%,rgba(215,169,197,0.19),transparent_58%)]" />
              <Image
                src="/profile-transparent.png"
                alt={personalData.name}
                fill
                sizes="(max-width: 640px) 90vw, 390px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 border border-white/10 bg-[#211427] px-4 py-3 sm:-left-10">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-[#D7A9C5]">
                BEYOND THE CODE.
              </span>
              <span className="text-sm text-[#F5E6DC]">
                {personalData.education.year} · Informatika
              </span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-7">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-[#D7A9C5] uppercase">
                02 — Education &amp; interests
              </p>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#F5E6DC] sm:text-3xl">
                Latar Belakang dan Pencapaian
              </h3>
            </div>
            <span className="text-xs text-[#BDAABD]">Academic background</span>
          </div>

          <div className={`${styles.educationGrid} grid grid-cols-1 gap-5 lg:grid-cols-2`}>
            <article className={styles.educationCard}>
              <div className={styles.educationCardHeading}>
                <Award size={20} aria-hidden="true" />
                <p>Pencapaian Akademik</p>
              </div>
              <div className={styles.educationTimeline}>
                <div className={styles.educationTimelineItem}>
                  <span className={styles.educationTimelineNode} aria-hidden="true" />
                  <div className={styles.educationTimelineContent}>
                    <h4>
                      Lulusan Terbaik Fakultas Ilmu Komputer Universitas Pamulang 2026
                    </h4>
                  </div>
                </div>
                <div className={styles.educationTimelineItem}>
                  <span className={styles.educationTimelineNode} aria-hidden="true" />
                  <div className={styles.educationTimelineContent}>
                    <p className={styles.educationTimelineLabel}>IPK</p>
                    <p className={styles.educationGpa}>{personalData.education.gpa}</p>
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.educationCard}>
              <div className={styles.educationCardHeading}>
                <Code size={20} aria-hidden="true" />
                <p>
                  Minat &amp; Keahlian Utama
                </p>
              </div>
              <div className={styles.educationInterestIntro}>
                <p>
                  Bidang fokus dan keahlian inti dalam pengembangan perangkat lunak.
                </p>
              </div>
              <ul className={styles.educationInterestList}>
                {interestAreas.map((interest) => (
                  <li
                    key={interest}
                  >
                    {interest}
                    <ArrowUpRight size={14} className="shrink-0 text-[#D7A9C5]" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechnicalStack() {
  const prefersReducedMotion = useReducedMotion();
  const skillGroups: {
    title: string;
    icon: LucideIcon;
    skills: string[];
  }[] = [
    {
      title: "Backend Development",
      icon: Server,
      skills: techStackData.backend,
    },
    {
      title: "Database Management",
      icon: Database,
      skills: techStackData.database,
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: techStackData.frontend.map((skill) => skill === "React" ? "React.js" : skill),
    },
    {
      title: "Development Tools & Environment",
      icon: Wrench,
      skills: [
        ...techStackData.tools,
        "Microsoft Excel",
        "Node.js",
        "npm",
        "Vite",
        "Laragon",
        "Vercel",
        "Netlify",
        "EthioDeploy",
      ],
    },
    {
      title: "Development Practices",
      icon: Workflow,
      skills: [
        "Responsive Web Design",
        "API Integration",
        "Reduced Motion Support",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % skillGroups.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, prefersReducedMotion, skillGroups.length]);

  const move = (direction: -1 | 1) => {
    setActiveIndex((index) => {
      return (index + direction + skillGroups.length) % skillGroups.length;
    });
  };

  return (
    <section className="relative border-t border-white/[0.06] bg-[#190E20] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl space-y-10"
        >
          <div className="space-y-3">
            <span className="text-[10px] font-semibold tracking-[0.22em] text-[#D7A9C5] uppercase">
              05 — Technology stack
            </span>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#F5E6DC] sm:text-3xl">
              Keahlian Teknis & Tools
            </h3>
          </div>

          <div
            className={styles.aboutStack}
            role="region"
            aria-label="Carousel lima kategori keahlian teknis"
            aria-roledescription="carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.aboutStackStage}>
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                const position = (index - activeIndex + skillGroups.length) % skillGroups.length;
                const positionClass = [
                  styles.aboutStackCardActive,
                  styles.aboutStackCardRight,
                  styles.aboutStackCardFarRight,
                  styles.aboutStackCardFarLeft,
                  styles.aboutStackCardLeft,
                ][position];
                const featured = index === activeIndex;

                return (
                  <button
                    type="button"
                    key={group.title}
                    className={`${styles.aboutStackCard} ${positionClass}`}
                    aria-label={`${group.title}${featured ? ", card aktif" : ", jadikan card aktif"}`}
                    aria-pressed={featured}
                    onClick={() =>
                      setActiveIndex(skillGroups.findIndex((item) => item.title === group.title))
                    }
                  >
                    <span className={styles.aboutStackCardHeading}>
                      <Icon aria-hidden="true" />
                      <span>{group.title}</span>
                    </span>
                    <span className={styles.aboutStackCardDivider} aria-hidden="true" />
                    <span className={styles.aboutStackCardSkills}>
                      {group.skills.map((skill) => (
                        <span className={styles.aboutStackSkill} key={skill}>
                          {skill}
                        </span>
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={styles.aboutControls}>
              <span className={styles.aboutCounter} aria-live="polite">
                {(activeIndex % skillGroups.length) + 1} / {skillGroups.length}
              </span>
              <div className={styles.aboutButtons}>
                <button
                  type="button"
                  aria-label="Kategori sebelumnya"
                  onClick={() => move(-1)}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Kategori berikutnya"
                  onClick={() => move(1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
