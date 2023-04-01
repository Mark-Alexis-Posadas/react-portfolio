import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  .header-inner {
    position: relative;
    .header-title {
      font-size: 2.2rem;
      line-height: 1.1;
      color: ${(props) => props.theme.textColor};

      span {
        color: ${(props) => props.theme.primaryColor};
      }
    }
    p {
      font-size: 1.2rem;
      color: ${(props) => props.theme.textColor};
    }
  }
  @media screen and (min-width: 768px) {
    .header-inner {

    .header-title {
      text-align:center;
      span {
        color: ${(props) => props.theme.primaryColor};
      }
    }
    p {
      font-size: 1.2rem;
      max-width: 70%;
      margin: 0 auto;
      text-align: center;
    }
  }

  @media screen and (min-width: 1024px) {
    .header-inner {

    .header-title {
      font-size: 3rem;
    }
   
  }
`;
