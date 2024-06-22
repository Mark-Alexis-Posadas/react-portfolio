import { NavbarTypes } from "../../types/navbar";
interface NavbarProps {
  navbarData: NavbarTypes[];
}
export default function Navbar({ navbarData }: NavbarProps) {
  return (
    <nav className="flex items-center gap-3">
      {navbarData.map((item, index) => (
        <li key={index} className="list-none capitalize">
          {item.text}
        </li>
      ))}
    </nav>
  );
}
