import styled from "styled-components";

export const ExperienceSection = styled.section`
  article {
    margin-bottom: 1.9rem;
  }

  header {
    min-height: auto;
    padding: 0;
  }

  figure {
    img {
      width: 218px;
      padding-right: 21px;
      object-fit: cover;
    }
  }

  ul {
    list-style: disc;
    li {
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 500px) {
    article {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
    }
  }
`;
