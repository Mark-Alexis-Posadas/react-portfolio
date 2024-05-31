import React, { createContext, useState, useEffect, ReactNode } from "react";

import { ThemeContextProps } from "../types/Theme";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const toggleTheme = () => {
    setIsDark((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("isDark", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    // Save the current theme to local storage whenever it changes
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
