import React from "react";
import { Card, SectionHeading, Wrapper } from "../../styles/createGlobalStyle";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaBootstrap,
  FaGulp,
  FaNpm,
  FaGit,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import { SiStyledcomponents, SiBem } from "react-icons/si";
import { mySkills } from "../../api/skillsApi";
import { SkillsSection } from "../../styles/Skills/Skills.style";

export default function Skills() {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "FaHtml5":
        return <FaHtml5 />;
      case "FaCss3Alt":
        return <FaCss3Alt />;
      case "FaJsSquare":
        return <FaJsSquare />;
      case "FaSass":
        return <FaSass />;
      case "SiBem":
        return <SiBem />;
      case "FaBootstrap":
        return <FaBootstrap />;
      case "FaGulp":
        return <FaGulp />;
      case "FaNpm":
        return <FaNpm />;
      case "FaGit":
        return <FaGit />;
      case "FaReact":
        return <FaReact />;
      case "SiStyledcomponents":
        return <SiStyledcomponents />;
      case "FaFigma":
        return <FaFigma />;
      default:
        return null;
    }
  };

  return (
    <SkillsSection id="skills">
      <Wrapper>
        <SectionHeading>Skills</SectionHeading>
        <div className="skills-container">
          {mySkills.map((skill) => {
            const { id, name, icon } = skill;

            return (
              <Card key={id}>
                {renderIcon(icon)}
                <span className="mt-1">{name}</span>
              </Card>
            );
          })}
        </div>
      </Wrapper>
    </SkillsSection>
  );
}
