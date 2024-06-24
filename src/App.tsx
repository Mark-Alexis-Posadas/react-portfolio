import { useState } from "react";
import Sidebar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";

export default function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
  };

  return (
    <div className="md:flex">
      <Sidebar
        toggleTheme={toggleTheme}
        handleToggleTheme={handleToggleTheme}
      />
      <main className="md:ml-[40%] w-full min-h-screen py-14 px-5 md:px-20">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
