import React from "react";
import { Paragraph, Wrapper } from "../../styles/createGlobalStyle";
import { HeaderContainer } from "../../styles/Header/Header.style";

export default function Header() {
  return (
    <HeaderContainer id="home">
      <Wrapper>
        <div className="header-inner">
          {/* <img src="assets/images/pigeon.png" alt="pigeon" /> */}
          <h1 className="header-title">
            Hello! I'm <span>Mark Alexis Posadas</span>
          </h1>

          <Paragraph>
            I am a front-end developer with a passion for creating beautiful,
            functional, and user-friendly websites.
          </Paragraph>
        </div>
      </Wrapper>
    </HeaderContainer>
  );
}
