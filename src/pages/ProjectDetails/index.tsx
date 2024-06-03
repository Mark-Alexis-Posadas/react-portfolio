import React from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Project } from "../../types/Project";

interface Props {
  projectsData: Project[];
  isDark: boolean;
}

const ProjectDetails: React.FC<Props> = ({ projectsData, isDark }) => {
  const { pageTitle } = useParams<{ pageTitle?: string }>(); // Make pageTitle optional

  if (!pageTitle) {
    return <div>Project not found</div>; // Handle the case where pageTitle is undefined
  }

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
          <button
            className={`${
              isDark
                ? "dark:bg-white dark:text-black"
                : "dark:bg-black dark:text-white"
            } rounded p-2`}
          >
            Back
          </button>
        </Link>
        <div className="mt-4">
          <h1
            className={`${
              isDark ? "dark:text-white" : "dark:text-black"
            } font-bold text-5xl`}
          >
            {project.pageTitle}
          </h1>

          <p className="text-lg text-slate-600 my-4">{project.description}</p>
          <h2 className="font-bold">Features</h2>
          <ul className="list-disc ml-3 my-4">
            {project.features.map((feature, index) => (
              <li key={index} className="text-slate-600">
                {feature.text}
              </li>
            ))}
          </ul>

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
        </div>
      </Wrapper>
    </section>
  );
};

export default ProjectDetails;
