// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaSass,
//   FaBootstrap,
//   FaGulp,
//   FaNpm,
//   FaGit,
//   FaReact,
// } from "react-icons/fa";

// import { SiStyledcomponents, SiBem } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";

// const renderIcon = (iconName: string) => {
//   switch (iconName) {
//     case "FaHtml5":
//       return <FaHtml5 color="#E34F26" />;
//     case "FaCss3Alt":
//       return <FaCss3Alt color="#1572B6" />;
//     case "FaJsSquare":
//       return <FaJsSquare color="#F7DF1E" />;
//     case "FaSass":
//       return <FaSass color="#CC6699" />;
//     case "SiBem":
//       return <SiBem color="#000000" />;
//     case "FaBootstrap":
//       return <FaBootstrap color="#7952B3" />;
//     case "FaGulp":
//       return <FaGulp color="#CF4647" />;
//     case "FaNpm":
//       return <FaNpm color="#CB3837" />;
//     case "FaGit":
//       return <FaGit color="#F05032" />;
//     case "FaReact":
//       return <FaReact color="#61DAFB" />;
//     case "SiStyledcomponents":
//       return <SiStyledcomponents color="#DB7093" />;
//     case "RiTailwindCssFill":
//       return <RiTailwindCssFill color="#06B6D4" />;
//     default:
//       return null;
//   }
// };

export default function About() {
  return (
    <section className="min-h-[50vh] mb-5 py-14" id="about">
      <p className="text-xl">
        Hey there! I'm Juan, a dedicated front-end developer passionate about
        creating seamless and captivating digital experiences. With a journey in
        web development that began in 2017, I've continually evolved my skills
        to stay at the forefront of this dynamic industry.
      </p>
      <b className="my-5 block">
        Technological Expertise I specialize in utilizing a variety of
        technologies to build responsive and visually appealing websites:
      </b>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Scss/Sass</li>
        <li>BEM</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>Styled Components</li>
        <li>JavaScript (ES6)</li>

        <li>React JS</li>
        <li>React Router</li>
        <li>Next JS</li>
        <li>Redux Toolkit</li>
        <li>Typescript</li>
      </ul>
      <p>
        My Approach From translating design concepts into functional websites to
        optimizing performance and user experience, I thrive on turning ideas
        into reality. Detail-oriented and always eager to learn, I enjoy
        tackling challenges and finding creative solutions to enhance digital
        projects.
      </p>
      <p>
        Let's Collaborate! Whether you're looking to revamp your online
        presence, improve website functionality, or discuss new ideas in web
        development, I'm here to help. Let's connect and create something
        exceptional together!
      </p>
    </section>
  );
}
