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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#130A19]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#F5E6DC] flex items-center gap-1 group"
        >
          <span>{personalData.shortName}</span>
          <span className="w-2 h-2 rounded-full bg-[#D7A9C5] group-hover:scale-125 transition-transform"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D7A9C5] after:transition-all ${
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#F5E6DC] focus:outline-none p-2 hover:bg-[#28143B] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#190E20] border-b border-[rgba(255,255,255,0.1)] px-6 py-6 shadow-2xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "location" : undefined}
                className={`text-base font-medium transition-colors duration-300 py-2 border-b ${
                  isActive
                    ? "text-[#F5E6DC] border-[#D7A9C5]/60"
                    : "text-[#BDAABD] hover:text-[#F5E6DC] border-[rgba(255,255,255,0.05)]"
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
