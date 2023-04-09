import styled from "styled-components";

export const ContactSection = styled.section`
  min-height: calc(100vh - 6rem);
  fieldset {
    border: none;
    p {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      textarea {
        padding: 1rem;
        min-height: 400px;
        border: none;
        &::placeholder {
          font-family: Jost, sans-serif;
          font-size: 1rem;
        }
      }
    }
    button {
      background-color: ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.secondaryColor};
      border: none;
      outline: none;
      padding: 1rem;
      width: 100%;
      font-family: Jost, sans-serif;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;
