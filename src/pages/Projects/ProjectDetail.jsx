import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
export default function ProjectDetail() {
  const { id } = useParams();
  const { projectsData } = useContext(MyContext);
  const project = projectsData.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.pageTitle}</h1>
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
    </div>
  );
}
