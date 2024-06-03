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
      return <FaHtml5 />;
    case "FaCss3Alt":
      return <FaCss3Alt />;
    case "FaJsSquare":
      return <FaJsSquare />;
    case "FaSass":
      return <FaSass />;
    case "SiBem":
      return <SiBem />;
    case "FaBootstrap":
      return <FaBootstrap />;
    case "FaGulp":
      return <FaGulp />;
    case "FaNpm":
      return <FaNpm />;
    case "FaGit":
      return <FaGit />;
    case "FaReact":
      return <FaReact />;
    case "SiStyledcomponents":
      return <SiStyledcomponents />;
    case "RiTailwindCssFill":
      return <RiTailwindCssFill />;
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
