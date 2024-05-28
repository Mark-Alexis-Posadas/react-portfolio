import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { IconName } from "@fortawesome/fontawesome-svg-core";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaBootstrap,
  FaGulp,
  FaNpm,
  FaGit,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import { SiStyledcomponents, SiBem } from "react-icons/si";

import { library } from "@fortawesome/fontawesome-svg-core";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import About from "./pages/About/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import ProjectDetails from "./pages/ProjectDetails";

// import NotFound from "./pages/NotFound";
import sidebarData from "./data/sidebar-data";
import contactData from "./data/contact-data";
import projectsData from "./data/projects-data";
import skillsData from "./data/skills-data";
import experienceData from "./data/experience-data";

import pageTitles from "./data/page-titles";
import subTitles from "./data/sub-titles";

//page title
// const aboutTitle = pageTitles[0];
const projectsTitle = pageTitles[1];
const skillsTitle = pageTitles[2];
const experienceTitle = pageTitles[3];
const contactTitle = pageTitles[4];

//subtitle
const homeSubTitle = subTitles[0].text;
// const aboutSubTitle = subTitles[1].text;
const projectsSubTitle = subTitles[2].text;
const skillsSubTitle = subTitles[3].text;
const experienceSubTitle = subTitles[4].text;
const contactSubTitle = subTitles[5].text;

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "FaHtml5":
      return <FaHtml5 />;
    case "FaCss3Alt":
      return <FaCss3Alt />;
    case "FaJsSquare":
      return <FaJsSquare />;
    case "FaSass":
      return <FaSass />;
    case "SiBem":
      return <SiBem />;
    case "FaBootstrap":
      return <FaBootstrap />;
    case "FaGulp":
      return <FaGulp />;
    case "FaNpm":
      return <FaNpm />;
    case "FaGit":
      return <FaGit />;
    case "FaReact":
      return <FaReact />;
    case "SiStyledcomponents":
      return <SiStyledcomponents />;
    case "FaFigma":
      return <FaFigma />;
    default:
      return null;
  }
};

interface Project {
  id: string;
  pageTitle: string;
  description: string;
  features: { text: string }[];
  source: string;
  demo: string;
  buttons: string[];
  tags: string[];
}

interface ProjectsCardLayoutProps {
  data: Project;
}

//Card component layouts
const projectsCardLayout: React.FC<ProjectsCardLayoutProps> = ({ data }) => {
  return (
    <Link
      to={`/projects/${data.pageTitle.replace(/ /g, "")}`}
      className="h-full block p-7"
    >
      <h1 className="font-bold text-rose-600 mb-2">{data.pageTitle}</h1>
      <p className="text-sm text-slate-600">{data.description}</p>
      <ul>
        {data.tags.map((tag, index) => (
          <li key={index}>
            <FontAwesomeIcon
              icon={["fab", tag as IconName]}
              className="text-blue-500"
            />
          </li>
        ))}
      </ul>
    </Link>
  );
};

interface Skills {
  id: string;
  name: string;
  icon: string;
  url: string;
}

interface SkillsCardLayoutProps {
  data: Skills;
}

const skillsCardLayout: React.FC<SkillsCardLayoutProps> = ({ data }) => {
  return (
    <a
      className="h-full flex flex-col items-center justify-center"
      key={data.id}
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-[7rem]">{renderIcon(data.icon)}</div>
      <span className="mt-1">{data.name}</span>
    </a>
  );
};

interface Experience {
  id: string;
  logo: string;
  title: string;
  company: string;
  date: string;
  address: string;
  jobDescriptions: string[];
}

interface ExperienceCardLayoutProps {
  data: Experience;
}
const experienceCardLayout: React.FC<ExperienceCardLayoutProps> = ({
  data,
}) => {
  return (
    <article className="flex flex-col md:flex-row items-center mb-5 p-7">
      <figure className="mb-5 md:mb-0">
        <img
          src={data.logo}
          alt="logo"
          className="w-[218px] object-cover pr-10"
        />
      </figure>
      <div>
        <header className="mb-3">
          <h3 className="font-medium text-slate-600">{data.title}</h3>
          <h2 className="font-bold text-rose-600 mb-2">{data.company}</h2>
          <span className="italic text-base mr-2">{data.date}</span>
          <span className="text-base">{data.address}</span>
        </header>
        <ul className="list-disc">
          {data.jobDescriptions.map((description, index) => (
            <li key={index} className="text-slate-600">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const App: React.FC = () => {
  const [active, setActive] = useState(0);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  //sidebar
  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActive(parseInt(storedIndex));
    }
  }, []);

  const handleSetActive = (index: number) => {
    setActive(index);
    localStorage.setItem("activeIndex", index);
  };

  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  interface FormState {
    name: string;
    email: string;
    textarea: string;
    nameError: string;
    emailError: string;
  }
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
      />

      <Main
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
      >
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
          {/* <Route
            path="/about"
            element={
              <About aboutTitle={aboutTitle} aboutSubTitle={aboutSubTitle} />
            }
          /> */}
          <Route
            path="/projects"
            element={
              <Projects
                projectsData={projectsData}
                projectsTitle={projectsTitle}
                projectsSubTitle={projectsSubTitle}
                projectsCardLayout={projectsCardLayout}
              />
            }
          />
          <Route
            path="/projects/:pageTitle"
            element={<ProjectDetails projectsData={projectsData} />}
          />
          <Route
            path="/skills"
            element={
              <Skills
                skillsTitle={skillsTitle}
                skillsSubTitle={skillsSubTitle}
                skillsData={skillsData}
                skillsCardLayout={skillsCardLayout}
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
              />
            }
          />
          {/* <Route
            path="*"
            element={
              <NotFound
                handleSetActive={handleSetActive}
                sidebarData={sidebarData}
              />
            }
          /> */}
        </Routes>
      </Main>
    </div>
  );
};

export default App;
