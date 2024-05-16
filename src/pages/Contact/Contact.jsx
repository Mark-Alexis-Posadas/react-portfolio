import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
import Wrapper from "../../components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Contact() {
  const { contactTitle, contactData } = useContext(MyContext);
  return (
    <section>
      <Wrapper>
        <h1 className="font-bold text-4xl mb-4">{contactTitle}</h1>
        <p className="mb-4">
          I'd love to hear from you! Whether you have a question, want to
          collaborate on a project, or just want to say hello, feel free to get
          in touch. Fill out the form below, and I'll get back to you as soon as
          I can. Your message is important to me, and I look forward to
          connecting with you.
        </p>

        <div className="flex items-center">
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
          <ul className="px-4">
            {contactData.map((data, index) => (
              <li key={data.id} className="mb-3">
                {index === 0 ? (
                  <a
                    href="https://www.linkedin.com/in/mark-alexis-posadas-996a04151/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={data.icon} className="text-3xl" />
                  </a>
                ) : (
                  <FontAwesomeIcon icon={data.icon} className="text-3xl" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
}
