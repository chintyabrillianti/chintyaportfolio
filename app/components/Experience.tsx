"use client";

import { experiencesData } from "../data/portfolioData";
import { Calendar } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative border-t border-white/[0.06] bg-[#130A19] py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="space-y-12">
          <div className="space-y-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#D7A9C5] uppercase">
              03 — Career path
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5E6DC] sm:text-4xl">
              Pengalaman Kerja
            </h2>
          </div>

          <div className="relative ml-2 space-y-10 border-l border-[#D7A9C5]/25 pl-7 sm:ml-4 sm:pl-10">
            {experiencesData.map((exp, idx) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : idx * 0.1 }}
                className="relative grid gap-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10"
              >
                <span
                  className="absolute -left-[2.1rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#D7A9C5] bg-[#130A19] sm:-left-[2.85rem]"
                  aria-hidden="true"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] tracking-wide text-[#BDAABD]">
                    <Calendar size={13} className="text-[#D7A9C5]" aria-hidden="true" />
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5E6DC] sm:text-xl">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-[#D7A9C5]">{exp.company}</p>
                </div>
                <p className="max-w-xl text-sm leading-[1.9] text-[#BDAABD]">
                  {exp.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
