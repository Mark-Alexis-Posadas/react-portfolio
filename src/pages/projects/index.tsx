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
      className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-10"
      id="projects"
    >
      <>
        {projectsData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col rounded transition transform duration-300 hover:scale-105 p-5 dark:bg-[#1f1f1f] dark:text-[#999]  hover:bg-white hover:shadow-custom-shadow"
          >
            <header className="flex items-center justify-between">
              <FontAwesomeIcon className="text-2xl" icon={faFolder} />

              <div className="flex items-center gap-3">
                <a href={data.source} target="_blank">
                  <FontAwesomeIcon className="text-2xl" icon={faGithub} />
                </a>

                <a href={data.demo} target="_blank">
                  <FontAwesomeIcon
                    className="text-2xl"
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
              </div>
            </header>
            <h1 className="dark:text-white font-bold text-xl my-3">
              {data.pageTitle}
            </h1>

            <p className="text-[#666] mb-auto pb-3">{data.description}</p>
            {/* <ul className="text-[#666] mt-auto">
              {data.features.map((item, index) => (
                <li key={index}>- {item.text}</li>
              ))}
            </ul> */}
            {/* <ul className="flex items-center gap-3">
            <FaReact className="text-2xl text-[#61DBFB]" />
            <SiTypescript className="text-2xl text-[#007acc]" />
            <RiTailwindCssFill className="text-2xl text-[#06b6d4]" />
          </ul> */}
          </div>
        ))}

        <button className="flex items-center justify-center gap-3">
          <a
            href="https://react-typescript-projects-three.vercel.app/"
            className="flex items-center gap-3 hover:underline"
            target="_blank"
          >
            View all projects here
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </button>
      </>
    </section>
  );
}
