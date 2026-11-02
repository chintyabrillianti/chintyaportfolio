"use client";

import { personalData, techStackData } from "../data/portfolioData";
import { GraduationCap, Award, Code, Database, Server, Wrench, Sparkles } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 bg-[#190E20] relative border-t border-[rgba(255,255,255,0.06)] overflow-hidden">
      {/* Decorative background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#28143B]/45 via-[#39213D]/25 to-transparent rounded-full filter blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* A. Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-[#D7A9C5] uppercase px-4 py-1.5 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] shadow-sm">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5E6DC] tracking-tight">
            Personal Background & Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D7A9C5] to-transparent opacity-60 mt-2"></div>
        </motion.div>

        {/* B. Profile Introduction */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-b from-[#28143B]/60 to-[#1F102B]/80 p-8 sm:p-10 rounded-3xl border border-[rgba(255,255,255,0.1)] shadow-2xl backdrop-blur-sm relative"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#33203C] border border-[rgba(255,255,255,0.15)] text-[#D7A9C5] text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles size={13} className="text-[#D7A9C5]" />
            Professional Profile
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F5E6DC] tracking-tight">
              {personalData.name}
            </h3>
            <p className="text-sm sm:text-base font-bold text-[#D7A9C5] uppercase tracking-widest">
              {personalData.title}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#BDAABD] leading-relaxed max-w-3xl mx-auto font-normal">
            {personalData.bio}
          </p>
        </motion.div>

        {/* C. Education & Achievement */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Pendidikan Card */}
          <div className="p-7 rounded-3xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] space-y-4 hover:border-[#D7A9C5]/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#33203C] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#D7A9C5] group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#D7A9C5] uppercase tracking-wider">Pendidikan</span>
              <h4 className="text-lg font-bold text-[#F5E6DC]">{personalData.education.degree}</h4>
              <p className="text-sm text-[#BDAABD]">{personalData.education.institution}</p>
            </div>
          </div>

          {/* Achievement Card */}
          <div className="p-7 rounded-3xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] space-y-4 hover:border-[#D7A9C5]/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#33203C] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#D7A9C5] group-hover:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#D7A9C5] uppercase tracking-wider">Pencapaian Akademik</span>
              <h4 className="text-lg font-bold text-[#F5E6DC]">Lulusan Terbaik Fakultas Ilmu Komputer</h4>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-sm text-[#BDAABD]">
                <span className="font-semibold text-[#F5E6DC]">IPK {personalData.education.gpa}</span>
                <span>•</span>
                <span>Lulusan Tahun {personalData.education.year}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* D. Interest & Main Skills */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#28143B]/80 border border-[rgba(255,255,255,0.1)] shadow-xl space-y-6"
        >
          <div className="text-center space-y-2">
            <h4 className="text-xs font-semibold tracking-widest text-[#D7A9C5] uppercase">
              MINAT & KEAHLIAN UTAMA
            </h4>
            <p className="text-sm text-[#BDAABD]">Bidang fokus dan keahlian inti dalam pengembangan perangkat lunak.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {personalData.interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#33203C] border border-[rgba(255,255,255,0.1)] text-[#F5E6DC] text-xs sm:text-sm font-medium hover:border-[#D7A9C5] transition-all shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Technical Stack Section */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 pt-10 border-t border-[rgba(255,255,255,0.08)] max-w-6xl mx-auto"
        >
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#D7A9C5] uppercase">
              TECHNOLOGY STACK
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5E6DC]">
              Keahlian Teknis & Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-2xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] space-y-4 hover:border-[#D7A9C5]/50 transition-all">
              <div className="flex items-center gap-3 text-[#D7A9C5]">
                <div className="p-2.5 rounded-xl bg-[#33203C]">
                  <Code size={20} />
                </div>
                <h4 className="font-bold text-[#F5E6DC] text-base">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStackData.frontend.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#33203C] text-[#BDAABD] text-xs font-medium border border-[rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-2xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] space-y-4 hover:border-[#D7A9C5]/50 transition-all">
              <div className="flex items-center gap-3 text-[#D7A9C5]">
                <div className="p-2.5 rounded-xl bg-[#33203C]">
                  <Server size={20} />
                </div>
                <h4 className="font-bold text-[#F5E6DC] text-base">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStackData.backend.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#33203C] text-[#BDAABD] text-xs font-medium border border-[rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="p-6 rounded-2xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] space-y-4 hover:border-[#D7A9C5]/50 transition-all">
              <div className="flex items-center gap-3 text-[#D7A9C5]">
                <div className="p-2.5 rounded-xl bg-[#33203C]">
                  <Database size={20} />
                </div>
                <h4 className="font-bold text-[#F5E6DC] text-base">Database</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStackData.database.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#33203C] text-[#BDAABD] text-xs font-medium border border-[rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-2xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] space-y-4 hover:border-[#D7A9C5]/50 transition-all">
              <div className="flex items-center gap-3 text-[#D7A9C5]">
                <div className="p-2.5 rounded-xl bg-[#33203C]">
                  <Wrench size={20} />
                </div>
                <h4 className="font-bold text-[#F5E6DC] text-base">Tools & Others</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStackData.tools.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#33203C] text-[#BDAABD] text-xs font-medium border border-[rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
