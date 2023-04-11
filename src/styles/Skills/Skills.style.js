import styled from "styled-components";

export const SkillsSection = styled.section`
  .skills-container {
    display: grid;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      /* &:nth-child(11) {
        svg {
          color: #61dbfb;
        }
      }

      &:nth-child(12) {
        svg {
          color: #61dbfb;
        }
      } */

      &:hover {
        background-color: rgb(112, 29, 201);
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
        color: ${(props) => props.theme.tags};
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
