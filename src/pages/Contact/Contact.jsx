import PageTitle from "../../components/PageTitle";
import Wrapper from "../../components/Wrapper";
export default function Contact({ contactTitle }) {
  return (
    <section>
      <Wrapper>
        <PageTitle pageTitle={contactTitle} />
        <p className="mb-4 text-2xl text-slate-600">
          I'd love to hear from you! Whether you have a question, want to
          collaborate on a project, or just want to say hello, feel free to get
          in touch. Fill out the form below, and I'll get back to you as soon as
          I can. Your message is important to me, and I look forward to
          connecting with you.
        </p>

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
