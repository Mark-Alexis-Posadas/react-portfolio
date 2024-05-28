import React from "react";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";

interface Project {
  id: string;
  pageTitle: string;
  description: string;
  features: { text: string }[];
  source: string;
  demo: string;
  buttons: string[];
  tags: string[];
}

interface ProjectsCardLayoutProps {
  data: Project;
}

interface ProjectsProps {
  projectsData: Project[];
  projectsTitle: string;
  projectsSubTitle: string;
  projectsCardLayout: React.FC<ProjectsCardLayoutProps>;
}

const Projects: React.FC<ProjectsProps> = ({
  projectsData,
  projectsTitle,
  projectsSubTitle,
  projectsCardLayout,
}) => {
  return (
    <section>
      <Wrapper>
        <PageTitle pageTitle={projectsTitle} />
        <SubTitle
          subTitleText={projectsSubTitle}
          classNames="mb-4 font-light text-base lg:text-2xl text-slate-900"
        />
        <ul
          className="grid grid-cols-1 md:grid-cols-3  gap-5"
          style={{ gridAutoRows: "225px" }}
        >
          {projectsData.map((data) => (
            <Card
              data={data}
              key={data.id}
              projectsCardLayout={projectsCardLayout(data)}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Projects;
