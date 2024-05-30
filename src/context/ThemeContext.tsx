import React, { createContext, useState, ReactNode } from "react";

import { ThemeContextProps } from "../types/Theme";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
