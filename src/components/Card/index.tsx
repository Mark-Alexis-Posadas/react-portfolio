import React from "react";
interface CardProps {
  data: Project;
  projectsCardLayout: React.FC<ProjectsCardLayoutProps>; // Ensure Card accepts projectsCardLayout prop
}

const Card: React.FC<CardProps> = ({
  projectsCardLayout,
  skillsCardLayout,
  experienceCardLayout,
}) => {
  return (
    <li className="bg-zinc-50 shadow-md rounded transition transform duration-300 hover:shadow-lg hover:scale-105">
      {projectsCardLayout
        ? projectsCardLayout
        : skillsCardLayout
        ? skillsCardLayout
        : experienceCardLayout}
    </li>
  );
};

export default Card;
