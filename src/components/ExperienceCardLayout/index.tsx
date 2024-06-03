import React from "react";
import { ExperienceCardLayoutProps } from "../../types/Experience";
export const experienceCardLayout: React.FC<ExperienceCardLayoutProps> = ({
  data,
  isDark,
}) => {
  return (
    <article className="flex flex-col md:flex-row items-center mb-5 p-7">
      <figure className="mb-5 md:mb-0">
        <img
          src={data.logo}
          alt="logo"
          className="w-[218px] object-cover pr-10"
        />
      </figure>
      <div>
        <header className="mb-3">
          <h3
            className={`${
              isDark ? "dark:text-white" : "text-slate-600"
            } font-medium `}
          >
            {data.title}
          </h3>
          <h2 className="font-bold text-rose-600 mb-2">{data.company}</h2>
          <span className="italic text-base mr-2">{data.date}</span>
          <span className="text-base">{data.address}</span>
        </header>
        <ul className="list-disc">
          {data.jobDescriptions.map((description, index) => (
            <li
              key={index}
              className={`${isDark ? "dark:text-[#999]" : "text-slate-600"}`}
            >
              {description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
