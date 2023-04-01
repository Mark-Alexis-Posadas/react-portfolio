import React, { useState } from "react";
import { Wrapper } from "../../styles/createGlobalStyle";
import {
  NavBar,
  NavbarContainer,
  BurgerIcon,
  BurgerIconOpen,
} from "../../styles/Navbar/Navbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import data from "./data";

export default function Navbar({ toggleMainTheme }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  //Theme Icon
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    setIsToggled(!isToggled);
    toggleMainTheme();
  };

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavBar className="navbar">
      <Wrapper className="nav-main">
        <NavbarContainer className={isMenuOpen ? "active" : ""}>
          {data.map((link, index) => {
            const { text, path } = link;
            return (
              <li key={index} className="nav-items">
                <Link
                  to={path} // the path should be the id of the section you want to scroll to
                  smooth={true} // set smooth scrolling behavior
                  duration={500} // set the duration of the scroll animation
                  offset={-70} // adjust the scroll offset as needed
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
              icon={isDarkTheme ? faSun : faMoon}
              style={{ fontSize: "1.7rem" }}
              className="fa-rotate-180"
            />
          </li>
        </NavbarContainer>
      </Wrapper>
      <div className="nav-icon-container">
        <button onClick={handleButtonClick}>
          {isMenuOpen ? <BurgerIconOpen /> : <BurgerIcon />}
        </button>
      </div>
    </NavBar>
  );
}
