import { useContext } from "react";
import { MyContext } from "../context/MyContextProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  const { sidebarData, active, setActive } = useContext(MyContext);

  return (
    <aside className="w-[350px] fixed bg-slate-50 shadow-md h-full overflow-hidden left-0 top-0 bottom-0 p-10">
      <ul>
        {sidebarData.map((data, index) => (
          <li key={data.id} onClick={() => setActive(index)}>
            <Link
              to={`/${data.text === "home" ? "" : data.text}`}
              className={`w-full flex items-center justify-between p-2 my-3 rounded cursor-pointer ${
                index === active ? "text-white bg-black" : "text-black"
              }`}
            >
              <FontAwesomeIcon icon={data.icon} />
              {data.text.charAt(0).toUpperCase() + data.text.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
