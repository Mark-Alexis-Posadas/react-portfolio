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
  @media screen and (min-width: 500px) {
    font-size: 3rem;
  }
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

  p {
    line-height: 1.625;
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
`;

export default GlobalStyle;
