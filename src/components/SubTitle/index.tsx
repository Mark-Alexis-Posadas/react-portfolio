import React from "react";
import { SubTitleType } from "../../types/SubTitle";

const SubTitle: React.FC<SubTitleType> = ({
  subTitleText,
  classNames,
  isDark,
}) => {
  return (
    <h2
      className={`${classNames} ${
        isDark ? "dark:text-[#999]" : "dark:text-black"
      }`}
    >
      {subTitleText}
    </h2>
  );
};

export default SubTitle;
