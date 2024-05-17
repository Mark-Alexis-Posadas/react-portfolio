import { Link } from "react-router-dom";
export default function Card({ data }) {
  return (
    <li key={data.id} className="bg-zinc-50 shadow-md rounded p-3">
      <Link to={`/projects/${data.pageTitle.replace(/ /g, "")}`}>
        <h1 className="font-bold">{data.pageTitle}</h1>
        <p>{data.description}</p>
      </Link>
    </li>
  );
}
