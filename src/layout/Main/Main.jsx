import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/createGlobalStyle";

import Navbar from "../Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Contact from "../../components/Contact/Contact";
import Footer from "../Footer/Footer";
import { ThemeContainer } from "../../styles/ThemeContainer.style";

const lightTheme = {
  body: "#fafafa",
  primaryColor: "#701dc9",
  textColor: "#131313",
  secondaryColor: "#fff",
};

const darkTheme = {
  body: "#131313",
  primaryColor: "#701dc9",
  textColor: "#fff",
};

const Main = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleMainTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
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

export default Main;
