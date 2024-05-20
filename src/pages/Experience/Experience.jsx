import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";

export default function Experience({ experienceTitle, experienceSubTitle }) {
  return (
    <section>
      <PageTitle pageTitle={experienceTitle} />
      <SubTitle subTitleText={experienceSubTitle} />
    </section>
  );
}
