import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
import Wrapper from "../../components/Wrapper";
export default function ProjectDetail() {
  const { pageTitle } = useParams();
  const { projectsData } = useContext(MyContext);

  const project = projectsData.find(
    (proj) => proj.pageTitle.replace(/ /g, "") === pageTitle.replace(/ /g, "")
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section>
      <Wrapper>
        <Link to="/projects" className="mr-5">
          <button className="bg-black rounded p-2 text-white">Back</button>
        </Link>
        <div className="mt-4">
          <h1 className="font-bold text-5xl">{project.pageTitle}</h1>

          <p className="text-lg text-slate-600 my-4">{project.description}</p>
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-black rounded p-2"
              >
                Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded text-black border border-black p-2"
              >
                Source
              </a>
            </ul>
            <ul className="flex items-center gap-3">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
