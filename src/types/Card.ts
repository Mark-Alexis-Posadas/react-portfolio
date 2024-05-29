import { Project, ProjectsCardLayoutProps } from "../types/Project";
import { Skills, SkillsCardLayoutProps } from "../types/Skills";
import { Experience, ExperienceCardLayoutProps } from "../types/Experience";

export interface CardProps {
  data: Project | Skills | Experience;
  projectsCardLayout?: React.FC<ProjectsCardLayoutProps>;
  skillsCardLayout?: React.FC<SkillsCardLayoutProps>;
  experienceCardLayout?: React.FC<ExperienceCardLayoutProps>;
}
