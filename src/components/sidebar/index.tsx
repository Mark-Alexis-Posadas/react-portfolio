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
    <aside
      className="
      flex
      w-full
      flex-col
      border-b
      border-zinc-200
      p-5
      dark:border-zinc-800
      md:fixed
      md:h-screen
      md:w-[40%]
      md:border-r
      md:border-b-0
      md:px-20
      md:py-10
      "
    >
      <Navbar navbarData={navbarData} />

      <div
        className="
        mt-20
        md:mt-auto
        "
      >
        <h1
          className="
          text-4xl
          font-bold
          tracking-tight
          md:text-5xl
          text-zinc-900
          dark:text-white
          "
        >
          Hello!
          <br />
          I'm{" "}
          <span
            className="
            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-pink-500
            bg-clip-text
            text-transparent
            "
          >
            Mark Alexis Posadas
          </span>
        </h1>

        <p
          className="
          mt-5
          text-lg
          leading-relaxed
          text-zinc-600
          dark:text-zinc-400
          "
        >
          I am a front-end developer passionate about creating beautiful,
          functional, and user-friendly web experiences.
        </p>

        <a
          href="./Posadas_Mark_Alexis_Resume.pdf"
          download
          className="
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-lg
          border
          border-dashed
          border-zinc-400
          px-4
          py-2
          text-sm
          font-medium
          text-zinc-700
          transition-all
          hover:border-black
          hover:bg-black
          hover:text-white
          dark:border-zinc-600
          dark:text-zinc-300
          dark:hover:border-white
          dark:hover:bg-white
          dark:hover:text-black
          "
        >
          <GrDocumentPdf className="text-lg" />
          Download Resume
        </a>
      </div>

      <ul
        className="
        mt-10
        flex
        items-center
        gap-3

        rounded-xl

        bg-white
        p-3

        shadow-lg

        dark:bg-[#181818]

        md:bg-transparent
        md:p-0
        md:shadow-none
        "
      >
        <li>
          <a
            href="https://www.linkedin.com/in/mark-alexis-posadas-996a04151/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-lg

            text-zinc-500

            transition

            hover:bg-zinc-100
            hover:text-black

            dark:hover:bg-zinc-800
            dark:hover:text-white
            "
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </li>

        <li>
          <a
            href="mailto:markalexisposadas@gmail.com"
            aria-label="Email"
            className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-lg

            text-zinc-500

            transition

            hover:bg-zinc-100
            hover:text-black

            dark:hover:bg-zinc-800
            dark:hover:text-white
            "
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Mark-Alexis-Posadas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-lg

            text-zinc-500

            transition

            hover:bg-zinc-100
            hover:text-black

            dark:hover:bg-zinc-800
            dark:hover:text-white
            "
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
        </li>

        <li>
          <button
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-lg

            text-zinc-500

            transition

            hover:bg-zinc-100
            hover:text-black

            dark:hover:bg-zinc-800
            dark:hover:text-white
            "
          >
            <FontAwesomeIcon
              icon={toggleTheme ? faSun : faMoon}
              className="text-xl"
            />
          </button>
        </li>
      </ul>
    </aside>
  );
}
