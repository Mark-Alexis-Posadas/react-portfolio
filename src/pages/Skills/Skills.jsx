import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import Wrapper from "../../components/Wrapper";
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

export default function Skills({ skillsTitle, skillsSubTitle, skillsData }) {
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
    <section>
      <Wrapper>
        <PageTitle pageTitle={skillsTitle} />
        <SubTitle subTitleText={skillsSubTitle} />
        <ul>
          {skillsData.map((data) => (
            <a
              key={data.id}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {renderIcon(data.icon)}
              <span> {data.name}</span>
            </a>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
