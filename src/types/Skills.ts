export interface Skills {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export interface SkillsCardLayoutProps {
  data: Skills;
}

export interface SkillsProps {
  skillsTitle: string;
  skillsSubTitle: string;
  skillsData: Skills[];
  skillsCardLayout?: React.FC<SkillsCardLayoutProps>;
}
