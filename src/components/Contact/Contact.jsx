import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeading, Wrapper } from "../../styles/createGlobalStyle";
import { ContactSection } from "../../styles/Contact/Contact.style";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mxfvfqc",
        "template_qvffixo",
        form.current,
        "9KuKr6DAiOQgw8m_u"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactSection id="contact">
      <Wrapper>
        <SectionHeading>Contact</SectionHeading>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Wrapper>
    </ContactSection>
  );
}
