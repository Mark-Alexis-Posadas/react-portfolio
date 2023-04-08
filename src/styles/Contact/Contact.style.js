import styled from "styled-components";

export const ContactSection = styled.section`
  min-height: calc(100vh - 6rem);
  fieldset {
    border: none;
    p {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      textarea {
        min-height: 400px;
        padding: 1rem;
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
