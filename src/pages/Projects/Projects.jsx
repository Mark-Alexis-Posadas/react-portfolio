import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
import Wrapper from "../../components/Wrapper";

import Card from "../../components/Card";

export default function Projects() {
  const { projectsTitle, projectsData, handleToggleReadMore, readMore } =
    useContext(MyContext);
  return (
    <section>
      <Wrapper>
        <h1 className="font-bold text-4xl mb-4">{projectsTitle}</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3  gap-3">
          {projectsData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
