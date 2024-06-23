import Sidebar from "./components/sidebar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-[600px] w-full min-h-screen">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
