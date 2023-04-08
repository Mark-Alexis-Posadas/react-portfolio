import React, { useState } from "react";
import {
  FormInput,
  SectionHeading,
  Wrapper,
} from "../../styles/createGlobalStyle";
import { ContactSection } from "../../styles/Contact/Contact.style";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/.netlify/functions/contact", { name, email, message })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ContactSection id="contact">
      <Wrapper>
        <SectionHeading>Contact</SectionHeading>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Say Hello!</legend>

            <p>
              <FormInput
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <FormInput
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <textarea
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                cols="30"
                rows="10"
              ></textarea>
            </p>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </Wrapper>
    </ContactSection>
  );
}
