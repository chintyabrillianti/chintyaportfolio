export type Certificate = {
  name: string;
  organization: string;
  year: string;
  file: string;
  category: "certification" | "training";
};

export const certificatesData: Certificate[] = [
  {
    name: "Network Administrator (NA) - LSP",
    organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
    file: "/certificates/lsp.pdf",
    category: "certification",
  },
  {
    name: "AWS Security Fundamentals, Second Edition (Bahasa Indonesia)",
    organization: "AWS Training & Certification",
    year: "2026",
    file: "/certificates/Sertifikat_CHINTYA AYU BRILLIANTI_aws.pdf",
    category: "training",
  },
  {
    name: "Front-End & Back-End Development - Nasional",
    organization: "Digital Talent Academy — Pusat Pengembangan Talenta Digital",
    year: "2026",
    file: "/certificates/Sertifikat_CHINTYA AYU BRILLIANTI_Front-End & Back-End Development - Nasional.pdf",
    category: "training",
  },
  {
    name: "Full-Stack Development - Nasional",
    organization: "Digital Talent Academy — Pusat Pengembangan Talenta Digital",
    year: "2026",
    file: "/certificates/Sertifikat_CHINTYA AYU BRILLIANTI_Full-Stack Development - Nasional.pdf",
    category: "training",
  },
  {
    name: "Fundamental of Assistant Web Developer - Nasional",
    organization: "Digital Talent Academy — Pusat Pengembangan Talenta Digital",
    year: "2026",
    file: "/certificates/Sertifikat_CHINTYA AYU BRILLIANTI_Fundamental of Assistant Web Developer - Nasional.pdf",
    category: "training",
  },
  {
    name: "Intermediate Assistant Web Developer - Nasional",
    organization: "Digital Talent Academy — Pusat Pengembangan Talenta Digital",
    year: "2026",
    file: "/certificates/Sertifikat_CHINTYA AYU BRILLIANTI_Intermediate Assistant Web Developer - Nasional.pdf",
    category: "training",
  },
  {
    name: "Kecerdasan Artifisial No-Code Studio: Membuat Aplikasi dan Website Tanpa Coding",
    organization: "Micro Skill — BBLSDM Komdigi Medan",
    year: "2026",
    file: "/certificates/Sertifikat_CHINTYA AYU BRILLIANTI_Kecerdasan Artifisial No-Code Studio_ Membuat Aplikasi dan Website Tanpa Coding.pdf",
    category: "training",
  },
  {
    name: "Programming Fundamental - Nasional",
    organization: "Digital Talent Academy — Pusat Pengembangan Talenta Digital",
    year: "2026",
    file: "/certificates/Sertifikat_CHINTYA AYU BRILLIANTI_Programming Fundamental - Nasional.pdf",
    category: "training",
  },
];
