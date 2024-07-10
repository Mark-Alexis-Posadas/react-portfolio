import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";

export default function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("toggleTheme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const handleToggleTheme = () => {
    setToggleTheme((pT) => {
      const newTheme = !pT;
      localStorage.setItem("toggleTheme", JSON.stringify(newTheme));
      return newTheme;
    });
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    localStorage.setItem("toggleTheme", JSON.stringify(toggleTheme));
  }, [toggleTheme]);

  return (
    <div className="md:flex bg-white text-black dark:bg-black dark:text-white">
      <Sidebar
        toggleTheme={toggleTheme}
        handleToggleTheme={handleToggleTheme}
      />
      <main className="md:ml-[40%] w-full min-h-screen px-5 md:px-10 lg:px-20">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
