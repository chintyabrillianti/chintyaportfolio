import Image from "next/image";
import styles from "./TechStack.module.css";
import { Network } from "lucide-react";

type Technology = {
  name: string;
  logo: string;
  colorFilter?: string;
  isApi?: boolean;
};

const technologies: Technology[] = [
  { name: "HTML5", logo: "html5/E34F26" },
  { name: "CSS3", logo: "css/1572B6" },
  { name: "JavaScript", logo: "javascript/F7DF1E" },
  { name: "TypeScript", logo: "typescript/3178C6" },
  { name: "React", logo: "react/61DAFB" },
  { name: "Next.js", logo: "nextdotjs/FFFFFF" },
  { name: "Tailwind CSS", logo: "tailwindcss/06B6D4" },
  { name: "Bootstrap 5", logo: "bootstrap/7952B3" },
  { name: "PHP", logo: "php/777BB4" },
  { name: "Laravel", logo: "laravel/FF2D20" },
  { name: "MySQL", logo: "mysql/4479A1" },
  { name: "Git", logo: "git/F05032" },
  { name: "GitHub", logo: "github/FFFFFF" },
  { name: "Vercel", logo: "vercel/FFFFFF" },
  {
    name: "Visual Studio Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  { name: "Figma", logo: "figma/F24E1E" },
  { name: "Postman", logo: "postman/FF6C37" },
  {
    name: "Microsoft Excel",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg",
    colorFilter:
      "brightness(0) saturate(100%) invert(34%) sepia(22%) saturate(1391%) hue-rotate(91deg) brightness(93%) contrast(91%)",
  },
  {
    name: "IBM SPSS",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ibm.svg",
    colorFilter:
      "brightness(0) saturate(100%) invert(17%) sepia(94%) saturate(2297%) hue-rotate(197deg) brightness(89%) contrast(103%)",
  },
  { name: "REST API", logo: "", isApi: true },
];

function TechnologyItem({ name, logo, colorFilter, isApi }: Technology) {
  return (
    <li className={styles.item}>
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
      <span>{name}</span>
    </li>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className={styles.section} aria-labelledby="tech-stack-heading">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>WHAT I WORK WITH</span>
          <h2 id="tech-stack-heading">
            Tech <span className={styles.headingAccent}>Stack</span>
          </h2>
        </div>

        <div
          className={styles.marquee}
          role="region"
          aria-label="Technology stack"
        >
          <div className={styles.track}>
            <ul className={styles.group}>
              {technologies.map((technology) => (
                <TechnologyItem key={technology.name} {...technology} />
              ))}
            </ul>
            <ul className={styles.group} aria-hidden="true">
              {technologies.map((technology) => (
                <TechnologyItem key={technology.name} {...technology} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
