import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({
  sidebarData,
  contactData,
  active,
  handleSetActive,
}) {
  return (
    <aside className="2xl:w-[350px] md:w-auto fixed bg-white shadow-md h-full overflow-hidden left-0 top-0 bottom-0 md:p-3 p-10 hidden lg:block">
      <ul>
        {sidebarData.map((data, index) => (
          <li key={data.id} onClick={() => handleSetActive(index)}>
            <Link
              to={`/${data.text === "home" ? "" : data.text}`}
              className={`w-full flex items-center justify-between p-2 my-3 rounded cursor-pointer ${
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

      <ul className="flex items-center justify-center w-full gap-3 absolute bottom-0">
        {contactData.map((data, index) => (
          <li key={data.id} className="mb-3">
            {index === 0 ? (
              <a
                href="https://www.linkedin.com/in/mark-alexis-posadas-996a04151/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={data.icon} className="text-2xl" />
              </a>
            ) : (
              <FontAwesomeIcon icon={data.icon} className="text-2xl" />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
