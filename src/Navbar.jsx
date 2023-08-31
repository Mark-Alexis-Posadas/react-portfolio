import React, { useReducer } from "react";
import { Wrapper } from "./styles/createGlobalStyle";
import {
  NavBar,
  NavbarContainer,
  BurgerIcon,
  BurgerIconOpen,
} from "./styles/Navbar/Navbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import navbarApi from "./api/navbarApi";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newIsDarkTheme = !state.isDarkTheme;
      const newIsToggled = !state.isToggled;
      localStorage.setItem("isDarkTheme", newIsDarkTheme);
      localStorage.setItem("isToggled", newIsToggled);
      return {
        ...state,
        isDarkTheme: newIsDarkTheme,
        isToggled: newIsToggled,
      };
    case "TOGGLE_MENU":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      throw new Error("Invalid action type");
  }
}

export default function Navbar({ toggleMainTheme }) {
  const [state, dispatch] = useReducer(reducer, {
    isDarkTheme: localStorage.getItem("isDarkTheme") === "true",
    isMenuOpen: false,
    isToggled: localStorage.getItem("isToggled") === "true",
  });

  //Theme Icon
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
    toggleMainTheme();
  };

  const handleButtonClick = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  return (
    <NavBar className="navbar">
      <Wrapper>
        <NavbarContainer className={state.isMenuOpen ? "active" : ""}>
          {navbarApi.map((link, index) => {
            const { text, path } = link;
            return (
              <li key={index} className="nav-items">
                <Link
                  to={path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-links"
                  activeClass="active"
                  spy={true}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          <li className="nav-items">
            <FontAwesomeIcon
              onClick={toggleTheme}
              icon={state.isDarkTheme ? faSun : faMoon}
              style={{ fontSize: "1.7rem", cursor: "pointer" }}
              className="fa-rotate-180"
            />
          </li>
        </NavbarContainer>
      </Wrapper>
      <div className="nav-icon-container">
        <button onClick={handleButtonClick}>
          {state.isMenuOpen ? <BurgerIconOpen /> : <BurgerIcon />}
        </button>
      </div>
    </NavBar>
  );
}
