import styled from "styled-components";

export const SkillsSection = styled.section`
  .skills-container {
    display: grid;
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:nth-child(1) {
        svg {
          color: #ff5733;
        }
      }
      &:nth-child(2) {
        svg {
          color: #264de4;
        }
      }
      &:nth-child(3) {
        svg {
          color: #f0db4f;
        }
      }

      &:nth-child(4) {
        svg {
          color: #cc6699;
        }
      }

      &:nth-child(5) {
        svg {
          color: #2dd4bf;
        }
      }
      &:nth-child(6) {
        svg {
          color: #6528e0;
        }
      }

      &:nth-child(7) {
        svg {
          color: #d34a47;
        }
      }
      &:nth-child(8) {
        svg {
          color: #cb3837;
        }
      }
      &:nth-child(9) {
        svg {
          color: #f14e32;
        }
      }
      &:nth-child(10) {
        svg {
          color: #61dbfb;
        }
      }

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
