import Navbar from "../navbar";
import { navbarData } from "../../data/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <aside className="w-[600px] flex flex-col h-screen fixed border-r border-slate-300 p-14">
      <Navbar navbarData={navbarData} />

      <h1 className="font-bold text-5xl mt-auto mb-5">
        Hello! I'm Mark Alexis Posadas
      </h1>
      <p className="text-xl">
        I am a front-end developer with a passion for creating beautiful,
        functional, and user-friendly websites.
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
          <FontAwesomeIcon icon={faMoon} className="text-2xl" />
        </li>
      </ul>
    </aside>
  );
}
