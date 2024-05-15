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

const MyContext = createContext("");

const MyProvider = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <MyContext.Provider value={{ sidebarData, active, setActive }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
