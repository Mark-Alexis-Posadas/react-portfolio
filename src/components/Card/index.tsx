import React from "react";
import { CardProps } from "../../types/Card";

const Card: React.FC<CardProps> = ({
  data,
  projectsCardLayout,
  skillsCardLayout,
  experienceCardLayout,
  isDark,
}) => {
  return (
    <li
      className={`${
        isDark ? "dark:bg-[#1f1f1f] dark:text-[#999]" : "dark:bg-white"
      } shadow-md rounded transition transform duration-300 hover:shadow-lg hover:scale-105`}
    >
      {projectsCardLayout && "pageTitle" in data
        ? projectsCardLayout({ data, isDark })
        : skillsCardLayout && "name" in data
        ? skillsCardLayout({ data, isDark })
        : experienceCardLayout && "company" in data
        ? experienceCardLayout({ data, isDark })
        : null}
    </li>
  );
};

export default Card;
