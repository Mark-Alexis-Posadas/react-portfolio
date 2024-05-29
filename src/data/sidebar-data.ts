import { v4 as uuidv4 } from "uuid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface Types {
  id: string;
  text: string;
  icon: IconProp;
}
const sidebarData: Types[] = [
  { id: uuidv4(), text: "home", icon: ["fas", "house-chimney"] },
  // { id: uuidv4(), text: "about", icon: ["fas", "user"] },
  { id: uuidv4(), text: "projects", icon: ["fas", "diagram-project"] },
  { id: uuidv4(), text: "skills", icon: ["fas", "user-gear"] },
  { id: uuidv4(), text: "experience", icon: ["fas", "briefcase"] },
  { id: uuidv4(), text: "contact", icon: ["fas", "envelope"] },
];
export default sidebarData;
