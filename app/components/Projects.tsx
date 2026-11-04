"use client";

import { projectsData } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { ExternalLink, Code2, Clock, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="project"
      className="relative border-t border-white/[0.06] bg-[#130A19] py-24 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-14 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#D7A9C5] uppercase">
              Project
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[#F5E6DC] sm:text-6xl">
              Selected Work
            </h1>
          </div>
          <p className="max-w-md text-sm leading-[1.8] text-[#BDAABD]">
            Beberapa proyek yang pernah saya kerjakan dalam pengembangan aplikasi dan sistem berbasis web.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-7">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : idx * 0.12 }}
              className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#1b1020] p-6 transition-colors duration-300 hover:border-[#D7A9C5]/40 sm:p-8 lg:p-9"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#D7A9C5]/10 transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#D7A9C5]/10" />

              <div className="relative flex items-center justify-between gap-4">
                <span className="text-xs font-medium tabular-nums tracking-[0.18em] text-[#D7A9C5]">
                  PROJECT / 0{idx + 1}
                </span>
                {project.status === "In Development" ? (
                  <span className="flex items-center gap-2 text-[10px] text-[#D7A9C5]">
                    <Clock size={12} />
                    In Development
                  </span>
                ) : (
                  <span className="text-[10px] text-[#BDAABD]">Completed</span>
                )}
              </div>

              <div className="relative mt-10 flex min-h-[170px] flex-col justify-end sm:mt-12">
                <Code2
                  size={20}
                  className="mb-5 text-[#D7A9C5]"
                  aria-hidden="true"
                />
                <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#F5E6DC] transition-colors group-hover:text-[#D7A9C5] sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-xs font-medium tracking-wide text-[#D7A9C5]/80">
                  {project.subtitle}
                </p>
              </div>

              <p className="relative mt-5 flex-1 text-sm leading-[1.9] text-[#BDAABD]">
                {project.description}
              </p>

              <div className="relative mt-7 border-t border-white/[0.08] pt-5">
                <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-[#BDAABD]/70 uppercase">
                  Technologies
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs text-[#F5E6DC]/80 transition-colors hover:text-[#D7A9C5]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-transparent bg-[#D7A9C5] px-4 text-xs font-semibold text-[#211126] shadow-sm shadow-[#D7A9C5]/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#E5BED4] hover:shadow-md hover:shadow-[#D7A9C5]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7A9C5]"
                  >
                    Live Demo
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-xs text-[#BDAABD]/60">Coming Soon</span>
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#8E7890]/70 bg-transparent px-4 text-xs font-medium text-[#E6D5E8] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D7A9C5]/70 hover:bg-[#D7A9C5]/[0.08] hover:text-[#F5E6DC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7A9C5]"
                  >
                    <GithubIcon size={15} />
                    GitHub
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-xs text-[#BDAABD]/60">Private Repo</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
