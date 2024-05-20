import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";

export default function About({ aboutTitle, aboutSubTitle }) {
  return (
    <section>
      <PageTitle pageTitle={aboutTitle} />
      <SubTitle subTitleText={aboutSubTitle} />
    </section>
  );
}
