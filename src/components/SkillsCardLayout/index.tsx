import React from "react";
import { SkillsCardLayoutProps } from "../../types/Skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaBootstrap,
  FaGulp,
  FaNpm,
  FaGit,
  FaReact,
} from "react-icons/fa";

import { SiStyledcomponents, SiBem } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "FaHtml5":
      return <FaHtml5 color="#E34F26" />;
    case "FaCss3Alt":
      return <FaCss3Alt color="#1572B6" />;
    case "FaJsSquare":
      return <FaJsSquare color="#F7DF1E" />;
    case "FaSass":
      return <FaSass color="#CC6699" />;
    case "SiBem":
      return <SiBem color="#000000" />;
    case "FaBootstrap":
      return <FaBootstrap color="#7952B3" />;
    case "FaGulp":
      return <FaGulp color="#CF4647" />;
    case "FaNpm":
      return <FaNpm color="#CB3837" />;
    case "FaGit":
      return <FaGit color="#F05032" />;
    case "FaReact":
      return <FaReact color="#61DAFB" />;
    case "SiStyledcomponents":
      return <SiStyledcomponents color="#DB7093" />;
    case "RiTailwindCssFill":
      return <RiTailwindCssFill color="#06B6D4" />;
    default:
      return null;
  }
};

export const skillsCardLayout: React.FC<SkillsCardLayoutProps> = ({
  data,
  isDark,
}) => {
  return (
    <a
      className="h-full flex flex-col items-center justify-center"
      key={data.id}
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`${
          isDark ? "dark:text-white" : "dark:text-black"
        } text-[7rem]`}
      >
        {renderIcon(data.icon)}
      </div>
      <span className="mt-1">{data.name}</span>
    </a>
  );
};
