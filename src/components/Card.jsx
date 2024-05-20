import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Card({ data }) {
  return (
    <li className="bg-zinc-50 shadow-md rounded">
      <Link
        to={`/projects/${data.pageTitle.replace(/ /g, "")}`}
        className="h-full block p-3"
      >
        <h1 className="font-bold text-rose-600 mb-2">{data.pageTitle}</h1>
        <p className="text-sm text-slate-600">{data.description}</p>
        <ul>
          {data.tags.map((tag, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={["fab", tag]} className="text-blue-500" />
            </li>
          ))}
        </ul>
      </Link>
    </li>
  );
}
