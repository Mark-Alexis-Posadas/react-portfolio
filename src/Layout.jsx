import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/createGlobalStyle";

import Navbar from "./Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./Footer";
import { ThemeContainer } from "./styles/ThemeContainer.style";

const lightTheme = {
  primary: "#ffffff",
  textColor: "#131313",
  activeColor: "#4fd1c5",
  cardBgColor: "#ffffff",
  formBgColor: "#fafafa",
};

const darkTheme = {
  primary: "#2b3945",
  textColor: "#ffffff",
  activeColor: "#4fd1c5",
  cardBgColor: "#263236",
  formBgColor: "#263236",
};

const Layout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const isDarkTheme = theme === "dark";
  const newTheme = isDarkTheme ? "light" : "dark";

  const toggleMainTheme = () => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ThemeContainer>
        <GlobalStyle />
        <Navbar toggleMainTheme={toggleMainTheme} />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </ThemeContainer>
    </ThemeProvider>
  );
};

export default Layout;
