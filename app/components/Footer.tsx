import { personalData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#190E20] border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <p className="text-lg font-bold text-[#F5E6DC]">{personalData.name}</p>
          <p className="text-xs text-[#D7A9C5] uppercase tracking-wider">{personalData.title}</p>
        </div>

        <div className="text-xs text-[#BDAABD]">
          <p>&copy; {currentYear} {personalData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
