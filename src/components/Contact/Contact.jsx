import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import {
  FormInput,
  FormTextArea,
  SectionHeading,
  Wrapper,
} from "../../styles/createGlobalStyle";
import {
  ContactSection,
  FormInputContainer,
} from "../../styles/Contact/Contact.style";

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    textarea: "",
    nameError: "",
    emailError: "",
  });

  const validateName = () => {
    let nameError = "";
    if (!state.name.trim()) {
      nameError = "Name is required";
    }
    setState({ ...state, nameError });
    return nameError;
  };

  const validateEmail = () => {
    let emailError = "";
    if (!state.email.trim()) {
      emailError = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      emailError = "Email is invalid";
    }
    setState({ ...state, emailError });
    return emailError;
  };

  const validate = () => {
    let nameError = validateName();
    let emailError = validateEmail();
    return !nameError && !emailError;
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
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
            toast.success("Form submitted successfully!");
            setState({
              name: "",
              email: "",
              textarea: "",
              nameError: "",
              emailError: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleNameChange = (e) => {
    setState({ ...state, name: e.target.value });
    if (state.nameError && e.target.value.trim() === state.name) {
      setState({ ...state, nameError: "" });
    }
  };

  const handleEmailChange = (e) => {
    setState({ ...state, email: e.target.value });
    if (state.emailError && e.target.value.trim() === state.email) {
      setState({ ...state, emailError: "" });
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "user_name") {
      validateName();
    } else if (e.target.name === "user_email") {
      validateEmail();
    }
  };

  return (
    <ContactSection id="contact">
      <ToastContainer />
      <Wrapper>
        <SectionHeading>Contact</SectionHeading>
        <form ref={form} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Say hello!</legend>
            <FormInputContainer>
              <FormInput
                type="text"
                name="user_name"
                placeholder="name"
                value={state.name}
                onChange={handleNameChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>{state.nameError}</div>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                type="email"
                name="user_email"
                placeholder="email"
                value={state.email}
                onChange={handleEmailChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>{state.emailError}</div>
            </FormInputContainer>
            <FormInputContainer>
              <FormTextArea
                name="message"
                placeholder="message"
                value={state.textarea}
                onChange={(e) =>
                  setState({ ...state, textarea: e.target.value })
                }
              />
            </FormInputContainer>

            <FormInput
              type="submit"
              value="Submit"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
          </fieldset>
        </form>
      </Wrapper>
    </ContactSection>
  );
}
