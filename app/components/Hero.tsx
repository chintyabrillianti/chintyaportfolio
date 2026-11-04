"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personalData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) return;

    let characterIndex = 0;
    const typingInterval = window.setInterval(() => {
      characterIndex += 1;
      setTypedTitle(personalData.title.slice(0, characterIndex));

      if (characterIndex >= personalData.title.length) {
        window.clearInterval(typingInterval);
      }
    }, 85);

    return () => window.clearInterval(typingInterval);
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="min-h-[90svh] pt-28 pb-14 sm:pt-32 sm:pb-20 flex items-center bg-[#130A19] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 right-[12%] h-[28rem] w-[28rem] rounded-full bg-[#39213D]/35 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D7A9C5]/[0.07] blur-[110px]" />
        <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:inset-x-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-7 relative z-10">
          <div className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#D7A9C5] uppercase">
            <span className="w-8 h-px bg-[#D7A9C5]/70" />
            Portfolio · 2026
          </div>

          <div className="space-y-4">
            <h1 className="max-w-none text-[clamp(2rem,4.6vw,4.5rem)] font-semibold tracking-[-0.075em] text-[#F5E6DC] leading-[0.94] lg:whitespace-nowrap">
              {personalData.name}
            </h1>
            <p
              aria-label={personalData.title}
              className="text-xs sm:text-sm font-medium tracking-[0.22em] text-[#BDAABD] uppercase pt-2"
            >
              <span aria-hidden="true">
                {prefersReducedMotion ? personalData.title : typedTitle}
              </span>
              {!prefersReducedMotion && (
                <span className="typing-cursor ml-1" aria-hidden="true">
                  |
                </span>
              )}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#BDAABD] max-w-xl leading-[1.85]">
            {personalData.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-5 py-3 border border-white/15 rounded-full text-[#F5E6DC] font-medium text-sm hover:border-[#D7A9C5]/70 hover:bg-white/[0.03] transition-all duration-300"
            >
              About me
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/project"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D7A9C5] text-[#130A19] font-semibold text-sm hover:bg-[#F5E6DC] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore projects
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-3 rounded-full text-[#BDAABD] font-medium text-sm hover:text-[#F5E6DC] transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-5 border-t border-white/[0.08] w-full max-w-xl">
            <span className="text-[10px] text-[#BDAABD]/80 uppercase tracking-[0.18em]">Find me</span>
            <div className="flex items-center gap-3">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5]/70 hover:bg-[#28143B] transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5]/70 hover:bg-[#28143B] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5]/70 hover:bg-[#28143B] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`mailto:${personalData.socials.email}`}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5]/70 hover:bg-[#28143B] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end relative min-w-0">
          <div className="profile-ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] bg-gradient-to-tr from-[#39213D]/90 via-[#28143B]/70 to-[#D7A9C5]/20 rounded-full blur-[100px] opacity-70 pointer-events-none" />
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-[440px] h-[460px] sm:h-[580px] lg:max-w-[500px] lg:h-[700px] flex items-end justify-center"
          >
            <Image
              src="/profile-transparent.png"
              alt={personalData.name}
              fill
              className="profile-gentle-float -translate-y-5 sm:-translate-y-6 lg:-translate-y-8 object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
              }}
              priority
            />
          </motion.div>

          <div className="absolute bottom-7 right-0 sm:right-4 lg:right-0 bg-[#1b1020]/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl flex items-center gap-3 z-20">
            <div className="w-2 h-2 rounded-full bg-[#D7A9C5]" />
            <div>
              <p className="text-xs font-semibold text-[#F5E6DC]">Open to Work</p>
              <p className="text-[10px] text-[#BDAABD]">FULL STACK DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
