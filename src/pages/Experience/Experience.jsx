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
      <SubTitle
        subTitleText={experienceSubTitle}
        classNames="mb-4 font-light text-base lg:text-2xl text-slate-900"
      />
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
