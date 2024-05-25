import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import Wrapper from "../../components/Wrapper";
export default function Contact({
  contactTitle,
  contactSubTitle,
  forms,
  setForms,
  formRef,
  handleSubmit,
  handleNameChange,
  handleEmailChange,
  handleBlur,
}) {
  return (
    <section>
      <Wrapper>
        <PageTitle pageTitle={contactTitle} />
        <SubTitle
          subTitleText={contactSubTitle}
          classNames="mb-4 font-light text-base lg:text-2xl text-slate-900"
        />

        <form ref={formRef} onSubmit={handleSubmit} className="w-full">
          <ToastContainer />
          <fieldset>
            <div className="mb-3">
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className="p-2 rounded bg-white shadow-md w-full"
                onChange={handleNameChange}
                onBlur={handleBlur}
                value={forms.name}
              />
              <div className="text-red-700">{forms.nameError}</div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className="p-2 rounded bg-white shadow-md w-full"
                onChange={handleEmailChange}
                onBlur={handleBlur}
                value={forms.email}
              />
              <div className="text-red-700">{forms.emailError}</div>
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="message"
                className="p-2 rounded bg-white shadow-md w-full min-h-[500px]"
                value={forms.textarea}
                onChange={(e) =>
                  setForms({ ...forms, textarea: e.target.value })
                }
              ></textarea>
            </div>
          </fieldset>
          <button
            className="text-white rounded bg-black p-3 w-full"
            type="submit"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
          >
            Submit
          </button>
        </form>
      </Wrapper>
    </section>
  );
}
