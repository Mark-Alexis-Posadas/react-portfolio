import React from "react";
import { Project, ProjectsCardLayoutProps } from "../../types/Project";
import { Skills, SkillsCardLayoutProps } from "../../types/Skills";
import { Experience, ExperienceCardLayoutProps } from "../../types/Experience";

interface CardProps {
  data: Project | Skills | Experience;
  projectsCardLayout?: React.FC<ProjectsCardLayoutProps>;
  skillsCardLayout?: React.FC<SkillsCardLayoutProps>;
  experienceCardLayout?: React.FC<ExperienceCardLayoutProps>;
}

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
