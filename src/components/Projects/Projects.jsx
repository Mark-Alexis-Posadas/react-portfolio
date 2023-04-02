import React from "react";
import { Card, SectionHeading, Wrapper } from "../../styles/createGlobalStyle";
import CardComponent from "./CardComponent";

import projectsApi from "../../api/projectsApi";
import { ProjectsSection } from "../../styles/Projects/Projects.style";

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <Wrapper>
        <SectionHeading>Projects</SectionHeading>
        <CardComponent propData={projectsApi} Card={Card} />
      </Wrapper>
    </ProjectsSection>
  );
}
