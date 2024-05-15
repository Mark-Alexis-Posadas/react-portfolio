import React, { createContext, useState } from "react";
import sidebarData from "../api/sidebarData";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope
);

const headingText = ["About", "Projects", "Skills", "Experience", "Contact"];
const projectsTitle = headingText[1];
const MyContext = createContext("");

const MyProvider = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <MyContext.Provider
      value={{ sidebarData, active, setActive, projectsTitle }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
