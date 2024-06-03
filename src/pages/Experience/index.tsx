import React from "react";
import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import { ExperienceProps } from "../../types/Experience";

const Experience: React.FC<ExperienceProps> = ({
  experienceTitle,
  experienceSubTitle,
  experienceData,
  experienceCardLayout,
  isDark,
}) => {
  return (
    <section>
      <PageTitle isDark={isDark} pageTitle={experienceTitle} />
      <SubTitle
        isDark={isDark}
        subTitleText={experienceSubTitle}
        classNames="mb-4 font-light text-base lg:text-2xl text-slate-900"
      />
      <ul>
        {experienceData.map((data) => (
          <Card
            key={data.id}
            data={data}
            experienceCardLayout={experienceCardLayout}
            isDark={isDark}
          />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
