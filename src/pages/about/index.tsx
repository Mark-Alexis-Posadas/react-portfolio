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
  FaNodeJs,
} from "react-icons/fa";

import { TbSettingsCog } from "react-icons/tb";

import {
  SiStyledcomponents,
  SiReactrouter,
  SiBem,
  SiRedux,
  SiTypescript,
  SiReactquery,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";

import { ToggleThemeType } from "../../types/toggle-theme";

export default function About({ toggleTheme }: ToggleThemeType) {
  const renderIcon = (iconName: string) => {
    const icons = {
      FaHtml5: <FaHtml5 className="text-[#E34F26]" />,
      FaCss3Alt: <FaCss3Alt className="text-[#1572B6]" />,
      FaJsSquare: <FaJsSquare className="text-[#F7DF1E]" />,
      FaSass: <FaSass className="text-[#CC6699]" />,
      SiBem: <SiBem />,
      FaBootstrap: <FaBootstrap className="text-[#7952B3]" />,
      FaGulp: <FaGulp className="text-[#CF4647]" />,
      FaGit: <FaGit className="text-[#F05032]" />,
      FaGithub: <FaGithub />,
      FaReact: <FaReact className="text-[#61DAFB]" />,
      SiStyledcomponents: <SiStyledcomponents className="text-[#DB7093]" />,
      RiTailwindCssFill: <RiTailwindCssFill className="text-[#06B6D4]" />,
      SiReactrouter: <SiReactrouter className="text-[#CA4245]" />,
      SiRedux: <SiRedux className="text-[#764ABC]" />,
      SiTypescript: <SiTypescript className="text-[#3178C6]" />,
      SiReactquery: <SiReactquery className="text-[#00D68F]" />,
      SiMongodb: <SiMongodb className="text-[#47A248]" />,
      SiExpress: <SiExpress />,
      FaNodeJs: <FaNodeJs className="text-[#339933]" />,
      TbSettingsCog: <TbSettingsCog />,
    };

    return icons[iconName as keyof typeof icons] ?? null;
  };

  const renderSkills = (skills: typeof skillsData) => (
    <ul
      className="
      grid
      grid-cols-2
      gap-4
      sm:grid-cols-3
      md:grid-cols-4
      "
    >
      {skills.map((item) => (
        <li
          key={item.id}
          className="
          group
          flex
          flex-col
          items-center
          justify-center

          rounded-xl
          border
          border-zinc-200
          bg-white
          p-4

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-zinc-300
          hover:shadow-lg

          dark:border-zinc-800
          dark:bg-[#181818]
          dark:hover:border-zinc-700
          "
        >
          <div
            className="
            text-4xl
            transition-transform
            duration-300
            group-hover:scale-110
            "
          >
            {renderIcon(item.icon)}
          </div>

          <span
            className="
            mt-3
            text-sm
            font-medium
            text-zinc-600

            dark:text-zinc-400
            "
          >
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="py-10" id="about">
      <div className="space-y-5 text-zinc-600 dark:text-zinc-400">
        <p>
          Hello! I'm Mark Alexis Posadas, a passionate front-end developer with
          over 3 years of experience. My journey into front-end development
          started in 2017, driven by my passion for creating engaging user
          experiences and solving problems through code.
        </p>

        <p>
          I enjoy building responsive interfaces, optimizing performance, and
          exploring modern technologies to create clean and efficient web
          applications.
        </p>

        <p>
          Beyond coding, I value collaboration, continuous learning, and sharing
          ideas with other developers to improve my craft.
        </p>
      </div>

      <section className="mt-10">
        <h3
          className="
          mb-5
          text-lg
          font-bold
          text-zinc-900
          dark:text-white
          "
        >
          Technical Expertise
        </h3>

        {renderSkills(skillsData.slice(0, 12))}
      </section>

      <section className="mt-10">
        <h3
          className="
          mb-5
          text-lg
          font-bold
          text-zinc-900
          dark:text-white
          "
        >
          Currently Learning
        </h3>

        {renderSkills(skillsData.slice(12))}
      </section>

      <div
        className="
        mt-10
        space-y-5
        text-zinc-600

        dark:text-zinc-400
        "
      >
        <p>
          My approach is focused on translating design concepts into functional
          applications while maintaining clean code, performance, and great user
          experience.
        </p>

        <p>
          Whether improving existing applications or building new ideas, I'm
          always excited to collaborate and create meaningful digital
          experiences.
        </p>
      </div>
    </section>
  );
}
