import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Experience from "../pages/Experience/Experience";
import Contact from "../pages/Contact/Contact";
export default function Main({ children }) {
  return <main className="ml-[350px] w-full min-h-screen">{children}</main>;
}
