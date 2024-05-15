import { useContext } from "react";
import { MyContext } from "../context/MyContextProvider";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const sidebarData = useContext(MyContext);

  return (
    <aside className="w-[350px] fixed bg-slate-50 shadow-md h-full overflow-hidden left-0 top-0 bottom-0">
      <ul>
        {sidebarData.map((data) => (
          <li key={data.id}>
            <Link to={`/${data.text === "home" ? "" : data.text}`}>
              {data.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
