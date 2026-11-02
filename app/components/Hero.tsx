"use client";

import { useEffect, useState } from "react";
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
      className="min-h-screen pt-32 pb-20 flex items-center bg-gradient-to-b from-[#130A19] to-[#190E20] relative overflow-hidden"
    >
      {/* Decorative gradient background glow */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#39213D] rounded-full filter blur-[100px] opacity-40 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#28143B] rounded-full filter blur-[120px] opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] text-[#D7A9C5] text-xs font-semibold tracking-wider uppercase">
            <span>👋 Welcome to my portfolio</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-semibold tracking-widest text-[#D7A9C5] uppercase">
              HELLO, I&apos;M
            </h3>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5E6DC] leading-tight">
              {personalData.name}
            </h1>
            <p
              aria-label={personalData.title}
              className="text-xs sm:text-sm font-semibold tracking-wider text-[#BDAABD] uppercase pt-1"
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

          <p className="text-base sm:text-lg text-[#BDAABD] max-w-2xl leading-relaxed">
            {personalData.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#project"
              className="group inline-flex shrink-0 flex-nowrap items-center gap-2 whitespace-nowrap px-6 py-3 rounded-xl bg-[#D7A9C5] text-[#130A19] font-semibold text-sm hover:bg-[#F5E6DC] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#D7A9C5]/20"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex shrink-0 flex-nowrap items-center justify-center whitespace-nowrap px-6 py-3 rounded-xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] text-[#F5E6DC] font-semibold text-sm hover:bg-[#33203C] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.1)] w-full">
            <span className="text-xs text-[#BDAABD] uppercase tracking-wider">Follow me:</span>
            <div className="flex items-center gap-3">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5] hover:scale-105 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5] hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5] hover:scale-105 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`mailto:${personalData.socials.email}`}
                className="w-10 h-10 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#BDAABD] hover:text-[#F5E6DC] hover:border-[#D7A9C5] hover:scale-105 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image (Cinematic Editorial Portrait) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative lg:-ml-8 lg:-mt-16">
          {/* Soft radial spotlight & organic ambient glow in background (BEHIND photo) */}
          <div className="profile-ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[480px] sm:h-[480px] bg-gradient-to-tr from-[#39213D] via-[#28143B] to-[#D7A9C5]/30 rounded-full filter blur-[100px] opacity-70 -z-10 pointer-events-none"></div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#D7A9C5]/15 rounded-full filter blur-[80px] opacity-60 -z-10 pointer-events-none"></div>

          {/* Portrait Container with Cinematic Gradient Masking at bottom */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative w-[340px] h-[520px] sm:w-[400px] sm:h-[600px] lg:w-[480px] lg:h-[680px] flex items-end justify-center"
          >
            <Image
              src="/profile-transparent.png"
              alt={personalData.name}
              fill
              className="profile-gentle-float object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
              }}
              priority
            />
          </motion.div>

          {/* Floating badge */}
          <div className="absolute bottom-12 right-4 sm:right-6 lg:right-6 bg-[#28143B]/90 backdrop-blur-md border border-[rgba(255,255,255,0.15)] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
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
