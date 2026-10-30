import { v4 as uuidv4 } from "uuid";
import { Skills } from "../types/skills";
export const skillsData: Skills[] = [
  { id: uuidv4(), name: "React", icon: "FaReact" },
  { id: uuidv4(), name: "TypeScript", icon: "SiTypescript" },
  { id: uuidv4(), name: "Tailwind CSS", icon: "RiTailwindCssFill" },
  { id: uuidv4(), name: "Redux Toolkit", icon: "SiRedux" },
  { id: uuidv4(), name: "RTK Query", icon: "SiRedux" },
  { id: uuidv4(), name: "MongoDB", icon: "SiMongodb" },
  { id: uuidv4(), name: "Express", icon: "SiExpress" },
  { id: uuidv4(), name: "Node.js", icon: "FaNodeJs" },
];
export default skillsData;
