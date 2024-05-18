import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";

export default function Projects({ projectsData, projectsTitle }) {
  return (
    <section>
      <Wrapper>
        <h1>{projectsTitle}</h1>
        <PageTitle pageTitle={projectsTitle} />
        <ul className="grid grid-cols-1 md:grid-cols-3  gap-3">
          {projectsData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
