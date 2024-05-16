import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";

export default function Projects() {
  const { projectsTitle, projectsData } = useContext(MyContext);
  return (
    <section>
      <Wrapper>
        <h1 className="font-bold text-4xl mb-4">{projectsTitle}</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-3">
          {projectsData.map((data, index) => (
            <li key={data.id} className="bg-zinc-50 shadow-md rounded p-3">
              <Link to={`/projects/${data.pageTitle.replace(/ /g, "")}`}>
                <h1 className="font-bold">{data.pageTitle}</h1>
                <p>{data.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
