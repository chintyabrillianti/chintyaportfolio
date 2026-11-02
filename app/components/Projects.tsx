"use client";

import { projectsData } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { ExternalLink, Code2, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="project" className="py-24 bg-[#130A19] relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#D7A9C5] uppercase px-3 py-1 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)]">
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5E6DC]">
            Selected Work
          </h2>
          <p className="text-base text-[#BDAABD] max-w-xl">
            Beberapa proyek yang pernah saya kerjakan dalam pengembangan aplikasi dan sistem berbasis web.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : idx * 0.12 }}
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              className="rounded-3xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D7A9C5]/50 transition-all shadow-xl group"
            >
              <div className="space-y-6">
                {/* Top Badge & Status */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#33203C] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#D7A9C5]">
                    <Code2 size={24} />
                  </div>
                  {project.status === "In Development" ? (
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold flex items-center gap-1.5">
                      <Clock size={12} />
                      In Development
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                      Completed
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5E6DC] group-hover:text-[#D7A9C5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#BDAABD] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#D7A9C5] uppercase tracking-wider">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#33203C] text-[#F5E6DC] text-xs font-medium border border-[rgba(255,255,255,0.06)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-8 mt-8 border-t border-[rgba(255,255,255,0.08)]">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#D7A9C5] text-[#130A19] font-semibold text-sm hover:bg-[#F5E6DC] transition-all flex items-center justify-center gap-2"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 py-3 px-4 rounded-xl bg-[#33203C]/50 text-[#BDAABD]/50 font-semibold text-sm cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Coming Soon
                  </button>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#33203C] border border-[rgba(255,255,255,0.1)] text-[#F5E6DC] font-semibold text-sm hover:bg-[#39213D] transition-all flex items-center justify-center gap-2"
                  >
                    GitHub
                    <GithubIcon size={16} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 py-3 px-4 rounded-xl bg-[#33203C]/30 text-[#BDAABD]/40 font-semibold text-sm cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Private Repo
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
