import React from "react";
import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import Wrapper from "../../components/Wrapper";
import { SkillsProps } from "../../types/Skills";
const Skills: React.FC<SkillsProps> = ({
  skillsTitle,
  skillsSubTitle,
  skillsData,
  skillsCardLayout,
}) => {
  return (
    <section>
      <Wrapper>
        <PageTitle pageTitle={skillsTitle} />
        <SubTitle
          subTitleText={skillsSubTitle}
          classNames="mb-4 font-light text-base lg:text-2xl text-slate-900"
        />
        <ul
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
          style={{ gridAutoRows: "225px" }}
        >
          {skillsData.map((data) => (
            <Card
              data={data}
              key={data.id}
              skillsCardLayout={skillsCardLayout}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Skills;
