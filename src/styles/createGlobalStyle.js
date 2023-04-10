import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionHeading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textColor};
  @media screen and (min-width: 500px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textColor};

  @media screen and (min-width: 1366px) {
    font-size: 25px;
  }
`;

export const FormInput = styled.input`
  background-color: ${(props) => props.theme.input};
  padding: 1rem;
  border: none;
  &::placeholder {
    font-family: Jost, sans-serif;
    font-size: 1rem;
  }
`;

export const FormTextArea = styled.textarea`
  background-color: ${(props) => props.theme.input};
`;

export const Card = styled.article`
  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: rgba(90, 90, 90, 0.1) 1px 7px 29px 0px;
  padding: 2rem;
  margin-bottom: 1.9rem;
  border-radius: 5px;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: "Jost", sans-serif;
    height: 100%
  }
  /* html, body, #root, #root>div {
  height: 100%
  } */
  section, header {
    min-height: calc(650px - 6rem);
    padding: 3rem 0;
  }

  .my-1 {
    margin: 1rem 0;
  }

  .mt-1 {
    margin-top: 1rem;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.625;
  }

  @media screen and (min-width: 1366px) {
    .lg-font-size {
      font-size: 1.2rem;
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.05rem;
    &.active {
      color: red;
    }
  }

  input,button,textarea {
    font-family: "Jost", sans-serif;
    font-size: 1.1rem;
  }

  .Toastify__toast--success {
    font-family: "Jost", sans-serif;
  }
`;

export default GlobalStyle;
