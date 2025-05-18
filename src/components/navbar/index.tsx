import { NavbarTypes } from "../../types/navbar";
interface NavbarProps {
  navbarData: NavbarTypes[];
}

export default function Navbar({ navbarData }: NavbarProps) {
  return (
    <nav className="dark:bg-black bg-white flex items-center gap-3 fixed z-10 left-0 top-0 shadow-md md:shadow-none  w-full md:bg-inherit p-3 md:p-0 md:relative">
      {navbarData.map((item, index) => (
        <li key={index} className="list-none capitalize">
          <a href={`#${item.text}`}>{item.text}</a>
        </li>
      ))}
    </nav>
  );
}
