import Image from "next/image";
import { Network } from "lucide-react";
import styles from "./TechStack.module.css";

type Technology = {
  title: string;
  logo: string;
  colorFilter?: string;
  isApi?: boolean;
};

const technologies: Technology[] = [
  { title: "HTML5", logo: "html5/E34F26" },
  { title: "CSS3", logo: "css/1572B6" },
  { title: "JavaScript", logo: "javascript/F7DF1E" },
  { title: "TypeScript", logo: "typescript/3178C6" },
  { title: "React", logo: "react/61DAFB" },
  { title: "Next.js", logo: "nextdotjs/FFFFFF" },
  { title: "Tailwind CSS", logo: "tailwindcss/06B6D4" },
  { title: "Bootstrap 5", logo: "bootstrap/7952B3" },
  { title: "PHP", logo: "php/777BB4" },
  { title: "Laravel", logo: "laravel/FF2D20" },
  { title: "MySQL", logo: "mysql/4479A1" },
  { title: "Git", logo: "git/F05032" },
  { title: "GitHub", logo: "github/FFFFFF" },
  { title: "Vercel", logo: "vercel/FFFFFF" },
  {
    title: "Visual Studio Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  { title: "Postman", logo: "postman/FF6C37" },
  { title: "Figma", logo: "figma/F24E1E" },
  {
    title: "Microsoft Excel",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg",
    colorFilter:
      "brightness(0) saturate(100%) invert(34%) sepia(22%) saturate(1391%) hue-rotate(91deg) brightness(93%) contrast(91%)",
  },
  {
    title: "IBM SPSS",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ibm.svg",
    colorFilter:
      "brightness(0) saturate(100%) invert(17%) sepia(94%) saturate(2297%) hue-rotate(197deg) brightness(89%) contrast(103%)",
  },
  { title: "REST API", logo: "", isApi: true },
];

function TechnologyItem({ title, logo, colorFilter, isApi }: Technology) {
  return (
    <li className={styles.marqueeItem}>
      {isApi ? (
        <Network
          aria-hidden="true"
          className={styles.logo}
          style={{ color: "#D7A9C5" }}
          strokeWidth={1.8}
        />
      ) : (
        <Image
          src={logo.startsWith("http") ? logo : `https://cdn.simpleicons.org/${logo}`}
          alt=""
          width={26}
          height={26}
          className={styles.logo}
          style={colorFilter ? { filter: colorFilter } : undefined}
          loading="lazy"
          unoptimized
        />
      )}
      <span>{title}</span>
    </li>
  );
}

export default function TechStack() {
  const technologyList = (hidden: boolean) => (
    <ul className={styles.marqueeGroup} aria-hidden={hidden || undefined}>
      {technologies.map((technology) => (
        <TechnologyItem key={technology.title} {...technology} />
      ))}
    </ul>
  );

  return (
    <section id="tech-stack" className={styles.section} aria-labelledby="tech-stack-heading">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>WHAT I WORK WITH</span>
          <h2 id="tech-stack-heading">
            Tech <span className={styles.headingAccent}>Stack</span>
          </h2>
        </div>
        <div className={styles.marquee} role="region" aria-label="Technology stack">
          <div className={styles.marqueeTrack}>
            {technologyList(false)}
            {technologyList(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
