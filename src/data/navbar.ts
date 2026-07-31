import { v4 as uuidv4 } from "uuid";

import { NavbarTypes } from "../types/navbar";

export const navbarData: NavbarTypes[] = [
  { id: uuidv4(), text: "about" },
  { id: uuidv4(), text: "experience" },
  { id: uuidv4(), text: "projects" },
];
