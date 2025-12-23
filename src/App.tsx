import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Snow from "./pages/Snow";

export default function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("toggleTheme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const handleToggleTheme = () => {
    const newTheme = !toggleTheme;
    setToggleTheme(newTheme);
    localStorage.setItem("toggleTheme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    if (toggleTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [toggleTheme]);

  return (
    <div className="md:flex bg-white text-black dark:bg-black dark:text-white">
      <Snow isDark={toggleTheme} />

      <Sidebar
        toggleTheme={toggleTheme}
        handleToggleTheme={handleToggleTheme}
      />
      <main className="md:ml-[40%] w-full min-h-screen px-5 md:px-10 lg:px-20">
        <About toggleTheme={toggleTheme} />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
