import {
  faFolder,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import projectsData from "../../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ToggleThemeType } from "../../types/toggle-theme";

export default function Projects({ toggleTheme }: ToggleThemeType) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10"
      id="projects"
    >
      {projectsData.map((data) => (
        <div
          key={data.id}
          className={`flex flex-col rounded transition transform duration-300 hover:shadow-lg hover:scale-105 p-5 border ${
            toggleTheme
              ? "dark:bg-[#1f1f1f] dark:text-[#999] border-none"
              : "border-slate-300"
          }`}
        >
          <header className="flex items-center justify-between">
            <FontAwesomeIcon className="text-2xl" icon={faFolder} />
            <div className="flex items-center gap-3">
              <FontAwesomeIcon className="text-2xl" icon={faGithub} />
              <FontAwesomeIcon
                className="text-2xl"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </header>
          <h1 className="font-bold text-xl my-3">{data.pageTitle}</h1>

          <p className="text-[#666] mb-auto pb-3">{data.description}</p>
          <ul className="text-[#666] mt-auto">
            {data.features.map((item, index) => (
              <li key={index}>- {item.text}</li>
            ))}
          </ul>
          {/* <ul className="flex items-center gap-3">
            <FaReact className="text-2xl text-[#61DBFB]" />
            <SiTypescript className="text-2xl text-[#007acc]" />
            <RiTailwindCssFill className="text-2xl text-[#06b6d4]" />
          </ul> */}
        </div>
      ))}
    </section>
  );
}
