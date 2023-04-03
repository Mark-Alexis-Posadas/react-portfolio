import React from "react";
import { Wrapper } from "./styles/createGlobalStyle";
import { FooterSection } from "./styles/Footer/Footer.style";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <FooterSection>
      <Wrapper>
        {" "}
        <nav>
          <ul>
            <li>&#169; 2023 Mark Alexis Posadas</li>
            <li>
              <a
                className="d-flex align-items-center"
                href="https://github.com/Mark-Alexis-Posadas"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </FooterSection>
  );
}
