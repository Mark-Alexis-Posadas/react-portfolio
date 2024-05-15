import React, { createContext, useState } from "react";
import sidebarData from "../api/sidebarData";
const MyContext = createContext("");

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={sidebarData}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
