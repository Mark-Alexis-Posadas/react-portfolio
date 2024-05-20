import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";

export default function Skills({ skillsTitle, skillsSubTitle }) {
  return (
    <section>
      <PageTitle pageTitle={skillsTitle} />
      <SubTitle subTitleText={skillsSubTitle} />
    </section>
  );
}
