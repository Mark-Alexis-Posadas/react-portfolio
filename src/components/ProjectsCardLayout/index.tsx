import React from "react";
import { ProjectsCardLayoutProps } from "../../types/Project";
import { Link } from "react-router-dom";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const projectsCardLayout: React.FC<ProjectsCardLayoutProps> = ({
  data,
  isDark,
}) => {
  return (
    <Link
      to={`/projects/${data.pageTitle.replace(/ /g, "")}`}
      className="h-full flex flex-col justify-between p-7"
    >
      <h1
        className={`font-bold mb-2 ${
          isDark ? "dark:text-white" : "dark:text-black"
        }`}
      >
        {data.pageTitle}
      </h1>

      <p className="text-sm mb-auto">{data.description}</p>
      <ul className="flex items-center gap-3">
        <FaReact className="text-2xl" />
        <SiTypescript className="text-2xl" />
        <RiTailwindCssFill className="text-2xl" />
      </ul>
    </Link>
  );
};
