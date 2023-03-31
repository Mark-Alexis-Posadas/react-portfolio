import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,body {
    font-family: "Jost", sans-serif;
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
  }

`;

export default GlobalStyle;
