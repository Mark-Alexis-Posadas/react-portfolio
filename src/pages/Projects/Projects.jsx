import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";

export default function Projects({
  projectsData,
  projectsTitle,
  projectsSubTitle,
  projectsCardLayout,
}) {
  return (
    <section>
      <Wrapper>
        <PageTitle pageTitle={projectsTitle} />
        <SubTitle subTitleText={projectsSubTitle} />
        <ul className="grid grid-cols-1 md:grid-cols-3  gap-3">
          {projectsData.map((data) => (
            <Card
              data={data}
              key={data.id}
              projectsCardLayout={projectsCardLayout(data)}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
