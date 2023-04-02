import React from "react";
import { SectionHeading, Wrapper } from "../../styles/createGlobalStyle";
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
} from "react-icons/fa";

import { SiStyledcomponents, SiBem } from "react-icons/si";
import { mySkills } from "../../api/skillsApi";

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
      default:
        return null;
    }
  };

  return (
    <section id="skills">
      <Wrapper>
        <SectionHeading>Skills</SectionHeading>
        <ul>
          {mySkills.map((skill) => {
            const { id, name, icon } = skill;
            return (
              <li key={id}>
                {renderIcon(icon)}
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
}
