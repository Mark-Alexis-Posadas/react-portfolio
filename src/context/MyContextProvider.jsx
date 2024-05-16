import React, { createContext, useState, useEffect } from "react";
import sidebarData from "../api/sidebarData";
import projectsData from "../api/projectsData";
import contactData from "../api/contactData";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
  faLinkedinIn
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

  const handleSetActive = (index) => {
    setActive(index);
    localStorage.setItem("activeIndex", index);
  };

  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActive(parseInt(storedIndex));
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        sidebarData,
        contactData,
        projectsData,
        active,
        setActive,
        handleSetActive,
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
