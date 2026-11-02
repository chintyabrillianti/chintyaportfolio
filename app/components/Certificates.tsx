"use client";

import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { certificatesData } from "../data/certificates";

const loopedCertificates = [
  ...certificatesData,
  ...certificatesData,
  ...certificatesData,
];

const getNextIndex = (
  index: number,
  direction: -1 | 1,
  visibleCount: number,
  wrapImmediately: boolean,
) => {
  const nextIndex = index + direction * visibleCount;
  const certificateCount = certificatesData.length;
  const outsideCenterCopy =
    nextIndex >= certificateCount * 2 || nextIndex < certificateCount;
  const outsideTrack =
    nextIndex < 0 || nextIndex + visibleCount > loopedCertificates.length;

  if ((!wrapImmediately && !outsideTrack) || !outsideCenterCopy) {
    return nextIndex;
  }

  const offset =
    (((nextIndex - certificateCount) % certificateCount) + certificateCount) %
    certificateCount;
  return certificateCount + offset;
};

export default function Certificates() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(certificatesData.length);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const resetFrame = useRef<number | null>(null);
  const visibleCount = isMobile ? 1 : 2;
  const pageCount = Math.ceil(certificatesData.length / visibleCount);
  const currentPage =
    Math.floor(
      ((((currentIndex - certificatesData.length) % certificatesData.length) +
        certificatesData.length) %
        certificatesData.length) /
        visibleCount,
    ) + 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateLayout = () => {
      setIsMobile(mediaQuery.matches);
      setTransitionEnabled(false);
      setCurrentIndex(certificatesData.length);
      resetFrame.current = window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    };

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
      if (resetFrame.current !== null) {
        window.cancelAnimationFrame(resetFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) =>
        getNextIndex(index, 1, visibleCount, Boolean(prefersReducedMotion)),
      );
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, prefersReducedMotion, visibleCount]);

  const move = (direction: -1 | 1) => {
    setCurrentIndex((index) =>
      getNextIndex(index, direction, visibleCount, Boolean(prefersReducedMotion)),
    );
  };

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    const certificateCount = certificatesData.length;
    if (currentIndex >= certificateCount * 2 || currentIndex < certificateCount) {
      const offset =
        (((currentIndex - certificateCount) % certificateCount) + certificateCount) %
        certificateCount;
      setTransitionEnabled(false);
      setCurrentIndex(certificateCount + offset);
      resetFrame.current = window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  };

  return (
    <section className="py-16 bg-[#190E20] relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 max-w-6xl mx-auto"
        >
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#D7A9C5] uppercase">
              CERTIFICATES & TRAINING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5E6DC]">
              Sertifikat & Pelatihan
            </h2>
          </div>

          <div
            className="space-y-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden -mx-3" aria-roledescription="carousel">
              <div
                className="flex items-stretch"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  width: `${(loopedCertificates.length / visibleCount) * 100}%`,
                  transform: `translateX(-${(currentIndex / loopedCertificates.length) * 100}%)`,
                  transition: transitionEnabled
                    ? `transform ${prefersReducedMotion ? 0 : 650}ms cubic-bezier(0.22, 1, 0.36, 1)`
                    : "none",
                }}
              >
                {loopedCertificates.map((certificate, idx) => {
                  const isCertification = certificate.category === "certification";
                  const categoryAccent = isCertification
                    ? "text-[#D7A9C5]"
                    : "text-[#BDAABD]";

                  return (
                    <div
                      key={`${certificate.file}-${idx}`}
                      className="min-w-0"
                      style={{
                        flex: `0 0 ${100 / loopedCertificates.length}%`,
                      }}
                    >
                      <motion.article
                        whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                        className={`h-full flex flex-col p-6 mx-3 rounded-3xl bg-[#28143B] border shadow-xl transition-colors ${
                          isCertification
                            ? "border-[#D7A9C5]/50 hover:border-[#D7A9C5]"
                            : "border-[rgba(255,255,255,0.12)] hover:border-[#D7A9C5]/50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`shrink-0 p-2.5 rounded-xl ${
                              isCertification
                                ? "bg-[#39213D] text-[#D7A9C5]"
                                : "bg-[#33203C] text-[#BDAABD]"
                            }`}
                          >
                            {isCertification ? (
                              <BadgeCheck size={20} />
                            ) : (
                              <BookOpenCheck size={20} />
                            )}
                          </div>
                          <div className="min-w-0">
                            <span
                              className={`inline-flex mb-2 px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-wider ${
                                isCertification
                                  ? "border-[#D7A9C5]/40 bg-[#D7A9C5]/10 text-[#D7A9C5]"
                                  : "border-[rgba(255,255,255,0.12)] bg-[#33203C] text-[#BDAABD]"
                              }`}
                            >
                              {isCertification ? "SERTIFIKASI" : "PELATIHAN"}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-[#F5E6DC] leading-snug">
                              {certificate.name}
                            </h3>
                          </div>
                        </div>

                        <div className="mt-4 space-y-3">
                          <p className="text-sm text-[#BDAABD] leading-relaxed">
                            {certificate.organization}
                          </p>
                          <span
                            className={`inline-flex px-3 py-1 rounded-full bg-[#33203C] text-xs font-medium ${categoryAccent}`}
                          >
                            {certificate.year}
                          </span>
                        </div>

                        <a
                          href={certificate.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D7A9C5] hover:text-[#F5E6DC] transition-colors"
                        >
                          Lihat Sertifikat
                          <ExternalLink size={16} aria-hidden="true" />
                        </a>
                      </motion.article>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p
                className="text-xs text-[#BDAABD]"
                aria-live="polite"
                aria-atomic="true"
              >
                {currentPage} / {pageCount}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Sertifikat sebelumnya"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] text-[#D7A9C5] hover:bg-[#33203C] hover:border-[#D7A9C5]/60 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Sertifikat berikutnya"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#28143B] border border-[rgba(255,255,255,0.12)] text-[#D7A9C5] hover:bg-[#33203C] hover:border-[#D7A9C5]/60 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
