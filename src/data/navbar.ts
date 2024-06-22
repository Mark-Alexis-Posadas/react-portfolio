import { v4 as uuidv4 } from "uuid";

import { NavbarTypes } from "../types/navbar";

const navbarData: NavbarTypes[] = [
  { id: uuidv4(), text: "about", icon: ["fas", "user-gear"] },
  { id: uuidv4(), text: "experience", icon: ["fas", "briefcase"] },
  { id: uuidv4(), text: "projects", icon: ["fas", "diagram-project"] },
];
export default navbarData;
