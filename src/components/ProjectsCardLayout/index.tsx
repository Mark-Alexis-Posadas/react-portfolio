import React from "react";
import { ProjectsCardLayoutProps } from "../../types/Project";
import { Link } from "react-router-dom";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const projectsCardLayout: React.FC<ProjectsCardLayoutProps> = ({
  data,
  isDark,
}) => {
  return (
    <Link
      to={`/projects/${data.pageTitle.replace(/ /g, "")}`}
      className="h-full flex flex-col justify-between p-7"
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
      <h1
        className={`font-bold text-xl my-3 ${
          isDark ? "dark:text-white" : "dark:text-black"
        }`}
      >
        {data.pageTitle}
      </h1>

      <p className="text-sm mb-auto pb-3">{data.description}</p>
      <ul className="flex items-center gap-3">
        <FaReact className="text-2xl text-[#61DBFB]" />
        <SiTypescript className="text-2xl text-[#007acc]" />
        <RiTailwindCssFill className="text-2xl text-[#06b6d4]" />
      </ul>
    </Link>
  );
};
