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

import data from "./data";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavBar className="navbar">
      <Wrapper className="nav-main">
        <NavbarContainer className={isMenuOpen ? "active" : ""}>
          {data.map((link) => {
            const { id, text, path } = link;
            return (
              <li key={id} className="nav-items">
                <a href={path} className="nav-links">
                  {text}
                </a>
              </li>
            );
          })}
          <li className="nav-items" onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={isDarkTheme ? faSun : faMoon}
              style={{ color: "#222", fontSize: "1.7rem" }}
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
