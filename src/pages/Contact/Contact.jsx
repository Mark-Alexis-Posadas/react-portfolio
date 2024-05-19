import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import Wrapper from "../../components/Wrapper";
export default function Contact({ contactTitle, contactSubTitle }) {
  return (
    <section>
      <Wrapper>
        <PageTitle pageTitle={contactTitle} />
        <SubTitle subTitle={contactSubTitle} />

        <form className="w-full">
          <fieldset>
            <div className="mb-3">
              <input
                type="text"
                placeholder="name"
                className="p-2 rounded bg-white shadow-md w-full"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="email"
                className="p-2 rounded bg-white shadow-md w-full"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="message"
                className="p-2 rounded bg-white shadow-md w-full min-h-[500px]"
              ></textarea>
            </div>
          </fieldset>
          <button className="text-white rounded bg-black p-3 w-full">
            Submit
          </button>
        </form>
      </Wrapper>
    </section>
  );
}
