import { v4 as uuidv4 } from "uuid";
import { Skills } from "../types/skills";

export const skillsData: Skills[] = [
  {
    id: uuidv4(),
    name: "HTML",
    icon: "FaHtml5",
    url: "https://html.com/",
  },
  {
    id: uuidv4(),
    name: "CSS",
    icon: "FaCss3Alt",
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    icon: "FaJsSquare",
    url: "https://www.javascript.com/",
  },
  {
    id: uuidv4(),
    name: "Sass",
    icon: "FaSass",
    url: "https://sass-lang.com/",
  },
  {
    id: uuidv4(),
    name: "BEM",
    icon: "SiBem",
    url: "https://getbem.com/",
  },
  {
    id: uuidv4(),
    name: "Bootstrap",
    icon: "FaBootstrap",
    url: "https://getbootstrap.com/",
  },
  {
    id: uuidv4(),
    name: "Gulp",
    icon: "FaGulp",
    url: "https://gulpjs.com/",
  },

  {
    id: uuidv4(),
    name: "Git",
    icon: "FaGit",
    url: "https://git-scm.com/",
  },
  {
    id: uuidv4(),
    name: "Github",
    icon: "FaGithub",
    url: "https://github.com/",
  },
  {
    id: uuidv4(),
    name: "React",
    icon: "FaReact",
    url: "https://react.dev/",
  },
  {
    id: uuidv4(),
    name: "Styled Components",
    icon: "SiStyledcomponents",
    url: "https://styled-components.com/",
  },

  {
    id: uuidv4(),
    name: "Tailwind CSS",
    icon: "RiTailwindCssFill",
    url: "https://tailwindcss.com/",
  },
  {
    id: uuidv4(),
    name: "React Router",
    icon: "SiReactrouter",
    url: "https://reactrouter.com/en/main",
  },
];

export default skillsData;
