import styled from "styled-components";

export const ProjectsSection = styled.section`
  header {
    min-height: auto;
    padding: 0;
    h1 {
      color: ${(props) => props.theme.textColor};
    }
  }
  ul {
    display: flex;
    align-items: center;
    li {
      margin-right: 1rem;
    }
  }

  ul {
    &.mb-1 {
      li {
        margin-right: 1rem;
      }
    }
  }

  a {
    background-color: ${(props) => props.theme.activeColor};
    border: none;
    color: ${(props) => props.theme.primary};
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
