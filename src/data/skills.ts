import { v4 as uuidv4 } from "uuid";
import { Skills } from "../types/skills";

export const skillsData: Skills[] = [
  {
    id: uuidv4(),
    name: "HTML",
    icon: "FaHtml5",
  },
  {
    id: uuidv4(),
    name: "CSS",
    icon: "FaCss3Alt",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    icon: "FaJsSquare",
  },
  {
    id: uuidv4(),
    name: "Sass",
    icon: "FaSass",
  },
  {
    id: uuidv4(),
    name: "BEM",
    icon: "SiBem",
  },
  {
    id: uuidv4(),
    name: "Bootstrap",
    icon: "FaBootstrap",
  },
  {
    id: uuidv4(),
    name: "Gulp",
    icon: "FaGulp",
  },

  {
    id: uuidv4(),
    name: "Git",
    icon: "FaGit",
  },
  {
    id: uuidv4(),
    name: "Github",
    icon: "FaGithub",
  },
  {
    id: uuidv4(),
    name: "React",
    icon: "FaReact",
  },
  {
    id: uuidv4(),
    name: "Styled Components",
    icon: "SiStyledcomponents",
  },

  {
    id: uuidv4(),
    name: "Tailwind CSS",
    icon: "RiTailwindCssFill",
  },
  {
    id: uuidv4(),
    name: "React Router",
    icon: "SiReactrouter",
  },

  {
    id: uuidv4(),
    name: "Redux",
    icon: "SiReactrouter",
  },

  {
    id: uuidv4(),
    name: "Typescript",
    icon: "SiReactrouter",
  },
  {
    id: uuidv4(),
    name: "React Query",
    icon: "SiReactrouter",
  },
  {
    id: uuidv4(),
    name: "Api Integration",
    icon: "<CiSettings />",
  },
];

export default skillsData;
