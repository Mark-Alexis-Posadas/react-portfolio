import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
import Wrapper from "../../components/Wrapper";
export default function ProjectDetail() {
  const { id } = useParams();
  const { projectsData } = useContext(MyContext);

  const project = projectsData.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section>
      <Wrapper>
        <div className="flex items-center">
          <Link to="/projects" className="mr-5">
            <button className="bg-black rounded p-2 text-white">Back</button>
          </Link>
          <h1 className="font-bold">{project.pageTitle}</h1>
        </div>
        <p>{project.description}</p>
        <div>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
