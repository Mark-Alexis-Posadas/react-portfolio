import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 2rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      color: ${(props) => props.theme.textColor};
      font-size: 1.05rem;
      svg {
        font-size: 1.7rem;
        color: ${(props) => props.theme.textColor};
      }
    }
  }
`;
