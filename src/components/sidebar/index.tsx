import Navbar from "../navbar";
import navbarData from "../../data/navbar";

export default function Sidebar() {
  return (
    <aside className="w-[600px] h-screen fixed">
      <Navbar navbarData={navbarData} />
      <h1 className="font-bold">Hello! I'm Mark Alexis Posadas</h1>
      <p>
        I am a front-end developer with a passion for creating beautiful,
        functional, and user-friendly websites.
      </p>
      <Navbar navbarData={navbarData} />
    </aside>
  );
}
