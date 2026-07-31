import {
  faFolder,
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsData from "../../data/projects";

export default function Projects() {
  return (
    <section
      className="
      grid 
      grid-cols-1 
      gap-6 
      py-10 
      md:grid-cols-2
      items-stretch
      "
      id="projects"
    >
      {projectsData.map((data) => (
        <article
          key={data.id}
          className="
              group relative flex flex-col overflow-hidden rounded-2xl
              border border-zinc-200 bg-white p-6
              transition-all duration-300 ease-out

              hover:-translate-y-2
              hover:border-zinc-300
              hover:shadow-xl

              dark:border-zinc-800
              dark:bg-[#181818]
              dark:hover:border-zinc-700
              "
        >
          {/* Top Gradient Line */}
          <div
            className="
            absolute left-0 top-0 h-1 w-full
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            "
          />

          <header className="flex items-center justify-between">
            {/* Folder Icon */}
            <div
              className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              bg-zinc-100
              transition-all duration-300
              group-hover:bg-black
              dark:bg-zinc-800
              dark:group-hover:bg-white
              "
            >
              <FontAwesomeIcon
                icon={faFolder}
                className="
                text-xl
                text-zinc-600
                transition-colors
                group-hover:text-white
                dark:text-zinc-300
                dark:group-hover:text-black
                "
              />
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <a
                href={data.source}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="
                flex h-9 w-9 items-center justify-center
                rounded-lg
                bg-zinc-100
                text-zinc-600
                transition-all
                hover:bg-black
                hover:text-white
                dark:bg-zinc-800
                dark:text-zinc-300
                dark:hover:bg-white
                dark:hover:text-black
                "
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href={data.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="
                flex h-9 w-9 items-center justify-center
                rounded-lg
                bg-zinc-100
                text-zinc-600
                transition-all
                hover:bg-black
                hover:text-white
                dark:bg-zinc-800
                dark:text-zinc-300
                dark:hover:bg-white
                dark:hover:text-black
                "
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </header>

          {/* Content */}
          <div className="mt-6 flex-1">
            <h2
              className="
              text-xl font-bold tracking-tight
              text-zinc-900
              dark:text-white
              "
            >
              {data.pageTitle}
            </h2>

            <p
              className="
              my-3
              text-sm
              leading-7
              text-zinc-600
              dark:text-zinc-400
              "
            >
              {data.description}
            </p>
          </div>

          {/* Bottom Accent */}
          <div
            className="
            mt-auto
            flex items-center
            text-sm
            font-medium
            text-zinc-500

            transition-colors

            group-hover:text-black

            dark:text-zinc-500
            dark:group-hover:text-white
            "
          >
            View Project
            <FontAwesomeIcon
              icon={faArrowRight}
              className="
              ml-2
              text-xs
              transition-transform
              group-hover:translate-x-1
              "
            />
          </div>
        </article>
      ))}

      {/* View All */}
      <a
        href="https://react-typescript-projects-three.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="
        group col-span-full
        mt-2
        flex items-center justify-center gap-2

        text-sm font-medium
        text-zinc-600

        transition-colors

        hover:text-black

        dark:text-zinc-400
        dark:hover:text-white
        "
      >
        View all projects
        <FontAwesomeIcon
          icon={faArrowRight}
          className="
          text-xs
          transition-transform
          group-hover:translate-x-1
          "
        />
      </a>
    </section>
  );
}
