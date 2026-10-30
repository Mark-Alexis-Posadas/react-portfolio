import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("toggleTheme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });
  const handleToggleTheme = () => {
    const newTheme = !toggleTheme;
    setToggleTheme(newTheme);
    localStorage.setItem("toggleTheme", JSON.stringify(newTheme));
  };
  useEffect(() => {
    document.body.classList.toggle("dark", toggleTheme);
  }, [toggleTheme]);

  return <div className="md:flex min-h-screen bg-white text-black dark:bg-[#09090b] dark:text-white">
    <Sidebar toggleTheme={toggleTheme} handleToggleTheme={handleToggleTheme} />
    <main className="w-full px-5 md:ml-[40%] md:px-10 lg:px-20">
      <About /><Experience /><Projects /><Contact />
    </main>
  </div>;
}
