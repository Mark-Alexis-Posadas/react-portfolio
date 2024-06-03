import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { projectsCardLayout } from "./components/ProjectsCardLayout";
import { skillsCardLayout } from "./components/SkillsCardLayout";
import { experienceCardLayout } from "./components/ExperienceCardLayout";
import { useTheme } from "./hooks/useTheme";

import {
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
  faLinkedinIn,
  faGithub,
  faReact
);

import { library } from "@fortawesome/fontawesome-svg-core";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Contact,
  Projects,
  Skills,
  Experience,
  ProjectDetails,
  NotFound,
} from "./pages";

import {
  sidebarData,
  contactData,
  projectsData,
  skillsData,
  experienceData,
} from "./data";

import pageTitles from "./data/page-titles";
import subTitles from "./data/sub-titles";

//types
import { FormState } from "./types/Form";

//page title
const projectsTitle = pageTitles[1];
const skillsTitle = pageTitles[2];
const experienceTitle = pageTitles[3];
const contactTitle = pageTitles[4];

//subtitle
const homeSubTitle = subTitles[0].text;
const projectsSubTitle = subTitles[1].text;
const skillsSubTitle = subTitles[2].text;
const experienceSubTitle = subTitles[3].text;
const contactSubTitle = subTitles[4].text;

const App: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();

  //sidebar
  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActive(parseInt(storedIndex));
    }
  }, []);

  const handleSetActive = (index: number) => {
    setActive(index);
    localStorage.setItem("activeIndex", index.toString());
  };

  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  //contact
  const [forms, setForms] = useState<FormState>({
    name: "",
    email: "",
    textarea: "",
    nameError: "",
    emailError: "",
  });

  const validateName = () => {
    let nameError = "";
    if (!forms.name.trim()) {
      nameError = "Name is required";
    }
    setForms({ ...forms, nameError });
    return nameError;
  };

  const validateEmail = () => {
    let emailError = "";
    if (!forms.email.trim()) {
      emailError = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forms.email)) {
      emailError = "Email is invalid";
    }
    setForms({ ...forms, emailError });
    return emailError;
  };

  const validate = () => {
    const nameError: string = validateName();
    const emailError: string = validateEmail();
    return !nameError && !emailError;
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const isValid = validate();

    if (isValid && formRef.current) {
      emailjs
        .sendForm(
          "service_mxfvfqc",
          "template_qvffixo",
          formRef.current,
          "9KuKr6DAiOQgw8m_u"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Form submitted successfully!");
            setForms({
              name: "",
              email: "",
              textarea: "",
              nameError: "",
              emailError: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForms({ ...forms, name: e.target.value });
    if (forms.nameError && e.target.value.trim() === forms.name) {
      setForms({ ...forms, nameError: "" });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForms({ ...forms, email: e.target.value });
    if (forms.emailError && e.target.value.trim() === forms.email) {
      setForms({ ...forms, emailError: "" });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.target.name === "user_name") {
      validateName();
    } else if (e.target.name === "user_email") {
      validateEmail();
    }
  };

  return (
    <div className="min-h-screen flex items-center font-sans">
      <Sidebar
        sidebarData={sidebarData}
        contactData={contactData}
        active={active}
        handleSetActive={handleSetActive}
        toggleSidebar={toggleSidebar}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <Main
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
        isDark={isDark}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSetActive={handleSetActive}
                homeSubTitle={homeSubTitle}
                isDark={isDark}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                projectsData={projectsData}
                projectsTitle={projectsTitle}
                projectsSubTitle={projectsSubTitle}
                projectsCardLayout={projectsCardLayout}
                isDark={isDark}
              />
            }
          />
          <Route
            path="/projects/:pageTitle"
            element={
              <ProjectDetails projectsData={projectsData} isDark={isDark} />
            }
          />
          <Route
            path="/skills"
            element={
              <Skills
                skillsTitle={skillsTitle}
                skillsSubTitle={skillsSubTitle}
                skillsData={skillsData}
                skillsCardLayout={skillsCardLayout}
                isDark={isDark}
              />
            }
          />
          <Route
            path="/experience"
            element={
              <Experience
                experienceTitle={experienceTitle}
                experienceSubTitle={experienceSubTitle}
                experienceData={experienceData}
                experienceCardLayout={experienceCardLayout}
                isDark={isDark}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                contactTitle={contactTitle}
                contactSubTitle={contactSubTitle}
                forms={forms}
                setForms={setForms}
                formRef={formRef}
                handleSubmit={handleSubmit}
                handleNameChange={handleNameChange}
                handleEmailChange={handleEmailChange}
                handleBlur={handleBlur}
                isDark={isDark}
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

export default App;
