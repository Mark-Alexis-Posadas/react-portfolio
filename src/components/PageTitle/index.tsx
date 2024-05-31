import React from "react";
import { TitleType } from "../../types/PageTitle";

const PageTitle: React.FC<TitleType> = ({ pageTitle, isDark }) => {
  return (
    <h1
      className={`${
        isDark ? "dark:text-white" : "dark:text-black"
      } font-bold text-[28px] lg:text-4xl mb-4`}
    >
      {pageTitle}
    </h1>
  );
};

export default PageTitle;
