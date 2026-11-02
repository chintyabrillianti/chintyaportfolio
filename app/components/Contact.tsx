"use client";

import { personalData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const contactCards = [
    {
      name: "Email",
      value: personalData.socials.email,
      icon: <Mail size={24} />,
      link: `mailto:${personalData.socials.email}`,
      actionText: "Send Email"
    },
    {
      name: "LinkedIn",
      value: "chintyaayubrillianti",
      icon: <LinkedinIcon size={24} />,
      link: personalData.socials.linkedin,
      actionText: "Connect"
    },
    {
      name: "GitHub",
      value: "chintyabrillianti",
      icon: <GithubIcon size={24} />,
      link: personalData.socials.github,
      actionText: "Follow"
    },
    {
      name: "Instagram",
      value: "chintyabrilliant",
      icon: <InstagramIcon size={24} />,
      link: personalData.socials.instagram,
      actionText: "Follow"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#130A19] relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center text-center mb-16 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-[#D7A9C5] uppercase px-3 py-1 rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)]">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5E6DC]">
            Let&apos;s Connect
          </h2>
          <p className="text-base text-[#BDAABD] max-w-xl">
            Berikut adalah cara untuk menghubungi saya melalui platform sosial media dan email.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => (
            <motion.a
              key={idx}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : idx * 0.08 }}
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              className="p-6 rounded-3xl bg-[#28143B] border border-[rgba(255,255,255,0.12)] hover:border-[#D7A9C5] transition-all flex flex-col justify-between space-y-6 group shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#33203C] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#D7A9C5] group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#F5E6DC]">{card.name}</h3>
                  <p className="text-xs text-[#BDAABD] break-all">{card.value}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.08)] text-xs font-semibold text-[#D7A9C5] group-hover:text-[#F5E6DC] transition-colors">
                <span>{card.actionText}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
