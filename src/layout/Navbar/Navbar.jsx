import React from "react";
import { Wrapper } from "../../styles/createGlobalStyle";
import { NavBar } from "../../styles/Navbar/Navbar.style";

import data from "./data";

export default function Navbar() {
  return (
    <NavBar className="navbar">
      <Wrapper className="nav-main">
        <ul className="nav-container">
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
          <li className="nav-items">
            <i className="fa-solid fa-moon fa-rotate-180"></i>
            <i className="fa-solid fa-sun"></i>
          </li>
        </ul>
      </Wrapper>
      <div className="nav-icon-container">
        <i className="nav-icon" id="rotate-icon"></i>
        <i className="nav-icon"></i>
      </div>
    </NavBar>
  );
}
