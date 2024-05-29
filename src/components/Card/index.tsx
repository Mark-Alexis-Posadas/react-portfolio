import React from "react";
import { CardProps } from "../../types/Card";

const Card: React.FC<CardProps> = ({
  data,
  projectsCardLayout,
  skillsCardLayout,
  experienceCardLayout,
}) => {
  return (
    <li className="bg-zinc-50 shadow-md rounded transition transform duration-300 hover:shadow-lg hover:scale-105">
      {projectsCardLayout && "pageTitle" in data
        ? projectsCardLayout({ data })
        : skillsCardLayout && "name" in data
        ? skillsCardLayout({ data })
        : experienceCardLayout && "company" in data
        ? experienceCardLayout({ data })
        : null}
    </li>
  );
};

export default Card;
