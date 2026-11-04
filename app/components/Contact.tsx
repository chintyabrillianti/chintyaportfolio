"use client";

import { personalData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
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
    <section
      id="contact"
      className="relative min-h-[calc(100svh-5rem)] border-t border-white/[0.06] bg-[#130A19] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-5">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#D7A9C5] uppercase">
              Say hello
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#F5E6DC] sm:text-7xl">
              Let&apos;s make
              <br />
              <span className="font-normal text-[#BDAABD]">something matter.</span>
            </h1>
            <p className="max-w-lg pt-2 text-base leading-[1.9] text-[#BDAABD]">
              Berikut adalah cara untuk menghubungi saya melalui platform sosial media dan email.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          {contactCards.map((card, idx) => (
            <a
              key={card.name}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border-b border-white/10 py-5 transition-colors hover:bg-white/[0.02] sm:gap-6 sm:py-6"
            >
              <span className="w-7 text-[10px] tabular-nums text-[#BDAABD]/60">
                0{idx + 1}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#D7A9C5] transition-transform group-hover:-translate-y-0.5">
                {card.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-[#F5E6DC]">
                  {card.name}
                </span>
                <span className="mt-1 block break-all text-xs text-[#BDAABD]">
                  {card.value}
                </span>
              </span>
              <span className="flex items-center gap-2 text-xs text-[#BDAABD] transition-colors group-hover:text-[#D7A9C5]">
                <span className="hidden sm:inline">{card.actionText}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
