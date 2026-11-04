"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { personalData } from "../data/portfolioData";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#130A19]/90 backdrop-blur-xl border-b border-white/[0.08] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[#F5E6DC] flex items-center gap-2 group"
        >
          <span>{personalData.shortName}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D7A9C5] group-hover:scale-150 transition-transform" />
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`text-[13px] font-medium transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#D7A9C5] after:transition-all ${
                  isActive
                    ? "text-[#F5E6DC] after:w-full"
                    : "text-[#BDAABD] hover:text-[#F5E6DC] after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#F5E6DC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D7A9C5] p-2 rounded-full hover:bg-[#28143B] transition-colors"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-[#190E20]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-5 flex flex-col gap-2"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "location" : undefined}
                className={`text-sm font-medium transition-colors duration-300 py-3 border-b ${
                  isActive
                    ? "text-[#F5E6DC] border-[#D7A9C5]/50"
                    : "text-[#BDAABD] hover:text-[#F5E6DC] border-white/[0.06]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
