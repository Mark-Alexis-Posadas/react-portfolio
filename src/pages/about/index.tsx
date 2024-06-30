import skillsData from "../../data/skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaBootstrap,
  FaGulp,
  FaGit,
  FaGithub,
  FaReact,
} from "react-icons/fa";

import { SiStyledcomponents, SiReactrouter, SiBem } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "FaHtml5":
      return <FaHtml5 color="#E34F26" />;
    case "FaCss3Alt":
      return <FaCss3Alt color="#1572B6" />;
    case "FaJsSquare":
      return <FaJsSquare color="#F7DF1E" />;
    case "FaSass":
      return <FaSass color="#CC6699" />;
    case "SiBem":
      return <SiBem color="#000000" />;
    case "FaBootstrap":
      return <FaBootstrap color="#7952B3" />;
    case "FaGulp":
      return <FaGulp color="#CF4647" />;

    case "FaGit":
      return <FaGit color="#F05032" />;
    case "FaGithub":
      return <FaGithub color="#222" />;
    case "FaReact":
      return <FaReact color="#61DAFB" />;
    case "SiStyledcomponents":
      return <SiStyledcomponents color="#DB7093" />;
    case "RiTailwindCssFill":
      return <RiTailwindCssFill color="#06B6D4" />;
    case "SiReactrouter":
      return <SiReactrouter color="#61DAFB" />;
    default:
      return null;
  }
};
import { ToggleThemeType } from "../../types/toggle-theme";

export default function About({ toggleTheme }: ToggleThemeType) {
  return (
    <section className="py-10" id="about">
      <p className="text-[#666]">
        Hey there! I'm Mark Alexis Posadas, a dedicated front-end developer
        passionate about creating seamless and captivating digital experiences.
        With a journey in web development that began in 2017, I've continually
        evolved my skills to stay at the forefront of this dynamic industry.
      </p>
      <b className="my-5 block">
        Technological Expertise: I specialize in utilizing a variety of
        technologies to build responsive and visually appealing websites.
      </b>
      <ul
        className={`grid grid-cols-4 gap-3 my-5 ${
          toggleTheme ? "dark:text-[#999]" : "dark:text-[#666]"
        }`}
      >
        {skillsData.map((item, index) =>
          index <= 11 ? (
            <li key={item.id}>
              <div className="text-4xl">{renderIcon(item.icon)}</div>
              <span className="mt-1 text-sm">{item.name}</span>
            </li>
          ) : null
        )}
      </ul>

      <b>Currently learning these technologies:</b>
      <ul
        className={`grid grid-cols-4 gap-3 my-5 ${
          toggleTheme ? "dark:text-[#999]" : "dark:text-[#666]"
        }`}
      >
        {skillsData.map((item, index) =>
          index > 11 ? (
            <li key={item.id}>
              <div className="text-4xl">{renderIcon(item.icon)}</div>
              <span className="mt-1 text-sm">{item.name}</span>
            </li>
          ) : null
        )}
      </ul>

      <p className="text-[#666] my-5">
        My Approach From translating design concepts into functional websites to
        optimizing performance and user experience, I thrive on turning ideas
        into reality. Detail-oriented and always eager to learn, I enjoy
        tackling challenges and finding creative solutions to enhance digital
        projects.
      </p>
      <p className="text-[#666]">
        Let's Collaborate! Whether you're looking to revamp your online
        presence, improve website functionality, or discuss new ideas in web
        development, I'm here to help. Let's connect and create something
        exceptional together!
      </p>
    </section>
  );
}
