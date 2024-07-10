import Navbar from "../navbar";
import { navbarData } from "../../data/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GrDocumentPdf } from "react-icons/gr";
import { SidebarTypes } from "../../types/sidebar";
export default function Sidebar({
  toggleTheme,
  handleToggleTheme,
}: SidebarTypes) {
  return (
    <aside className="w-full md:w-[40%] flex flex-col md:h-screen md:fixed  border-slate-300 p-5 md:py-10 md:px-20 dark:border-none dark:border-r">
      <Navbar navbarData={navbarData} />

      <h1 className="font-bold text-5xl mt-20 md:mt-auto mb-5">
        Hello! I'm Mark Alexis Posadas
      </h1>
      <p className="dark:text-[#999] text-[#666] text-xl">
        I am a front-end developer with a passion for creating beautiful,
        functional, and user-friendly websites.
        <button
          className="dark:text-[#999] dark:border-[#999]
        text-black border-black
        border-dashed border-2 rounded p-2 mt-4 flex items-center justify-center gap-2"
        >
          <GrDocumentPdf />
          Resume
        </button>
      </p>

      <ul className="dark:text-[#999] dark:bg-[#1f1f1f] md:dark:bg-black flex flex-col fixed left-0 bottom-0 md:relative  md:flex-row md:items-center gap-3 mt-auto z-10 bg-white md:bg-inherit md:shadow-none p-3 md:p-0 shadow-md rounded">
        <li>
          <a
            href="https://www.linkedin.com/in/mark-alexis-posadas-996a04151/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </li>

        <li>
          <a href="mailto:markalexisposadas@gmail.com?referrer=markalexisposadas@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mark-Alexis-Posadas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
        </li>
        <li>
          <button onClick={handleToggleTheme}>
            <FontAwesomeIcon
              icon={toggleTheme ? faSun : faMoon}
              className="text-2xl"
            />
          </button>
        </li>
      </ul>
    </aside>
  );
}
