import styled from "styled-components";

export const SkillsSection = styled.section`
  ul {
    display: grid;
    li {
      background-color: ${(props) => props.theme.secondaryColor};
      box-shadow: rgba(90, 90, 90, 0.1) 1px 7px 29px 0px;
      padding: 2rem;
      margin-bottom: 1.9rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
