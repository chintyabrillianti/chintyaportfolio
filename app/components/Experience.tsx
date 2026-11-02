"use client";

import { experiencesData } from "../data/portfolioData";
import { Briefcase, Calendar } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-16 pb-24 bg-[#190E20] relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="space-y-12">
          {/* Work Experience */}
          <div className="space-y-10">
            <div className="space-y-2 text-center">
              <span className="text-xs font-semibold tracking-widest text-[#D7A9C5] uppercase px-3 py-1 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)]">
                CAREER PATH
              </span>
              <h2 className="text-3xl font-bold text-[#F5E6DC]">Pengalaman Kerja</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
              {experiencesData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : idx * 0.12 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  className="h-full flex flex-col p-6 sm:p-8 rounded-3xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] space-y-5 hover:border-[#D7A9C5]/50 transition-all shadow-xl"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#33203C] text-[#D7A9C5]">
                        <Briefcase size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-[#F5E6DC]">{exp.position}</h3>
                        <p className="text-sm font-semibold text-[#D7A9C5]">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#33203C] text-[#BDAABD] text-xs font-medium w-fit max-w-full">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#BDAABD] leading-relaxed pl-2 border-l-2 border-[#D7A9C5]/30">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
