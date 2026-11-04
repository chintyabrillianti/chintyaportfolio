import { personalData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#190E20] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center sm:flex-row sm:px-8 sm:text-left">
        <div className="space-y-1">
          <p className="text-sm font-medium text-[#F5E6DC]">{personalData.name}</p>
          <p className="text-[10px] tracking-[0.16em] text-[#D7A9C5] uppercase">
            {personalData.title}
          </p>
        </div>

        <div className="text-xs text-[#BDAABD]">
          <p>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
