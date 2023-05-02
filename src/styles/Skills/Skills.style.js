import styled from "styled-components";

export const SkillsSection = styled.section`
  .skills-container {
    display: grid;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: rgb(79, 209, 197);
        svg,
        span {
          color: #fff;
        }
      }
      svg {
        font-size: 7rem;
        color: ${(props) => props.theme.textColor};
      }
      span {
        color: ${(props) => props.theme.textColor};
      }
    }

    @media screen and (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.9rem;
      li {
        margin-bottom: 0px;
      }
    }

    @media screen and (min-width: 700px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
