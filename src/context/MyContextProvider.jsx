import React, { createContext } from "react";
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

const MyContext = createContext("");

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={sidebarData}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
