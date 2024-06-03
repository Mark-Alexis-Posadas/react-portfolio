import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { SidebarType } from "../../types/Sidebar";

const Sidebar: React.FC<SidebarType> = ({
  sidebarData,
  contactData,
  active,
  handleSetActive,
  toggleSidebar,
  isDark,
  toggleTheme,
}) => {
  return (
    <aside
      className={`${
        isDark ? "dark:bg-[#1f1f1f]" : "dark:bg-white"
      } md:w-[250px] lg:w-[300px] 2xl:w-[350px] fixed bg-white shadow-md h-full overflow-hidden left-0 top-0 z-10 bottom-0 p-3 lg:p-10 lg:block ${
        toggleSidebar ? "block" : "hidden"
      }`}
    >
      <ul>
        {sidebarData.map((data, index) => (
          <li key={data.id} onClick={() => handleSetActive(index)}>
            <Link
              to={`/${data.text === "home" ? "" : data.text}`}
              className={`${
                isDark && "dark:text-white"
              } w-full flex items-center justify-between p-2 my-3 md:rounded cursor-pointer  ${
                index === active ? "text-white bg-black" : "text-black"
              }`}
            >
              <FontAwesomeIcon
                icon={data.icon}
                className="hidden md:block text-2xl"
              />
              {data.text.charAt(0).toUpperCase() + data.text.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex items-center justify-center w-full gap-3 absolute bottom-0 left-0">
        {contactData.map((data, index) => (
          <li key={data.id} className="mb-3">
            {index === 0 ? (
              <a
                href="https://www.linkedin.com/in/mark-alexis-posadas-996a04151/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={data.icon}
                  className={`${
                    isDark ? "dark:text-white" : "dark:text-dark"
                  } text-2xl`}
                />
              </a>
            ) : (
              <a
                href="https://github.com/Mark-Alexis-Posadas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={data.icon}
                  className={`${
                    isDark ? "dark:text-white" : "dark:text-dark"
                  } text-2xl`}
                />
              </a>
            )}
          </li>
        ))}
        <li className="mb-3">
          <FontAwesomeIcon
            icon={isDark ? faSun : faMoon}
            onClick={toggleTheme}
            className={`${
              isDark ? "dark:text-white" : "dark:text-dark"
            } text-2xl cursor-pointer`}
          />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
