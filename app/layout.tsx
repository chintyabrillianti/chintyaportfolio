import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chintya Ayu Brillianti | Full Stack Developer",
  description:
    "Portfolio Chintya Ayu Brillianti, Full Stack Developer yang berfokus pada pengembangan aplikasi web, integrasi API, dan pengalaman pengguna.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="min-h-screen bg-[#130A19] text-[#F5E6DC]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
