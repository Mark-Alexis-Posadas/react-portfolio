import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";

export default function Experience({
  experienceTitle,
  experienceSubTitle,
  experienceData,
  experienceCardLayout,
}) {
  return (
    <section>
      <PageTitle pageTitle={experienceTitle} />
      <SubTitle subTitleText={experienceSubTitle} />
      <ul>
        {experienceData.map((data) => (
          <Card
            key={data.id}
            experienceCardLayout={experienceCardLayout(data)}
          />
        ))}
      </ul>
    </section>
  );
}
