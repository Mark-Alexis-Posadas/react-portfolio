import { ProjectsCardLayoutProps } from "../../types/Project";
import { Link } from "react-router-dom";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const projectsCardLayout: React.FC<ProjectsCardLayoutProps> = ({
  data,
}) => {
  return (
    <Link
      to={`/projects/${data.pageTitle.replace(/ /g, "")}`}
      className="h-full block p-7"
    >
      <h1 className="font-bold text-rose-600 mb-2">{data.pageTitle}</h1>
      <p className="text-sm text-slate-600">{data.description}</p>
      <ul>
        {data.tags.map((tag, index) => (
          <li key={index}>
            <FontAwesomeIcon
              icon={["fab", tag as IconName]}
              className="text-blue-500"
            />
          </li>
        ))}
      </ul>
    </Link>
  );
};
