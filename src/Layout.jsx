import { useState, useEffect } from "react";
import {
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faReact } from "@fortawesome/free-brands-svg-icons";

library.add(
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
  faLinkedinIn,
  faReact
);
import { library } from "@fortawesome/fontawesome-svg-core";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import NotFound from "./pages/NotFound";
import sidebarData from "./data/sidebarData";
import contactData from "./data/contactData";
import projectsData from "./data/projectsData";
import skillsData from "./data/skillsData";

import pageTitles from "./data/pageTitles";
import subTitles from "./data/subTitles";

//page title
const aboutTitle = pageTitles[0];
const projectsTitle = pageTitles[1];
const skillsTitle = pageTitles[2];
const experienceTitle = pageTitles[3];
const contactTitle = pageTitles[4];

//subtitle
const homeSubTitle = subTitles[0].text;
const aboutSubTitle = subTitles[1].text;
const projectsSubTitle = subTitles[2].text;
const skillsSubTitle = subTitles[3].text;
const experienceSubTitle = subTitles[4].text;
const contactSubTitle = subTitles[5].text;

const Layout = () => {
  //sidebar
  const [active, setActive] = useState(0);

  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActive(parseInt(storedIndex));
    }
  }, []);

  const handleSetActive = (index) => {
    setActive(index);
    localStorage.setItem("activeIndex", index);
  };
  return (
    <div className="min-h-screen flex items-center font-sans">
      <Sidebar
        sidebarData={sidebarData}
        contactData={contactData}
        active={active}
        handleSetActive={handleSetActive}
      />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSetActive={handleSetActive}
                homeSubTitle={homeSubTitle}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About aboutTitle={aboutTitle} aboutSubTitle={aboutSubTitle} />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                projectsData={projectsData}
                projectsTitle={projectsTitle}
                projectsSubTitle={projectsSubTitle}
              />
            }
          />
          <Route
            path="/projects/:pageTitle"
            element={<ProjectDetail projectsData={projectsData} />}
          />
          <Route
            path="/skills"
            element={
              <Skills
                skillsTitle={skillsTitle}
                skillsSubTitle={skillsSubTitle}
                skillsData={skillsData}
              />
            }
          />
          <Route
            path="/experience"
            element={
              <Experience
                experienceTitle={experienceTitle}
                experienceSubTitle={experienceSubTitle}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                contactTitle={contactTitle}
                contactSubTitle={contactSubTitle}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFound
                handleSetActive={handleSetActive}
                sidebarData={sidebarData}
              />
            }
          />
        </Routes>
      </Main>
    </div>
  );
};

export default Layout;
