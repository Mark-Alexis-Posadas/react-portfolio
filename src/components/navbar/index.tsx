import { navbarData } from "../../data/navbar";
import { NavbarTypes } from "../../types/navbar";

interface NavbarProps { navbarData: NavbarTypes[]; }
export default function Navbar({ navbarData: items = navbarData }: NavbarProps) {
  return <nav aria-label="Main navigation" className="fixed left-0 top-0 z-20 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-black/90 md:relative md:border-none md:bg-transparent md:backdrop-blur-none">
    <ul className="flex items-center gap-5 overflow-x-auto p-4 md:gap-6 md:p-0">
      {items.map((item) => <li key={item.text} className="group shrink-0"><a href={`#${item.text}`} className="relative text-sm font-medium capitalize text-zinc-500 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-zinc-400 dark:hover:text-white">{item.text}<span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full" /></a></li>)}
    </ul>
  </nav>;
}
