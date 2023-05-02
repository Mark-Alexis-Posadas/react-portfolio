import styled from "styled-components";

export const NavBar = styled.nav`
  &.navbar {
    background-color: ${(props) => props.theme.primary};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.01), 0 2px 5px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: end;
    min-height: auto;
    padding: 2rem 1.5rem;
    position: fixed;
    z-index: 2;
    width: 100%;
    .nav-items {
      width: 100%;
      text-align: center;

      .nav-links {
        color: ${(props) => props.theme.textColor};
        padding: 10px;
        display: block;
        font-weight: 400;
        cursor: pointer;
        &.active {
          font-weight: 700;
          color: ${(props) => props.theme.activeColor};
        }
      }

      svg.svg-inline--fa {
        color: ${(props) => props.theme.textColor};
      }
    }
    .nav-icon-container {
      align-self: flex-start;
      transition: all 0.5s ease-out;
      position: relative;
      button {
        display: flex;
        border: none;
        outline: none;
        background: transparent;
      }
    }
    @media screen and (min-width: 500px) {
      padding: 2rem 0;
      .nav-items {
        width: auto;
        &:last-child {
          margin-left: auto;
        }
        .nav-links {
          padding: 0;
          margin-right: 1rem;
        }
      }

      .nav-icon-container {
        display: none;
      }
    }
  }
`;

export const NavbarContainer = styled.ul`
  margin-top: 20px;
  display: none;

  &.active {
    display: block;
  }
  @media screen and (min-width: 500px) {
    margin-top: 0;
    display: flex;
    align-items: center;
  }
`;

export const BurgerIcon = styled.div`
  position: relative;
  width: 26px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.textColor};
    transition: transform 0.2s ease-out;
  }

  &::before {
    top: 5px;
  }

  &::after {
    bottom: 3px;
  }
`;

export const BurgerIconOpen = styled(BurgerIcon)`
  &::before {
    transform: rotate(45deg) translate(0, -6px);
  }

  &::after {
    transform: rotate(-45deg) translate(0, 6px);
  }
`;
