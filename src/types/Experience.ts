export interface Experience {
  id: string;
  logo: string;
  title: string;
  company: string;
  date: string;
  address: string;
  jobDescriptions: string[];
}

export interface ExperienceCardLayoutProps {
  data: Experience;
}

export interface ExperienceProps {
  experienceTitle: string;
  experienceSubTitle: string;
  experienceData: Experience[];
  // experienceCardLayout: (data: Experience) => JSX.Element;
  experienceCardLayout?: React.FC<ExperienceCardLayoutProps>;
}
