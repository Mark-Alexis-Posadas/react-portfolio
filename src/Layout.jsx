import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { MyProvider } from "./context/MyContextProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center font-sans">
      <MyProvider>
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </MyProvider>
    </div>
  );
};

export default Layout;
