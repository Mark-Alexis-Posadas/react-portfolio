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
    <aside className="w-full md:w-[40%] flex flex-col h-screen md:fixed border-r border-slate-300 p-5 md:p-14">
      <Navbar navbarData={navbarData} />

      <h1 className="font-bold text-5xl mt-auto mb-5">
        Hello! I'm Mark Alexis Posadas
      </h1>
      <p className="text-xl">
        I am a front-end developer with a passion for creating beautiful,
        functional, and user-friendly websites.
        <button
          className="text-black border-black text-sm
        border-dashed border-2 rounded p-2 mt-4 flex items-center justify-center gap-2"
        >
          <GrDocumentPdf />
          Resume
        </button>
      </p>

      <ul className="flex items-center gap-3 mt-auto">
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </li>

        <li>
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
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
