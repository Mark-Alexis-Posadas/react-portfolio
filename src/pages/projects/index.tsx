import {
  faFolder,
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import projectsData from "../../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10"
      id="projects"
    >
      {projectsData.map((data) => (
        <div
          key={data.id}
          className="flex flex-col justify-between h-50 rounded-lg transition transform duration-300 hover:scale-105 p-5 dark:bg-[#1f1f1f] dark:text-[#999] hover:bg-white hover:shadow-custom-shadow"
        >
          <header className="flex items-center justify-between mb-2">
            <FontAwesomeIcon className="text-2xl" icon={faFolder} />
            <div className="flex items-center gap-3">
              <a href={data.source} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="text-2xl" icon={faGithub} />
              </a>
              <a href={data.demo} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="text-2xl"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
            </div>
          </header>

          <h1 className="dark:text-white font-bold text-xl mb-2">
            {data.pageTitle}
          </h1>

          <p className="relative text-[#666] text-sm line-clamp-5 fade-after">
            {data.description}
          </p>
        </div>
      ))}

      <button className="flex items-center justify-center gap-3 text-blue-600 dark:text-blue-400 mt-5 hover:underline">
        <a
          href="https://react-typescript-projects-three.vercel.app/"
          className="flex items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects here
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </button>
    </section>
  );
}
