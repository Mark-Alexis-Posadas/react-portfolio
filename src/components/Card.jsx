import { Link } from "react-router-dom";
export default function Card({ data }) {
  return (
    <li key={data.id} className="bg-zinc-50 shadow-md rounded p-3">
      <Link to={`/projects/${data.pageTitle.replace(/ /g, "")}`}>
        <h1 className="font-bold text-rose-600 mb-2">{data.pageTitle}</h1>
        <p className="text-sm text-slate-600">{data.description}</p>
      </Link>
    </li>
  );
}
