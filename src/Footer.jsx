import React from "react";
import { Wrapper } from "./styles/createGlobalStyle";

export default function Footer() {
  return (
    <footer>
      <Wrapper>
        {" "}
        <nav>
          <ul className="d-flex align-items-center justify-content-between">
            <li>&#169; 2023 Mark Alexis Posadas</li>
            <li>
              <a
                className="d-flex align-items-center"
                href="https://github.com/Mark-Alexis-Posadas"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </footer>
  );
}
