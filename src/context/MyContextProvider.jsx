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
const aboutTitle = headingText[0];
const projectsTitle = headingText[1];
const skillsTitle = headingText[2];
const experienceTitle = headingText[3];
const contactTitle = headingText[4];
const MyContext = createContext("");

const MyProvider = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <MyContext.Provider
      value={{
        sidebarData,
        active,
        setActive,
        aboutTitle,
        projectsTitle,
        skillsTitle,
        experienceTitle,
        contactTitle,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
