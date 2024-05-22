import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  faHouseChimney,
  faUser,
  faDiagramProject,
  faUserGear,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import experienceData from "./data/experienceData";

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

const renderIcon = (iconName) => {
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

//Card component layouts
const projectsCardLayout = (data) => {
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
            <FontAwesomeIcon icon={["fab", tag]} className="text-blue-500" />
          </li>
        ))}
      </ul>
    </Link>
  );
};

const skillsCardLayout = (data) => {
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

const experienceCardLayout = (data) => {
  return (
    <article className="flex items-center mb-5 p-7">
      <figure>
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

const Layout = () => {
  const [active, setActive] = useState(0);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  //sidebar
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

  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  //contact
  const [forms, setForms] = useState({
    name: "",
    email: "",
    textArea: "",
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
    let nameError = validateName();
    let emailError = validateEmail();
    return !nameError && !emailError;
  };

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      emailjs
        .sendForm(
          "service_mxfvfqc",
          "template_qvffixo",
          form.current,
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

  const handleNameChange = (e) => {
    setForms({ ...forms, name: e.target.value });
    if (forms.nameError && e.target.value.trim() === forms.name) {
      setForms({ ...forms, nameError: "" });
    }
  };

  const handleEmailChange = (e) => {
    setForms({ ...forms, email: e.target.value });
    if (forms.emailError && e.target.value.trim() === forms.email) {
      setForms({ ...forms, emailError: "" });
    }
  };

  const handleBlur = (e) => {
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
                projectsCardLayout={projectsCardLayout}
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
