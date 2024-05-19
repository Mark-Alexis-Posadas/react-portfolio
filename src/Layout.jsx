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
import sidebarData from "./api/sidebarData";
import contactData from "./api/contactData";
import projectsData from "./api/projectsData";

const pageTitle = ["About", "Projects", "Skills", "Experience", "Contact"];
const contactSubtitle =
  "I'd love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hello, feel free to get in touch. Fill out the form below, and I'll get back to you as soon as I can. Your message is important to me, and I look forward to connecting with you.";

const aboutTitle = pageTitle[0];
const projectsTitle = pageTitle[1];
const skillsTitle = pageTitle[2];
const experienceTitle = pageTitle[3];
const contactTitle = pageTitle[4];

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
            element={<Home handleSetActive={handleSetActive} />}
          />
          <Route path="/about" element={<About aboutTitle={aboutTitle} />} />
          <Route
            path="/projects"
            element={
              <Projects
                projectsData={projectsData}
                projectsTitle={projectsTitle}
              />
            }
          />
          <Route
            path="/projects/:pageTitle"
            element={<ProjectDetail projectsData={projectsData} />}
          />
          <Route
            path="/skills"
            element={<Skills skillsTitle={skillsTitle} />}
          />
          <Route
            path="/experience"
            element={<Experience experienceTitle={experienceTitle} />}
          />
          <Route
            path="/contact"
            element={
              <Contact
                contactTitle={contactTitle}
                contactSubTitle={contactSubtitle}
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
