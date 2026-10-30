import Navbar from "../navbar";
import { navbarData } from "../../data/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GrDocumentPdf } from "react-icons/gr";
import { SidebarTypes } from "../../types/sidebar";

const stack = ["React", "TypeScript", "Node.js / Express", "Tailwind CSS", "MongoDB / PostgreSQL", "Zustand / Redux", "REST APIs", "AI agent workflows"];

export default function Sidebar({ toggleTheme, handleToggleTheme }: SidebarTypes) {
  return (
    <aside className="flex w-full flex-col border-b border-zinc-200 p-5 dark:border-zinc-800 md:fixed md:h-screen md:w-[40%] md:border-r md:border-b-0 md:px-12 lg:px-20 md:py-10">
      <Navbar navbarData={navbarData} />
      <div className="mt-20 md:mt-auto">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-400">Portfolio · 2026</p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
          Mark Alexis <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">Posadas</span>
        </h1>
        <p className="mt-4 text-2xl font-semibold leading-tight text-zinc-800 dark:text-zinc-100">AI-Augmented<br />Full-Stack Developer</p>
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">I build modern web applications and scalable REST APIs, pairing thoughtful state management with fast, AI-assisted delivery and maintainable code.</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Core technology stack">
          {stack.map((item) => <span key={item} className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{item}</span>)}
        </div>
        <a href="/Posadas_Mark_Alexis_Resume.pdf" download className="mt-6 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:bg-white dark:text-black dark:hover:bg-cyan-300">
          <GrDocumentPdf className="text-lg" /> Download Resume
        </a>
      </div>
      <ul className="mt-8 flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg dark:bg-[#181818] md:bg-transparent md:p-0 md:shadow-none">
        <li><a href="https://www.linkedin.com/in/mark-alexis-posadas-996a04151/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><FontAwesomeIcon icon={faLinkedin} className="text-2xl" /></a></li>
        <li><a href="mailto:markalexisposadas@gmail.com" aria-label="Email" className="social-link"><FontAwesomeIcon icon={faEnvelope} className="text-2xl" /></a></li>
        <li><a href="https://github.com/Mark-Alexis-Posadas" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><FontAwesomeIcon icon={faGithub} className="text-2xl" /></a></li>
        <li><button onClick={handleToggleTheme} aria-label="Toggle theme" className="social-link"><FontAwesomeIcon icon={toggleTheme ? faSun : faMoon} className="text-xl" /></button></li>
      </ul>
    </aside>
  );
}
