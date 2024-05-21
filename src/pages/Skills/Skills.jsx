import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import Wrapper from "../../components/Wrapper";

export default function Skills({
  skillsTitle,
  skillsSubTitle,
  skillsData,
  skillsCardLayout,
}) {
  return (
    <section>
      <Wrapper>
        <PageTitle pageTitle={skillsTitle} />
        <SubTitle subTitleText={skillsSubTitle} />
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
          style={{ gridAutoRows: "225px" }}
        >
          {skillsData.map((data) => (
            <Card
              data={data}
              key={data.id}
              skillsCardLayout={skillsCardLayout(data)}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
