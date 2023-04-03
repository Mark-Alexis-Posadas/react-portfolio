import React from "react";
import { SectionHeading, Wrapper } from "../../styles/createGlobalStyle";

import experienceApi from "../../api/experienceApi";
import { ExperienceSection } from "../../styles/Experience/Experience.style";
export default function Experience() {
  return (
    <ExperienceSection id="experience">
      <Wrapper>
        <SectionHeading>Experience</SectionHeading>

        {experienceApi.map((experience) => {
          const { id, logo, title, company, date, address } = experience;
          return (
            <article key={id}>
              <figure>
                <img src={logo} alt={logo} />
              </figure>
              <div>
                <header>
                  <h3>{title}</h3>
                  <h2>{company}</h2>
                  <span>{date}</span>
                  <span>{address}</span>
                </header>
                <ul>
                  {experience.jobDescriptions.map((job, idx) => {
                    return <li key={idx}>{job}</li>;
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </Wrapper>
    </ExperienceSection>
  );
}
