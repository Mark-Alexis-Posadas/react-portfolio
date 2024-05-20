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

const pageTitle = ["About", "Projects", "Skills", "Experience", "Contact"];
const contactSubtitle =
  "I'd love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hello, feel free to get in touch. Fill out the form below, and I'll get back to you as soon as I can. Your message is important to me, and I look forward to connecting with you.";
const experienceSubTitle =
  "Discover the diverse range of projects and roles I've embraced throughout my career. From leading innovative initiatives to collaborating with dynamic teams, each experience has shaped my professional journey. Explore the highlights and milestones that showcase my skills and growth.";

const skillsSubTitle =
  "Explore the comprehensive set of skills I've honed over the years. From technical expertise to creative problem-solving, these abilities enable me to tackle challenges and drive success. Discover how my diverse skill set can contribute to achieving remarkable results in any endeavor.";

const projectsSubTitle =
  "Take a look at the innovative projects I've brought to life. Each project showcases my ability to turn ideas into reality, demonstrating my commitment to excellence and creativity. Dive into the details of my work and see how I've made a tangible impact through these initiatives.";

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
