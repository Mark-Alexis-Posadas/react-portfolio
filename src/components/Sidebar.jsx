import { useContext } from "react";
import { MyContext } from "../context/MyContextProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  const sidebarData = useContext(MyContext);

  return (
    <aside className="w-[350px] fixed bg-slate-50 shadow-md h-full overflow-hidden left-0 top-0 bottom-0 p-10">
      <ul>
        {sidebarData.map((data) => (
          <li
            key={data.id}
            className="p-2 flex items-center justify-between hover:bg-white"
          >
            <FontAwesomeIcon icon={data.icon} />
            <Link to={`/${data.text === "home" ? "" : data.text}`}>
              {data.text.charAt(0).toUpperCase() + data.text.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
