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
import { TbSettingsCog } from "react-icons/tb";

import {
  SiStyledcomponents,
  SiReactrouter,
  SiBem,
  SiRedux,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function About() {
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
        return <SiBem color="dark:text-white text-black" />;
      case "FaBootstrap":
        return <FaBootstrap color="#7952B3" />;
      case "FaGulp":
        return <FaGulp color="#CF4647" />;
      case "FaGit":
        return <FaGit color="#F05032" />;
      case "FaGithub":
        return <FaGithub color="dark:text-white text-black" />;
      case "FaReact":
        return <FaReact color="#61DAFB" />;
      case "SiStyledcomponents":
        return <SiStyledcomponents color="#DB7093" />;
      case "RiTailwindCssFill":
        return <RiTailwindCssFill color="#06B6D4" />;
      case "SiReactrouter":
        return <SiReactrouter color="#CA4245" />;
      case "SiRedux":
        return <SiRedux color="#764ABC" />;
      case "SiTypescript":
        return <SiTypescript color="#3178C6" />;
      case "SiReactquery":
        return <SiReactquery color="#00D68F" />;

      case "TbSettingsCog":
        return <TbSettingsCog color="dark:text-white text-black" />;

      default:
        return null;
    }
  };
  return (
    <section className="py-10" id="about">
      <p className="text-[#666] my-4">
        Hello! I'm Mark Alexis Posadas, a passionate front-end developer with
        over 3 years of experience. My journey into the world of front-end
        development began in 2017, driven by a fascination with creating
        engaging user experiences and solving complex problems through code.
      </p>

      <p className="text-[#666] my-4">
        I thrive on challenges and enjoy diving deep into new technologies to
        expand my skill set. Whether it's crafting responsive layouts,
        optimizing performance, or integrating cutting-edge features, I'm always
        eager to push the boundaries of what's possible in web development.
      </p>
      <p className="text-[#666] my-4">
        Beyond coding, I value collaboration and continuous learning. I find joy
        in connecting with fellow developers, exchanging ideas, and contributing
        to a supportive community that fuels innovation.
      </p>

      <p className="text-[#666] my-4">
        Explore my portfolio to see examples of my work and how I bring ideas to
        life through clean, efficient code and intuitive design. Let's create
        something remarkable together!
      </p>
      <b className="my-5 block">
        Technological Expertise: I specialize in utilizing a variety of
        technologies to build responsive and visually appealing websites.
      </b>
      <ul
        className="grid grid-cols-4 gap-3 my-5 
          toggleTheme  text-[#999] dark:text-[#666]"
      >
        {skillsData.map((item, index) =>
          index <= 11 ? (
            <li key={item.id} className="p-3 md:p-2">
              <div className="text-4xl">{renderIcon(item.icon)}</div>
              <span className="mt-1 text-sm">{item.name}</span>
            </li>
          ) : null
        )}
      </ul>

      <b>Currently learning these technologies:</b>
      <ul
        className="grid grid-cols-4 gap-3 my-5 ${
          toggleTheme text-[#999] dark:text-[#666]"
      >
        {skillsData.map((item, index) =>
          index > 11 ? (
            <li key={item.id} className="p-3 md:p-2">
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
