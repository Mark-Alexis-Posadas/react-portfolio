export interface Project {
  id: string;
  pageTitle: string;
  description: string;
  features: { text: string }[];
  source: string;
  demo: string;
  buttons: string[];
  tags: string[];
}

export interface ProjectsCardLayoutProps {
  data: Project;
  isDark: boolean;
}

export interface ProjectsProps {
  projectsData: Project[];
  projectsTitle: string;
  projectsSubTitle: string;
  projectsCardLayout: React.FC<ProjectsCardLayoutProps>;
  isDark: boolean;
}
