import React from "react";
import {
  Paragraph,
  SectionHeading,
  Wrapper,
} from "../../styles/createGlobalStyle";

export default function About() {
  return (
    <section id="about">
      <Wrapper>
        <SectionHeading>About Me</SectionHeading>
        <Paragraph>
          Welcome to my portfolio website! My name is Mark Alexis Posadas, and I
          am a front-end developer with a passion for creating beautiful,
          functional, and user-friendly websites. With expertise in HTML, CSS,
          JavaScript, and other front-end technologies, I bring to life visually
          stunning designs that engage and inspire users. I am always exploring
          new technologies and techniques to stay on top of the latest trends in
          web development, and I have a keen eye for detail that ensures every
          project meets the highest standards of quality. On this website, you
          will find examples of my work, including websites and web applications
          that showcase my skills in front-end development. Please feel free to
          browse my portfolio and contact me if you have any questions or if you
          would like to work together on a project. Thank you for visiting!
        </Paragraph>
      </Wrapper>
    </section>
  );
}
