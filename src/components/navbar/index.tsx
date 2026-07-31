import { NavbarTypes } from "../../types/navbar";

interface NavbarProps {
  navbarData: NavbarTypes[];
}

export default function Navbar({ navbarData }: NavbarProps) {
  return (
    <nav
      className="
      fixed
      left-0
      top-0
      z-20
      w-full

      border-b
      border-zinc-200

      bg-white/80
      backdrop-blur-md

      dark:border-zinc-800
      dark:bg-black/80

      md:relative
      md:border-none
      md:bg-transparent
      md:backdrop-blur-none
      "
    >
      <ul
        className="
        flex
        items-center
        gap-6

        p-4

        md:p-0
        "
      >
        {navbarData.map((item) => (
          <li key={item.text} className="group">
            <a
              href={`#${item.text}`}
              className="
              relative

              text-sm
              font-medium
              capitalize

              text-zinc-500

              transition-colors

              hover:text-black

              dark:text-zinc-400
              dark:hover:text-white
              "
            >
              {item.text}

              {/* underline animation */}
              <span
                className="
                absolute
                -bottom-2
                left-0

                h-[2px]
                w-0

                bg-black

                transition-all
                duration-300

                group-hover:w-full

                dark:bg-white
                "
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
