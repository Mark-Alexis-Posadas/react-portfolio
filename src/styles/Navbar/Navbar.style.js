import styled from "styled-components";

export const NavBar = styled.nav`
  &.navbar {
    display: flex;
    align-items: center;
    justify-content: end;
    min-height: auto;
    padding: 1.5rem;
    position: fixed;
    z-index: 2;
    width: 100%;
  }

  .nav-container {
    margin-top: 20px;
    .nav-items {
      width: 100%;
      text-align: center;
      .nav-links {
        padding: 10px;
        display: block;
        font-weight: 400;
      }
    }
  }

  .nav-icon-container {
    align-self: flex-start;
    transition: all 0.5s ease-out;
    position: relative;
    .nav-icon {
      width: 28px;
      height: 3px;
      margin: 0 0 5px;
      color: #701dc9;
      background: #701dc9;
      -webkit-transition: all 0.5s ease-out;
      transition: all 0.5s ease-out;
      display: block;
      &:last-child {
        margin: 0;
      }
    }
  }
`;
