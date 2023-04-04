import styled from "styled-components";

export const ExperienceSection = styled.section`
  article {
    margin-bottom: 1.9rem;
    h3 {
      color: ${(props) => props.theme.textColor};
    }

    h2 {
      color: ${(props) => props.theme.primaryColor};
    }
    span {
      color: ${(props) => props.theme.textColor};
    }
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
      color: ${(props) => props.theme.textColor};
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
