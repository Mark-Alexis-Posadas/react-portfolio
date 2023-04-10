import styled from "styled-components";

export const ProjectsSection = styled.section`
  ul {
    &.mb-1 {
      li {
        margin-right: 1rem;
      }
    }
  }

  a {
    background-color: ${(props) => props.theme.btn};
    color: ${(props) => props.theme.secondaryColor};
    border: 1px solid #222;
    padding: 0.1rem 0.9rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;
