import React from "react";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import { ProjectsProps } from "../../types/Project";

const Projects: React.FC<ProjectsProps> = ({
  projectsData,
  projectsTitle,
  projectsSubTitle,
  projectsCardLayout,
  isDark,
}) => {
  return (
    <section>
      <Wrapper>
        <PageTitle isDark={isDark} pageTitle={projectsTitle} />
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
              projectsCardLayout={projectsCardLayout}
              isDark={isDark}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Projects;
